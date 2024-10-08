# WindowsSdk_ProMax 版本

-------

### 回归到之前写的版本

用之前的代码 时候最小化最大化会发现 ,刷新背景就会消失 继续输入 就会重新出现  回顾一下

```c++
    HWND hWnd = CreateWindowEx(
        0,
        "Text",
        "HELLo",
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
    // RECT rc;
    //GetClientRect(hWnd, &rc);
    //HWND hChild = CreateWindowExA(    //系统控件
    //    0,
    //    "EDIT",
    //    "草飞",
    //    WS_VISIBLE | WS_CHILD| WS_VSCROLL|WS_HSCROLL |ES_MULTILINE,
    //    0,
    //    0,
    //    rc.right-rc.left,
    //    rc.bottom-rc.top,
    //    hWnd,  // 父句柄
    //    NULL,
    //    hInstance,
    //    NULL
    //);





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

LRESULT OnChar(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    HBRUSH hBrush = CreateSolidBrush(RGB(255, 255, 255));  // 创建一个红色的刷子
     HDC hdc = GetDC(hWnd); // 用法
     if ((char)wParam == '\r') {
         g_text += ((char)wParam);
         g_text += '\n';
    }
     else if (((char)wParam) == '\b')
     {
         if (!g_text.empty())
             g_text.pop_back();
     }
    else {
        g_text += ((char)wParam);
    }
     
     OutputDebugString(g_text.c_str());
     // 获取窗口HDC
    // HDC hdc = GetWindowDC(hWnd); //待定
    //获取窗口客户区域大小 
     RECT rc; //逻辑坐标  
     GetClientRect(hWnd, &rc);
     //DC选择刷子 
     HGDIOBJ hBrushOld = SelectObject(hdc, hBrush);
     ShowCaret(hWnd);  // 允许绘制.放在前面是保证重绘时候能够 不会有残留
     SetCaretPos(g_tm.tmAveCharWidth * g_text.length(), 0);// 位置是 字符宽度 和 字符串长度 相乘
     FillRect(hdc, &rc,hBrush );
     DrawText(hdc,g_text.c_str(), g_text.length(),&rc,DT_LEFT);
     SelectObject(hdc, hBrushOld); // 还原默认刷子
     DeleteObject(hBrush);  //释放刷子
     
     ReleaseDC(hWnd,hdc);  //释放DC    
   
     return TRUE; ;


}
LRESULT OnCreate(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    HDC hdc = GetDC(hWnd);
    SelectObject(hdc, GetStockObject(SYSTEM_FIXED_FONT));  //初始坐标
    GetTextMetrics(hdc, &g_tm);  //填充缓冲区
    ReleaseDC(hWnd, hdc);
    return TRUE;
}
LRESULT OnClose(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    OutputDebugString(_T("Close"));
    return FALSE;
}
LRESULT OnDestroy(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    MessageBox(NULL, _T("Destroy|UnregisterHotKey OK"), _T("e1elibrary.com"), MB_OK);

    PostMessage(hWnd, WM_QUIT, 0, NULL);  //关闭消息  WM_Destory消息, 传参到 wParam  
    return TRUE;
}
LRESULT OnSetfocus (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
    CreateCaret(hWnd, (HBITMAP)NULL, g_tm.tmHeight, 0); // 创建插入符
    SetCaretPos(0,0); // 插入符号初始坐标
    
    return TRUE;
}
LRESULT OnKillFocus (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    DestroyCaret();
    return TRUE;
}

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
    case WM_DESTROY:  //销毁消息
        lResult = OnDestroy(hWnd, uMsg, wParam, lParam);
        break;
    case WM_CHAR:
        lResult = OnChar(hWnd, uMsg, wParam, lParam);
        break;
    case WM_SETFOCUS:
        lResult = OnSetfocus(hWnd, uMsg, wParam, lParam);
        break;
    case WM_KILLFOCUS:
          lResult = OnKillFocus(hWnd, uMsg, wParam, lParam); 
        break;
    }
    if (!lResult)
    {
        return DefWindowProc(hWnd, uMsg, wParam, lParam);
    }
    return lResult;
}
```

发现没窗口所有处理全是丢默认里面了 也就是说 最大最小化是重新绘制一下 所以会消失 然后呢 在从键盘输入 会重新出现 是因为 将String 的值重新 输出出来 和之前删除原理是一样的 所以可以不让默认处理来实现 不让窗口重新绘制 

----

### 使用WM_ERASEBKGND消息(刷新背景消息)

WM_ERASEBKGND 消息是关于刷新背景的 使用该代码测试是否成功

```c++
 case WM_ERASEBKGND : //擦除背景消息
     MessageBox(NULL, _T("shuaxin"), _T("e1elibrary.com"), MB_OK);
     break;
 
```

