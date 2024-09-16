# Windows_sdk 大汇总

> 持续更新

###  utype MB 的合集 (微软)

| 值                                  | 含义                                                         |
| :---------------------------------- | :----------------------------------------------------------- |
| **MB_ABORTRETRYIGNORE**0x00000002L  | 消息框包含三个按钮： **“中止**”、“ **重试”**和 **“忽略**”。  |
| **MB_CANCELTRYCONTINUE**0x00000006L | 消息框包含三个按钮： **取消**、 **重试**、 **继续**。 使用此消息框类型而不是MB_ABORTRETRYIGNORE。 |
| **MB_HELP**0x00004000L              | 向消息框添加 **“帮助** ”按钮。 当用户单击“ **帮助** ”按钮或按 F1 时，系统会向所有者发送 [WM_HELP](https://learn.microsoft.com/zh-cn/windows/desktop/shell/wm-help) 消息。 |
| **MB_OK**0x00000000L                | 消息框包含一个按钮： **“确定**”。 这是默认值。               |
| **MB_OKCANCEL**0x00000001L          | 消息框包含两个按钮： **“确定”** 和 **“取消**”。              |
| **MB_RETRYCANCEL**0x00000005L       | 消息框包含两个按钮： **重试** 和 **取消**。                  |
| **MB_YESNO**0x00000004L             | 消息框包含两个按钮： **“是** ”和“ **否**”。                  |
| **MB_YESNOCANCEL**0x00000003L       | 消息框包含三个按钮： **“是**”、“ **否”**和 **“取消**”。      |

 

若要在消息框中显示图标，请指定以下值之一。

展开表

| 值                                | 含义                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| **MB_ICONEXCLAMATION**0x00000030L | 消息框中会显示一个感叹号图标。                               |
| **MB_ICONWARNING**0x00000030L     | 消息框中会显示一个感叹号图标。                               |
| **MB_ICONINFORMATION**0x00000040L | 消息框中将显示一个由圆圈中的小写字母 *i* 组成的图标。        |
| **MB_ICONASTERISK**0x00000040L    | 消息框中将显示一个由圆圈中的小写字母 *i* 组成的图标。        |
| **MB_ICONQUESTION**0x00000020L    | 消息框中会显示一个问号图标。 不再建议使用问号消息图标，因为这种图标无法清楚地表示特定类型的消息，并且作为问题的消息表述可应用于任何消息类型。 此外，用户可能会将问号消息符号与帮助信息混淆。 因此，不要在消息框中使用问号消息符号。 系统继续支持它包含的内容，只为满足反向兼容性。 |
| **MB_ICONSTOP**0x00000010L        | 消息框中会显示一个停止符号图标。                             |
| **MB_ICONERROR**0x00000010L       | 消息框中会显示一个停止符号图标。                             |
| **MB_ICONHAND**0x00000010L        | 消息框中会显示一个停止符号图标。                             |

 

若要指示默认按钮，请指定以下值之一。

展开表

| 值                           | 含义                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| **MB_DEFBUTTON1**0x00000000L | 第一个按钮是默认按钮。**除非** 指定了 **MB_DEFBUTTON2**、 **MB_DEFBUTTON3**或MB_DEFBUTTON4，否则 **MB_DEFBUTTON1** 为默认值。 |
| **MB_DEFBUTTON2**0x00000100L | 第二个按钮是默认按钮。                                       |
| **MB_DEFBUTTON3**0x00000200L | 第三个按钮是默认按钮。                                       |
| **MB_DEFBUTTON4**0x00000300L | 第四个按钮是默认按钮。                                       |

 

若要指示对话框的形式，请指定以下值之一。

展开表

| 值                            | 含义                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| **MB_APPLMODAL**0x00000000L   | 用户必须先响应消息框，然后才能在 *由 hWnd* 参数标识的窗口中继续工作。 但是，用户可以移动到其他线程的窗口，并在这些窗口中工作。根据应用程序中窗口的层次结构，用户可能能够移动到线程中的其他窗口。 将自动禁用消息框父级的所有子窗口，但弹出窗口不会禁用。如果未指定**MB_SYSTEMMODAL**或**MB_TASKMODAL**，则**MB_APPLMODAL**为默认值。 |
| **MB_SYSTEMMODAL**0x00001000L | 与MB_APPLMODAL相同，只是消息框具有 **WS_EX_TOPMOST** 样式。 使用系统模式消息框通知用户严重、潜在的破坏性错误，这些错误需要立即关注 (例如内存不足) 。 除了与 *hWnd* 关联的窗口之外，此标志不会影响用户与窗口交互的能力。 |
| **MB_TASKMODAL**0x00002000L   | 与 **MB_APPLMODAL相同，** 但如果 *hWnd* 参数为 **NULL**，则禁用属于当前线程的所有顶级窗口。 当调用应用程序或库没有可用的窗口句柄，但仍需要阻止输入调用线程中的其他窗口而不挂起其他线程时，请使用此标志。 |

 

若要指定其他选项，请使用以下一个或多个值。

展开表

| 值                                     | 含义                                                         |
| :------------------------------------- | :----------------------------------------------------------- |
| **MB_DEFAULT_DESKTOP_ONLY**0x00020000L | 与交互式窗口工作站的桌面相同。 有关详细信息，请参阅 [窗口工作站](https://learn.microsoft.com/zh-cn/windows/desktop/winstation/window-stations)。如果当前输入桌面不是默认桌面，则在用户切换到默认桌面之前 **，MessageBox** 不会返回。 |
| **MB_RIGHT**0x00080000L                | 文本右对齐。                                                 |
| **MB_RTLREADING**0x00100000L           | 在希伯来语和阿拉伯语系统上使用从右到左的阅读顺序显示消息和描述文字文本。 |
| **MB_SETFOREGROUND**0x00010000L        | 消息框将成为前台窗口。 在内部，系统为消息框调用 [SetForegroundWindow](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-setforegroundwindow) 函数。 |
| **MB_TOPMOST**0x00040000L              | 使用 **WS_EX_TOPMOST** 窗口样式创建消息框。                  |
| **MB_SERVICE_NOTIFICATION**0x00200000L | 调用方是通知用户某个事件的服务。 函数在当前活动桌面上显示一个消息框，即使没有用户登录到计算机也是如此。**终端服务：** 如果调用线程具有模拟令牌，则函数会将消息框定向到模拟令牌中指定的会话。如果设置了此标志， *则 hWnd* 参数必须为 **NULL**。 这样，消息框就可以出现在与 *hWnd* 对应的桌面以外的桌面上。有关使用此标志的安全注意事项的信息，请参阅 [Interactive Services](https://learn.microsoft.com/zh-cn/windows/desktop/Services/interactive-services)。 具体而言，请注意，此标志可以在锁定的桌面上生成交互式内容，因此只应用于一组非常有限的方案，例如资源耗尽。 |



##  MessageBox返回值

类型： **int**

如果消息框有“**取消”**按钮，则如果按下 ESC 键或选择了“**取消**”按钮，函数将返回 **IDCANCEL** 值。 如果消息框没有 **“取消** ”按钮，则按 ESC 将不起作用 - 除非存在MB_OK按钮。 如果显示MB_OK按钮，并且用户按 ESC，则返回值为 **IDOK**。

如果函数失败，则返回值为零。 要获得更多的错误信息，请调用 GetLastError。

如果函数成功，则返回值为以下菜单项值之一。

展开表

| 返回代码/值      | 说明                     |
| :--------------- | :----------------------- |
| **IDABORT**3     | 已选择 **“中止** ”按钮。 |
| **IDCANCEL**2    | 已选择 **“取消** ”按钮。 |
| **IDCONTINUE**11 | 已选择“ **继续** ”按钮。 |
| **IDIGNORE**5    | 已选择 **“忽略** ”按钮。 |
| **IDNO**7        | 已选择 **“否** ”按钮。   |
| **IDOK**1        | 已选择 **“确定** ”按钮。 |
| **IDRETRY**4     | 已选择 **“重试** ”按钮。 |
| **IDTRYAGAIN**10 | 已选择“ **重试** ”按钮。 |
| **IDYES**6       | 已选择 **“是** ”按钮。   |

### Style 窗口风格 WS 和WS_EX 拓展

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
| **WS_EX_LAYERED**0x00080000                                  | 该窗口是一个[分层窗口](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/window-features)。 如果窗口的 [类样式](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/about-window-classes) 为 **CS_OWNDC** 或 **CS_CLASSDC**，则不能使用此样式。 **Windows 8：\**顶级窗口和子窗口支持\**WS_EX_LAYERED**样式。 以前的 Windows 版本仅支持 **顶级窗口WS_EX_LAYERED** 。 |
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
| **WS_EX_WINDOWEDGE**0x00000100L                              |                                                              |

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

### ### 类风格CS

### 

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
| **SW_FORCEMINIMIZE** 11                | 最小化窗口，即使拥有窗口的线程                               |

### 窗口通知快速跳转

[WM](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/window-notifications) 快速跳转点击即可进入

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

### 语法GWL_



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

#### **按钮消息**BCM

| 主题                                                         | 目录                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [**BCM_GETIDEALSIZE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-getidealsize) | 获取最适合文本和图像的按钮的大小（如果存在图像列表）。 可以显式发送此消息，也可以使用 [**Button_GetIdealSize**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_getidealsize) 宏发送。 |
| [**BCM_GETIMAGELIST**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-getimagelist) | 获取描述分配给按钮控件的图像列表的 [**BUTTON_IMAGELIST**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/ns-commctrl-button_imagelist) 结构。 可以显式发送此消息，也可以使用 [**Button_GetImageList**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_getimagelist) 宏发送。 |
| [**BCM_GETNOTE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-getnote) | 获取与命令链接按钮关联的注释的文本。 可以显式发送此消息，也可以使用 [**Button_GetNote**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_getnote) 宏发送。 |
| [**BCM_GETNOTELENGTH**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-getnotelength) | 获取可在命令链接按钮的说明中显示的注释文本的长度。 显式发送此消息，也可以使用 [Button_GetNoteLength](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_getnotelength) 宏发送。 |
| [**BCM_GETSPLITINFO**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-getsplitinfo) | 获取拆分按钮控件的信息。 显式发送此消息，也可以使用 [Button_GetSplitInfo](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_getsplitinfo) 宏发送。 |
| [**BCM_GETTEXTMARGIN**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-gettextmargin) | 获取用于在按钮控件中绘制文本的边距。 可以显式发送此消息，也可以使用 [**Button_GetTextMargin**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_gettextmargin) 宏发送。 |
| [**BCM_SETDROPDOWNSTATE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-setdropdownstate) | 使用 [**TBSTYLE_DROPDOWN**](https://learn.microsoft.com/zh-cn/windows/win32/controls/toolbar-control-and-button-styles) 样式设置按钮的下拉状态。 显式发送此消息，也可以使用 [Button_SetDropDownState](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_setdropdownstate) 宏发送。 |
| [**BCM_SETIMAGELIST**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-setimagelist) | 将图像列表分配给按钮控件。 可以显式发送此消息，也可以使用 [**Button_SetImageList**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_setimagelist) 宏发送。 |
| [**BCM_SETNOTE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-setnote) | 设置与命令链接按钮关联的注释的文本。 可以显式发送此消息，也可以使用 [**Button_SetNote**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_setnote) 宏发送。 |
| [**BCM_SETSHIELD**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-setshield) | 设置指定按钮或命令链接的提升所需状态以显示提升的图标。 显式发送此消息，也可以使用 [**Button_SetElevationRequiredState**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_setelevationrequiredstate) 宏发送。 |
| [**BCM_SETSPLITINFO**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-setsplitinfo) | 设置拆分按钮控件的信息。 显式发送此消息，也可以使用 [**Button_SetSplitInfo**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Commctrl/nf-commctrl-button_setsplitinfo) 宏发送。 |
| [**BCM_SETTEXTMARGIN**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-settextmargin) | [**BCM_SETTEXTMARGIN**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcm-settextmargin) 消息设置按钮控件中绘制文本的边距。 |
| [**BM_CLICK**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-click) | 模拟用户单击按钮。 此消息导致该按钮接收 [**WM_LBUTTONDOWN**](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/wm-lbuttondown) 和 [**WM_LBUTTONUP**](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/wm-lbuttonup) 消息，该按钮的父窗口接收 [BN_CLICKED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-clicked) 通知代码。 |
| [**BM_GETCHECK**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-getcheck) | 获取单选按钮或复选框的选中状态。 可以显式发送此消息，也可以使用 [**Button_GetCheck**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Windowsx/nf-windowsx-button_getcheck) 宏发送。 |
| [**BM_GETIMAGE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-getimage) | 检索与按钮关联的图像（图标或位图）的句柄。                   |
| [**BM_GETSTATE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-getstate) | 检索按钮或复选框的状态。 可以显式发送此消息，也可以使用 [**Button_GetState**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Windowsx/nf-windowsx-button_getstate) 宏发送。 |
| [**BM_SETCHECK**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-setcheck) | 设置单选按钮或复选框的选中状态。 可以显式发送此消息，也可以使用 [**Button_SetCheck**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Windowsx/nf-windowsx-button_setcheck) 宏发送。 |
| [**BM_SETDONTCLICK**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-setdontclick) | 在单选按钮上设置一个标志，用于在按钮接收焦点时控制 [BN_CLICKED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-clicked) 消息生成。 |
| [**BM_SETIMAGE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-setimage) | 将新图像（图标或位图）与按钮相关联。                         |
| [**BM_SETSTATE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-setstate) | 设置按钮的突出显示状态。 突出显示状态指示按钮是否突出显示，就像用户已按下按钮一样。 可以显式发送此消息，也可以使用 [**Button_SetState**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Windowsx/nf-windowsx-button_setstate) 宏发送。 |
| [**BM_SETSTYLE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/bm-setstyle) | 设置按钮的样式。 可以显式发送此消息，也可以使用 [**Button_SetStyle**](https://learn.microsoft.com/zh-cn/windows/desktop/api/Windowsx/nf-windowsx-button_setstyle) 宏发送。 |

_点击表格上的按钮消息即可查看返回值_

消息和消息队列的定义列表 豪华版

| 前缀                                 | 邮件类别             | 文档                                                         |
| :----------------------------------- | :------------------- | :----------------------------------------------------------- |
| **ABM** 和 **ABN**                   | 应用程序桌面工具栏   | [Shell 消息和通知](https://learn.microsoft.com/zh-cn/windows/desktop/shell/control-panel-applications) |
| **ACM** 和 **ACN**                   | 动画控件             | [动画控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-animation-control-reference-messages) 和 [动画控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-animation-control-reference-notifications) |
| **BCM**、 **BCN**、 **BM** 和 **BN** | Button 控件          | [按钮控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-button-control-reference-messages) 和 [按钮控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-button-control-reference-notifications) |
| **CB** 和 **CBN**                    | ComboBox 控件        | [ComboBox 控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-combobox-control-reference-messages) 和 [ComboBox 控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-combobox-control-reference-notifications) |
| **CBEM** 和 **CBEN**                 | ComboBoxEx 控件      | [ComboBoxEx 消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-comboboxex-control-reference-messages) 和 [ComboBoxEx 通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-comboboxex-control-reference-notifications) |
| **Ccm**                              | 常规控制             | [控制消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-general-control-reference-messages) |
| **CDM**                              | “通用”对话框         | [通用对话框消息](https://learn.microsoft.com/zh-cn/windows/desktop/dlgbox/common-dialog-box-messages) |
| **Dfm**                              | 默认上下文菜单       | [Shell 消息和通知](https://learn.microsoft.com/zh-cn/windows/desktop/shell/control-panel-applications) |
| **Dl**                               | 拖动列表框           | [拖动列表框通知](https://learn.microsoft.com/zh-cn/previous-versions//ff485914(v=vs.85)) |
| **DM**                               | 默认按钮控件         | [对话框消息](https://learn.microsoft.com/zh-cn/windows/desktop/dlgbox/dialog-box-messages) |
| **DTM** 和 **DTN**                   | 日期和时间选取器控件 | [日期和时间选取器消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-date-and-time-picker-control-reference-messages)[以及日期和时间选取器通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-date-and-time-picker-control-reference-notifications) |
| **EM** 和 **EN**                     | 编辑控件             | [编辑控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-edit-control-reference-messages)、 [编辑控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-edit-control-reference-notifications)、 [丰富编辑消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-rich-edit-control-reference-messages)和 [丰富编辑通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-rich-edit-control-reference-notifications) |
| **HDM** 和 **HDN**                   | 标头控件             | [标头控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-header-control-reference-messages) 和 [标头控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-header-control-reference-notifications) |
| **HKM**                              | 热键控制             | [热键控制消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-hot-key-control-reference-messages) |
| **IPM** 和 **IPN**                   | IP 地址控件          | [IP 地址消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-ip-address-control-reference-messages) 和 [IP 地址通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-ip-address-control-reference-notifications) |
| **LB** 和 **LBN**                    | 列表框控件           | [列出框消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-list-box-control-reference-messages) 和 [列表框通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-list-box-control-reference-notifications) |
| **LM**                               | SysLink 控件         | [SysLink 控制消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-syslink-control-reference-messages) |
| **LVM** 和 **LVN**                   | 列表视图控件         | [列表视图消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-list-view-control-reference-messages) 和 [列表视图通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-list-view-control-reference-notifications) |
| **MCM** 和 **MCN**                   | 月历控件             | [月历消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-month-calendar-control-reference-messages) 和 [月历通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-month-calendar-control-reference-notifications) |
| **PBM**                              | 进度条               | [进度栏消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-progress-bar-control-reference-messages) |
| **PGM** 和 **PGN**                   | Pager 控件           | [寻呼控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-pager-control-reference-messages) 和 [寻呼控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-pager-control-reference-notifications) |
| **PSM** 和 **PSN**                   | 属性表               | [属性表消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-property-sheets-reference-messages) 和 [属性表通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-property-sheets-reference-notifications) |
| **RB** 和 **RBN**                    | Rebar 控件           | [Rebar 控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-rebar-control-reference-messages) 和 [Rebar 控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-rebar-control-reference-notifications) |
| **SB** 和 **SBN**                    | 状态栏窗口           | [状态栏消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-status-bars-reference-messages) 和 [状态栏通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-status-bars-reference-notifications) |
| **SBM**                              | 滚动条控件           | [滚动条消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-scroll-bars-reference-messages) |
| **Smc**                              | Shell 菜单           | [Shell 消息和通知](https://learn.microsoft.com/zh-cn/windows/desktop/shell/control-panel-applications) |
| **STM** 和 **STN**                   | 静态控件             | [静态控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-static-control-reference-messages) 和 [静态控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-static-control-reference-notifications) |
| **TB** 和 **TBN**                    | 工具栏               | [工具栏控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-toolbar-control-reference-messages) 和 [工具栏控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-toolbar-control-reference-notifications) |
| **TBM** 和 **TRBN**                  | 跟踪条控件           | [跟踪条控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-trackbar-control-reference-messages) 和 [跟踪条控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-trackbar-control-reference-notifications) |
| **TCN**                              | Tab 控件             | [选项卡控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-tab-control-reference-messages) 和 [选项卡控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-tab-control-reference-notifications) |
| **TDM** 和 **TDN**                   | “任务”对话框         | [任务对话框消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-task-dialogs-reference-messages) 和 [任务对话框通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-task-dialogs-reference-notifications) |
| **TTM** 和 **TTN**                   | 工具提示控件         | [工具提示控件消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-tooltip-control-reference-messages) 和 [工具提示控件通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-tooltip-control-reference-notifications) |
| **TVM** 和 **TVN**                   | 树视图控件           | [树视图消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-tree-view-control-reference-messages) 和 [树视图通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-tree-view-control-reference-notifications) |
| **UDM** 和 **UDN**                   | 向上-向下控制        | [向上-向下消息](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-up-down-control-reference-messages) 和 [向上-向下通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-up-down-control-reference-notifications) |
| **Wm**                               | 常规                 | [剪贴板消息](https://learn.microsoft.com/zh-cn/windows/desktop/dataxchg/clipboard-messages),[剪贴板通知](https://learn.microsoft.com/zh-cn/windows/desktop/dataxchg/clipboard-notifications),[通用对话框通知](https://learn.microsoft.com/zh-cn/windows/desktop/dlgbox/common-dialog-box-notifications),[游标通知](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/cursor-notifications),[数据复制消息](https://learn.microsoft.com/zh-cn/windows/desktop/dataxchg/wm-copydata)[桌面窗口管理器消息](https://learn.microsoft.com/zh-cn/windows/desktop/dwm/dwm-messages),[设备管理消息](https://learn.microsoft.com/zh-cn/windows/desktop/DevIO/device-management-messages),[对话框通知](https://learn.microsoft.com/zh-cn/windows/desktop/dlgbox/dialog-box-notifications),[动态数据交换消息](https://learn.microsoft.com/zh-cn/windows/desktop/dataxchg/dynamic-data-exchange-messages),[动态数据交换通知](https://learn.microsoft.com/zh-cn/windows/desktop/dataxchg/dynamic-data-exchange-notifications),[挂钩通知](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/hook-notifications),[键盘快捷键消息](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/keyboard-accelerator-messages),[键盘快捷键通知](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/keyboard-accelerator-notifications),[键盘输入消息](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/keyboard-input-messages),[键盘输入通知](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/keyboard-input-notifications),[菜单通知](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/menu-notifications),[鼠标输入通知](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/mouse-input-notifications),[多个文档接口消息](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/multiple-document-interface-messages),[原始输入通知](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/raw-input-notifications),[滚动条通知](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/bumper-scroll-bars-reference-notifications),[计时器通知](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/timer-notifications),[窗口消息](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/window-messages),[窗口通知]( |

###  **按钮通知BN**

| 主题                                                         | 目录                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [BCN_DROPDOWN](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcn-dropdown) | 当用户单击按钮上的下拉箭头时发送。 控件的父窗口以 [**WM_NOTIFY**](https://learn.microsoft.com/zh-cn/windows/win32/controls/wm-notify) 消息的形式接收此通知代码。 |
| [BCN_HOTITEMCHANGE](https://learn.microsoft.com/zh-cn/windows/win32/controls/bcn-hotitemchange) | 通知按钮控件所有者鼠标正在进入或离开按钮控件的工作区。 该按钮控件会以 [**WM_NOTIFY**](https://learn.microsoft.com/zh-cn/windows/win32/controls/wm-notify) 消息的形式发送此通知代码。 |
| [BN_CLICKED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-clicked) | 当用户单击按钮时发送。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_CLICKED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-clicked) 通知代码。 |
| [BN_DBLCLK](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-dblclk) | 当用户双击按钮时发送。 此通知代码会自动为 [BS_USERBUTTON](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles)、[BS_RADIOBUTTON](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 和 [BS_OWNERDRAW](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 按钮发送。 仅当其他按钮类型具有 [**BS_NOTIFY**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 样式时，才会发送 [BN_DBLCLK](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-dblclk)。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_DBLCLK](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-dblclk) 通知代码。 |
| [BN_DISABLE](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-disable) | 禁用按钮时发送。 **注意：**此通知代码仅在与低于版本 3.0 的 16 位版本的 Windows 兼容时提供。 应用程序应为此任务使用 [**BS_OWNERDRAW**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 按钮样式和 [**DRAWITEMSTRUCT**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-drawitemstruct) 结构。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_DISABLE](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-disable) 通知代码。 |
| [BN_DOUBLECLICKED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-doubleclicked) | 当用户双击按钮时发送。 此通知代码会自动为 [**BS_USERBUTTON**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles)、[**BS_RADIOBUTTON**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 和 [**BS_OWNERDRAW**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 按钮发送。 仅当其他按钮类型具有 [**BS_NOTIFY**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 样式时，才会发送 [BN_DOUBLECLICKED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-doubleclicked)。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_DOUBLECLICKED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-doubleclicked) 通知代码。 |
| [BN_HILITE](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-hilite) | 当用户选择按钮时发送。 **注意：**此通知代码仅在与低于版本 3.0 的 16 位版本的 Windows 兼容时提供。 应用程序应为此任务使用 [**BS_OWNERDRAW**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 按钮样式和 [**DRAWITEMSTRUCT**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-drawitemstruct) 结构。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_HILITE](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-hilite) 通知代码。 |
| [BN_KILLFOCUS](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-killfocus) | 当按钮失去键盘焦点时发送。 该按钮必须具有 [BS_NOTIFY](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 样式才能发送此通知代码。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_KILLFOCUS](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-killfocus) 通知代码。 |
| [BN_PAINT](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-paint) | 在应该绘制按钮时发送。 **注意：**此通知代码仅在与低于版本 3.0 的 16 位版本的 Windows 兼容时提供。 应用程序应为此任务使用 [**BS_OWNERDRAW**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 按钮样式和 [**DRAWITEMSTRUCT**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-drawitemstruct) 结构。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_PAINT](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-paint) 通知代码。 |
| [BN_PUSHED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-pushed) | 当按钮的推送状态设置为已推送时发送。 **注意：**此通知代码仅在与低于版本 3.0 的 16 位版本的 Windows 兼容时提供。 应用程序应为此任务使用 [**BS_OWNERDRAW**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 按钮样式和 [**DRAWITEMSTRUCT**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-drawitemstruct) 结构。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_PUSHED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-pushed) 通知代码。 |
| [BN_SETFOCUS](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-setfocus) | 当按钮接收键盘焦点时发送。 该按钮必须具有 [**BS_NOTIFY**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 样式才能发送此通知代码。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_SETFOCUS](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-setfocus) 通知代码。 |
| [BN_UNHILITE](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-unhilite) | 当应从按钮中移除突出显示时发送。 **注意：**此通知代码仅在与低于版本 3.0 的 16 位版本的 Windows 兼容时提供。 应用程序应为此任务使用 [**BS_OWNERDRAW**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 按钮样式和 [**DRAWITEMSTRUCT**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-drawitemstruct) 结构。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_UNHILITE](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-unhilite) 通知代码。 |
| [BN_UNPUSHED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-unpushed) | 当按钮的推送状态设置为取消推送时发送。 **注意：**此通知代码仅在与低于版本 3.0 的 16 位版本的 Windows 兼容时提供。 应用程序应为此任务使用 [**BS_OWNERDRAW**](https://learn.microsoft.com/zh-cn/windows/win32/controls/button-styles) 按钮样式和 [**DRAWITEMSTRUCT**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-drawitemstruct) 结构。 该按钮的父窗口通过 [**WM_COMMAND**](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-command) 消息接收 [BN_UNPUSHED](https://learn.microsoft.com/zh-cn/windows/win32/controls/bn-unpushed) 通知代码。 |
| [NM_CUSTOMDRAW（按钮）](https://learn.microsoft.com/zh-cn/windows/win32/controls/nm-customdraw-button) | 通知按钮控件的父窗口按钮上的自定义绘图操作。 该按钮控件会以 [**WM_NOTIFY**](https://learn.microsoft.com/zh-cn/windows/win32/controls/wm-notify) 消息的形式发送此通知代码。 |
| [**WM_CTLCOLORBTN**](https://learn.microsoft.com/zh-cn/windows/win32/controls/wm-ctlcolorbtn) | 在绘制按钮之前，[**WM_CTLCOLORBTN**](https://learn.microsoft.com/zh-cn/windows/win32/controls/wm-ctlcolorbtn) 消息将发送到按钮的父窗口。 父窗口可以更改按钮的文本和背景色。 但是，只有所有者绘制的按钮响应处理此消息的父窗口。 |

---

### hbrBackground参数

0.COLOR_SCROLLBAR [0]：[滚动条](https://baike.baidu.com/item/滚动条/7166861?fromModule=lemma_inlink)。

1. COLOR_BACKGROUND [1]：windows桌面。

2. COLOR_ACTIVECAPTION [2]：活动窗口的标题。

3. COLOR_INACTIVECAPTION [3]:不活动窗口的标题。

4. COLOR_MENU [4]：菜单。

5. COLOR_WINDOW [5]：窗口背景；

6. COLOR_WINDOWFRAME [6]：窗框；

7. COLOR_MENUTEXT [7]：菜单正文；

8. COLOR_WINDOWTEXT [8]：窗口正文；

9. COLOR_CAPTIONTEXT [9]：窗口标题中的文字；

10. COLOR_ACTIVEBORDER [10]：活动窗口的边框；

11. COLOR_INACTIVEBORDER [11]：不[活动窗口](https://baike.baidu.com/item/活动窗口/7595526?fromModule=lemma_inlink)的边框；

12. COLOR_APPWORKSPACE [12]：MDI桌面的背景；

13. COLOR_HIGHLIGHT [13]：选定的项目背景；

14. COLOR_HIGHLIGHTTEXT [14]：选定的项目文字；

15. COLOR_BTNFACE [15]：按钮；

16. COLOR_BTNSHADOW [16]：按钮的3D阴影。

17. COLOR_GRAYTEXT [17]：灰色文字；如使用了抖动技术则为零；

18. COLOR_BTNTEXT [18]：按钮文字；

19. COLOR_INACTIVECAPTIONTEXT [19]：不活动窗口的文字；

20. COLOR_BTNHIGHLIGHT [20]：按钮的3D加亮区；

21. COLOR_3DDKSHADOW [21]：3D深阴影；

22. COLOR_3DLIGHT [22]：3D阴影化对象的浅色；

23. COLOR_INFOTEXT [23]：工具提示的文本色；

24. COLOR_INFOBK [24]：工具提示的背景色；

----

### IDC 游标光标

| 值                                         | 含义                                                         |
| :----------------------------------------- | :----------------------------------------------------------- |
| **IDC_ARROW** MAKEINTRESOURCE(32512)       | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_arrow.png) 正常选择 |
| **IDC_IBEAM** MAKEINTRESOURCE(32513)       | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_ibeam.png) 文本选择 |
| **IDC_WAIT** MAKEINTRESOURCE(32514)        | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_wait.png)忙碌 |
| **IDC_CROSS** MAKEINTRESOURCE(32515)       | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_cross.png) 精度选择 |
| **IDC_UPARROW** MAKEINTRESOURCE(32516)     | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_uparrow.png) 备用选择 |
| **IDC_SIZENWSE** MAKEINTRESOURCE(32642)    | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_sizenwse.png) 对角线调整大小 1 |
| **IDC_SIZENESW** MAKEINTRESOURCE(32643)    | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_sizenesw.png) 对角线调整大小 2 |
| **IDC_SIZEWE** MAKEINTRESOURCE(32644)      | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_sizewe.png) 水平调整大小 |
| **IDC_SIZENS** MAKEINTRESOURCE(32645)      | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_sizens.png) 垂直调整大小 |
| **IDC_SIZEALL** MAKEINTRESOURCE(32646)     | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_sizeall.png) 移动 |
| **IDC_NO** MAKEINTRESOURCE(32648)          | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_no.png) 不可用 |
| **IDC_HAND** MAKEINTRESOURCE(32649)        | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_hand.png) 链接选择 |
| **IDC_APPSTARTING** MAKEINTRESOURCE(32650) | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_appstarting.png) 在后台工作 |
| **IDC_HELP** MAKEINTRESOURCE(32651)        | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_help.png) 帮助选择 |
| **IDC_PIN** MAKEINTRESOURCE(32671)         | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_pin.png) 位置选择 |
| **IDC_PERSON** MAKEINTRESOURCE(32672)      | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idc_person.png) 人员选择 |

----

 IDI 系统图标

| 值                                          | 含义                                                         |
| :------------------------------------------ | :----------------------------------------------------------- |
| **IDI_APPLICATION** MAKEINTRESOURCE (32512) | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idi_application.png) 默认应用程序图标 |
| **IDI_ERROR** MAKEINTRESOURCE (32513)       | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idi_error.png) 错误图标 |
| **IDI_QUESTION** MAKEINTRESOURCE (32514)    | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idi_question.png) 问号图标 |
| **IDI_WARNING** MAKEINTRESOURCE (32515)     | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idi_warning.png) 警告图标 |
| **IDI_INFORMATION** MAKEINTRESOURCE (32516) | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idi_information.png) “信息”图标 |
| **IDI_WINLOGO** MAKEINTRESOURCE (32517)     | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idi_winlogo.png) Windows 徽标图标 |
| **IDI_SHIELD** MAKEINTRESOURCE (32518)      | ![img](https://learn.microsoft.com/zh-cn/windows/win32/menurc/images/idi_shield.png) 安全防护图标 |