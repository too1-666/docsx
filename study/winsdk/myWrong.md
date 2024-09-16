---
typora-root-url: ..\..\public
---

# win 32 学习的 补充

**他只认识句柄**

我发现 visual 创建 win32 应用程序 应打开 win32 进行debug 

确保的项目是一个Windows GUI应用程序，而不是控制台应用程序。在Visual Studio中，可以在“项目属性”->“链接器”->“系统”->“子系统”中查看和更改设置为“Windows (/SUBSYSTEM:WINDOWS)”。

```c
#include <stdio.h>
int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow) //HINSTANCE 是句柄 第一个是当前实例 第二个是向下兼容旧版本 现在默认为NULL 去打开头文件WinBase里面都有
{
  
    MessageBox(NULL, TEXT( "the first 程序"), TEXT( "Hello World"), MB_OK); MB_OK其实是
    return 0;
}
我写的这个就是例子 TEXT加括号 而宽字符 L 不用加括号
    #include <stdio.h>
int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
  
    MessageBox(NULL, L"the first 程序", L "Hello World", MB_OK);
    return 0;
}
```

 _ In _ ,_In_opt _  属于批注

| 参数批注  | 作用含义                                                     |
| --------- | ------------------------------------------------------------ |
| _ In _    | 该参数是一个输入参数 在调用函数的时候该参数设置一个值 只读不可修改 |
| _Inout _  | 该参数是输出参数 函数返回后可以修改值                        |
| _Out _    | 该参数是输出参数 函数返回后会在该参数返回值                  |
| _Outptr _ | 该参数是输出参数 函数返回后返回一个指针值                    |

 MB_OK参数

### utype 按钮 MB

![](/winSDK/4B64AC0EB8DDCFDC78F1225C6479A621.jpg)

![](/winSDK/792460729FDB84090EF49EAC6D09A11B.jpg)

![](/winSDK/FA914E8ED90C16FB39A02DFD4E44CFB9.jpg)

返回值

![](/winSDK/5FED3B9303F468A2FD4F77202D28E3D5.jpg)

备注Windows 都是通过句柄识别

### 补充

编译->预处 理汇编编译连接

gcc -E 1.c -o 1.i -E是只进行预处理

gcc -S 1.c -o 1.s 只进行预处理和汇编

gcc -c 1.c -o 1.obj 编译了

一步 不需要添加任何参数 gcc 1.c -o 1.exe 

### 匈牙利命名法

- 前缀	类型	描述
- a	 Array	数组
- b		BOOL (int)
- by	Unsigned Char (Byte)	无符号字(字节)
- c	Char	字符(字节)
- cb	Count of bytes	字节数
- cr	Color reference value	颜色(参考)值
- cx	Count of x (Short)	x的集合(短整数)
- dw	DWORD(unsigned long)	双字(无符号长整数)
- f	Flags (usually multiple bit values)	标志(一般是有多位的数值)
- fn	Function	函数
- g_	global	全局的
- h	Handle	句柄
- i	Integer	整数
- l	Long	长整数
- lp	Long pointer	长指针
- m_	Data member of a class	一个类的数据成员
- n	Short int	短整数
- p	Pointer	指针
- s	String	字符串
- sz	Zero terminated String	以0结尾的字符串
- tm	Text metric	文本规则
- u	Unsigned int	无符号整数
- ul	Unsigned long (ULONG)	无符号长整数
- w	WORD (unsigned short)	无符号短整数
- x,y	x, y coordinates (short)	坐标值/短整数
- v	void	空
- 有关项目的全局变量用g_开始，类成员变量用m_，局部变量若函数较大则可考虑用l_用以显示说明其是局部变量。

- 前缀	类型	例子
- g_	全局变量	g_Servers
- C	类或者结构体	CDocument，CPrintInfo
- m_	成员变量	m_pDoc，m_nCustomers
- |VC常用前缀列表：

* 前缀	类型	描述	例子
* ch	char	8位字符	chGrade
* ch	TCHAR	16位UNICODE类型字符	chName
* b	BOOL	布尔变量	bEnabled
* n	int	整型（其大小由操作系统决定）	nLength
* n	UINT	无符号整型（其大小由操作系统决定）	nLength
* w	WORD	16位无符号整型	wPos
* l	LONG	32位有符号整型	lOffset
* dw	DWORD	32位无符号整型	dwRange
* p	*	Ambient memory model pointer 内存模块指针，指针变量	pDoc
* lp	FAR*	长指针	lpDoc
* lpsz	LPSTR	32位字符串指针	lpszName
* lpsz	LPCSTR	2位常量字符串指针	lpszName
* lpsz	LPCTSTR	32位UNICODE类型常量指针	lpszName
* h	handle	Windows对象句柄	hWnd

