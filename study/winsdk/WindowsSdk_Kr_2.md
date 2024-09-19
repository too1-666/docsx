---
typora-root-url: ..\..\public
---

# 消息处理 

-----



这是WindowsAPI  这不是UWP 

UWP是 Window 微软商店版本

-------



#### 消息的输入

> 大概的分类

* 键盘消息

*  鼠标消息

* 快捷键消息

*  菜单消息

* 控件消息

* 自定义消息

  

------

### 回调函数优化结构  |  如何使用消息

比如我要调用一个WM_CREATE 消息 证明我调用成功

```c++
LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg)
    {   case WM_CREATE:
          ::MessageBox();
    
        default:
            break;
    }
    //正常是这样的当出现uMsg消息返回WM_CREATE时候 就会出现MessageBox 消息 
```

但是这样太麻烦了 让消息处理 switch 过于庞大

* 可以选择这种方式来处理

```c++
LRESULT CreateS (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam){
    ::MessageBox(NULL, _T("Create!", _T("OK_is_create", MB_OK);
    return TRUE;
 }
```

单独设立处理的函数 ,于是乎可以这样处理

```c++
LRESULT OnCreate(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    ::MessageBox(NULL, _T("ONCreate"), _T("Create"), MB_OK);
    return TRUE;
}
LRESULT OnClose(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
     ::MessageBox(NULL, _T("Close"), _T("Close"), MB_OK);
     PostQuitMessage(123);  //关闭消息  WM_QUIT消息, 传参到 wParam  
     return TRUE;
}
    
LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
        case WM_CREATE :
            return OnCreate(hWnd, uMsg, wParam, lParam);
        case WM_CLOSE  :
            return OnClose(hWnd, uMsg, wParam, lParam);
        default:
            break;
    }
    return DefWindowProc(hWnd, uMsg, wParam, lParam);  

} 
```

 这样就可以 接收消息 与 之前 也就是上一篇的消息处理函数 相比之下就干净多了

------

只需要公式化套就行了



-----

### 客户区域

绘制客户区域 一个界面 是包括客户区域和非客户区域

![](/winSDK/krre/KeHu_FeiKeHu.png)

黑框区域是客户区域(client area) 黄框 为非客户区域由  (Not Client Area)NC操作系统决定

---

### 窗口销毁

窗口关闭时候会有销毁的消息 是WM_DESTORY

显然用在WM_CLOSE 消息使用PostQuitMessage是不太好的 用在 这个消息更加合适

```c++
LRESULT OnCreate(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    ::MessageBox(NULL, _T("ONCreate"), _T("Create"), MB_OK);
    return TRUE;
}
LRESULT OnClose(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    ::MessageBox(NULL, _T("Close"), _T("Close"), MB_OK);
    return TRUE;
}
LRESULT OnDestroy(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    ::MessageBox(NULL, _T("Destory"), _T("SUCCESS"), MB_OK);
    PostQuitMessage(123);  //关闭消息  WM_Destory消息, 传参到 wParam  
    return TRUE;
}

LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
    LRESULT lResult = FALSE;
    switch (uMsg) {
    case WM_CREATE:
        lResult = OnCreate(hWnd, uMsg, wParam, lParam);
        break;
    case WM_CLOSE:
        lResult = OnClose(hWnd, uMsg, wParam, lParam);
        break;
    case WM_DESTROY:  // 窗口销毁
        lResult = OnDestroy(hWnd, uMsg, wParam, lParam);
        break;
    }
    if (!lResult)
        DefWindowProc(hWnd, uMsg, wParam, lParam);
    return lResult;
}
```

这样的 优化代码更加友好 按照之前的来看会直接 出现窗口无法销毁的情况

-----

WM_MOVE消息 

 之前提过一句 再次提一下 LOWORAD(低字节) 的lParam 是x 轴  HIWORD(高字节)的lParam 是y轴\

所以根据 这个原理 通过传参可以获取窗口的移动 参数

```c++
#include <Windows.h>
#include <stdio.h>
#include<tchar.h>
LRESULT CALLBACK WindowProc(  HWND hWnd,UINT uMSG, WPARAM wParam,    LPARAM lParam) ;// 回调
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
    wc.style = CS_VREDRAW | CS_HREDRAW; //窗口类型
    wc.lpfnWndProc = WindowProc; // 窗口过程 (回调函数) -> 处理 消息
    wc.hInstance = hInstance;
    wc.hIcon = LoadIcon(NULL,IDI_SHIELD);
    wc.hCursor = LoadCursor(NULL,IDC_CROSS);
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
        WS_OVERLAPPEDWINDOW,
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
        return 0;




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

}LRESULT OnCreate(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    ::MessageBox(NULL, _T("ONCreate"), _T("Create"), MB_OK);
    return TRUE;
}
LRESULT OnClose(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    ::MessageBox(NULL, _T("Close"), _T("Close"), MB_OK);
    return FALSE;
}
LRESULT OnDestroy(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    ::MessageBox(NULL, _T("Destory"), _T("SUCCESS"), MB_OK);
    PostMessage(hWnd, WM_QUIT, wParam, lParam);  //关闭消息  WM_Destory消息, 传参到 wParam  
    return TRUE;
}
LRESULT OnMove(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = (int)(short)LOWORD(lParam);
    int yPos = (int)(short)HIWORD(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("xPos:%d yPos:%d"), xPos, yPos);
    ::MessageBox(NULL, Space, _T("too1-666.github.io/docsx/"),MB_OK);
    return TRUE;
}
LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
    LRESULT lResult = FALSE;
    switch (uMsg) {
    case WM_CREATE:
        lResult = OnCreate(hWnd, uMsg, wParam, lParam);
        break;
    case WM_CLOSE:
        lResult = OnClose(hWnd, uMsg, wParam, lParam);
        break;
    case WM_DESTROY:  // 窗口销毁
        lResult = OnDestroy(hWnd, uMsg, wParam, lParam);
        break;
    case WM_MOVE:
        lResult = OnMove(hWnd, uMsg, wParam, lParam);
        break;
    }
    if (!lResult)
    {
        return DefWindowProc(hWnd, uMsg, wParam, lParam);
    }
    return lResult;
}

```

本章节代码展示

---



