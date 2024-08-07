# 图形控件

我不能盯着一个页面不放 在创建个新的

> 

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
 	wndclass.hbrBackground = (HBRUSH)COLOR_WINDOW;
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
 	/* TCHAR szBuffer[0xFF] = {};
 	wsprintf(szBuffer, TEXT("Msg -> %x\r\n"), uMsg);
 	OutputDebugString(szBuffer); //输出 拦截下来的UINT uMSG */
 	switch (uMsg) {
 	case WM_CREATE:
 	{
 		MoveWindow(hwnd, 0, 0,500,500,FALSE);
 		CREATESTRUCT* Cs = (CREATESTRUCT*)lParam;
 		break;
 	}
 	
 	case WM_DESTROY:
 	{
 		PostQuitMessage(0);
 		return 0;
 		
 	}
 	case WM_SIZE:
 	{
 		TCHAR szBuffer[0xFF] = {};
 		wsprintf(szBuffer, TEXT("Msg -> %d,%d\r\n"), HIWORD(wParam), LOWORD(lParam));
 		OutputDebugString(szBuffer); //输出 拦截下来的UINT uMSG
 		break;
 	}
 	case WM_LBUTTONDOWN: 
 	{
 		TCHAR szBuffer[0xFF] = {};
 		wsprintf(szBuffer, TEXT("Msg Click -> %d,%d\r\n"), HIWORD(wParam), LOWORD(lParam));
 		OutputDebugString(szBuffer); //输出 拦截下来的UINT uMSG
 		break;
 	}
 	case WM_CHAR :
 	{
 		TCHAR szBuffer[0xFF] = {}; // 确保缓冲区足够大以容纳格式化的字符串  
 		wsprintf(szBuffer, TEXT("Msg KEY-> %d\r\n"), (TCHAR)wParam);  
 		OutputDebugString(szBuffer); // 输出拦截下来的字符  
 		break;
 	}
 	case WM_MOVE :
 	{
 		TCHAR szBuffer[0xFF] = {};
 		wsprintf(szBuffer, TEXT("Msg move -> %d,%d\r\n"), HIWORD(wParam), LOWORD(lParam));
 		OutputDebugString(szBuffer); //输出 拦截下来的UINT uMSG
 		break;
 	}
 	default:
 		return DefWindowProc(hwnd, uMsg, wParam, lParam); 
 }
 	
 	 
 	
 }
 ```



一次看个爽的版本 窗口过程的处理





###  控件类型

> **控件消息通知**

1. 按钮
2. 编辑控件
3. 列表框
4. 组合框
5. 状态栏



### 控件消息 

WM_COMMAND   _当用户从菜单中选择命令项(点击)、控件将通知消息发送到其父窗口或转换加速键时发送。_ 

wParam高字 低字 和lParam

| 消息源 | wParam（高字）     | wParam（低字）       | lParam         |
| :----- | :----------------- | :------------------- | :------------- |
| 菜单   | 0                  | 菜单标识符 (IDM_*)   | 0              |
| 加速器 | 1                  | 加速器标识符 (IDM_*) | 0              |
| 控件   | 控件定义的通知代码 | 控制标识符           | 控制窗口的句柄 |

WM_COMMAND 高级控件 列表视图 或者树视图 需要向父窗口发送复杂信息时候会使用此消息 此消息包含NMHDR结构体 包含了控件ID 通知码 窗口句柄

> 如果处理了返回值为0	

WM_NOTIFY

当事件发生或控件需要一些信息时，由公共控件发送到其父窗口。

- **作用**：当子控件内部发生某些特定事件（如选择改变、点击等）时，需要通知其父窗口进行相应的处理，这时就会使用WM_NOTIFY消息。
- **特点**：与其他消息不同，WM_NOTIFY允许用户自定义通知的内容，但传递消息的方式是统一的，程序处理起来非常规范、简洁。

- *wParam*

  发送消息的公共控件的标识符。 不保证此标识符是唯一的。 应用程序应使用 [**NMHDR**](https://learn.microsoft.com/zh-cn/windows/desktop/api/richedit/ns-richedit-nmhdr) 结构的 **hwndFrom** 或 **idFrom** 成员 (作为 *lParam* 参数传递) 来标识控件。

- *lParam*

  指向包含通知代码和其他信息的 [**NMHDR**](https://learn.microsoft.com/zh-cn/windows/desktop/api/richedit/ns-richedit-nmhdr) 结构的指针。 对于某些通知消息，此参数指向将 **NMHDR** 结构作为其第一个成员的较大结构。消息的目标必须是控件的父级的 **HWND** 。 可以使用 [**GetParent**](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-getparent) 获取此值，如以下示例所示，其中 *m_controlHwnd* 是控件本身的 **HWND** 。



### 控件基本概念

**概念**

- 控件类型 有按钮列表组合框编辑框滚动条等
- 控件属性 控件都有属性
- 消息传递 控件通过消息与父窗口通信 例如:点击按钮发送 WM_COMMAND消息

**创建**

* CreateWindow/CreateWindowEx 用于创建控件
* 控件ID :每个控件都有一个唯一的标识符 用于消息处理和控件识别
* 控件样式 控件演示决定了控件的外观和行为   如WS_VISOBLE使控件可见 WS_DISABLED

**样式属性**

* 消息映射: 在窗口过程中处理控制
* 消息参数: 消息参数提供了关于时间的详细信息 如哪个控件发送了消息
* 自定义消息处理: 可以为特定控件添加自定义处理逻辑



#### **按钮** 

按钮样式

* 推按钮 长得像MB_OK的确认
* 复选框 复选框允许用户在多个选项中进行选择 可以独立选中取消 选√那种 
* 单选按钮 :长得像 MB_YESNO

| 常数                   | 说明                                                         |
| :--------------------- | :----------------------------------------------------------- |
| **BS_3STATE**          | 创建一个与检查框相同的按钮，只不过该框可以灰显，也可以选中或清除。 使用灰色状态可显示未确定检查框的状态。 |
| **BS_AUTO3STATE**      | 创建一个与三状态检查框相同的按钮，不同之处在于该框会在用户选择它时更改其状态。 状态循环通过已检查、不确定和已清除。 |
| **BS_AUTOCHECKBOX**    | 创建一个与检查框相同的按钮，不同之处在于用户每次选择检查框时，检查状态会自动在选中和清除之间切换。 |
| **BS_AUTORADIOBUTTON** | 创建与单选按钮相同的按钮，但当用户选择按钮时，系统会自动将按钮的检查状态设置为选中，并自动将同一组中所有其他按钮的检查状态设置为已清除。 |
| **BS_BITMAP**          | 指定按钮显示位图。 请参阅“备注”部分，了解其与BS_ICON的交互。 |
| **BS_BOTTOM**          | 将文本放置在按钮矩形的底部。                                 |
| **BS_CENTER**          | 将按钮矩形中的文本水平居中。                                 |
| **BS_CHECKBOX**        | 创建包含文本的小型空检查框。 默认情况下，文本显示在检查框右侧。 若要在检查框左侧显示文本，请将此标志与BS_LEFTTEXT样式 (或与等效BS_RIGHTBUTTON样式) 合并。 |
| **BS_COMMANDLINK**     | 创建一个命令链接按钮，该按钮的行为类似于BS_PUSHBUTTON样式按钮，但命令链接按钮的左侧有一个绿色箭头，指向按钮文本。 可以通过将BCM_SETNOTE消息发送到按钮来设置按钮文本描述文字。 |
| **BS_DEFCOMMANDLINK**  | 创建一个命令链接按钮，该按钮的行为类似于BS_PUSHBUTTON样式按钮。 如果该按钮位于对话框中，则用户可以通过按 Enter 键来选择命令链接按钮，即使命令链接按钮没有输入焦点也是如此。 此样式可用于让用户快速选择最可能 (默认) 选项。 |
| **BS_DEFPUSHBUTTON**   | 创建一个推送按钮，该按钮的行为类似于BS_PUSHBUTTON样式按钮，但具有独特的外观。 如果该按钮位于对话框中，则用户可以通过按 Enter 键来选择该按钮，即使该按钮没有输入焦点也是如此。 此样式可用于让用户快速选择最可能 (默认) 选项。 |
| **BS_DEFSPLITBUTTON**  | 创建一个拆分按钮，该按钮的行为类似于BS_PUSHBUTTON样式按钮，但也具有独特的外观。 如果拆分按钮位于对话框中，则用户可以通过按 Enter 键来选择拆分按钮，即使拆分按钮没有输入焦点也是如此。 此样式可用于让用户快速选择最可能 (默认) 选项。 |
| **BS_GROUPBOX**        | 创建一个矩形，可在其中对其他控件进行分组。 与此样式关联的任何文本都显示在矩形的左上角。 |
| **BS_ICON**            | 指定按钮显示图标。 请参阅“备注”部分，了解其与BS_BITMAP的交互。 |
| **BS_FLAT**            | 指定按钮是二维的;它不使用默认着色来创建三维图像。            |
| **BS_LEFT**            | 使按钮矩形中的文本左对齐。 但是，如果按钮是没有BS_RIGHTBUTTON样式的检查框或单选按钮，则文本在检查框或单选按钮的右侧保持对齐。 |
| **BS_LEFTTEXT**        | 与单选按钮或检查框样式结合使用时，将文本放在单选按钮或检查框的左侧。 与BS_RIGHTBUTTON样式相同。 |
| **BS_MULTILINE**       | 如果文本字符串太长，因而无法在按钮矩形中单行显示，则分多行显示按钮文本。 |
| **BS_NOTIFY**          | 使按钮能够将 [BN_KILLFOCUS](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-killfocus) 和 [BN_SETFOCUS](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-setfocus) 通知代码发送到其父窗口。 请注意，无论按钮是否具有此样式，按钮都会发送 [BN_CLICKED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-clicked) 通知代码。 若要获取 [BN_DBLCLK](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-dblclk) 通知代码，按钮必须具有BS_RADIOBUTTON或BS_OWNERDRAW样式。 |
| **BS_OWNERDRAW**       | 创建所有者绘制的按钮。 当按钮的视觉方面发生更改时，所有者窗口会收到 [**WM_DRAWITEM**](https://learn.microsoft.com/zh-cn/windows/win32/controls/wm-drawitem) 消息。 不要将BS_OWNERDRAW样式与任何其他按钮样式组合在一起。 |
| **BS_PUSHBUTTON**      | 创建一个按钮，当用户选择该按钮时，该按钮会将 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息发布到所有者窗口。 |
| **BS_PUSHLIKE**        | 使按钮 (，例如检查框、三态检查框或单选按钮，) 看起来像一个按钮。 按钮在未按下或选中时看起来会引发，在按下或选中按钮时会凹陷。 |
| **BS_RADIOBUTTON**     | 创建包含文本的小圆圈。 默认情况下，文本显示在圆圈的右侧。 若要在圆的左侧显示文本，请将此标志与BS_LEFTTEXT样式 (或等效BS_RIGHTBUTTON样式) 组合。 将单选按钮用于相关但互斥选项组。 |
| **BS_RIGHT**           | 右对齐按钮矩形中的文本。 但是，如果按钮是没有BS_RIGHTBUTTON样式的检查框或单选按钮，则文本在检查框或单选按钮的右侧右对齐。 |
| **BS_RIGHTBUTTON**     | 将单选按钮的圆或检查框的正方形置于按钮矩形的右侧。 与BS_LEFTTEXT样式相同。 |
| **BS_SPLITBUTTON**     | 创建拆分按钮。 拆分按钮具有下拉箭头。                        |
| **BS_TEXT**            | 指定按钮显示文本。                                           |
| **BS_TOP**             | 将文本放置在按钮矩形的顶部。                                 |
| **BS_TYPEMASK**        | 请勿使用此样式。 在BS_* 样式位上使用 OR 运算符产生的复合样式位。 它可用于屏蔽给定位掩码中的有效BS_* 位。 请注意，这已过期，并且未正确包含所有有效样式。 因此，不应使用此样式。 |
| **BS_USERBUTTON**      | 已过时，提供此项是为了与 16 位版本的 Windows 保持兼容。 应用程序应改用 BS_OWNERDRAW。 |
| **BS_VCENTER**         | 将文本放置在按钮矩形) 的中间 (垂直放置。                     |

### 怎么创建

> 使用CreateWindow或者CreateWindowEx 函数创建按钮控件	ID的创建可以使用宏定义#difine 一个例如我现在定义ID_BUTTON_PUSH1

​	然后我设置个实例句柄 HISTANCE ghIstance

再INT WINAPI里面设置个 

ghIstance = hIstance 把这个hIstance参数赋给全局参数



这些都有了 就得检索一下了 使用getWindowLongPtr()

**getWindowLongPtr()含义**

检索有关指定窗口的信息。 该函数还会将指定偏移量的值检索到额外的窗口内存中。

**语法**

```c++
LONG_PTR GetWindowLongPtrA(
  [in] HWND hWnd,
  [in] int  nIndex
);
```

​	hwnd是窗口句柄和窗口所属的间接句柄 

类型： **int**

要检索的值的从零开始的偏移量。 有效值的范围是零到额外窗口内存的字节数，减去 **LONG_PTR**的大小。 若要检索任何其他值，请指定以下值之一。

展开表

| 值                    | 含义                                                         |
| :-------------------- | :----------------------------------------------------------- |
| **GWL_EXSTYLE**-20    | 检索 [扩展窗口样式](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/extended-window-styles)。 |
| **GWLP_HINSTANCE**-6  | 检索应用程序实例的句柄。                                     |
| **GWLP_HWNDPARENT**-8 | 检索父窗口的句柄（如果有）。                                 |
| **GWLP_ID**-12        | 检索窗口的标识符。                                           |
| **GWL_STYLE**-16      | 检索 [窗口样式](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/window-styles)。 |
| **GWLP_USERDATA**-21  | 检索与窗口关联的用户数据。 此数据供创建窗口的应用程序使用。 其值最初为零。 |
| **GWLP_WNDPROC**-4    | 检索指向窗口过程的指针，或表示指向窗口过程的指针的句柄。 必须使用 [CallWindowProc](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-callwindowproca) 函数调用窗口过程。 |

 

当 *hWnd* 参数标识对话框时，以下值也可用。

展开表

| 值                                                | 含义                                                         |
| :------------------------------------------------ | :----------------------------------------------------------- |
| **DWLP_DLGPROC**DWLP_MSGRESULT + sizeof (LRESULT) | 检索指向对话框过程的指针，或表示指向对话框过程的指针的句柄。 必须使用 [CallWindowProc](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-callwindowproca) 函数调用对话框过程。 |
| **DWLP_MSGRESULT**0                               | 检索在对话框过程中处理的消息的返回值。                       |
| **DWLP_USER**DWLP_DLGPROC + sizeof (DLGPROC)      | 检索应用程序专用的额外信息，例如句柄或指针。                 |

我还是喜欢设置全局变量 比较简单:)

在WM_CREATE 里添加按钮

```c+
HWND hButton= CreateWindow(
			TEXT("BUTTON"),
			TEXT("clickme"),
			WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON ,
			10,
			10,
			150,
			60,
			hwnd,
			(HMENU)ID_BUTTON_PUSH1,
			ghInstance,
			NULL, );
```

switch语句里面一定要添加 break 否则会有错误发生

在WN_COMMAND拦截ID 例如:ID_BUTTON_PUSH1,

用switch语句 注意一下lowword 的wparam 是识别id

```c++
case WM_COMMAND:
{
	switch (LOWORD(wParam))
	{
	case ID_BUTTON_PUSH1:
	{
		MessageBox(
			0, 0, 0, 0);
	}
		default:
		break;
	}
}
```

例子 识别到按按钮会自动弹错误的MessageBox

0 0 0 0 是错误消息的意思
