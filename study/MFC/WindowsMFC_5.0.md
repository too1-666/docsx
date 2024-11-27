# WindowsMFC 5.0 

-----

## CAD 绘图 

他的功能

1. 绘制图形
2.  修改画笔
3. 可以操作
4. 可以cv
5. 可以保存

显然 我不会 从头开始

------

### 怎么绘图

 首先创建单文档 MFC默认  ,在CADView进行绘制 这个是客户区

> 看到了OnDraw 就知道是在OnDraw画  

但是OnDraw是哪里的 通过断点可以知道  他OnPaint 消息 

```c++
void CView::OnPaint()
{
	// standard paint routine
	CPaintDC dc(this);
	OnPrepareDC(&dc);
	OnDraw(&dc);
}

```

但是我们并不知道 从哪里 所以跟踪 到声明宏那里进行F12步进

```c++
BEGIN_MESSAGE_MAP(CView, CWnd)
	ON_WM_PAINT()  //<---这个
	ON_WM_MOUSEACTIVATE()
	ON_WM_CREATE()
	ON_WM_DESTROY()

	// Standard commands for split pane
	ON_COMMAND_EX(ID_WINDOW_SPLIT, &CView::OnSplitCmd)
	ON_UPDATE_COMMAND_UI(ID_WINDOW_SPLIT, &CView::OnUpdateSplitCmd)

	// Standard commands for next pane
	ON_UPDATE_COMMAND_UI(ID_NEXT_PANE, &CView::OnUpdateNextPaneMenu)
	ON_COMMAND_EX(ID_NEXT_PANE, &CView::OnNextPaneCmd)
	ON_UPDATE_COMMAND_UI(ID_PREV_PANE, &CView::OnUpdateNextPaneMenu)
	ON_COMMAND_EX(ID_PREV_PANE, &CView::OnNextPaneCmd)

	// special command for Initial Update
	ON_MESSAGE_VOID(WM_INITIALUPDATE, CView::OnInitialUpdate)

	ON_WM_PRINTCLIENT()
END_MESSAGE_MAP()
```

发现真的单独弄了个宏定义

```c++
#define ON_WM_PAINT() \
	{ WM_PAINT, 0, 0, 0, AfxSig_vv, \
		(AFX_PMSG)(AFX_PMSGW) \
		(static_cast< void (AFX_MSG_CALL CWnd::*)(void) > ( &ThisClass :: OnPaint)) },
```

由此看出 WM_PAINT指向OnPaint  在到OnDraw

-----

## Where 在哪里绘制 ?

 

获取DC来进行绘制  MFC 有CDC 的类 可以使用他来获取DC 类里面有什么请回顾WindowMFC 01 旧版  

最好使用 



| WindowsMFC | APi                | 范围作用   |
| ---------- | ------------------ | ---------- |
| CPaintDC   | BeginPaint         | 在无效区域 |
| CClientDC  | GetDC              | 在客户区   |
| CD         | CreateCompatibleDC | 内存       |
| CWindowDC  | GetWindowDC        | 窗口区     |

-----

回归正题 我们要绘制一个 就得启用OnDraw

```c++

void CCADView::OnDraw(CDC* pDC)  //删掉注释 以启用
{
	CCADDoc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;

	// TODO: 在此处为本机数据添加绘制代码
}
```

然后我们需要创建一个DC

```c++
	CDC CDesk;
	CDesk.CreateDC(_T("DISPLAY"), NULL, NULL, NULL);  // 创建DC  显示器的DC
```

>  如果系统上有多个监视器，则调用 `CreateDC(TEXT("DISPLAY"),NULL,NULL,NULL)` 将创建涵盖所有监视器的 DC。

然后用我们熟悉的东西来弄 

```c++
void CCADView::OnDraw(CDC* pDC)
{
	CCADDoc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;

	// TODO: 在此处为本机数据添加绘制代码
	CDC CDesk;
	CDesk.CreateDC(_T("DISPLAY"), NULL, NULL, NULL);   //创建DC
	CRect rc;
	InvalidateRect(&rc); 
	
	GetClientRect(&rc);
	
	pDC->BitBlt(0, 0, rc.Width(), rc.Height(), &CDesk, 0, 0, SRCCOPY);  // 把显示器数据 发送到客户区
}
```