发现运行时候立马出现最大化最小化时候也是出现了 证明了最大最小化每次操作都会刷新背景

如过加上Return False不让他默认处理呢 还是不可以

那是因为其他消息会默认处理

涉及一个比较重要的概念  **无效区域**

---

## 无效区域

先来普及一下WM_PAINT消息 **绘制消息**

你挪窗口位置 最大化最小化都会发送绘制消息

所以我们可以选择在WM_PAINT消息出现时候 进行绘制 把Char的那些 只保留这个

```c++
 if ((char)wParam == '\r') {
     g_text += ((char)wParam);
     g_text += '\n';
}
 else if (((char)wParam) == '\b')
 {
     if (!g_text.empty())
         g_text.pop_back();
 }
else {
    g_text += ((char)wParam);
}
```

在Char里面接收键盘字符 保存

-------

在WM_PAINT输出的代码

```c++
LRESULT OnPaint(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {  //绘制消息
    //OutputDebugString(_T("Paint\n"));
    HDC hdc = GetDC(hWnd);
    RECT rc;
   
    OutputDebugString(g_text.c_str());
   
 
   
    GetClientRect(hWnd, &rc);
    DrawText(hdc, g_text.c_str(), g_text.length(), &rc, DT_LEFT);
    ReleaseDC(hWnd, hdc);  //释放DC    

    return TRUE; 
}
```

这回你怎么挪都不会 出现了 因为他是时时刻刻的都在刷 所以会闪烁

这就是无效区域 

**你是不是有一个疑问 为啥这叫无效区域 **

当你打开两窗口一个盖住另一个的时候 遮挡住的一部分 他是不绘制的 然后你挪动窗口的时候遮挡的一部分露出来了 你以为他是一直存在的 其实他是现场绘制的 也就是WM_PAINT消息出现那么频繁的远原因 是系统一直认为你是无效区域

你可以使用

> OutputDebugString(_T("Paint\n"));

试试看非常频繁 挡住的那一块叫做无效区域  还有就是无变化的区域 ,窗口内容变化 不显示的那一部分变化的部分也会标记为无效

所以为了解决这个问题我们只需要设置 这个区域为有效就行了

使用**ValidateRect()** 函数来让此区域变为有效区域防止闪烁

```c++

BOOL InvalidateRect(
  [in] HWND       hWnd,
  [in] const RECT *lpRect,
  [in] BOOL       bErase //[in] bErase指定在处理更新区域时是否要擦除更新区域中的背景。 如果此参数为 TRUE，则调用 BeginPaint 函数时将擦除背景。 如果此参数为 FALSE，则背景保持不变。
);
```



------

### 使用BeginPaint()来获取HDC

和GetDC不同的是 他只会绘制无效区域的部分 效率会更高  还会自动设置有效区域

所以 通过设置BeginPaint() 优化速度    只不过要提前设置一个结构 和结尾设置EndPaint()函数

该函数和BeginPaint结构相同代表着 绘制结束

```c++
HDC BeginPaint(
  [in]  HWND          hWnd,
  [out] LPPAINTSTRUCT lpPaint  // PAINTSTRUCT结构
);
```

PAINTSTRUCT是前置条件 使用方法为 

```c++
  PAINTSTRUCT ps;    //PAINTSTRUCT 结构包含应用程序的信息。 此信息可用于绘制该应用程序拥有的窗口的工作区。
  HDC hdc = BeginPaint(hWnd, &ps);

```

**GetDC()** 不受无效区域的影响 所以会一直刷

备注: ValidateRect (hWnd,NULL,TRUE)  NULL 为全部客户区域

-------

## 消息的发送

据说可以跨窗口发送消息

>发送消息的API SendMessage() ; 直接调用窗口函数 不会出现在消息队列里同步
>
>PostMessage();  投递到消息队列里 不会马上处理 异步

__例子__ 我想关记事本 我看他不爽 

使用 FindWindow()来寻找 

```c++

HWND FindWindow(
  [in, optional] LPCWSTR lpClassName,   //窗口类名  Vs2022 自带 spy++  上网自行查看
  [in, optional] LPCWSTR lpWindowName   // 窗口名
);
```

使用PostMessage进行关闭

为啥不能SendMessage 那是因为 调用过程函数和消息的队列没关系

```c++

  HWND hCalc = FindWindow("Notepad", NULL);
  if (hCalc == NULL) {
      return FALSE;
  }
  PostMessage(hCalc, WM_QUIT, 0, NULL);
```

成功关闭

---

### 更攒劲的东西

比新游戏还刺激~