### 继续win窗口

```c
    #include <stdio.h>
int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
  
    MessageBox(NULL, L"the first 程序", L "Hello World", MB_OK | MB_ICONWARING); //这里可以再添加一个'|'再加个条件 现在添加了 感叹号图标
    
    return 0;
}
```

   TCHAR 可以检测TEXT 里面的字是不是Unicode 不是就是正常输出

是的话就是L##quote  就和我第一个写的一样  L "你好"

```c
#include <Windows.h>  
#include <stdio.h>
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
    TCHAR* szContent = TEXT("FIRST");//自动检测
    static TCHAR szCaption[] = TEXT("say hai");
        MessageBox(NULL, szContent, szCaption, MB_OKCANCEL | MB_ICONEXCLAMATION | MB_DEFBUTTON2);
    return 0;
}
```

类似于c里面的 wchar_t

> wcahr_t chr = L "你好"

> 还需要设置系统什么的setlocale(LC_ALL, "Chs")

> 输出也得是wprintf  (指的是c语言非windows开发)

```c++
#ifndef UNICODE  
#define UNICODE  
#endif // 如果未定义UNICODE，则定义它，以支持Unicode字符  

#include <windows.h> // 包含Windows API的头文件  

// 窗口过程函数的声明  
LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);

// WinMain函数的定义，是Windows程序的入口点  
int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE, PWSTR pCmdLine, int nCmdShow)
{
    // 定义窗口类名  
    const wchar_t CLASS_NAME[] = L"Sample Window Class";

    // 初始化窗口类结构体  
    WNDCLASS wc = { };

    // 设置窗口过程函数  
    wc.lpfnWndProc = WindowProc;
    // 设置实例句柄  
    wc.hInstance = hInstance;
    // 设置窗口类名  
    wc.lpszClassName = CLASS_NAME;

    // 注册窗口类  
    RegisterClass(&wc);

    // 创建窗口  
    HWND hwnd = CreateWindowEx(
        0,                              // 扩展样式（无）  
        CLASS_NAME,                     // 窗口类名  
        L"Learn to Program Windows",    // 窗口标题  
        WS_OVERLAPPEDWINDOW,            // 窗口样式  

        // 窗口位置和大小（使用默认值）  
        CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT, CW_USEDEFAULT,

        NULL,       // 无父窗口  
        NULL,       // 无菜单  
        hInstance,  // 实例句柄  
        NULL        // 窗口创建数据（无）  
    );

    // 如果窗口创建失败，则返回0  
    if (hwnd == NULL)
    {
        return 0;
    }

    // 显示窗口  
    ShowWindow(hwnd, nCmdShow);

    // 消息循环  
    MSG msg = { };
    while (GetMessage(&msg, NULL, 0, 0)) // 检索消息  
    {
        TranslateMessage(&msg); // 转换虚拟键消息为字符消息  
        DispatchMessage(&msg);  // 分发消息到窗口过程  
    }

    return 0; // 程序正常退出  
}

// 窗口过程函数的定义  
LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
    switch (uMsg) // 根据消息类型进行处理  
    {
    case WM_DESTROY: // 接收到销毁消息  
        PostQuitMessage(0); // 发送退出消息  
        return 0;

    case WM_PAINT: // 接收到绘制消息  
    {
        PAINTSTRUCT ps; // 绘制结构体，用于BeginPaint和EndPaint  
        HDC hdc = BeginPaint(hwnd, &ps); // 开始绘制过程  

        // 使用默认的背景色+1填充客户区  
        FillRect(hdc, &ps.rcPaint, (HBRUSH)(COLOR_WINDOW + 1));
        EndPaint(hwnd, &ps); // 结束绘制过程  
    }
    return 0;
    }

    // 默认处理消息  
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
} 
```

多看几遍



### 窗口拓展 WS

