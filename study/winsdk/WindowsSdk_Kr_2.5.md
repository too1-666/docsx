---
typora-root-url: ..\..\public
---

# 鼠标消息

----

 使用WM_LBUTTONDOWN (按下鼠标)可以捕获鼠标消息

```c++
//和WM_MOVE的代码差不多
LRESULT OnButtonDown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = LOWORD(lParam);
    int yPos = HIWORD(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("BUTTONxPos:%d yPos:%d"), xPos, yPos);
    MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    return FALSE;
}



case WM_LBUTTONDOWN :
    lResult = OnButtonDown(hWnd, uMsg, lParam, wParam);
    break;
}  
```

> 只在客户区域才有反应 

-----

使用 WM_LBUTTONUP (按下鼠标起来) 捕获

```C++
  
LRESULT OnButtonUp(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = LOWORD(lParam);
    int yPos = HIWORD(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("BUTTONxPos:%d yPos:%d"), xPos, yPos);
    MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    return FALSE;
}



case WM_LBUTTONDOWN :
    lResult = OnButtonDown(hWnd, uMsg, lParam, wParam);
    break;
} 
```

----

### Debugging!

>   调试输出通过API输出字符串

```
OutputDebuging()
```

直接在输出输出字符不用再弹 MessageBox 了 非常方便

```c++
 LRESULT OnButtonDown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = GET_X_LPARAM (lParam);
    int yPos = GET_Y_LPARAM(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("BUTTONxPos:%d yPos:%d\n"), xPos, yPos);
    //MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    OutputDebugString(Space);
    return FALSE;
//用法
```

### 通过日志来查看

> 以这个上面代码为蓝本 

```c++
LRESULT OnButtonDown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = GET_X_LPARAM (lParam);
    int yPos = GET_Y_LPARAM(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("[e1elibrarycom] File: %s ,Line %d,hwnd %p , umsg %p , wParam %p, lParam %p,BUTTONxPos:%d yPos:%d\n"),__FILE__,__LINE__,hWnd,uMsg,wParam,lParam,xPos, yPos);
    //MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    OutputDebugString(Space);
    return FALSE;
}
```

使用了这个就可以在debug 中出现错误日志了

![](/winSDK/krre/ErrorLog.png)

> 要转换为多字节字符集 ASCII 码 不然会出现乱码

-------

### 鼠标移动消息 WM_MOUSEMOVE

```c++
}
LRESULT OnMouseMove(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = GET_X_LPARAM(lParam);
    int yPos = GET_Y_LPARAM(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("[e1elibrarycom] File: %s ,Line %d,hwnd %p , umsg %p , wParam %p, lParam %p,MouseMovexPos:%d yPos:%d\n"), __FILE__, __LINE__, hWnd, uMsg, wParam, lParam, xPos, yPos);
    //MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
   // MessageBox(NULL, Space, _T("我草,别!"), MB_OK);
    OutputDebugString(Space);
    return FALSE;
}


使用 WM_MOUSEMOVE消息
```

-----

### 双击消息WM_LBUTTONDBLICK

> 用法相同

但是你双击的时候就会发现 没有双击的消息出现 那是因为  没有**CS_DBLCLKS**  (在另个文章查表)

```c++
wc.cbSize = sizeof(WNDCLASSEX);
wc.style = CS_VREDRAW | CS_HREDRAW| CS_DBLCLKS; //窗口类型  添加CS_DBLICKS 即可
```

备注 : 双击时候同时接收 按下弹起 和双击 的消息 所以双击是

> 按下 弹起 按下 双击 弹起的消息流程

---

## 键盘API

接收键盘 消息

> Keyup 和Keydown

