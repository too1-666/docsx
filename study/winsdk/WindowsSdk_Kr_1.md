---
typora-root-url: ..\..\public
---

# Windows SDK 观后感

### 错误处理

| 函数                                                         | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [**提示音**](https://learn.microsoft.com/zh-cn/windows/win32/api/utilapiset/nf-utilapiset-beep) | 在扬声器上生成简单的音调。                                   |
| [**CaptureStackbackTrace**](https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/legacy/bb204633(v=vs.85)) | 通过向上浏览堆栈并记录每个帧的信息来捕获堆栈回溯。           |
| [**FatalAppExit**](https://learn.microsoft.com/zh-cn/windows/win32/api/errhandlingapi/nf-errhandlingapi-fatalappexita) | 显示消息框，并在关闭消息框时终止应用程序。                   |
| [**FlashWindow**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Winuser/nf-winuser-flashwindow) | 刷写指定窗口一次。                                           |
| [**FlashWindowEx**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Winuser/nf-winuser-flashwindowex) | 刷写指定窗口。                                               |
| [**FormatMessage**](https://learn.microsoft.com/zh-cn/windows/desktop/api/WinBase/nf-winbase-formatmessage) | 设置消息字符串的格式。                                       |
| [**GetErrorMode**](https://learn.microsoft.com/zh-cn/windows/win32/api/errhandlingapi/nf-errhandlingapi-geterrormode) | 检索当前进程的错误模式。                                     |
| [**GetLastError**](https://learn.microsoft.com/zh-cn/windows/win32/api/errhandlingapi/nf-errhandlingapi-getlasterror) | 检索调用线程的最后错误代码值。                               |
| [**GetThreadErrorMode**](https://learn.microsoft.com/zh-cn/windows/win32/api/errhandlingapi/nf-errhandlingapi-getthreaderrormode) | 检索调用线程的错误模式。                                     |
| [**MessageBeep**](https://learn.microsoft.com/zh-cn/windows/desktop/api/WinUser/nf-winuser-messagebeep) | 播放波形声音。                                               |
| [**RtlLookupFunctionEntry**](https://learn.microsoft.com/zh-cn/windows/desktop/api/WinNT/nf-winnt-rtllookupfunctionentry) | 在活动函数表中搜索与指定电脑值对应的条目。                   |
| [**RtlNtStatusToDosError**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Winternl/nf-winternl-rtlntstatustodoserror) | 检索与指定的 NT 错误代码对应的系统错误代码。                 |
| [**RtlPcToFileHeader**](https://learn.microsoft.com/zh-cn/windows/desktop/api/WinNT/nf-winnt-rtlpctofileheader) | 检索包含指定 PC 值的映像的基本地址。                         |
| [**RtlUnwind**](https://learn.microsoft.com/zh-cn/windows/desktop/api/WinNT/nf-winnt-rtlunwind) | 启动过程调用帧的展开。                                       |
| [**RtlUnwind2**](https://learn.microsoft.com/zh-cn/windows/desktop/api/WinNT/nf-winnt-rtlunwind2) | 启动过程调用帧的展开。                                       |
| [**RtlUnwindEx**](https://learn.microsoft.com/zh-cn/windows/desktop/api/WinNT/nf-winnt-rtlunwindex) | 启动过程调用帧的展开。                                       |
| [**RtlVirtualUnwind**](https://learn.microsoft.com/zh-cn/windows/desktop/api/WinNT/nf-winnt-rtlvirtualunwind) | 检索指定函数上下文之前的函数的调用上下文。                   |
| [**SetErrorMode**](https://learn.microsoft.com/zh-cn/windows/win32/api/errhandlingapi/nf-errhandlingapi-seterrormode) | 控制系统是否将处理指定类型的严重错误，或者进程是否将处理此类错误。 |
| [**SetLastError**](https://learn.microsoft.com/zh-cn/windows/win32/api/errhandlingapi/nf-errhandlingapi-setlasterror) | 设置调用线程的最后错误代码。                                 |
| [**SetLastErrorEx**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Winuser/nf-winuser-setlasterrorex) | 设置调用线程的最后错误代码。                                 |
| [**SetThreadErrorMode**](https://learn.microsoft.com/zh-cn/windows/win32/api/errhandlingapi/nf-errhandlingapi-setthreaderrormode) | 控制系统是否将处理指定类型的严重错误，或者调用线程是否将处理此类错误。 |

 表格所示 这是错误处理 可以使用

```c++
DWORD dError = GetLastError()
```



GetLastError() 显示错误码 在工具错误查找使用错误码 就可以看到错误码, 或者在监视中使用 dwError,hr 直接显示

@er,hr可以实时显示

![](/winSDK/krre/Error_Find.png)

值就是错误码  

> 补充一点 需要打个断点

-------------------

# SDk 02

### 图形化界面窗口 都是由窗口构造的 空间也是窗口

窗口前后alt tab 切换的 这个坐标是z序 

* z序(z-order)

- 1024*1080 xy序号

- 这是屏幕坐标 x y

窗口坐标

>第一个窗口以 屏幕窗口确定的
>
>父窗口 根据窗口确定子窗口的坐标系 
>
>或者另一个关系 是应用程序窗口和模式对话窗口之间的关系 当应用程序 显示对话框是后 应用程序窗口是所有者窗口 拥有的窗口始终在所有者窗口的前面 所有者最小化 全部最小化和所有者同时销毁 

### 句柄HWND

操作系统 创建 结构体来保存信息 称之为0-->内核对象

```
内核层 (ring_0 零环)-------->权限最高 
----------------------------------------------------------------------------
用户层 (ring_3 三环)----------> 权限最低  SDK 编程在这里  API的作用是和ring0 通讯
```

-----------

句柄就是索引  通过句柄访问操作系统 获取内核对象

## 创建流程

> 补充我之前缺少部分

程序 ->实例化-> 进程->多个窗口

 ```
 int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
                                                       ↑空                             ↑窗口显示方式
 ```

----------------

**窗口类补充** WNDCLASS / WNDCLASSEX

 ```c++
  typedef struct tagWNDCLASSA {
   UINT      style;
   WNDPROC   lpfnWndProc;
   int       cbClsExtra;
   int       cbWndExtra;
   HINSTANCE hInstance;
   HICON     hIcon;
   HCURSOR   hCursor;
   HBRUSH    hbrBackground;
   LPCSTR    lpszMenuName;   //菜单类
   LPCSTR    lpszClassName; // 唯一窗口的名字
 } WNDCLASSA, *PWNDCLASSA, *NPWNDCLASSA, *LPWNDCLASSA;
 ```

---------------------

EX 类只是多个__hIconSm__

```c++
typedef struct tagWNDCLASSEXA {
  UINT      cbSize;  //<----结构体大小
  UINT      style;  //<--------- CS_E_ 扩展
  WNDPROC    ;
  int       cbClsExtra;    //扩展类型
  int       cbWndExtra;		//窗口扩展
  HINSTANCE hInstance;
  HICON     hIcon;
  HCURSOR   hCursor;  //光标
  HBRUSH    hbrBackground; //背景色 刷子  
  LPCSTR    lpszMenuName; //窗口名称
  LPCSTR    lpszClassName; // 窗口类名
  HICON     hIconSm; //<--------- 小图标 
} WNDCLASSEXA, *PWNDCLASSEXA, *NPWNDCLASSEXA, *LPWNDCLASSEXA;
```

-----------

前面没讲 现在讲一下咋用 为啥这么用的好处

> 当你使用 WNDCLASS wc ={ 0 };的时候 
>
> 看可以初始化并且选择性使用 

#### 补充

​	style 的风格  所有 api调用约定都是_stdcall ,变参(printf)是 _cdecall

----

进程结束 ,取消注册 如果想长期存在↓

### **CreateWindowsEx** 长期存在

**CreateWindowEx** 函数将[WM_NCCREATE](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-nccreate)、[WM_NCCALCSIZE](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-nccalcsize)和[WM_CREATE](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-create)消息发送到正在创建的窗口。

 如果创建的窗口是子窗口，则其默认位置位于 Z 顺序的底部。 如果创建的窗口是顶级窗口，则其默认位置位于 Z 顺序 (的顶部，但位于所有最顶部窗口下方，除非创建的窗口本身是最顶层) 。

有关控制任务栏是否显示所创建窗口的按钮的信息，请参阅 [管理任务栏按钮](https://learn.microsoft.com/zh-cn/windows/desktop/shell/taskbar)。

有关删除窗口的信息，请参阅 [DestroyWindow](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-destroywindow) 函数。

可以在 *lpClassName* 参数中指定以下预定义控件类。 请注意可在 *dwStyle* 参数中使用的相应控件样式。

展开表

| 类                 | 含义                                                         |
| :----------------- | :----------------------------------------------------------- |
| **BUTTON**         | 指定一个小矩形子窗口，该窗口表示用户可以单击以将其打开或关闭的按钮。 按钮控件可以单独使用，也可以成组使用，并且可以不带文本进行标记或显示。 当用户单击按钮控件时，按钮控件通常会更改外观。 有关详细信息，请参阅 [按钮](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/buttons)。有关可在 *dwStyle* 参数中指定的按钮样式表，请参阅 [按钮样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/button-styles)。 |
| **COMBOBOX**       | 指定由列表框和类似于编辑控件的选择字段组成的控件。 使用此样式时，应用程序应随时显示列表框或启用下拉列表框。 如果列表框可见，在选择字段中键入字符会突出显示与键入的字符匹配的第一个列表框条目。 相反，选择列表框中的项会在选择字段中显示所选文本。 有关详细信息，请参阅 [组合框](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/combo-boxes)。有关可以在 *dwStyle* 参数中指定的组合框样式表，请参阅 [组合框样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/combo-box-styles)。 |
| **EDIT**           | 指定用户可从键盘键入文本的矩形子窗口。 用户选择控件，并通过单击或按 Tab 键移动到控件来为控件提供键盘焦点。 当编辑控件显示闪烁的插入点时，用户可以键入文本;使用鼠标移动光标，选择要替换的字符，或定位光标以插入字符;或使用 键删除字符。 有关详细信息，请参阅 [编辑控件](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/edit-controls)。有关可在 *dwStyle* 参数中指定的编辑控件样式表，请参阅 [编辑控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/edit-control-styles)。 |
| **LISTBOX**        | 指定字符串的列表。 每当应用程序必须提供用户可以从中选择的名称列表（如文件名）时，请指定此控件。 用户可以通过单击来选择字符串。 突出显示所选字符串，并将通知消息传递到父窗口。 有关详细信息，请参阅 [列表框](https://learn.microsoft.com/zh-cn/windows/desktop/uxguide/ctrl-list-boxes)。有关可以在 *dwStyle* 参数中指定的列表框样式表，请参阅 [列表框样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/list-box-styles)。 |
| **MDICLIENT**      | 指定 MDI 客户端窗口。 此窗口接收控制 MDI 应用程序的子窗口的消息。 建议的样式位 **是WS_CLIPCHILDREN** 和 **WS_CHILD**。 指定 **WS_HSCROLL** 和 **WS_VSCROLL** 样式以创建允许用户将 MDI 子窗口滚动到视图中的 MDI 客户端窗口。 有关详细信息，请参阅 [多文档接口](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/multiple-document-interface)。 |
| **RichEdit**       | 指定 Microsoft Rich Edit 1.0 控件。 此窗口允许用户使用字符和段落格式查看和编辑文本，并且可以将嵌入式组件对象模型 (COM) 对象。 有关详细信息，请参阅 [Rich Edit 控件](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/rich-edit-controls)。有关可在 *dwStyle* 参数中指定的丰富编辑控件样式的表，请参阅 [Rich Edit 控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/rich-edit-control-styles)。 |
| **RICHEDIT_CLASS** | 指定 Microsoft Rich Edit 2.0 控件。 此控件允许用户使用字符和段落格式查看和编辑文本，并且可以包含嵌入的 COM 对象。 有关详细信息，请参阅 [Rich Edit 控件](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/rich-edit-controls)。有关可在 *dwStyle* 参数中指定的丰富编辑控件样式的表，请参阅 [Rich Edit 控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/rich-edit-control-styles)。 |
| **SCROLLBAR**      | 指定一个矩形，该矩形包含一个滚动框，并在两端都有方向箭头。 每当用户单击控件时，滚动条就会向其父窗口发送通知消息。 如有必要，父窗口负责更新滚动框的位置。 有关详细信息，请参阅 [滚动条](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/scroll-bars)。有关可在 *dwStyle* 参数中指定的滚动条控件样式表，请参阅 [滚动条控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/scroll-bar-control-styles)。 |
| **STATIC**         | 指定用于标记、框或分隔其他控件的简单文本字段、框或矩形。 静态控件不采用任何输入，也不提供输出。 有关详细信息，请参阅 [静态控件](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/static-controls)。有关可以在 *dwStyle* 参数中指定的静态控件样式表，请参阅 [静态控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/static-control-styles)。 |

-------------

### 消息循环

使用GetMessage()时候 第二个参数 设置为NULL  为接收所有窗口消息

-----

写BOOL 和 bool 的长度不一样  FALSE 和 false的长度不同 

### 结束传递消息

WindowsSdk 中传递 的参数是传参到消息循环的wParam中的  (回调函数的 参数)

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
            TranslateMessage(&msg);//虚拟
            DispatchMessage(&msg); //派发消息
        }
    }
    return (msg.wParam); // 接收消息

}

    
LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    if (uMsg == WM_CLOSE)
    {
        PostQuitMessage(123);  //关闭消息  WM_QUIT消息, 传参到 wParam  
    }
    return DefWindowProc(hWnd, uMsg, wParam, lParam);  

}
```

>  部分参数展示

我将程序结果战术 会发现

```
 PostQuitMessage(123)
```

的消息传到了 msg.wParam 中

![](/winSDK/krre/Return_Hanshu.png)

--------

### 换色hbrBackgour nd 

由于 初始值为0 背景最大化时候是个大黑框 所以 可以设 

> wc.hbrBackground = (HBRUSH)COLOR_WINDOWFRAME
>
> 这样全部的背景都是一样的颜色了

**换色**  

>  CreateSolidBrush() 函数

用法 

```
CreateSolidBrush(RGB(0,0,0));
// 0,0,0为RGB参数黑色
```

```c++
wc.hbrBackground = CreateSolidBrush(RGB(255, 0, 0)); // 设置颜色 
```

> 设置Icon

​		LoadIcon

 ```c++
 LoadIcon(NULL,IDI_ASTERISK); //HWND 需要给空
 HICON LoadIcon(HINSTANCE hInstance,    LPCSTR    lpIconName);
 ```



>   设置光标

​		 LoadCursor

```c++
wc.hCursor = LoadCursor(NULL,IDC_CROSS); //系统光标HWND 需要给空  同理
```

----

备注  上面已经被 LoadImage()取代

## LoadImage函数

```cpp
HANDLE LoadImageA(
  [in, optional] HINSTANCE hInst,
  [in]           LPCSTR    name,
  [in]           UINT      type,
  [in]           int       cx,
  [in]           int       cy,
  [in]           UINT      fuLoad
);
```



## 参数

```
[in, optional] hInst
```

类型： **HINSTANCE**

包含要加载的图像的 DLL 或可执行文件 (.exe) 的模块的句柄。 有关详细信息，请参阅 [GetModuleHandle](https://learn.microsoft.com/zh-cn/windows/desktop/api/libloaderapi/nf-libloaderapi-getmodulehandlea)。 请注意，从 32 位 Windows 开始，实例句柄 (**HINSTANCE**) ，例如 [由 WinMain](https://learn.microsoft.com/zh-cn/windows/desktop/api/winbase/nf-winbase-winmain) 的系统函数调用公开的应用程序实例句柄，而模块句柄 (**HMODULE**) 也是如此。

若要 (图标、光标或位图文件) 加载预定义图像或独立资源，请将此参数设置为 **NULL**。

```
[in] name
```

类型： **LPCTSTR**

要加载的图像。

如果 *hInst* 参数为非 **NULL** 且 *fuLoad* 参数省略 **LR_LOADFROMFILE**， *则 name* 指定 *hInst* 模块中的图像资源。

如果要按名称从模块加载图像资源， *则 name* 参数是指向包含映像资源名称的以 null 结尾的字符串的指针。

如果要从模块按序号加载图像资源，请使用 [MAKEINTRESOURCE](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-makeintresourcea) 宏将图像序号转换为可传递给 **LoadImage** 函数的形式。

如果 *hInst* 参数为 **NULL** 且 *fuLoad* 参数省略 **LR_LOADFROMFILE** 值并包含 **LR_SHARED**，则 *名称* 将指定要加载的预定义图像。

预定义的图像标识符在 中 `Winuser.h` 定义，并具有以下前缀：

展开表

| 前缀     | 含义                                                         |
| :------- | :----------------------------------------------------------- |
| **OBM_** | OEM 位图。 使用 [MAKEINTRESOURCE](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-makeintresourcea) 宏传递这些。 |
| **OIC_** | OEM 图标。 使用 [MAKEINTRESOURCE](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-makeintresourcea) 宏传递这些。 |
| **Ocr_** | OEM 游标。 使用 [MAKEINTRESOURCE](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-makeintresourcea) 宏传递这些。 |
| **IDI_** | [标准图标](https://learn.microsoft.com/zh-cn/windows/win32/menurc/about-icons) |
| **Idc_** | [标准游标](https://learn.microsoft.com/zh-cn/windows/win32/menurc/about-cursors) |

若要将 OEM 图像标识符常量传递给 **LoadImage** 函数，请使用 [MAKEINTRESOURCE](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-makeintresourcea) 宏。 例如，若要加载**OCR_NORMAL**游标，请将 作为 *name* 参数传递`MAKEINTRESOURCE(OCR_NORMAL)`，**将 NULL** 作为 *hInst* 参数传递，**并将LR_SHARED**作为标志之一传递给 *fuLoad* 参数。

如果 *hInst* 参数为 **NULL** 且 *fuLoad* 参数包含**LR_LOADFROMFILE**值，*则 name* 是包含独立资源 (图标、光标或位图文件) 的文件的名称，例如 。 `c:\myicon.ico`

有关详细信息，请参阅下面的“备注”部分。

```
[in] type
```

类型： **UINT**

要加载的图像的类型。

此参数可能是以下值之一：

展开表

| 值               | 含义       |
| :--------------- | :--------- |
| **IMAGE_BITMAP** | 加载位图。 |
| **IMAGE_CURSOR** | 加载游标。 |
| **IMAGE_ICON**   | 加载图标。 |

```
[in] cx
```

类型： **int**

图标或光标的宽度（以像素为单位）。 如果此参数为零且 *fuLoad* 参数 **为LR_DEFAULTSIZE**，则函数使用 **SM_CXICON** 或 **SM_CXCURSOR** 系统指标值来设置宽度。 如果此参数为零且未使用 **LR_DEFAULTSIZE** ，则函数使用实际资源宽度。

```
[in] cy
```

类型： **int**

图标或光标的高度（以像素为单位）。 如果此参数为零且 *fuLoad* 参数 **为LR_DEFAULTSIZE**，则函数使用 **SM_CYICON** 或 **SM_CYCURSOR** 系统指标值来设置高度。 如果此参数为零且未使用 **LR_DEFAULTSIZE** ，则函数使用实际资源高度。

```
[in] fuLoad
```

类型： **UINT**

此参数可使用以下一个或多个值。

展开表

| 值                                | 含义                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| **LR_CREATEDIBSECTION**0x00002000 | 当 *uType* 参数指定 **IMAGE_BITMAP**时，会导致函数返回 DIB 节位图而不是兼容的位图。 此标志可用于加载位图而不将其映射到显示设备的颜色。 |
| **LR_DEFAULTCOLOR**0x00000000     | 默认标志;它不执行任何工作。 它的意思是“不 **LR_MONOCHROME**”。 |
| **LR_DEFAULTSIZE**0x00000040      | 如果 *cxDesired* 或 *cyDesired* 值设置为零，则使用游标或图标的系统指标值指定的宽度或高度。 如果未指定此标志，并且 *cxDesired* 和 *cyDesired* 设置为零，则函数将使用实际资源大小。 如果资源包含多个图像，则 函数使用第一个图像的大小。 |
| **LR_LOADFROMFILE**0x00000010     | 从 *名称* (图标、光标或位图文件指定的文件) 加载独立图像。    |
| **LR_LOADMAP3DCOLORS**0x00001000  | 在颜色表中搜索图像，并将以下灰色底纹替换为相应的三维颜色。Dk 灰色，RGB (128,128,128) 与 **COLOR_3DSHADOW**灰色，RGB (192,192,192) ，带 **COLOR_3DFACE**Lt Gray，RGB (223,223,223) 与 **COLOR_3DLIGHT**如果要加载颜色深度大于 8bpp 的位图，请不要使用此选项。 |
| **LR_LOADTRANSPARENT**0x00000020  | 检索图像中第一个像素的颜色值，并将颜色表中的相应条目替换为默认窗口颜色 (**COLOR_WINDOW**) 。 图像中使用该条目的所有像素都将成为默认的窗口颜色。 此值仅适用于具有相应颜色表的图像。如果要加载颜色深度大于 8bpp 的位图，请不要使用此选项。如果 *fuLoad* 同时包含 **LR_LOADTRANSPARENT** 值和 **LR_LOADMAP3DCOLORS** 值， **LR_LOADTRANSPARENT** 优先。 但是，颜色表条目将替换为 **COLOR_3DFACE** 而不是 **COLOR_WINDOW**。 |
| **LR_MONOCHROME**0x00000001       | 加载黑白图像。                                               |
| **LR_SHARED**0x00008000           | 如果多次加载映像，则共享映像句柄。 如果未设置 **LR_SHARED** ，则对同一资源的第二次 **LoadImage** 调用将再次加载映像并返回不同的句柄。使用此标志时，系统会在不再需要资源时销毁该资源。对于具有非标准大小、加载后可能会更改或从文件加载的图像，请勿使用 **LR_SHARED** 。加载系统图标或光标时，必须使用 **LR_SHARED** 否则函数将无法加载资源。无论请求的大小如何，此函数都会查找缓存中具有请求的资源名称的第一个映像。 |
| **LR_VGACOLOR**0x00000080         | 使用真正的 VGA 颜色。                                        |



#### 返回值

类型： **HANDLE**

如果函数成功，则返回值是新加载的图像的句柄。

如果函数失败，则返回值为 NULL。 要获得更多的错误信息，请调用 GetLastError。

--------

## 本次使用的 代码

```c++
#include <Windows.h>
#include <stdio.h>
#include<tchar.h>
LRESULT CALLBACK WindowProc(  HWND hWnd,UINT uMSG, WPARAM wParam,    LPARAM lParam) ;// 回调
 
int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
    TCHAR szWndClassName[] = { _T("Text") };

    WNDCLASSEX wc = { 0 };
    wc.cbSize = sizeof(WNDCLASSEXA);
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

    TCHAR szWndName[] = { _T("注入") };
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

}

    
LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    if (uMsg == WM_CLOSE)
    {
        PostQuitMessage(123);  //关闭消息  WM_QUIT消息, 传参到 wParam  
    }

    return DefWindowProc(hWnd, uMsg, wParam, lParam);  

}

```

这是本次使用的示例代码



















