# WindowsSDK PRO MAX 4.5

---

## 控件消息

万众瞩目 !!!!

如何创建控件 方法是和创建Edit 一样的 所以展示代码环节 (备注我 已经把代码结构优化了一下 让他看起来更加美观 我会把代码扔进结尾)

```c++
 HWND hWnd = CreateWindowEx( 0, "Text", "HELLo", WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, NULL, NULL, hInstance, NULL);
 HWND hButton = CreateWindowEx(0, "BUTTON", "YES", WS_VISIBLE| WS_CHILD, 0,0,100,50, hWnd, NULL, hInstance, NULL);  //按钮窗口控件
 HWND hButton2 = CreateWindowEx(0, "BUTTON", "MUST BE", WS_VISIBLE | WS_CHILD, 150, 0, 100, 50, hWnd, NULL, hInstance, NULL);  //按钮窗口控件
```

这就创建了一个主窗口和 两个按钮  按钮的风格是BS edit的风格是 ES 可以在 文档里 查询风格,自定义操作

显然的该操作控件了,接下来演示如何操作控件 (发送消息)

> SendMessage() 必须要走过程函数哦!

---

### 消息的自定义

WM_USER = 400 也就是说微软贴心提醒你 400 以上是安全的可以自定义的消息 

防止微软整大活可以定义一个宏 

```c++
#define WM_MSGS WM_USER+1
LRESULT OnCommand(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
       WORD WID = LOWORD(wParam);
       switch (WID){
           case IDM_SAVE:
               MessageBox(NULL, _T("打开了"), _T("保存"), MB_OK);
               break;
           case IDM_OPEN:
               MessageBox(NULL, _T("打开了"), _T("打开"), MB_OK);
               break;
           case ID_CLOSE:
               SendMessage(hWnd, WM_MSGS, NULL, NULL);
               PostQuitMessage(0);
               break;
       }
    return TRUE;  // 关闭时候 就Send一个值
    
    LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam){
    LRESULT lResult = FALSE; // 初始化lResult为0，以便在switch语句中未找到匹配项时返回  
    switch (uMsg) {
    case WM_CREATE: //创建消息
        lResult = OnCreate(hWnd, uMsg, wParam, lParam);
        break;
    case WM_DESTROY:  //销毁消息
        lResult = OnDestroy(hWnd, uMsg, wParam, lParam);
        break;
    case WM_CHAR:
        lResult = OnChar(hWnd, uMsg, wParam, lParam);
        break;
    case WM_PAINT:  //绘制消息
        lResult = OnPaint(hWnd, uMsg, wParam, lParam);
        break;
    case WM_COMMAND:
        lResult = OnCommand(hWnd, uMsg, wParam, lParam);
        break;
    case WM_TIMER:
        lResult = OnTimer(hWnd, uMsg, wParam, lParam);
        break;
    case WM_MSGS :
        MessageBox(NULL, _T("WM_MSG"), "MSG", MB_OK);
        break;
    }  //接收的时候 就能接受WM_MSGS 消息  
```

必须要送入队列里哦

-------

### 操作按钮消息

首先认识一下按钮的消息, 现在我要拿hButton举例 下面是示例 我把按钮改成CHECKBOX的样式

```c++
 HWND hButton = CreateWindowEx(0, "BUTTON", "YES", WS_VISIBLE| WS_CHILD | BS_CHECKBOX, 0,0,100,50, hWnd, NULL, hInstance, NULL);  //按钮窗口控件
```

然后我要发送一个消息 比如说我要勾选CHECKBOX 就可以是

```c++
SendMessage(hButton, BM_SETCHECK, BST_CHECKED, NULL);//发送消息 hButton 打钩 打钩消息
```

这就是默认打钩了但是我不能操作也就是说

> 控件会向父窗口发送通告消息 Button Notify -->BN

但是吧 你只能发送消息然后他打钩不能控制可以在COMMAND里进行操作  哪个BNCLICKED 进行举例

```c++
BN_CLICKED

    WPARAM wParam;    // HIWORD 通知代码  LOWORD 是 ID
    LPARAM lParam;   // HWND  LPARAM  按钮句柄
```

再次复习一下

| 消息源 | wParam（高字）     | wParam（低字）       | lParam         |
| :----- | :----------------- | :------------------- | :------------- |
| 菜单   | 0                  | 菜单标识符 (IDM_*)   | 0              |
| 加速器 | 1                  | 加速器标识符 (IDM_*) | 0              |
| 控件   | 控件定义的通知代码 | 控制标识符           | 控制窗口的句柄 |

LPARAM 不是0 就是控件 也就是说

```c++
winmain(){  
  SendMessage(hButton, BM_SETCHECK, BST_UNCHECKED, NULL);  //投递取消打钩
}
/*
 */

WORD wNotfityCode = HIWORD(wParam);  // 控件通知代码
    HWND hControl = (HWND)lParam;  // 控件句柄
    if (hControl != NULL){
        if (wNotfityCode == BN_CLICKED) {  //检测点击
            SendMessage(hControl, BM_SETCHECK, BST_CHECKED, NULL);  // 点击了就发送设置点击消息确认点击消息到hControl 
        }
    }
```