```c++
LRESULT OnButtonDown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = GET_X_LPARAM (lParam);
    int yPos = GET_Y_LPARAM(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("[e1elibrarycom] File: %s ,Line %d,hwnd %p , umsg %p , wParam %p, lParam %p,BUTTONxPos:%d yPos:%d\n"),__FILE__,__LINE__,hWnd,uMsg,wParam,lParam,xPos, yPos);
    //MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    OutputDebugString(Space);
    return FALSE;
}

LRESULT OnButtonUp(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = LOWORD(lParam);
    int yPos = HIWORD(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("bUTTONxPos:%d yPos:%d\n"), xPos, yPos);
    //MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    OutputDebugString(Space);
    return FALSE;
}
```

这是例子 展示了按下键盘按键和抬起按键

如图所示

![](/winSDK/krre/KeyboardUpAndDown.png)

----

事实上 KEYDOWN 接收键盘 的到底按了什么的消息 时候 lParam 会接收 按键的值 

觉得麻烦可以 查看wPrarm 的vrtual -key 也就是虚拟按键,芝士代码

```c++
LRESULT OnKeydown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
        TCHAR speace[MAXBYTE];
        wsprintf(speace, _T("KEYDOWN,OK!\n"));
        OutputDebugString(speace);
        return TRUE;
}
LRESULT OnKeyup (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
 
    TCHAR speace[MAXBYTE];
    wsprintf(speace, _T("KEYUP,OK push %c!\n"), wParam);
    OutputDebugString(speace);
    return TRUE;
}
```

比如说我想检测 A的虚拟按键 

![](/winSDK/krre/PressA.png)

就检测出来A了

但是F1 什么的还是乱码,所以必须用其他方法

>  获取键盘状态先

然后获取键盘扫描码  

* 键盘扫描码是 每套键盘都有一个扫描码

当然了 按下和弹起 都有一套专属的扫描码

在lParam 中 16 -23 位是扫描码的位置

```c++
 BYTE SacnCode = (int)lParam >> 16& 0xff;  //偏移 16 位 并保留 后8 位  1lParam 的16 - 23 位是键盘扫描码
```

我们用ToAscii()来接收大小写

> ToAscii(虚拟键盘码,扫描码,变量存储 ,标志)

将ch 这个传入wsprintf 里输出

```c++
RESULT OnKeydown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
        BYTE KeyState[256];
        if (!GetKeyboardState(KeyState))
            return TRUE;
        WORD ch;
        BYTE SacnCode = (int)lParam >> 16& 0xff;  //偏移 16 位 并保留 后8 位  1lParam 的16 - 23 位是键盘扫描码
        ToAscii(wParam,SacnCode,KeyState,&ch,0);                                      //第二个参数是键盘扫描码 
        TCHAR speace [MAXBYTE];
        wsprintf(speace, _T("KEYDOWN,OK IS %c !\n"),ch);
        OutputDebugString(speace);
        return TRUE;
}
```

代码所示  下面是对照

> KEYDOWN,OK IS a !
> KEYUP,OK push A!

第一个Down使用了ToASCII码第二个Up使用了虚拟键盘码 

---

但是很呆

所以我选择 使用WM_CHAR消息来进行输出 

```c++

LRESULT OnChar(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
                                     
    TCHAR speace[MAXBYTE];
    wsprintf(speace, _T("CHAR,OK push %c!\n"), wParam);
    OutputDebugString(speace);
    return TRUE; ;

这个代码可以直接输出
```

但是, 他没有经过虚拟转换 还记得消息循环吗在消息循环添加**TranslateMessage(&msg)**

```c++
    BOOL bRet;
    MSG  msg;
    while ((bRet = GetMessage(&msg, NULL, 0, 0)) != 0)  // 接收所有 的消息
    {
        if (bRet == -1)
        {
            break;
        }
        else
        {
            TranslateMessage(&msg);//虚拟  转换键盘消息到字符消息<-----
            DispatchMessage(&msg); //派发消息
        }
    }
    return (msg.wParam); // 接收消息

}
```

就可以转换了

当然了前面的麻烦的方法就是解释转换过程

当然了你想获取用户到底写了什么 抓取 就得用特殊方法  (特殊的情况下懂的都懂)like this

---------------

### HOT_KEY 热键