效果不好跟她妈陷入万花筒一样

所以我们觉得定时发送图片合适

```c++


int CCADView::OnCreate(LPCREATESTRUCT lpCreateStruct)
{
	if (CView::OnCreate(lpCreateStruct) == -1)
		return -1;

	SetTimer(150, 100, NULL);

	return 0;
}

```

Create设置定时器  , 然后设置无效化区域,可以时刻进行刷新 但是又不会刷新过快导致看不见

```c++
void CCADView::OnTimer(UINT_PTR nIDEvent)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值

	InvalidateRect(NULL,TRUE );

	CView::OnTimer(nIDEvent);
}



```

---

## 使用GetSystemMetrics函数

我们用他来获取长宽高

```c++
int GetSystemMetrics(
  [in] int nIndex
);
```

```
[in] nIndex
```

类型： **int**

要检索的系统指标或配置设置。 此参数的取值可为下列值之一： 请注意，所有SM_CX* 值为宽度，所有SM_CY* 值为高度。 另请注意，设计为返回布尔数据的所有设置将 **TRUE** 表示为任何非零值， **FALSE** 表示零值。

展开表

| 值                                   | 含义                                                         |
| :----------------------------------- | :----------------------------------------------------------- |
| **SM_ARRANGE**56                     | 指定系统如何排列最小化窗口的标志。 有关详细信息，请参阅本主题中的“备注”部分。 |
| **SM_CLEANBOOT**67                   | 指定系统启动方式的 值：0 正常启动1 故障安全启动2 通过网络启动实现故障安全故障安全启动 (也称为 SafeBoot、安全模式或干净启动) 会绕过用户启动文件。 |
| **SM_CMONITORS**80                   | 桌面上的显示监视器数。 有关详细信息，请参阅本主题中的“备注”部分。 |
| **SM_CMOUSEBUTTONS**43               | 鼠标上的按钮数;如果未安装鼠标，则为零。                      |
| **SM_CONVERTIBLESLATEMODE**0x2003    | 反映笔记本电脑或平板模式的状态，0 表示板模式，否则为非零。 当此系统指标发生更改时，系统会通过 LPARAM 中带有“ConvertibleSlateMode” [的WM_SETTINGCHANGE](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-settingchange) 发送广播消息。 请注意，此系统指标不适用于台式电脑。 在这种情况下，请使用 [GetAutoRotationState](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-getautorotationstate)。 |
| **SM_CXBORDER**5                     | 窗口边框的宽度（以像素为单位）。 这等效于具有 3D 外观的窗口的 SM_CXEDGE 值。 |
| **SM_CXCURSOR**13                    | 光标的标称宽度（以像素为单位）。                             |
| **SM_CXDLGFRAME**7                   | 此值与 SM_CXFIXEDFRAME 相同。                                |
| **SM_CXDOUBLECLK**36                 | 矩形围绕双击序列中第一次单击的位置的宽度（以像素为单位）。 第二次单击必须在由 SM_CXDOUBLECLK 和 SM_CYDOUBLECLK 定义的矩形内发生，系统才能将两次单击视为双击。 两次单击也必须在指定时间内发生。若要设置双击矩形的宽度，请使用SPI_SETDOUBLECLKWIDTH调用 [SystemParametersInfo](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-systemparametersinfoa) 。 |
| **SM_CXDRAG**68                      | 鼠标指针在拖动操作开始之前可以移动的鼠标向下点任一侧的像素数。 这允许用户轻松单击并释放鼠标按钮，而不会无意中启动拖动操作。 如果此值为负值，则从鼠标向下点的左侧减去该值，并将其添加到其右侧。 |
| **SM_CXEDGE**45                      | 三维边框的宽度（以像素为单位）。 此指标是SM_CXBORDER的三维对应指标。 |
| **SM_CXFIXEDFRAME**7                 | 窗口周围具有描述文字但不是相当大的（以像素为单位）的框架的粗细。 SM_CXFIXEDFRAME是水平边框的高度，SM_CYFIXEDFRAME是垂直边框的宽度。此值与 SM_CXDLGFRAME 相同。 |
| **SM_CXFOCUSBORDER**83               | [DrawFocusRect](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-drawfocusrect) 绘制的焦点矩形的左边缘和右边缘的宽度。 此值以像素为单位。**Windows 2000：** 不支持此值。 |
| **SM_CXFRAME**32                     | 此值与 SM_CXSIZEFRAME 相同。                                 |
| **SM_CXFULLSCREEN**16                | 主显示器上全屏窗口的工作区宽度（以像素为单位）。 若要获取系统任务栏或应用程序桌面工具栏未遮挡的屏幕部分的坐标，请使用SPI_GETWORKAREA值调用 [SystemParametersInfo](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-systemparametersinfoa) 函数。 |
| **SM_CXHSCROLL**21                   | 水平滚动条上箭头位图的宽度（以像素为单位）。                 |
| **SM_CXHTHUMB**10                    | 水平滚动条中拇指框的宽度（以像素为单位）。                   |
| **SM_CXICON**11                      | 图标的系统大宽度（以像素为单位）。 [LoadIcon](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-loadicona) 函数只能加载具有SM_CXICON和SM_CYICON指定尺寸的图标。 有关详细信息 [，请参阅图标大小](https://learn.microsoft.com/zh-cn/windows/win32/menurc/about-icons#icon-sizes) 。 |
| **SM_CXICONSPACING**38               | 大图标视图中项的网格单元格的宽度（以像素为单位）。 每个项都适合在排列时按SM_CYICONSPACING SM_CXICONSPACING大小的矩形。 此值始终大于或等于 SM_CXICON。 |
| **SM_CXMAXIMIZED**61                 | 主显示监视器上最大化的顶级窗口的默认宽度（以像素为单位）。   |
| **SM_CXMAXTRACK**59                  | 具有描述文字和大小调整边框（以像素为单位）的窗口的默认最大宽度。 此指标是指整个桌面。 用户无法将窗口框架拖动到大于这些尺寸的大小。 窗口可以通过处理 [WM_GETMINMAXINFO](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-getminmaxinfo) 消息来替代此值。 |
| **SM_CXMENUCHECK**71                 | 默认菜单的宽度检查标记位图（以像素为单位）。                 |
| **SM_CXMENUSIZE**54                  | 菜单栏按钮的宽度，例如在多个文档界面中使用的子窗口关闭按钮（以像素为单位）。 |
| **SM_CXMIN**28                       | 窗口的最小宽度（以像素为单位）。                             |
| **SM_CXMINIMIZED**57                 | 最小化窗口的宽度（以像素为单位）。                           |
| **SM_CXMINSPACING**47                | 最小化窗口的网格单元格的宽度（以像素为单位）。 每个最小化窗口在排列时适合此大小的矩形。 此值始终大于或等于 SM_CXMINIMIZED。 |
| **SM_CXMINTRACK**34                  | 窗口的最小跟踪宽度（以像素为单位）。 用户无法将窗口框架拖动到小于这些尺寸的大小。 窗口可以通过处理 [WM_GETMINMAXINFO](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-getminmaxinfo) 消息来替代此值。 |
| **SM_CXPADDEDBORDER**92              | 带字幕窗口的边框填充量（以像素为单位）。**Windows XP/2000：** 不支持此值。 |
| **SM_CXSCREEN**0                     | 主显示器的屏幕宽度（以像素为单位）。 这是通过调用 [GetDeviceCaps](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-getdevicecaps) 获取的相同值，如下所示： `GetDeviceCaps( hdcPrimaryMonitor, HORZRES)`。 |
| **SM_CXSIZE**30                      | 窗口中按钮的宽度描述文字或标题栏（以像素为单位）。           |
| **SM_CXSIZEFRAME**32                 | 可调整大小的窗口周边的大小边框的粗细（以像素为单位）。 SM_CXSIZEFRAME是水平边框的宽度，SM_CYSIZEFRAME是垂直边框的高度。此值与 SM_CXFRAME 相同。 |
| **SM_CXSMICON**49                    | 图标的系统小宽度（以像素为单位）。 小图标通常显示在窗口标题和小图标视图中。 有关详细信息 [，请参阅图标大小](https://learn.microsoft.com/zh-cn/windows/win32/menurc/about-icons#icon-sizes) 。 |
| **SM_CXSMSIZE**52                    | 小描述文字按钮的宽度（以像素为单位）。                       |
| **SM_CXVIRTUALSCREEN**78             | [虚拟屏幕](https://learn.microsoft.com/zh-cn/windows/win32/gdi/the-virtual-screen)的宽度（以像素为单位）。 虚拟屏幕是所有显示监视器的边框。 SM_XVIRTUALSCREEN指标是虚拟屏幕左侧的坐标。 |
| **SM_CXVSCROLL**2                    | 垂直滚动条的宽度（以像素为单位）。                           |
| **SM_CYBORDER**6                     | 窗口边框的高度（以像素为单位）。 这等效于具有 3D 外观的窗口的 SM_CYEDGE 值。 |
| **SM_CYCAPTION**4                    | 描述文字区域的高度（以像素为单位）。                         |
| **SM_CYCURSOR**14                    | 光标的标称高度（以像素为单位）。                             |
| **SM_CYDLGFRAME**8                   | 此值与 SM_CYFIXEDFRAME 相同。                                |
| **SM_CYDOUBLECLK**37                 | 矩形围绕双击序列中第一次单击的位置的高度（以像素为单位）。 第二次单击必须在由 SM_CXDOUBLECLK 定义的矩形内发生，SM_CYDOUBLECLK系统会将两次单击视为双击。 两次单击也必须在指定时间内发生。若要设置双击矩形的高度，请使用SPI_SETDOUBLECLKHEIGHT调用 [SystemParametersInfo](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-systemparametersinfoa) 。 |
| **SM_CYDRAG**69                      | 鼠标指针在拖动操作开始之前可以移动的鼠标向下点上方和下方的像素数。 这允许用户轻松单击并释放鼠标按钮，而不会无意中启动拖动操作。 如果此值为负值，则从鼠标向下点上方减去该值，并将其添加到其下方。 |
| **SM_CYEDGE**46                      | 三维边框的高度（以像素为单位）。 这是SM_CYBORDER的三维对应项。 |
| **SM_CYFIXEDFRAME**8                 | 窗口周围具有描述文字但不是相当大的（以像素为单位）的框架的粗细。 SM_CXFIXEDFRAME是水平边框的高度，SM_CYFIXEDFRAME是垂直边框的宽度。此值与 SM_CYDLGFRAME 相同。 |
| **SM_CYFOCUSBORDER**84               | [DrawFocusRect](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-drawfocusrect) 绘制的焦点矩形的上边缘和下边缘的高度。 此值以像素为单位。**Windows 2000：** 不支持此值。 |
| **SM_CYFRAME**33                     | 此值与 SM_CYSIZEFRAME 相同。                                 |
| **SM_CYFULLSCREEN**17                | 主显示器上全屏窗口的工作区高度（以像素为单位）。 若要获取系统任务栏或应用程序桌面工具栏未遮挡的屏幕部分的坐标，请使用 SPI_GETWORKAREA 值调用 [SystemParametersInfo](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-systemparametersinfoa) 函数。 |
| **SM_CYHSCROLL**3                    | 水平滚动条的高度（以像素为单位）。                           |
| **SM_CYICON**12                      | 图标的系统高度（以像素为单位）。 [LoadIcon](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-loadicona) 函数只能加载具有SM_CXICON和SM_CYICON指定尺寸的图标。 有关详细信息 [，请参阅图标大小](https://learn.microsoft.com/zh-cn/windows/win32/menurc/about-icons#icon-sizes) 。 |
| **SM_CYICONSPACING**39               | 大图标视图中项的网格单元格的高度（以像素为单位）。 每个项都适合在排列时按SM_CYICONSPACING SM_CXICONSPACING大小的矩形。 此值始终大于或等于 SM_CYICON。 |
| **SM_CYKANJIWINDOW**18               | 对于系统的双字节字符集版本，这是屏幕底部的汉字窗口的高度（以像素为单位）。 |
| **SM_CYMAXIMIZED**62                 | 主显示监视器上最大化的顶级窗口的默认高度（以像素为单位）。   |
| **SM_CYMAXTRACK**60                  | 具有描述文字和大小调整边框的窗口的默认最大高度（以像素为单位）。 此指标是指整个桌面。 用户无法将窗口框架拖动到大于这些尺寸的大小。 窗口可以通过处理 [WM_GETMINMAXINFO](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-getminmaxinfo) 消息来替代此值。 |
| **SM_CYMENU**15                      | 单行菜单栏的高度（以像素为单位）。                           |
| **SM_CYMENUCHECK**72                 | 默认菜单的高度检查标记位图（以像素为单位）。                 |
| **SM_CYMENUSIZE**55                  | 菜单栏按钮（例如在多个文档界面中使用的子窗口关闭按钮）的高度（以像素为单位）。 |
| **SM_CYMIN**29                       | 窗口的最小高度（以像素为单位）。                             |
| **SM_CYMINIMIZED**58                 | 最小化窗口的高度（以像素为单位）。                           |
| **SM_CYMINSPACING**48                | 最小化窗口的网格单元格的高度（以像素为单位）。 每个最小化窗口在排列时适合此大小的矩形。 此值始终大于或等于 SM_CYMINIMIZED。 |
| **SM_CYMINTRACK**35                  | 窗口的最小跟踪高度（以像素为单位）。 用户无法将窗口框架拖动到小于这些尺寸的大小。 窗口可以通过处理 [WM_GETMINMAXINFO](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-getminmaxinfo) 消息来替代此值。 |
| **SM_CYSCREEN**1                     | 主显示器的屏幕高度（以像素为单位）。 这是通过调用 [GetDeviceCaps](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-getdevicecaps) 获取的相同值，如下所示： `GetDeviceCaps( hdcPrimaryMonitor, VERTRES)`。 |
| **SM_CYSIZE**31                      | 窗口中按钮的高度描述文字或标题栏（以像素为单位）。           |
| **SM_CYSIZEFRAME**33                 | 可调整大小的窗口周边的大小边框的粗细（以像素为单位）。 SM_CXSIZEFRAME是水平边框的宽度，SM_CYSIZEFRAME是垂直边框的高度。此值与 SM_CYFRAME 相同。 |
| **SM_CYSMCAPTION**51                 | 小描述文字的高度（以像素为单位）。                           |
| **SM_CYSMICON**50                    | 图标的系统小高度（以像素为单位）。 小图标通常显示在窗口标题和小图标视图中。 有关详细信息 [，请参阅图标大小](https://learn.microsoft.com/zh-cn/windows/win32/menurc/about-icons#icon-sizes) 。 |
| **SM_CYSMSIZE**53                    | 小描述文字按钮的高度（以像素为单位）。                       |
| **SM_CYVIRTUALSCREEN**79             | [虚拟屏幕](https://learn.microsoft.com/zh-cn/windows/win32/gdi/the-virtual-screen)的高度（以像素为单位）。 虚拟屏幕是所有显示监视器的边框。 SM_YVIRTUALSCREEN指标是虚拟屏幕顶部的坐标。 |
| **SM_CYVSCROLL**20                   | 垂直滚动条上箭头位图的高度（以像素为单位）。                 |
| **SM_CYVTHUMB**9                     | 垂直滚动条中拇指框的高度（以像素为单位）。                   |
| **SM_DBCSENABLED**42                 | 如果 User32.dll 支持 DBCS，则为非零值;否则为 0。             |
| **SM_DEBUG**22                       | 如果安装了 User.exe 的调试版本，则为非零;否则为 0。          |
| **SM_DIGITIZER**94                   | 如果当前操作系统是 Windows 7 或 Windows Server 2008 R2 并且平板电脑输入服务已启动，则为非零;否则为 0。 返回值是一个位掩码，用于指定设备支持的数字化器输入的类型。 有关详细信息，请参阅“备注”。**Windows Server 2008、Windows Vista 和 Windows XP/2000：** 不支持此值。 |
| **SM_IMMENABLED**82                  | 如果启用了输入法管理器/输入法编辑器功能，则为非零值;否则为 0。SM_IMMENABLED指示系统是否已准备好在 Unicode 应用程序上使用基于 Unicode 的输入法。 若要确保依赖于语言的 IME 正常工作，检查 SM_DBCSENABLED 和系统 ANSI 代码页。 否则，ANSI 到 Unicode 的转换可能无法正确执行，或者某些组件（如字体或注册表设置）可能不存在。 |
| **SM_MAXIMUMTOUCHES**95              | 如果系统中存在数字化器，则为非零;否则为 0。SM_MAXIMUMTOUCHES返回系统中每个数字化器支持的最大触点数的聚合最大值。 如果系统只有单点触控数字化器，则返回值为 1。 如果系统具有多点触控数字化器，则返回值是硬件可以提供的同时触点数。**Windows Server 2008、Windows Vista 和 Windows XP/2000：** 不支持此值。 |
| **SM_MEDIACENTER**87                 | 如果当前操作系统为 Windows XP Media Center Edition，则为非零值;否则为 0。 |
| **SM_MENUDROPALIGNMENT**40           | 如果下拉菜单与相应的菜单栏项右对齐，则为非零;如果菜单左对齐，则为 0。 |
| **SM_MIDEASTENABLED**74              | 如果为希伯来语和阿拉伯语启用系统，则为非零值;否则为 0。      |
| **SM_MOUSEPRESENT**19                | 如果安装了鼠标，则为非零;否则为 0。 此值很少为零，因为支持虚拟鼠标，并且某些系统检测到端口的存在，而不是鼠标的存在。 |
| **SM_MOUSEHORIZONTALWHEELPRESENT**91 | 如果安装了水平滚轮的鼠标，则为非零值;否则为 0。              |
| **SM_MOUSEWHEELPRESENT**75           | 如果安装了带垂直滚轮的鼠标，则为非零值;否则为 0。            |
| **SM_NETWORK**63                     | 如果存在网络，则设置最小有效位;否则，会将其清除。 其他位保留供将来使用。 |
| **SM_PENWINDOWS**41                  | 如果安装了 Microsoft Windows for Pen 计算扩展，则为非零;否则为零。 |
| **SM_REMOTECONTROL**0x2001           | 此系统指标在终端服务环境中用于确定当前终端服务器会话是否受到远程控制。 如果当前会话是远程控制的，则其值为非零值;否则为 0。可以使用终端服务管理工具（如终端服务管理器 (tsadmin.msc) 和 shadow.exe）来控制远程会话。 远程控制会话时，另一个用户可以查看该会话的内容，并可能与之交互。 |
| **SM_REMOTESESSION**0x1000           | 此系统指标在终端服务环境中使用。 如果调用进程与终端服务客户端会话相关联，则返回值为非零值。 如果调用进程与终端服务控制台会话相关联，则返回值为 0。 **Windows Server 2003 和 Windows XP：** 控制台会话不一定是物理主机。 有关详细信息，请参阅 [WTSGetActiveConsoleSessionId](https://learn.microsoft.com/zh-cn/windows/desktop/api/winbase/nf-winbase-wtsgetactiveconsolesessionid)。 |
| **SM_SAMEDISPLAYFORMAT**81           | 如果所有显示监视器具有相同的颜色格式，则为非零值，否则为 0。 两个显示器可以具有相同的位深度，但颜色格式不同。 例如，红色、绿色和蓝色像素可以使用不同的位数进行编码，或者这些位可以位于像素颜色值的不同位置。 |
| **SM_SECURE**44                      | 应忽略此系统指标;它始终返回 0。                              |
| **SM_SERVERR2**89                    | 如果系统为 Windows Server 2003 R2，则为内部版本号;否则为 0。 |
| **SM_SHOWSOUNDS**70                  | 如果用户要求应用程序在仅以有声形式呈现信息的情况下直观呈现信息，则为非零值;否则为 0。 |
| **SM_SHUTTINGDOWN**0x2000            | 如果当前会话正在关闭，则为非零值;否则为 0。**Windows 2000：** 不支持此值。 |
| **SM_SLOWMACHINE**73                 | 如果计算机具有低端 (慢速) 处理器，则为非零值;否则为 0。      |
| **SM_STARTER**88                     | 如果当前操作系统为 Windows 7 简易版 Edition、Windows Vista 入门版 或 Windows XP Starter Edition，则为非零值;否则为 0。 |
| **SM_SWAPBUTTON**23                  | 如果交换鼠标左右键的含义，则为非零值;否则为 0。              |
| **SM_SYSTEMDOCKED**0x2004            | 反映停靠模式的状态，0 表示未停靠模式，否则为非零。 当此系统指标发生更改时，系统会通过 LPARAM 中带有“SystemDockMode” [的WM_SETTINGCHANGE](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-settingchange) 发送广播消息。 |
| **SM_TABLETPC**86                    | 如果当前操作系统为 Windows XP Tablet PC 版本，或者当前操作系统为 Windows Vista 或 Windows 7 且平板电脑输入服务已启动，则为非零值;否则为 0。 SM_DIGITIZER设置指示运行 Windows 7 或 Windows Server 2008 R2 的设备支持的数字化器输入类型。 有关详细信息，请参阅“备注”。 |
| **SM_XVIRTUALSCREEN**76              | [虚拟屏幕](https://learn.microsoft.com/zh-cn/windows/win32/gdi/the-virtual-screen)左侧的坐标。 虚拟屏幕是所有显示监视器的边框。 SM_CXVIRTUALSCREEN指标是虚拟屏幕的宽度。 |
| **SM_YVIRTUALSCREEN**77              | [虚拟屏幕](https://learn.microsoft.com/zh-cn/windows/win32/gdi/the-virtual-screen)顶部的坐标。 虚拟屏幕是所有显示监视器的边框。 SM_CYVIRTUALSCREEN指标是虚拟屏幕的高度。 |



## 返回值

类型： **int**

如果函数成功，则返回值为请求的系统指标或配置设置。

如果函数失败，返回值为 0。 [GetLastError](https://learn.microsoft.com/zh-cn/windows/desktop/api/errhandlingapi/nf-errhandlingapi-getlasterror) 不提供扩展错误信息。



## 注解

系统指标可能因显示而异。

**GetSystemMetrics** (SM_CMONITORS) 计数仅显示可见的显示器。 这不同于 [EnumDisplayMonitors](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-enumdisplaymonitors)，后者同时枚举可见的显示监视器以及与镜像驱动程序关联的不可见伪监视器。 不可见的伪监视器与用于镜像应用程序绘图以进行远程处理或其他目的的伪设备相关联。

SM_ARRANGE设置指定系统如何排列最小化窗口，由起始位置和方向组成。 起始位置可以是以下值之一。

展开表

| 值              | 含义                                                      |
| :-------------- | :-------------------------------------------------------- |
| ARW_BOTTOMLEFT  | 从屏幕左下角开始。 默认位置。                             |
| ARW_BOTTOMRIGHT | 从屏幕右下角开始。 等效于 ARW_STARTRIGHT。                |
| ARW_TOPLEFT     | 从屏幕左上角开始。 等效于 ARW_STARTTOP。                  |
| ARW_TOPRIGHT    | 从屏幕右上角开始。 等效于 ARW_STARTTOP \|SRW_STARTRIGHT。 |

 

排列最小化窗口的方向可以是以下值之一。

展开表

| 值        | 含义                                                 |
| :-------- | :--------------------------------------------------- |
| ARW_DOWN  | 垂直排列，从上到下。                                 |
| ARW_HIDE  | 通过将最小化的窗口移出屏幕的可见区域来隐藏这些窗口。 |
| ARW_LEFT  | 从左到右水平排列。                                   |
| ARW_RIGHT | 从右到左水平排列。                                   |
| ARW_UP    | 垂直排列，从下到上。                                 |

 

SM_DIGITIZER设置指定在运行 Windows 7 或 Windows Server 2008 R2 的设备上安装的数字化器的类型。 返回值是指定以下一个或多个值的位掩码。

展开表

| 值                       | 含义                           |
| :----------------------- | :----------------------------- |
| NID_INTEGRATED_TOUCH0x01 | 该设备具有集成的触摸数字化器。 |
| NID_EXTERNAL_TOUCH0x02   | 设备具有外部触摸数字化器。     |
| NID_INTEGRATED_PEN0x04   | 该设备具有集成的笔数字化器。   |
| NID_EXTERNAL_PEN0x08     | 设备具有外部笔数字化器。       |
| NID_MULTI_INPUT0x40      | 设备支持多个数字化器输入源。   |
| NID_READY0x80            | 设备已准备好接收数字化器输入。 |

 

此 API 不可识别 DPI，如果调用线程按监视器感知 DPI，则不应使用此 API。 有关此 API 的 DPI 感知版本，请参阅 [GetSystemMetricsForDPI](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-getsystemmetricsfordpi)。 有关 DPI 感知的详细信息，请参阅 [Windows 高 DPI 文档。](https://learn.microsoft.com/zh-cn/windows/desktop/hidpi/high-dpi-desktop-application-development-on-windows)

#### 示例

以下示例使用 [GetSystemMetrics](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-getsystemmetrics) 函数确定是否安装了鼠标以及是否交换了鼠标按钮。 该示例还使用 [SystemParametersInfo](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-systemparametersinfoa) 函数检索鼠标阈值和速度。 它在控制台中显示信息。

```c++
#include <windows.h>
#include <stdio.h>
#pragma comment(lib, "user32.lib")

void main()
{
   BOOL fResult;
   int aMouseInfo[3];
 
   fResult = GetSystemMetrics(SM_MOUSEPRESENT); 
 
   if (fResult == 0) 
      printf("No mouse installed.\n"); 
   else 
   { 
      printf("Mouse installed.\n");

      // Determine whether the buttons are swapped. 

      fResult = GetSystemMetrics(SM_SWAPBUTTON); 
 
      if (fResult == 0) 
         printf("Buttons not swapped.\n"); 
      else printf("Buttons swapped.\n");
 
      // Get the mouse speed and the threshold values. 
 
      fResult = SystemParametersInfo(
         SPI_GETMOUSE,  // get mouse information 
         0,             // not used 
         &aMouseInfo,   // holds mouse information 
         0);            // not used 

      if( fResult )
      { 
         printf("Speed: %d\n", aMouseInfo[2]); 
         printf("Threshold (x,y): %d,%d\n", 
            aMouseInfo[0], aMouseInfo[1]); 
      }
   } 
} 
```

---

### 屏幕截图适用例 

**Strechblt** + **GetSysremMetrics**  可以像主播那样捕获

```c++
void CCADView::OnDraw(CDC* pDC)
{
	CCADDoc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;

	// TODO: 在此处为本机数据添加绘制代码
	CDC CDesk;
	CDesk.CreateDC(_T("DISPLAY"), NULL, NULL, NULL);   //创建DC
	CRect rc;
	GetClientRect(&rc);
	int CxScreen = GetSystemMetrics(SM_CXFULLSCREEN);  // 桌面x长度
	int CyScreen = GetSystemMetrics(SM_CYFULLSCREEN);  // 桌面y长度

	
	
	
	pDC->StretchBlt(0, 0, rc.Width(), rc.Height(), &CDesk,0,0,CxScreen,CyScreen,SRCCOPY);  //缩放
}
```

---

# END
