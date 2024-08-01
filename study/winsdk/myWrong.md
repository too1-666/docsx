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

utype 

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

前缀	类型	描述
a	 Array	数组
b		BOOL (int)
by	Unsigned Char (Byte)	无符号字(字节)
c	Char	字符(字节)
cb	Count of bytes	字节数
cr	Color reference value	颜色(参考)值
cx	Count of x (Short)	x的集合(短整数)
dw	DWORD(unsigned long)	双字(无符号长整数)
f	Flags (usually multiple bit values)	标志(一般是有多位的数值)
fn	Function	函数
g_	global	全局的
h	Handle	句柄
i	Integer	整数
l	Long	长整数
lp	Long pointer	长指针
m_	Data member of a class	一个类的数据成员
n	Short int	短整数
p	Pointer	指针
s	String	字符串
sz	Zero terminated String	以0结尾的字符串
tm	Text metric	文本规则
u	Unsigned int	无符号整数
ul	Unsigned long (ULONG)	无符号长整数
w	WORD (unsigned short)	无符号短整数
x,y	x, y coordinates (short)	坐标值/短整数
v	void	空
有关项目的全局变量用g_开始，类成员变量用m_，局部变量若函数较大则可考虑用l_用以显示说明其是局部变量。


前缀	类型	例子
g_	全局变量	g_Servers
C	类或者结构体	CDocument，CPrintInfo
m_	成员变量	m_pDoc，m_nCustomers
|VC常用前缀列表：

前缀	类型	描述	例子
ch	char	8位字符	chGrade
ch	TCHAR	16位UNICODE类型字符	chName
b	BOOL	布尔变量	bEnabled
n	int	整型（其大小由操作系统决定）	nLength
n	UINT	无符号整型（其大小由操作系统决定）	nLength
w	WORD	16位无符号整型	wPos
l	LONG	32位有符号整型	lOffset
dw	DWORD	32位无符号整型	dwRange
p	*	Ambient memory model pointer 内存模块指针，指针变量	pDoc
lp	FAR*	长指针	lpDoc
lpsz	LPSTR	32位字符串指针	lpszName
lpsz	LPCSTR	2位常量字符串指针	lpszName
lpsz	LPCTSTR	32位UNICODE类型常量指针	lpszName
h	handle	Windows对象句柄	hWnd

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