WM_HOTKEY 消息 的使用必须要经过注册

> RegisterHotKey()这个函数注册

```cpp
BOOL RegisterHotKey(
  [in, optional] HWND hWnd,
  [in]           int  id,
  [in]           UINT fsModifiers,
  [in]           UINT vk
);
```



## 参数

```
[in, optional] hWnd
```

类型：**HWND**

将接收热键生成的 [WM_HOTKEY](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/wm-hotkey) 消息的窗口句柄。 如果此参数 **NULL**，**WM_HOTKEY** 消息将发布到调用线程的消息队列，并且必须在消息循环中进行处理。

```
[in] id
```

类型：**int**

热键的标识符。 如果 *hWnd* 参数为 NULL，则热键与当前线程（而不是特定窗口）相关联。 如果热键已存在具有相同的 *hWnd* 和 *id* 参数，请参阅“备注”以获取所执行的操作。

```
[in] fsModifiers
```

| **值**                  | **含义**                                                     |
| :---------------------- | :----------------------------------------------------------- |
| **MOD_ALT** 0x0001      | 必须按住任一 ALT 键。                                        |
| **MOD_CONTROL** 0x0002  | 必须按住 Ctrl 键。                                           |
| **MOD_NOREPEAT** 0x4000 | 更改热键行为，使键盘自动重复不会生成多个热键通知。 **Windows Vista：不支持** 此标志。 |
| **MOD_SHIFT** 0x0004    | 必须按住 Shift 键。                                          |
| **MOD_WIN** 0x0008      | 必须按住任一 WINDOWS 密钥。 这些键标有 Windows 徽标。 涉及 WINDOWS 键的键盘快捷方式保留供操作系统使用。 |

类型：**UINT**

必须与 *vk* 参数指定的键结合使用才能生成 [WM_HOTKEY](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/wm-hotkey) 消息， *fsModifiers* 参数可以是以下值的组合。

```
[in] vk
```

类型：**UINT**

热键的虚拟键代码。 请参阅 [虚拟密钥代码](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/virtual-key-codes)。

------

### UnRegisterHotKey

注册为啥要ID 那是因为 只要注册了就会一直存在该注册热键 要想删除 只能使用 **UnRegisterHotKey()**

```
[in, optional] hWnd
```

类型：**HWND**

与要释放的热键关联的窗口的句柄。 如果热键与窗口不关联，则此参数应为 **NULL** 。

```
[in] id
```

类型： **int**

要释放的热键的标识符。

----

id 就是 注册时候绑定的ID 我推荐Define 一下作为全局变量ID 这样卸载的时候方便一些 接下来是如何使用

### 如何使用 RegisterHotKey

我在WM_CREATE消息出现时候自动注册 一个 ctrl +F1 的热键消息

 ```c++
 #define F1_HOT_KEY_ID 1133
 /*
 略
 */
 
 LRESULT OnCreate(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    // OutputDebugString(_T("ONCreate"));
     RegisterHotKey(hWnd, F1_HOT_KEY_ID, MOD_CONTROL,VK_F1);
     return TRUE;
 ```

---

```c++
LRESULT OnHotKey(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    MessageBox(NULL, _T("HOT_KEY", _T("e1elibrary.com"), MB_OK); 
    return TRUE;
}
              
```

为了展示我是否成功创建 我在WM_HOTKEY 消息出现检测 一下

---

创建结束需要卸载时候 就在销毁命令出现时候自动销毁

```c++
LRESULT OnDestroy(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    MessageBox(NULL, _T("Destroy|UnregisterHotKey OK"), _T("e1elibrary.com"), MB_OK);
    UnregisterHotKey(hWnd, F1_HOT_KEY_ID);
    //OutputDebugString(_T("Destroy")); 
    PostMessage(hWnd,WM_QUIT,0,NULL);  //关闭消息  WM_Destory消息, 传参到 wParam  
    return TRUE;
}
```

![](/winSDK/krre/HotKeyCreate.png)