| 常量/值                                                      | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| **WS_EX_ACCEPTFILES**0x00000010L                             | 窗口接受拖放文件。                                           |
| **WS_EX_APPWINDOW**0x00040000L                               | 在顶级窗口可见时强行将其放在任务栏上。                       |
| **WS_EX_CLIENTEDGE**0x00000200L                              | 窗口有一个带有凹陷边缘的边框。                               |
| **WS_EX_COMPOSITED**0x02000000L                              | 使用双缓冲按从下到上绘制顺序绘制窗口的所有后代。 从下到上绘制顺序允许后代窗口具有半透明 (alpha) 和透明度 (颜色键) 效果，但前提是后代窗口还设置了WS_EX_TRANSPARENT位。 通过双重缓冲，可以在不闪烁的情况下绘制窗口及其后代。 如果窗口的 [类样式](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/about-window-classes) 为 **CS_OWNDC** 或 **CS_CLASSDC**，则无法使用此选项。 **Windows 2000：** 不支持此样式。 |
| **WS_EX_CONTEXTHELP**0x00000400L                             | 窗口的标题栏包含问号。 当用户单击该问号时，光标将变成带指针的问号。 如果用户随后单击子窗口，则子窗口将收到 [**WM_HELP**](https://learn.microsoft.com/zh-cn/windows/win32/shell/wm-help) 消息。 子窗口应将消息传递到父窗口过程，父窗口过程应使用 **HELP_WM_HELP** 命令调用 [**WinHelp**](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-winhelpa) 函数。 帮助应用程序显示一个弹出窗口，该窗口通常包含子窗口的帮助。 **WS_EX_CONTEXTHELP** 不能与 **WS_MAXIMIZEBOX** 或 **WS_MINIMIZEBOX** 样式一起使用。 |
| **WS_EX_CONTROLPARENT**0x00010000L                           | 窗口本身包含应参与对话框导航的子窗口。 如果指定了此样式，则执行导航操作（例如处理 TAB 键、箭头键或键盘助记键）时，对话管理器将递归为此窗口的子级。 |
| **WS_EX_DLGMODALFRAME**0x00000001L                           | 窗口有一个双边框：（可选）可以通过在 *dwStyle* 参数中指定**WS_CAPTION**样式来创建带有标题栏的窗口。 |
| **WS_EX_LAYERED**0x00080000                                  | 该窗口是一个[分层窗口](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/window-features)。 如果窗口的 [类样式](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/about-window-classes) 为 **CS_OWNDC** 或 **CS_CLASSDC**，则不能使用此样式。 **Windows 8：**顶级窗口和子窗口支持**WS_EX_LAYERED**样式。 以前的 Windows 版本仅支持 **顶级窗口WS_EX_LAYERED** 。 |
| **WS_EX_LAYOUTRTL**0x00400000L                               | 如果 shell 语言是希伯来语、阿拉伯语或其他支持阅读顺序对齐的语言，则窗口的水平原点位于右边缘。 增加水平值后向左。 |
| **WS_EX_LEFT**0x00000000L                                    | 窗口具有泛型左对齐属性。 这是默认设置。                      |
| **WS_EX_LEFTSCROLLBAR**0x00004000L                           | 如果 shell 语言是希伯来语、阿拉伯语或其他支持阅读顺序对齐的语言，则垂直滚动条 (（如果存在) ）位于工作区左侧。 对于其他语言，将忽略该样式。 |
| **WS_EX_LTRREADING**0x00000000L                              | 窗口文本使用从左到右的阅读顺序属性显示。 这是默认值。        |
| **WS_EX_MDICHILD**0x00000040L                                | 该窗口是 MDI 子窗口。                                        |
| **WS_EX_NOACTIVATE**0x08000000L                              | 用户单击时，使用此样式创建的顶级窗口不会成为前台窗口。 当用户最小化或关闭前台窗口时，系统不会将此窗口带到前台。 不应通过编程访问或通过键盘导航（如讲述人）激活窗口。 若要激活窗口，请使用 [**SetActiveWindow**](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-setactivewindow) 或 [**SetForegroundWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setforegroundwindow) 函数。 默认情况下，窗口不会显示在任务栏上。 若要强制窗口显示在任务栏上，请使用 **WS_EX_APPWINDOW** 样式。 |
| **WS_EX_NOINHERITLAYOUT**0x00100000L                         | 窗口不将其窗口布局传递给其子窗口。                           |
| **WS_EX_NOPARENTNOTIFY**0x00000004L                          | 使用此样式创建的子窗口在创建或销毁时不会将 [**WM_PARENTNOTIFY**](https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/inputmsg/wm-parentnotify) 消息发送到其父窗口。 |
| **WS_EX_NOREDIRECTIONBITMAP**0x00200000L                     | 窗口不会呈现到重定向图面。 这适用于没有可见内容或使用表面以外的机制提供其视觉对象的窗口。 |
| **WS_EX_OVERLAPPEDWINDOW**(WS_EX_WINDOWEDGE \|WS_EX_CLIENTEDGE) | 窗口是重叠的窗口。                                           |
| **WS_EX_PALETTEWINDOW**(WS_EX_WINDOWEDGE \|WS_EX_TOOLWINDOW \|WS_EX_TOPMOST) | 窗口是调色板窗口，它是一个无模式对话框，显示命令数组。       |
| **WS_EX_RIGHT**0x00001000L                                   | 窗口具有通用的“右对齐”属性。 这依赖于窗口类。 仅当 shell 语言是希伯来语、阿拉伯语或其他支持阅读顺序对齐的语言时，此样式才有效;否则，将忽略该样式。 对静态控件或编辑控件使用 **WS_EX_RIGHT** 样式的效果与分别使用 **SS_RIGHT** 或 **ES_RIGHT** 样式的效果相同。 将此样式用于按钮控件的效果与使用 **BS_RIGHT** 和 **BS_RIGHTBUTTON** 样式的效果相同。 |
| **WS_EX_RIGHTSCROLLBAR**0x00000000L                          | 如果) 位于工作区右侧，则垂直滚动条 (。 这是默认值。          |
| **WS_EX_RTLREADING**0x00002000L                              | 如果 shell 语言是希伯来语、阿拉伯语或其他支持阅读顺序对齐的语言，则使用从右到左的阅读顺序属性显示窗口文本。 对于其他语言，将忽略该样式。 |
| **WS_EX_STATICEDGE**0x00020000L                              | 窗口具有三维边框样式，旨在用于不接受用户输入的项。           |
| **WS_EX_TOOLWINDOW**0x00000080L                              | 该窗口旨在用作浮动工具栏。 工具窗口具有短于普通标题栏的标题栏和使用较小的字体绘制的窗口标题。 工具窗口不会显示在任务栏中，也不会显示在用户按 Alt+TAB 时显示的对话框中。 如果工具窗口具有系统菜单，则其图标不会显示在标题栏上。 但是，可以通过右键单击或键入 ALT+SPACE 来显示系统菜单。 |
| **WS_EX_TOPMOST**0x00000008L                                 | 窗口应放置在所有非最顶部窗口的上方，并且应保持在窗口上方，即使窗口已停用也是如此。 若要添加或删除此样式，请使用 [**SetWindowPos**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowpos) 函数。 |
| **WS_EX_TRANSPARENT**0x00000020L                             | 在绘制由同一线程) 创建的窗口下的同级 (之前，不应绘制窗口。 该窗口显示为透明，因为基础同级窗口的位已被绘制。 若要在不受这些限制的情况下实现透明度，请使用 [**SetWindowRgn**](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-setwindowrgn) 函数。 |
| **WS_EX_WINDOWEDGE**0x00000100L                              | 窗口的边框带有凸起的边缘。                                   |

### 窗口

| 常量名称                | 常量值                                                       | 说明                                                         |
| :---------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **WS_BORDER**           | 0x00800000L                                                  | 窗口具有细线边框                                             |
| **WS_CAPTION**          | 0x00C00000L                                                  | 窗口具有标题栏（包括 **WS_BORDER** 样式）。                  |
| WS_CHILD                | 0x40000000L                                                  | 窗口是子窗口。 具有此样式的窗口不能有菜单栏。 此样式不能与 **WS_POPUP** 样式一起使用。 |
| **WS_CHILDWINDOW**      | 0x40000000L                                                  | 与 **WS_CHILD** 样式相同。                                   |
| **WS_CLIPCHILDREN**     | 0x02000000L                                                  | 在父窗口内进行绘图时，不包括子窗口所占用的区域。 创建父窗口时使用此样式。 |
| **WS_CLIPSIBLINGS**     | 0x04000000L                                                  | 相对于彼此剪裁子窗口；也就是说，当特定子窗口收到 [**WM_PAINT**](https://learn.microsoft.com/zh-cn/windows/win32/gdi/wm-paint) 消息时，**WS_CLIPSIBLINGS** 样式会将所有其他重叠的子窗口剪裁出要更新的子窗口的区域。 如果 **未指定 WS_CLIPSIBLINGS** 并且子窗口重叠，则在子窗口的工作区内绘图时，有可能在相邻子窗口的工作区内绘图。 |
| WS_DISABLED             | 0x08000000L                                                  | 窗口最初处于禁用状态。 禁用的窗口无法接收用户的输入。 若要在创建窗口后更改此值，请使用 [**EnableWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enablewindow) 函数。 |
| **WS_DLGFRAME**         | 0x00400000L                                                  | 窗口的边框样式通常与对话框相同。 具有此样式的窗口不能有标题栏。 |
| WS_GROUP                | 0x00020000L                                                  | 窗口是一组控件中的第一个控件。 该组包含此第一个控件及其之后定义的所有控件，直到下一个具有 **WS_GROUP** 样式的控件。 每个组中的第一个控件通常具有 **WS_TABSTOP** 样式，以便用户可以从组移动到组。 随后，用户可以使用方向键将键盘焦点从组中的一个控件切换为组中的下一个控件。 您可以打开和关闭此样式以更改对话框导航。 若要在创建窗口后更改此样式，请使用 [**SetWindowLong**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowlonga) 函数。 |
| **WS_HSCROLL**          | 0x00100000L                                                  | 窗口具有水平滚动条。                                         |
| **WS_ICONIC**           | 0x20000000L                                                  | 窗口最初是最小化的。 与 **WS_MINIMIZE** 样式相同。           |
| **WS_MAXIMIZE**         | 0x01000000L                                                  | 窗口最初是最大化的。                                         |
| **WS_MAXIMIZEBOX**      | 0x00010000L                                                  | 窗口具有最大化按钮。 不能与 **WS_EX_CONTEXTHELP** 样式组合。 还必须指定 **WS_SYSMENU** 样式。 |
| **WS_MINIMIZE**         | 0x20000000L                                                  | 窗口最初是最小化的。 与 **WS_ICONIC** 样式相同。             |
| **WS_MINIMIZEBOX**      | 0x00020000L                                                  | 窗口具有最小化按钮。 不能与 **WS_EX_CONTEXTHELP** 样式组合。 还必须指定 **WS_SYSMENU** 样式。 |
| **WS_OVERLAPPED**       | 0x00000000L                                                  | 窗口是重叠的窗口。 重叠的窗口带有标题栏和边框。 与 **WS_TILED** 样式相同。 |
| **WS_OVERLAPPEDWINDOW** | (WS_OVERLAPPED \| WS_CAPTION \| WS_SYSMENU \| WS_THICKFRAME \| WS_MINIMIZEBOX \| WS_MAXIMIZEBOX) | 窗口是重叠的窗口。 与 **WS_TILEDWINDOW** 样式相同。          |
| **WS_POPUP**            | 0x80000000L                                                  | 窗口是弹出窗口。 此样式不能与 **WS_CHILD** 样式一起使用。    |
| **WS_POPUPWINDOW**      | (WS_POPUP \| WS_BORDER \| WS_SYSMENU)                        | 窗口是弹出窗口。 必须组合 **WS_CAPTION** 和 **WS_POPUPWINDOW** 样式以使窗口菜单可见。 |
| **WS_SIZEBOX**          | 0x00040000L                                                  | 窗口具有大小调整边框。 与 **WS_THICKFRAME** 样式相同。       |
| **WS_SYSMENU**          | 0x00080000L                                                  | 该窗口的标题栏上有一个窗口菜单。 还必须指定 **WS_CAPTION** 样式。 |
| WS_TABSTOP              | 0x00010000L                                                  | 窗口是一个控件，当用户按下 Tab 键时，该控件可以接收键盘焦点。 按下 Tab 键可将键盘焦点更改为具有 **WS_TABSTOP** 样式的下一个控件。 您可以打开和关闭此样式以更改对话框导航。 若要在创建窗口后更改此样式，请使用 [**SetWindowLong**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowlonga) 函数。 要使用户创建的窗口和无模式对话框能够使用制表位，请更改消息循环以调用 [**IsDialogMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isdialogmessagea) 函数。 |
| **WS_THICKFRAME**       | 0x00040000L                                                  | 窗口具有大小调整边框。 与 **WS_SIZEBOX** 样式相同。          |
| **WS_TILED**            | 0x00000000L                                                  | 窗口是重叠的窗口。 重叠的窗口带有标题栏和边框。 与 **WS_OVERLAPPED** 样式相同。 |
| **WS_TILEDWINDOW**      | (WS_OVERLAPPED \| WS_CAPTION \| WS_SYSMENU \| WS_THICKFRAME \| WS_MINIMIZEBOX \| WS_MAXIMIZEBOX) | 窗口是重叠的窗口。 与 **WS_OVERLAPPEDWINDOW** 样式相同。     |
| WS_VISIBLE              | 0x10000000L                                                  | 窗口最初可见。 可以使用 [**ShowWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showwindow) 或 [**SetWindowPos**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowpos) 函数打开和关闭此样式。 |
| **WS_VSCROLL**          | 0x00200000L                                                  | 窗口具有垂直滚动条。                                         |

### 窗口内容

```c
HWND WINAPI CreateWindow(
  _In_opt_  LPCTSTR lpClassName,    // 窗口类名称
  _In_opt_  LPCTSTR lpWindowName,   // 窗口标题
  _In_      DWORD dwStyle,          // 窗口风格，或称窗口格式
  _In_      int x,                  // 初始 x 坐标
  _In_      int y,                  // 初始 y 坐标
  _In_      int nWidth,             // 初始 x 方向尺寸
  _In_      int nHeight,            // 初始 y 方向尺寸
  _In_opt_  HWND hWndParent,        // 父窗口句柄
  _In_opt_  HMENU hMenu,            // 窗口菜单句柄
  _In_opt_  HINSTANCE hInstance,    // 程序实例句柄
  _In_opt_  LPVOID lpParam          // 创建参数
);
```

### 风格CS

| **类风格**         | **含义**                                                     |
| ------------------ | ------------------------------------------------------------ |
| CS_VREDRAW         | 移动或者调整窗口的高度（垂直方向）时，重绘整个窗口           |
| CS_HREDRAW         | 移动或者调整窗口的宽度（水平方向）时，重绘整个窗口           |
| CS_DBLCLKS         | 当用户光标在窗口内双击时，允许发送双击消息给窗口过程         |
| CS_OWNDC           | 给予每个窗口实例分配一个唯一的 DC（注意，尽管这样是很方便，但它必须慎重使用，因为每个 DC 大约要占 800 个字节的内存） |
| CS_CLASSDC         | 该窗口类的所有窗口实例都共享一个窗口类 DC                    |
| CS_PARENTDC        | 1. 将子窗口的裁剪区域设置到父窗口的 DC 中去，这样子窗口便可以在父窗口上绘制自身。（注意，这是子窗口从系统缓存中获取 DC，而不是使用父窗口的 DC。） 2. 指定该风格可以提高系统性能 |
| CS_NOCLOSE         | 禁止系统菜单的关闭选项                                       |
| CS_SAVEBITS        | 1. 以位图形式保存被该窗口遮挡的屏幕部分，当给窗口移动以后，系统便可以用该保存的位图恢复屏幕移动的相应部分，从而系统不用向被该窗口遮挡的窗口发送 WM_PAINT 消息 2. 该特性对于菜单类型的窗口比较合适，因为它通常是简短的显示一下之后便消失 3. 设置该特性将增加显示该窗口的时间，因为它通常要先分配保存位图的内存 |
| CS_BYTEALIGNCLIENT | 在字节边界上（在 x 方向上）定位窗口的用户区域的位置          |
| CS_BYTEALIGNWINDOW | 在字节边界上（在 x 方向上）定位窗口的位置                    |
| CS_GLOBALCLASS     | 1. 当调用 CreateWindow 或 CreateWindowEx 函数来创建窗口时允许它的 hInstance 参数和注册窗口类时传递给 RegisterClass 的 hInstance 参数不同 2. 如果不指定该风格，则这两个 hInstance 必须相同 |

### 各类的前缀

| **前缀** | **含义**                     |
| -------- | ---------------------------- |
| CS       | 类风格选项（ClassStyle）     |
| CW       | 创建窗口选项（CreateWindow） |
| DT       | 文本绘制选项（DrawText）     |
| IDI      | 图标的 ID 号（IDIcon）       |
| IDC      | 光标的 ID 号（IDCursor）     |
| MB       | 消息框选项（MessageBox）     |
| SND      | 声音选项（Sound）            |
| WM       | 窗口消息（WindowsMessage）   |
| WS       | 窗口风格（WindowStyles）     |

```c++
wndclass.cbSize = sizeof(WNDCLASSEX);
wndclass.style = NULL;
wndclass.lpfnWndProc = MainWindowProc; //回调函数
wndclass.cbClsExtra = NULL;//分配存储空间
wndclass.cbClsExtra = NULL; //分配存储空间
wndclass.hInstance = hInstance; //实例句柄赋给窗口
wndclass.hIcon = NULL; //icon 为null
wndclass.hCursor = NULL;
wndclass.hbrBackground = (HBRUSH)COLOR_WINDOW; //设置北京颜色
wndclass.hbrBackground = (HBRUSH)COLOR_WINDOW;
wndclass.lpszMenuName = NULL;
wndclass.lpszClassName = L"示例程序";
wndclass.hIconSm = NULL; 
if (!RegisterClassEx(&wndclass)) {
```

### 窗口拓展参数

```c++
HWND CreateWindowExA(
  [in]           DWORD     dwExStyle,
  [in, optional] LPCSTR    lpClassName,
  [in, optional] LPCSTR    lpWindowName,
  [in]           DWORD     dwStyle,
  [in]           int       X,
  [in]           int       Y,
  [in]           int       nWidth,
  [in]           int       nHeight,
  [in, optional] HWND      hWndParent,
  [in, optional] HMENU     hMenu,
  [in, optional] HINSTANCE hInstance,
  [in, optional] LPVOID    lpParam
);
```

## ShowWindow

```c++
BOOL ShowWindow(
HWND hwnd;
int  nCmdShow
)
```

### nCmdShow的可选参数 SW

| 值                                     | 含义                                                         |
| :------------------------------------- | :----------------------------------------------------------- |
| **SW_HIDE** 0                          | 隐藏窗口并激活另一个窗口。                                   |
| **SW_SHOWNORMAL** **SW_NORMAL** 1      | 激活并显示窗口。 如果窗口最小化、最大化或排列，系统会将其还原到其原始大小和位置。 应用程序应在首次显示窗口时指定此标志。 |
| **SW_SHOWMINIMIZED** 2                 | 激活窗口并将其显示为最小化窗口。                             |
| **SW_SHOWMAXIMIZED** **SW_MAXIMIZE** 3 | 激活窗口并显示最大化的窗口。                                 |
| **SW_SHOWNOACTIVATE** 4                | 以最近的大小和位置显示窗口。 此值类似于 **SW_SHOWNORMAL**，只是窗口未激活。 |
| **SW_SHOW** 5                          | 激活窗口并以当前大小和位置显示窗口。                         |
| **SW_MINIMIZE** 6                      | 最小化指定的窗口，并按 Z 顺序激活下一个顶级窗口。            |
| **SW_SHOWMINNOACTIVE** 7               | 将窗口显示为最小化窗口。 此值类似于 **SW_SHOWMINIMIZED**，但窗口未激活。 |
| **SW_SHOWNA** 8                        | 以当前大小和位置显示窗口。 此值类似于 **SW_SHOW**，只是窗口未激活。 |
| **SW_RESTORE** 9                       | 激活并显示窗口。 如果窗口最小化、最大化或排列，系统会将其还原到其原始大小和位置。 还原最小化窗口时，应用程序应指定此标志。 |
| **SW_SHOWDEFAULT** 10                  | 根据启动应用程序的程序传递给 [CreateProcess](https://learn.microsoft.com/zh-cn/windows/desktop/api/processthreadsapi/nf-processthreadsapi-createprocessa) 函数的 [STARTUPINFO](https://learn.microsoft.com/zh-cn/windows/desktop/api/processthreadsapi/ns-processthreadsapi-startupinfoa) 结构中指定的**SW_**值设置显示状态。 |
| **SW_FORCEMINIMIZE** 11                | 最小化窗口，即使拥有窗口的线程没有响应。 仅当最小化不同线程的窗口时，才应使用此标志。 |

#### 返回值

1是显示 0是不显示

###窗口更新

```c++
BOOL UpdateWindow(
  [in] HWND hWnd
);
```

成功返回非0





## BOOL GetMessage()

```c++
BOOL GetMessage(
  [out]          LPMSG lpMsg,
  [in, optional] HWND  hWnd,
  [in]           UINT  wMsgFilterMin,
  [in]           UINT  wMsgFilterMax
);
```

## 参数

```
[out] lpMsg
```

类型： **LPMSG**

指向 [MSG](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/ns-winuser-msg) 结构的指针，该结构从线程的消息队列接收消息信息。

```
[in, optional] hWnd
```

类型：**HWND**

要检索其消息的窗口的句柄。 窗口必须属于当前线程。

如果 *hWnd* 为 **NULL，GetMessage** 将检索属于当前线程的任何窗口的消息，以及当前线程的消息队列中 **hwnd** 值为 **NULL** 的任何消息， () 看到 [MSG](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/ns-winuser-msg) 结构。 因此，如果 hWnd 为 **NULL**，则同时处理窗口消息和线程消息。

如果 *hWnd* 为 -1，**则 GetMessage** 仅检索当前线程的消息队列中 **hwnd** 值为 **NULL** 的消息，即当 *hWnd* 参数为 **NULL**) 或 [PostThreadMessage](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-postthreadmessagea) 时，[PostMessage](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-postmessagea) (发布的线程消息。

```
[in] wMsgFilterMin
```

类型： **UINT**

要检索的最低消息值的整数值。 使用 **WM_KEYFIRST** (0x0100) 指定第一条键盘消息， **或使用WM_MOUSEFIRST** (0x0200) 指定第一条鼠标消息。

在此处和 *wMsgFilterMax* 中使用[WM_INPUT](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/wm-input)仅指定**WM_INPUT**消息。

如果 *wMsgFilterMin* 和 *wMsgFilterMax* 均为零， **则 GetMessage** 将返回所有可用消息 (即不) 执行范围筛选。

```
[in] wMsgFilterMax
```

类型： **UINT**

要检索的最高消息值的整数值。 使用 **WM_KEYLAST** 指定最后一条键盘消息， **WM_MOUSELAST** 指定最后一条鼠标消息。

在此处和 *wMsgFilterMin* 中使用[WM_INPUT](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/wm-input)，仅指定**WM_INPUT**消息。

如果 *wMsgFilterMin* 和 *wMsgFilterMax* 均为零， **则 GetMessage** 将返回所有可用消息 (即不) 执行范围筛选。

_转自微软官方_ 

> 设置的类名和 CreateWindowEx 的类名一致



# 补充

 我制作了个简易的方便观看

```c++
 #include <Windows.h>
 LRESULT CALLBACK MainWindowProc(HWND, UINT, WPARAM, LPARAM);
INT WINAPI WinMain (HINSTANCE hInstance,HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
{   // 注册窗口
	WNDCLASSEX wndclass = { 0 };
	wndclass.cbSize = sizeof(WNDCLASSEX);
	wndclass.style = NULL;
	wndclass.lpfnWndProc = MainWindowProc; //回调函数
	wndclass.cbClsExtra = NULL;//分配存储空间
	wndclass.cbClsExtra = NULL; //分配存储空间
	wndclass.hInstance = hInstance; //实例句柄赋给窗口
	wndclass.hIcon = NULL; //icon 为null
	wndclass.hCursor = NULL;
	wndclass.hbrBackground = (HBRUSH)COLOR_WINDOW; //设置北京颜色

	wndclass.lpszMenuName = NULL;
	wndclass.lpszClassName = L"示例程序";
	wndclass.hIconSm = NULL; 
	if (!RegisterClassEx(&wndclass)) {

		MessageBox(NULL, TEXT("失败"), TEXT("失败"), MB_OK);
		return 1;
	}
		HWND hwnd = CreateWindowEx(
		WS_EX_CLIENTEDGE,
		L"示例程序",
		L"计算器啊",
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
		ShowWindow(hwnd, SW_SHOWDEFAULT);
		UpdateWindow(hwnd);
		MSG msg = {};
		while (GetMessage(&msg, hwnd, 0, 0)) {
			TranslateMessage(&msg);//字符消息转换
			DispatchMessage(&msg);//消息调度窗口派发


		}
	
	return 0;
}

 


// 注册窗口 
 //创建窗口
//显示
//更新
//消息处理
/*窗口过程 句柄 标识 特定附加信息 *2 */
LRESULT CALLBACK MainWindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	TCHAR szBuffer[0xFF] = {};
	wsprintf(szBuffer, TEXT("Msg -> %x\r\n"), uMsg);
	OutputDebugString(szBuffer); //输出 拦截下来的UINT uMSG
	
	
	
	return DefWindowProc(hwnd, uMsg, wParam, lParam);
}
}
```

### 窗口通知快速跳转

[WM](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/window-notifications) 快速跳转点击即可进入