首先要操作记事本并写字 需要知道 在哪个窗口写的 但是使用Spy++ 进行查询 发现是Edit 但是 每个窗口都有Edit  那么多怎么寻找 所以 我们选择使用GetWindow()来进行操作

```c++
HWND GetWindow(
  [in] HWND hWnd,  //句柄
  [in] UINT uCmd   //值
);
```

| 值                   | 含义                                                         |
| :------------------- | :----------------------------------------------------------- |
| **GW_CHILD**5        | 如果指定的窗口是父窗口，则检索到的句柄标识 Z 顺序顶部的子窗口;否则，检索的句柄为 **NULL**。 函数仅检查指定窗口的子窗口。 它不检查后代窗口。 |
| **GW_ENABLEDPOPUP**6 | 检索的句柄标识指定窗口拥有的已启用弹出窗口， (搜索使用 **GW_HWNDNEXT**) 找到的第一个此类窗口;否则，如果没有启用的弹出窗口，则检索到的句柄是指定窗口的句柄。 |
| **GW_HWNDFIRST**0    | 检索的句柄标识 Z 顺序中最高类型的窗口。如果指定的窗口是最顶层的窗口，则句柄标识最顶层的窗口。 如果指定的窗口是顶级窗口，则句柄标识顶级窗口。 如果指定的窗口是子窗口，则句柄标识同级窗口。 |
| **GW_HWNDLAST**1     | 检索到的句柄标识 Z 顺序中最低类型的窗口。如果指定的窗口是最顶层的窗口，则句柄标识最顶层的窗口。 如果指定的窗口是顶级窗口，则句柄标识顶级窗口。 如果指定的窗口是子窗口，则句柄标识同级窗口。 |
| **GW_HWNDNEXT**2     | 检索的句柄按 Z 顺序标识指定窗口下方的窗口。如果指定的窗口是最顶层的窗口，则句柄标识最顶层的窗口。 如果指定的窗口是顶级窗口，则句柄标识顶级窗口。 如果指定的窗口是子窗口，则句柄标识同级窗口。 |
| **GW_HWNDPREV**3     | 检索的句柄按 Z 顺序标识指定窗口上方的窗口。如果指定的窗口是最顶层的窗口，则句柄标识最顶层的窗口。 如果指定的窗口是顶级窗口，则句柄标识顶级窗口。 如果指定的窗口是子窗口，则句柄标识同级窗口。 |
| **GW_OWNER**4        | 检索到的句柄标识指定窗口的所有者窗口（如果有）。 有关详细信息，请参阅 [拥有的 Windows](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/window-features)。 |

```c++
   HWND hNotePad = FindWindow("Notepad", );
   if (hNotePad == NULL) {
       return FALSE;
   }
HWND hEdit = GetWindow(hNotePad,GW_CHILD);  // 因为仅有一个子窗口
PostMessage(hEdit , WM_KEYDOWN ,'A',NULL);  // 已被抛弃 Win11是UI  WIn10可以用
```

显然也可以用绘制大法 但是win11不可用 只能用其他获取Edit 窗口的办法 但是 代码行

可以通过DC 的方式 进行绘制 注意会被刷掉 但是确实能绘制

```c++
HDC hdc = GetDC(hEdit);
SetTextColor(hdc,RGB(255,0,0));  //设置颜色
TextOut(hdc,0,0,"666",3)  // 0,0 坐标 长度3
```

---------

### 菜单创建

回归主题如何隔创建菜单

创建菜单 使用CreateMenu 创建菜单 可以用可以使用 [InsertMenuItem](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-insertmenuitema)、 [AppendMenu](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/u) 和 [InsertMenu](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-insertmenua) 函数填充菜单项

以appendmenu为例子

```c++
BOOL AppendMenuA(
  [in]           HMENU    hMenu,  //要更改的菜单栏、下拉菜单、子菜单或快捷菜单的句柄
  [in]           UINT     uFlags,  // 控制新菜单项的外观和行为
  [in]           UINT_PTR uIDNewItem,  //新菜单项的标识符;如果 uFlags 参数设置为 MF_POPUP，则为下拉菜单或子菜单的句柄。 控件ID 就是
  [in, optional] LPCSTR   lpNewItem  //见补充
);
```