-----

## 末尾代码展示

```c++
#include <Windows.h>
#include <stdio.h>
#include <tchar.h>
#include <windowsx.h>
#define  F1_HOT_KEY_ID 1133
LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMSG, WPARAM wParam, LPARAM lParam);// 回调{
/*
    键盘消息
    鼠标消息
    快捷键消息
    菜单消息

    客户区域
    */


int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow) // 第二个句柄保留适配老版本
{
    TCHAR szWndClassName[] = { _T("Text") };

    WNDCLASSEX wc = { 0 };
    wc.cbSize = sizeof(WNDCLASSEX);
    wc.style = CS_VREDRAW | CS_HREDRAW| CS_DBLCLKS; //窗口类型
    wc.lpfnWndProc = WindowProc; // 窗口过程 (回调函数) -> 处理 消息
    wc.hInstance = hInstance;
    wc.hIcon = LoadIcon(NULL, IDI_SHIELD);
    wc.hCursor = LoadCursor(NULL, IDC_CROSS);
    wc.hbrBackground = CreateSolidBrush(RGB(255, 0, 0));
    wc.lpszMenuName = NULL;
    wc.lpszClassName = szWndClassName;
    if (RegisterClassEx(&wc) == 0) {
        
        return 0;
        
    }

    //创建窗口

    TCHAR szWndName[] = { _T("Windows") };
    HWND hWnd = CreateWindowEx(
        0,
        szWndClassName,
        szWndName,
        WS_MAXIMIZEBOX | WS_MINIMIZEBOX | WS_VISIBLE | WS_SYSMENU,
        CW_USEDEFAULT,
        CW_USEDEFAULT,
        CW_USEDEFAULT,
        CW_USEDEFAULT,
        NULL,
        NULL,
        hInstance,
        NULL
    );
  
    if (hWnd == NULL)
    {
        DWORD werror = GetLastError();
        return 0;
    }




    ShowWindow(hWnd, SW_SHOWNORMAL);
    // SetClassLong(hWnd, GCL_HCURSOR, (LONG)LoadCursor(NULL,IDC_HAND)); 
     // 二次修改光标





     //消息循环
    BOOL bRet;
    MSG  msg;
    while ((bRet = GetMessage(&msg, NULL, 0, 0)) != 0)  // 接收所有 的消息
    {
        if (bRet == -1)
        {
            break;
        }
        else
        {
            TranslateMessage(&msg);//虚拟
            DispatchMessage(&msg); //派发消息
        }
    }
    return (msg.wParam); // 接收消息

}
// 键盘消息
LRESULT OnKeydown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
        BYTE KeyState[256];
        if (!GetKeyboardState(KeyState))
            return TRUE;
        WORD ch;
        BYTE SacnCode = (int)lParam >> 16& 0xff;  //偏移 16 位 并保留 后8 位  1lParam 的16 - 23 位是键盘扫描码
        ToAscii(wParam,SacnCode,KeyState,&ch,0);                                      //第二个参数是键盘扫描码 
        TCHAR speace [MAXBYTE];
        wsprintf(speace, _T("KEYDOWN,OK IS %c !\n"),ch);
        OutputDebugString(speace);
        return TRUE;
}
LRESULT OnKeyup (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
 
    TCHAR speace[MAXBYTE];
    wsprintf(speace, _T("KEYUP,OK push %c!\n"), wParam);
    OutputDebugString(speace);
    return TRUE;
}
//字符消息

LRESULT OnChar(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
                                       //第二个参数是键盘扫描码 
    TCHAR speace[MAXBYTE];
    wsprintf(speace, _T("CHAR,OK push %c!\n"), wParam);
    OutputDebugString(speace);
    return TRUE; ;



}
LRESULT OnCreate(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
   // OutputDebugString(_T("ONCreate"));
    RegisterHotKey(hWnd, F1_HOT_KEY_ID, MOD_CONTROL,VK_F1);
    return TRUE;
}
LRESULT OnClose(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    OutputDebugString(_T("Close"));
    return FALSE;
}
LRESULT OnDestroy(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    MessageBox(NULL, _T("Destroy|UnregisterHotKey OK"), _T("e1elibrary.com"), MB_OK);
    UnregisterHotKey(hWnd, F1_HOT_KEY_ID);
    //OutputDebugString(_T("Destroy")); 
    PostMessage(hWnd,WM_QUIT,0,NULL);  //关闭消息  WM_Destory消息, 传参到 wParam  
    return TRUE;
}
/*LRESULT OnMove(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = LOWORD(lParam);
    int yPos = HIWORD(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("xPos:%d yPos:%d"), xPos, yPos);
    MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    return TRUE;
}*/

LRESULT OnButtonDown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = GET_X_LPARAM (lParam);
    int yPos = GET_Y_LPARAM(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("[e1elibrarycom] File: %s ,Line %d,hwnd %p , umsg %p , wParam %p, lParam %p,BUTTONxPos:%d yPos:%d\n"),__FILE__,__LINE__,hWnd,uMsg,wParam,lParam,xPos, yPos);
    //MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    OutputDebugString(Space);
    return FALSE;
}

LRESULT OnButtonUp(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = LOWORD(lParam);
    int yPos = HIWORD(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("bUTTONxPos:%d yPos:%d\n"), xPos, yPos);
    //MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    OutputDebugString(Space);
    return FALSE;
}


LRESULT OnHotKey(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    MessageBox(NULL, _T("HOT_KEY"), _T("e1elibrary.com"), MB_OK); 
    return TRUE;
}

/*LRESULT OnMouseMove(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = GET_X_LPARAM(lParam);
    int yPos = GET_Y_LPARAM(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("[e1elibrarycom] File: %s ,Line %d,hwnd %p , umsg %p , wParam %p, lParam %p,MouseMovexPos:%d yPos:%d\n"), __FILE__, __LINE__, hWnd, uMsg, wParam, lParam, xPos, yPos);
    //MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
   // MessageBox(NULL, Space, _T("我草,别!"), MB_OK);
    OutputDebugString(Space);
    return FALSE;
}*/
 
//鼠标消息



LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{   
    LRESULT lResult = FALSE; // 初始化lResult为0，以便在switch语句中未找到匹配项时返回  
    switch (uMsg) {
    case WM_CREATE: //创建消息
        lResult = OnCreate(hWnd, uMsg, wParam, lParam);
        break;
    case WM_CLOSE: //关闭消息
        lResult = OnClose(hWnd, uMsg, wParam, lParam);
        break;
    case WM_DESTROY :  //销毁消息
        lResult = OnDestroy(hWnd, uMsg, wParam, lParam);
        break;
    /*case WM_MOVE:  //移动消息
        lResult = OnMove(hWnd, uMsg, wParam, lParam);
        break;*/
    case WM_LBUTTONDOWN :
        lResult = OnButtonDown(hWnd, uMsg, wParam, lParam);
        break;
    case WM_LBUTTONUP:
        lResult = OnButtonUp(hWnd, uMsg, wParam, lParam);
        break;
    /*case WM_MOUSEMOVE:
        lResult = OnMouseMove(hWnd, uMsg, wParam, lParam);
        break;*/
    case  WM_KEYUP :
        lResult = OnKeyup(hWnd, uMsg, wParam, lParam);
        break;
    case WM_KEYDOWN :
        lResult = OnKeydown(hWnd, uMsg, wParam, lParam);
        break;
    case WM_CHAR :
        lResult = OnChar(hWnd, uMsg, wParam, lParam);
        break;
    case WM_HOTKEY :
        lResult = OnHotKey(hWnd, uMsg, wParam, lParam);
        break;
    }
    if (!lResult)
    {
        return DefWindowProc(hWnd, uMsg, wParam, lParam);
    }
         return lResult;
}
```

测试可以运行   

##### 备注

HOTKEY 可以夸窗口检测