这样当点击打钩的时候点击消息的时候就会发送 一个SendMessage消息就会给他打钩返回值就是返回他的状态,以此类推

使用SendMessage 发送 BM_GETBACKCHECK 可以相当于AUTOCHECKED  ]就可以控制复选框了 返回值是 选择 没选择 灰色(需要特殊的复选框)

```c++
   WORD wNotfityCode = HIWORD(wParam);  // 控件通知代码
   HWND hControl = (HWND)lParam;  // 控件句柄
   if (hControl != NULL){
       if (wNotfityCode == BN_CLICKED) {  //检测点击
           LRESULT lResult = SendMessage(hControl,BM_GETCHECK,0,0);  // 获取单选按钮或者检查状态
           if (BST_CHECKED == lResult) {
               SendMessage(hControl, BM_SETCHECK, BST_UNCHECKED, NULL);  // 点击了就发送设置点击消息确认取消点击消息到hControl 
           }
           else if (BST_UNCHECKED == lResult) {
               SendMessage(hControl, BM_SETCHECK, BST_CHECKED, NULL);  // // 点击了就发送设置点击消息确认点击消息到hControl 
           }
       } 
   }
```

**但是这个两个按钮按了都会返回 消息 因为他们都是接受BN 消息**

要想解决就必须要设置专属的ID,但是维护控件太麻烦我觉得 给他单独列个函数BOOL CreateControl()方便判断

```c++
BOOL CreateControl(HWND hWnd) {
    HWND hButton = CreateWindowEx(0, "BUTTON", "e1elibrary.com", WS_VISIBLE | WS_CHILD | BS_CHECKBOX, 0, 0, 100, 50, hWnd, (HMENU)IDB_BUTTON_1, g_hInstance, NULL);  //按钮窗口控件
    HWND hButton2 = CreateWindowEx(0, "BUTTON", "MUST BE", WS_VISIBLE | WS_CHILD, 110, 0, 100, 50, hWnd, (HMENU)IDB_BUTTON_2, g_hInstance, NULL);  //按钮窗口控件
    HWND hEdit = CreateWindowEx(0, "Edit", NULL, WS_VISIBLE | WS_CHILD | WS_VSCROLL | ES_LEFT | ES_MULTILINE | ES_AUTOVSCROLL, 0, 60, 200, 100, hWnd, (HMENU)IDE_EDIT, g_hInstance, NULL);
    SendMessage(hButton, BM_SETCHECK, BST_UNCHECKED, NULL);//发送消息 hButton 取消打钩 打钩消息
    return TRUE;
}
```

但是在int WinMain 里面 加入 CreateControl(hWnd)即可,但是发没发现 怎么报错了 那是因为无法接受hIntance的值方便起见 设置全局变量 

例如

```c++
//#define  .....
HINSTANCE g_hIntance = NULL
int WinMain(...){
    g_hInstance = hInstance 这样全局变量的存在就可以让 句柄进入 函数里了
    CreateControl(hWnd); // 控件
}
```

同时我也展示了 ID的使用在父句柄后面那个就是ID 记得要HMENU强转下面是演示

```c++
LRESULT OnCommand(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
       WORD WID = LOWORD(wParam);  //控制标识符 ID
       WORD wNotfityCode = HIWORD(wParam);  // 控件通知代码
       HWND hControl = (HWND)lParam;  // 控件句柄
       LRESULT lResult = SendMessage(hControl, BM_GETCHECK, 0, 0);  // 获取单选按钮或者检查状态
       if (hControl != NULL){  //判断是不是句柄
           if (WID == IDB_BUTTON_1) {  // 是不是复选框
               if (wNotfityCode == BN_CLICKED) {  //检测点击
                   
                   if (BST_CHECKED == lResult) {
                       SendMessage(hControl, BM_SETCHECK, BST_UNCHECKED, NULL);  // 点击了就发送设置点击消息确认取消点击消息到hControl 
                       MessageBox(hWnd, _T("取消点击"), _T("e1elibrary.com"), MB_OK);
                   }
                   else if (BST_UNCHECKED == lResult) {
                       SendMessage(hControl, BM_SETCHECK, BST_CHECKED, NULL);  // // 点击了就发送设置点击消息确认点击消息到hControl 
                       MessageBox(hWnd, _T("点击"), _T("e1elibrary.com"), MB_OK);
                   }
               }
           }
           else if (WID == IDB_BUTTON_2) {
               if (wNotfityCode == BN_CLICKED) {  //检测点击
                   if (BST_UNCHECKED == lResult){
                       SendMessage(hControl, BM_SETCHECK, BST_CHECKED, NULL);  // // 点击了就发送设置点击消息确认点击消息到hControl 
                       MessageBox(hWnd, _T("点击"), _T("e1elibrary.com"), MB_OK);
                   }
               }
           }
       }
       switch (WID){
           case IDM_SAVE:
               MessageBox(NULL, _T("打开了"), _T("保存"), MB_OK);
               break;
           case IDM_OPEN:
               MessageBox(NULL, _T("打开了"), _T("打开"), MB_OK);
               break;
           case ID_CLOSE:
               SendMessage(hWnd, WM_USER + 1, NULL, NULL);
               PostQuitMessage(0);
               break;
       }
    return TRUE;
}

```