| 值                             | 含义                                                         |
| :----------------------------- | :----------------------------------------------------------- |
| **MF_BITMAP**0x00000004L       | 使用位图作为菜单项。 *lpNewItem* 参数包含位图的句柄。        |
| **MF_CHECKED**0x00000008L      | 在菜单项旁边放置一个检查标记。 如果应用程序提供检查标记位图 (请参阅 [SetMenuItemBitmaps](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-setmenuitembitmaps)，则此标志在菜单项旁边显示检查标记位图。 |
| **MF_DISABLED**0x00000002L     | 禁用菜单项，以便无法选择该菜单项，但标志不会将其灰显。       |
| **MF_ENABLED**0x00000000L      | 启用菜单项，以便可以选择菜单项，并将其从灰显状态还原。       |
| **MF_GRAYED**0x00000001L       | 禁用菜单项并将其灰显，使其无法选中。                         |
| **MF_MENUBARBREAK**0x00000020L | 功能与菜单栏的 **MF_MENUBREAK** 标志相同。 对于下拉菜单、子菜单或快捷菜单，新列与旧列之间将用一条竖线分隔。 |
| **MF_MENUBREAK**0x00000040L    | 将项放在菜单栏) 的新行 (上，或者放置在下拉菜单、子菜单或快捷菜单) 的新列 (中，而不分隔列。 |
| **MF_OWNERDRAW**0x00000100L    | 指定该项是所有者绘制的项。 在首次显示菜单之前，拥有菜单的窗口会收到 [WM_MEASUREITEM](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/wm-measureitem) 消息，用于检索菜单项的宽度和高度。 然后，每当必须更新菜单项的外观时， [WM_DRAWITEM消息就会](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/wm-drawitem) 发送到所有者窗口的窗口过程。 |
| **MF_POPUP**0x00000010L        | 指定菜单项打开下拉菜单或子菜单。 *uIDNewItem* 参数指定下拉菜单或子菜单的句柄。 此标志用于向菜单栏或向下拉菜单、子菜单或快捷菜单打开子菜单的菜单项添加菜单名称。 |
| **MF_SEPARATOR**0x00000800L    | 绘制一条水平分割线。 此标志仅在下拉菜单、子菜单或快捷菜单中使用。 行不能灰显、禁用或突出显示。 *忽略 lpNewItem* 和 *uIDNewItem* 参数。 |
| **MF_STRING**0x00000000L       | 指定菜单项为文本字符串; *lpNewItem* 参数是指向字符串的指针。 |
| **MF_UNCHECKED**0x00000000L    | 不要在项旁边放置检查标记， (默认) 。 如果应用程序提供检查标记位图 (请参阅 [SetMenuItemBitmaps](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-setmenuitembitmaps)) ，则此标志显示菜单项旁边的清除位图。 |

#### 补充

| 值                          | 含义                                                         |
| :-------------------------- | :----------------------------------------------------------- |
| **MF_BITMAP**0x00000004L    | 包含位图句柄。                                               |
| **MF_OWNERDRAW**0x00000100L | 包含应用程序提供的值，该值可用于维护与菜单项相关的其他数据。 该值位于在创建菜单或更新其外观时发送[的WM_MEASUREITEM](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/wm-measureitem)或[WM_DRAWITEM](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/wm-drawitem)消息的 *lParam* 参数指向的 结构的 **itemData** 成员中。 |
| **MF_STRING**0x00000000L    | 包含指向以 null 结尾的字符串的指针。                         |

绘制完appendmenu 后就要SetMenu 保证启用 该菜单  下面是示例

```c++
    HMENU hMenu = CreateMenu();
    AppendMenu(hMenu, MF_STRING, 100, "菜单(&F)");  &不会显示 代表ALT + F
    AppendMenu(hMenu, MF_STRING, 101, "文件(&E)");
    SetMenu(hWnd, hMenu);
    
```

没有反应所以 要添加子菜单(弹出菜单)

> GetSubMenu  检索由指定菜单项激活的下拉菜单或子菜单的句柄。

```c++
HMENU GetSubMenu(
  [in] HMENU hMenu,
  [in] int   nPos
);
```

该函数会产生一个子菜单句柄所以 设置  ret 为测试用

```c++
    HMENU hMenu = CreateMenu();
   HMENU hSubMenu = CreatePopupMenu();
    
    ret = AppendMenu(hMenu, MF_STRING | MF_POPUP,(UINT_PTR)hSubMenu, "菜单(&F)");
   
    //添加子菜单
 
    
    
    ret =  AppendMenu(hSubMenu, MF_STRING, 103, "内容");



    SetMenu(hWnd, hMenu);

```

菜单会产生一个叫做WM_COMMAND的消息

这时候就可以通过消息循环来回应消息了

## WM_COMMAND

他的LWORD wParam 是ID标识 所以通过分辨 ID 来控制菜单

```c++
RESULT OnCommand (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (LOWORD(wParam)) 
    {
    case ID_PUSH :
        MessageBox(NULL, _T("打开了"), _T("打开"), MB_OK);
        break;   
    }
    return TRUE;
```

最好宏定义 ID 更好分辨 

----------

# END