----

## 拓展之 粘贴按钮

hButton2刚好没有用 所以为了发光发热决定使用这个按钮当做粘贴按钮

粘贴板的消息已经给了  WM_PASTE就是这个的消息 我们只需要发送此消息到队列里就行

```c++
else if (WID == IDB_BUTTON_2) {
    if (wNotfityCode == BN_CLICKED) {  //检测点击
        HWND hEdit = GetDlgItem(hWnd, IDE_EDIT); //Edit的句柄 
        SendMessage(hEdit, WM_PASTE, 0, 0);  //发送粘贴的命令到编辑框
    }
}
```

**GetDlgItem ()**可以自动获取 子窗口的句柄 只需要提供 主窗口句柄 和子窗口的ID 就可以获取到子窗口 控件的HWND

----

再添加一个清空的消息 每次复制还得手删除 太麻烦了

所以选择使用SETTEXT()进行清空  第三个值必须是0 未使用状态  最后一个文本需要进行强制转换才能使用 (只能使用SendMessage 哦)

```c++
SendMessage(hEdit, WM_SETTEXT, 0, (LPARAM)" ");  // 清空Edit  直接调用窗口过程函数 知道返回
```

---



备注 MessageBox 第一个参数如果绑定了 句柄那么就不能关闭主窗口  只能先关闭父窗口



---

### ListBox的使用

ListBox 的建立 只是空的表 如果想要 添加就需要SendMessage

```c++
 HWND hListBox = CreateWindowEx(0, "ListBox", "编程列表", WS_VISIBLE | WS_CHILD | WS_VSCROLL| LBS_DISABLENOSCROLL, 0, 300, 300, 500, hWnd,(HMENU)ID_LISTBOX, g_hInstance, NULL)
```

```c++
SendMessage(hListBox,LB_ADDSTRING,0,(LPARAM)"C语言");  //LBADDSTRING 相当于 添加字符串消息 在LPARAM 里进行赋值
SendMessage(hListBox, LB_ADDSTRING, 0, (LPARAM)"C++");  
SendMessage(hListBox,LB_ADDSTRING,0,(LPARAM)"ASM"); //发送字符串消息
```

然后是接受消息 显然 按钮消息是Button Notfity 那么 list box 就是 List Box Notfity  简称就是LBN

在COMMAND 操作

```c++
 if (nIndex != -1) {
     int nlen = SendMessage(hControl, LB_GETTEXTLEN, nIndex, 0); // 获取长度 长度为 nIndex
     LPVOID lpBuff = malloc(nlen);
     SendMessage(hControl, LB_GETTEXT, nIndex, (LPARAM)lpBuff);// 获取单选列表框中当前所选项的索引  int 值
     MessageBox(hWnd, (char*)lpBuff, _T("e1elibrary.com"), MB_OK);
     free(lpBuff);
 }
```



而是走一个新的消息 NOTIFY 的消息 (所有的高级控件)

----

### NOTIFY 消息

所有的高级控件都走这个消息

```c++
WM_NOTIFY
   id = int wParam
   nmhdr  = NMHDR lParam
```

NMHDR 结构体 包含有关通知消息的信息。

```c++
typedef struct _nmhdr {
  HWND hwndFrom;  //句柄
  UINT idFrom;  // ID
  UINT code;  // 通知码
} NMHDR;
```



但是捏 , 这个是不一样的 他有自己的方法 也就是LBS_NOTFITY

```c++
HWND hListBox = CreateWindowEx(0, "ListBox", "编程列表", WS_VISIBLE | WS_CHILD | WS_VSCROLL| LBS_DISABLENOSCROLL|LBS_NOTIFY, 0, 300, 300, 500, hWnd,(HMENU)ID_LISTBOX, g_hInstance, NULL);
```

接收时候

```c++
else if (WID == ID_LISTBOX && wNotfityCode==LBN_SELCHANGE) {
         
int nIndex = SendMessage(hControl,LB_GETCURSEL,0,0);// 获取单选列表框中当前所选项的索引  int 值
if (nIndex != -1) {
    int nlen = SendMessage(hControl, LB_GETTEXTLEN, nIndex, 0); // 获取长度 长度为 nIndex
    LPVOID lpBuff = malloc(nlen+1);  
    SendMessage(hControl, LB_GETTEXT, nIndex, (LPARAM)lpBuff);// 获取单选列表框中当前所选项的索引  int 值
    MessageBox(hWnd, (char*)lpBuff, _T("e1elibrary.com"), MB_OK);
    free(lpBuff);
     }
}
```

**错误出现的原因是没有分配足够的长度 nlen+1 即可**

----

## 高级控件 

比如说微软最新的控件 数控件的消息通知就是通过NOTIFY 消息进行控制的 先不讲了消息控制流程就是这样的

---

# END

