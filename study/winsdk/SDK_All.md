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

### WM_LBUTTONDOWN 

>  鼠标消息捕获

| 值                    | 含义                  |
| :-------------------- | :-------------------- |
| **MK_CONTROL**0x0008  | 按下了 CTRL 键。      |
| MK_LBUTTON0x0001      | 按下了鼠标左键。      |
| MK_MBUTTON0x0010      | 按下了鼠标中键。      |
| MK_RBUTTON0x0002      | 按下了鼠标右键。      |
| MK_SHIFT0x0004        | 按下了 SHIFT 键。     |
| **MK_XBUTTON1**0x0020 | 按下了第一个 X 按钮。 |
| **MK_XBUTTON2**0x0040 | 按下了第二个 X 按钮。 |

*lParam*

> 低序字指定光标的 x 坐标。 坐标相对于工作区的左上角。

>  高序字指定光标的 y 坐标。 坐标相对于工作区的左上角。

----

### 键盘API

| 名称                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [**ActivateKeyboardLayout**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-activatekeyboardlayout) | 设置调用线程或当前进程的输入区域设置标识符（以前称为键盘布局句柄）。 输入区域设置标识符指定区域设置以及键盘的物理布局。 |
| [BlockInput](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-blockinput) | 阻止键盘和鼠标输入事件到达应用程序。                         |
| [EnableWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enablewindow) | 启用或禁用指定窗口或控件的鼠标和键盘输入。 禁用输入时，窗口不会接收鼠标单击和按键等输入。 启用输入时，窗口会接收所有输入。 |
| [GetActiveWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getactivewindow) | 检索附加到调用线程消息队列中的活动窗口的句柄。               |
| [GetAsyncKeyState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getasynckeystate) | 确定调用函数时键是向上还是向下，以及上次调用 [GetAsyncKeyState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getasynckeystate) 后是否按下了该键。 |
| [GetFocus](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getfocus) | 如果窗口附加到调用线程的消息队列，则检索具有键盘焦点的窗口的句柄。 |
| [**GetKeyboardLayout**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayout) | 检索指定线程的活动输入区域设置标识符（以前称为键盘布局）。 如果 idThread 参数为零，则返回活动线程的输入区域设置标识符。 |
| [**GetKeyboardLayoutList**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutlist) | 检索与系统中的当前输入区域设置集相对应的输入区域设置标识符（以前称为键盘布局句柄）。 该函数将标识符复制到指定的缓冲区。 |
| [**GetKeyboardLayoutName**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutnamea) | 检索活动输入区域设置标识符的名称（以前称为键盘布局）。       |
| [GetKeyboardState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardstate) | 将 256 个虚拟密钥的状态复制到指定的缓冲区。                  |
| [GetKeyNameText](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeynametexta) | 检索表示键的名称的字符串。                                   |
| [**GetKeyState**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeystate) | 检索指定虚拟键的状态。 状态指定键是向上、向下还是切换（每次按键时交替打开、关闭）。 |
| [GetLastInputInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getlastinputinfo) | 检索最后一个输入事件的时间。                                 |
| [IsWindowEnabled](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindowenabled) | 确定是否针对鼠标和键盘输入启用指定的窗口。                   |
| [LoadKeyboardLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadkeyboardlayouta) | 将新的输入区域设置标识符（以前称为键盘布局）加载到系统中。 一次可以加载多个输入区域设置标识符，但每个进程一次只有一个处于活动状态。 加载多个输入区域设置标识符可以在它们之间快速切换。 |
| [**MapVirtualKey**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeya) | 将虚拟键代码转换为（映射到）扫描代码或字符值，或将扫描代码转换为虚拟键代码。 若要指定用于转换指定代码的键盘布局的句柄，请使用 [MapVirtualKeyEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeyexa) 函数。 |
| [MapVirtualKeyEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeyexa) | 将虚拟键代码映射到扫描代码或字符值，或将扫描代码转换为虚拟键代码。 该函数使用输入语言和输入区域设置标识符转换代码。 |
| [OemKeyScan](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-oemkeyscan) | 将 OEMASCII 代码 0 到 0x0FF 映射到 OEM 扫描代码和偏移状态。 该函数提供的信息允许程序通过模拟键盘输入将 OEM 文本发送到另一个程序。 |
| [RegisterHotKey](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerhotkey) | 定义系统范围内的热键。                                       |
| [**SendInput**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendinput) | 合成键击、鼠标动作和按钮单击。                               |
| [SetActiveWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setactivewindow) | 激活窗口。 窗口必须附加到调用线程的消息队列。                |
| [SetFocus](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setfocus) | 将键盘焦点设置为指定的窗口。 窗口必须附加到调用线程的消息队列。 |
| [SetKeyboardState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setkeyboardstate) | 将键盘键状态的 256 字节数组复制到调用线程的键盘输入状态表中。 这是由 [GetKeyboardState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardstate) 和 [GetKeyState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeystate) 函数访问的同一个表。 对此表所做的更改不会影响任何其他线程的键盘输入。 |
| [ToAscii](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-toascii) | 将指定的虚拟键代码和键盘状态转换为相应的一个或多个字符。 该函数使用输入语言和由键盘布局句柄标识的物理键盘布局转换代码。 若要指定用于转换指定代码的键盘布局的句柄，请使用 [ToAsciiEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-toasciiex) 函数。 |
| [ToAsciiEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-toasciiex) | 将指定的虚拟键代码和键盘状态转换为相应的一个或多个字符。 该函数使用输入语言和由输入区域设置标识符标识的物理键盘布局转换代码。 |
| [**ToUnicode**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tounicode) | 将指定的虚拟键代码和键盘状态转换为相应的一个或多个 Unicode 字符。 若要指定用于转换指定代码的键盘布局的句柄，请使用 [ToUnicodeEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tounicodeex) 函数。 |
| [ToUnicodeEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tounicodeex) | 将指定的虚拟键代码和键盘状态转换为相应的一个或多个 Unicode 字符。 |
| [UnloadKeyboardLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unloadkeyboardlayout) | 卸载输入区域设置标识符（以前称为键盘布局）。                 |
| [UnregisterHotKey](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterhotkey) | 释放以前由调用线程注册的热键。                               |
| [VkKeyScanEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-vkkeyscanexa) | 将字符转换为相应的虚拟键代码和偏移状态。 该函数使用输入语言和由输入区域设置标识符标识的物理键盘布局转换字符。 |

 [Windows](https://learn.microsoft.com/zh-cn/windows/) [应用](https://learn.microsoft.com/zh-cn/windows/apps/) [Win32](https://learn.microsoft.com/zh-cn/windows/win32/) [桌面技术](https://learn.microsoft.com/zh-cn/windows/win32/desktop-app-technologies) [桌面应用用户界面](https://learn.microsoft.com/zh-cn/windows/win32/windows-application-ui-development) [用户交互](https://learn.microsoft.com/zh-cn/windows/win32/user-interaction) [旧功能](https://learn.microsoft.com/zh-cn/windows/win32/legacy-user-interaction-features) [键盘和鼠标输入](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/user-input) 

[使用英语阅读](https://learn.microsoft.com/en-us/windows/win32/inputdev/keyboard-input)

<details class="popover popover-right add-item-popover" style="box-sizing: inherit; outline-color: inherit; display: inline-block; position: relative;"><summary class="button button-clear button-sm button-primary display-none display-inline-flex-tablet" data-list-type="collection" data-list-item-title="键盘输入 - Win32 apps | Microsoft Learn" data-list-item-url="/windows/win32/inputdev/keyboard-input" data-list-source="module" data-resource-type="" data-bi-name="add-to-list" aria-describedby="popover-content" aria-expanded="false" style="box-sizing: inherit; outline-color: inherit; display: inline-flex !important; cursor: pointer; user-select: none; min-height: 2.25em; appearance: none; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; font-size: 0.875rem; line-height: 1.5; position: relative; background-color: rgba(0, 0, 0, 0); color: var(--theme-primary-base); text-align: center; font-weight: 600; text-decoration: none; list-style: none;"><span class="icon margin-none" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; margin: 0px !important; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin-inline-end: 0.375em;"><span class="docon docon-circle-addition" style="box-sizing: inherit; outline-color: inherit; font-family: docons; font-size: inherit; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span><span class="collection-status is-visually-hidden" style="box-sizing: inherit; outline-color: inherit; clip: rect(1px, 1px, 1px, 1px); clip-path: inset(50%); height: 1px; width: 1px; overflow-wrap: normal; border: 0px; margin: -1px; padding: 0px; position: absolute; overflow: hidden;">保存</span></summary><div class="popover-content has-z-index-one" style="box-sizing: inherit; outline-color: inherit; z-index: 1060; width: 224px; border: 1px solid var(--theme-border); background-color: var(--theme-body-background); box-shadow: 0 6.4px 14.4px 0 var(--theme-box-shadow-medium),0 1.2px 3.6px 0 var(--theme-box-shadow-light); border-radius: 0.25rem; margin-block-start: 0.5rem; padding: 1rem; position: absolute; inset-inline-end: 0px;"><ul class="list-unstyled" style="box-sizing: inherit; outline-color: inherit; margin: 0px; padding: 0px; list-style: none;"><li style="box-sizing: inherit; outline-color: inherit; margin: 0px; padding: 0px; outline-style: initial; outline-width: 0px;"><button class="button button-clear button-sm button-primary" data-list-type="collection" data-list-item-title="键盘输入 - Win32 apps | Microsoft Learn" data-list-item-url="/windows/win32/inputdev/keyboard-input" data-bi-name="add-to-collections" data-pressed="false" title="将 键盘输入 - Win32 apps | Microsoft Learn 添加到集合" style="box-sizing: inherit; outline-color: inherit; margin: 0px; font-family: inherit; font-size: 0.875rem; line-height: 1.5; overflow: visible; text-transform: none; appearance: none; color: var(--theme-primary-base); background-color: rgba(0, 0, 0, 0); cursor: pointer; user-select: none; min-height: 2.25em; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; display: inline-flex; position: relative; text-align: center; font-weight: 600; text-decoration: none;"><span class="icon" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin-inline-end: 0.375em;"><span class="docon docon-circle-addition" style="box-sizing: inherit; outline-color: inherit; font-family: docons; font-size: inherit; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span><span class="collection-status" style="box-sizing: inherit; outline-color: inherit;"></span></button></li><li style="box-sizing: inherit; outline-color: inherit; margin: 0px; padding: 0px; outline-style: initial; outline-width: 0px;"><button class="button button-clear button-sm button-primary" data-list-type="plan" data-list-item-title="键盘输入 - Win32 apps | Microsoft Learn" data-list-item-url="/windows/win32/inputdev/keyboard-input" data-bi-name="add-to-plans" data-pressed="false" title="将 键盘输入 - Win32 apps | Microsoft Learn 添加到计划" style="box-sizing: inherit; outline-color: inherit; margin: 0px; font-family: inherit; font-size: 0.875rem; line-height: 1.5; overflow: visible; text-transform: none; appearance: none; color: var(--theme-primary-base); background-color: rgba(0, 0, 0, 0); cursor: pointer; user-select: none; min-height: 2.25em; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; display: inline-flex; position: relative; text-align: center; font-weight: 600; text-decoration: none;"><span class="icon" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin-inline-end: 0.375em;"><span class="docon docon-circle-addition" style="box-sizing: inherit; outline-color: inherit; font-family: docons; font-size: inherit; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span><span class="plan-status" style="box-sizing: inherit; outline-color: inherit;"></span></button></li></ul></div></details>

<details class="popover popover-right" id="article-header-page-actions-overflow" style="box-sizing: inherit; outline-color: inherit; display: inline-block; position: relative;"><summary class="justify-content-flex-start button button-clear button-sm button-primary" aria-label="更多操作" title="更多操作" style="box-sizing: inherit; outline-color: inherit; display: inline-flex; cursor: pointer; user-select: none; min-height: 2.25em; appearance: none; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; font-size: 0.875rem; line-height: 1.5; position: relative; background-color: rgba(0, 0, 0, 0); color: var(--theme-primary-base); text-align: center; font-weight: 600; text-decoration: none; list-style: none;"><span class="icon" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin: 0px;"><span class="docon docon-more-vertical" style="box-sizing: inherit; outline-color: inherit; font-family: docons; font-size: inherit; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span></summary><div class="popover-content padding-xs" style="box-sizing: inherit; outline-color: inherit; padding: 1rem; width: 224px; border: 1px solid var(--theme-border); background-color: var(--theme-body-background); box-shadow: 0 6.4px 14.4px 0 var(--theme-box-shadow-medium),0 1.2px 3.6px 0 var(--theme-box-shadow-light); z-index: 1060; border-radius: 0.25rem; margin-block-start: 0.5rem; position: absolute; inset-inline-end: 0px;"><div aria-hidden="true" class="margin-none" data-page-action-item="overflow-all" style="box-sizing: inherit; outline-color: inherit; margin: 0px !important;"></div><h4 class="font-size-sm padding-left-xxs" style="box-sizing: inherit; outline-color: inherit; margin: 0px; padding: 0px; font-size: 0.875rem !important; font-weight: 600; padding-inline-start: 0.5rem !important;"></h4><a class="button button-clear button-sm button-block has-inner-focus text-decoration-none justify-content-flex-start share-facebook" data-bi-name="facebook" data-page-action-item="overflow-all" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flearn.microsoft.com%2Fzh-cn%2Fwindows%2Fwin32%2Finputdev%2Fkeyboard-input%3FWT.mc_id%3Dfacebook" style="box-sizing: inherit; outline-color: inherit; color: currentcolor; cursor: pointer; overflow-wrap: break-word; text-decoration: none; background-color: rgba(0, 0, 0, 0); outline-style: initial; outline-width: 0px; user-select: none; min-height: 2.25em; appearance: none; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; font-size: 0.875rem; line-height: 1.5; display: flex; position: relative; text-align: center; font-weight: 600; width: 190.4px;"><span class="icon" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin-inline-end: 0.375em;"><span class="docon docon-facebook-share font-size-md color-primary" style="box-sizing: inherit; outline-color: inherit; color: var(--theme-primary-base) !important; font-size: inherit; font-family: docons; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span><span class="margin-left-xxs" style="box-sizing: inherit; outline-color: inherit; margin-inline-start: 0.5rem !important;"></span></a><a class="button button-clear button-sm has-inner-focus button-block text-decoration-none justify-content-flex-start share-twitter" data-bi-name="twitter" data-page-action-item="overflow-all" href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Flearn.microsoft.com%2Fzh-cn%2Fwindows%2Fwin32%2Finputdev%2Fkeyboard-input%3FWT.mc_id%3Dtwitter&amp;text=%E4%BB%8A%E5%A4%A9%E6%88%91%E5%AE%8C%E6%88%90%E4%BA%86%20%22%E9%94%AE%E7%9B%98%E8%BE%93%E5%85%A5%20-%20Win32%20apps%20%7C%20Microsoft%20Learn%22%EF%BC%81%20%E6%88%91%E5%BE%88%E8%87%AA%E8%B1%AA%E8%83%BD%E5%A4%9F%E5%BA%86%E7%A5%9D%E8%BF%99%E4%B8%80%E6%88%90%E5%B0%B1%EF%BC%8C%E5%B9%B6%E5%B8%8C%E6%9C%9B%E8%BF%99%E8%83%BD%E6%BF%80%E5%8A%B1%E4%BD%A0%E5%BC%80%E5%A7%8B%E8%87%AA%E5%B7%B1%E7%9A%84%20%40MicrosoftLearn%20%E6%97%85%E7%A8%8B%EF%BC%81&amp;tw_p=tweetbutton&amp;url=https%3A%2F%2Flearn.microsoft.com%2Fzh-cn%2Fwindows%2Fwin32%2Finputdev%2Fkeyboard-input%3FWT.mc_id%3Dtwitter" style="box-sizing: inherit; outline-color: inherit; color: currentcolor; cursor: pointer; overflow-wrap: break-word; text-decoration: none; background-color: rgba(0, 0, 0, 0); outline-style: initial; outline-width: 0px; user-select: none; min-height: 2.25em; appearance: none; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; font-size: 0.875rem; line-height: 1.5; display: flex; position: relative; text-align: center; font-weight: 600; width: 190.4px;"><span class="icon" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin-inline-end: 0.375em;"><span class="docon docon-xlogo-share font-size-xxs" style="box-sizing: inherit; outline-color: inherit; font-family: docons; font-size: inherit; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span><span class="margin-left-xxs" style="box-sizing: inherit; outline-color: inherit; margin-inline-start: 0.5rem !important;"></span></a><a class="button button-clear button-sm has-inner-focus button-block text-decoration-none justify-content-flex-start share-linkedin" data-bi-name="linkedin" data-page-action-item="overflow-all" href="https://www.linkedin.com/feed/?shareActive=true&amp;text=%E4%BB%8A%E5%A4%A9%E6%88%91%E5%AE%8C%E6%88%90%E4%BA%86%20%22%E9%94%AE%E7%9B%98%E8%BE%93%E5%85%A5%20-%20Win32%20apps%20%7C%20Microsoft%20Learn%22%EF%BC%81%20%E6%88%91%E5%BE%88%E8%87%AA%E8%B1%AA%E8%83%BD%E5%A4%9F%E5%BA%86%E7%A5%9D%E8%BF%99%E4%B8%80%E6%88%90%E5%B0%B1%EF%BC%8C%E5%B9%B6%E5%B8%8C%E6%9C%9B%E8%BF%99%E8%83%BD%E6%BF%80%E5%8A%B1%E4%BD%A0%E5%BC%80%E5%A7%8B%E8%87%AA%E5%B7%B1%E7%9A%84%20%40MicrosoftLearn%20%E6%97%85%E7%A8%8B%EF%BC%81%0A%0D%0Ahttps%3A%2F%2Flearn.microsoft.com%2Fzh-cn%2Fwindows%2Fwin32%2Finputdev%2Fkeyboard-input%3FWT.mc_id%3Dlinkedin" style="box-sizing: inherit; outline-color: inherit; color: currentcolor; cursor: pointer; overflow-wrap: break-word; text-decoration: none; background-color: rgba(0, 0, 0, 0); outline-style: initial; outline-width: 0px; user-select: none; min-height: 2.25em; appearance: none; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; font-size: 0.875rem; line-height: 1.5; display: flex; position: relative; text-align: center; font-weight: 600; width: 190.4px;"><span class="icon" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin-inline-end: 0.375em;"><span class="docon docon-linked-in-logo font-size-sm color-primary" style="box-sizing: inherit; outline-color: inherit; color: var(--theme-primary-base) !important; font-size: inherit; font-family: docons; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span><span class="margin-left-xxs" style="box-sizing: inherit; outline-color: inherit; margin-inline-start: 0.5rem !important;"></span></a><a class="button button-clear button-sm button-block has-inner-focus text-decoration-none justify-content-flex-start margin-bottom-xxs share-email" data-bi-name="email" data-page-action-item="overflow-all" href="mailto:?subject=%5B%E5%85%B1%E4%BA%AB%E6%96%87%E7%AB%A0%5D%20%E9%94%AE%E7%9B%98%E8%BE%93%E5%85%A5%20-%20Win32%20apps%20%7C%20Microsoft%20Learn&amp;body=%E4%BB%8A%E5%A4%A9%E6%88%91%E5%AE%8C%E6%88%90%E4%BA%86%20%22%E9%94%AE%E7%9B%98%E8%BE%93%E5%85%A5%20-%20Win32%20apps%20%7C%20Microsoft%20Learn%22%EF%BC%81%20%E6%88%91%E5%BE%88%E8%87%AA%E8%B1%AA%E8%83%BD%E5%A4%9F%E5%BA%86%E7%A5%9D%E8%BF%99%E4%B8%80%E6%88%90%E5%B0%B1%EF%BC%8C%E5%B9%B6%E5%B8%8C%E6%9C%9B%E8%BF%99%E8%83%BD%E6%BF%80%E5%8A%B1%E4%BD%A0%E5%BC%80%E5%A7%8B%E8%87%AA%E5%B7%B1%E7%9A%84%20%40MicrosoftLearn%20%E6%97%85%E7%A8%8B%EF%BC%81%0A%0D%0Ahttps%3A%2F%2Flearn.microsoft.com%2Fzh-cn%2Fwindows%2Fwin32%2Finputdev%2Fkeyboard-input%3FWT.mc_id%3Demail" style="box-sizing: inherit; outline-color: inherit; color: currentcolor; cursor: pointer; overflow-wrap: break-word; text-decoration: none; background-color: rgba(0, 0, 0, 0); outline-style: initial; outline-width: 0px; user-select: none; min-height: 2.25em; appearance: none; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; font-size: 0.875rem; line-height: 1.5; display: flex; position: relative; margin-block-end: 0.5rem !important; text-align: center; font-weight: 600; width: 190.4px;"><span class="icon" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin-inline-end: 0.375em;"><span class="docon docon-mail-message font-size-sm color-primary" style="box-sizing: inherit; outline-color: inherit; color: var(--theme-primary-base) !important; font-size: inherit; font-family: docons; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span><span class="margin-left-xxs" style="box-sizing: inherit; outline-color: inherit; margin-inline-start: 0.5rem !important;"></span></a><hr style="box-sizing: inherit; outline-color: inherit; height: 0px; overflow: visible; margin: 0px; padding: 0px; border-style: solid; border-width: 1px 0px 0px; border-color: var(--theme-border);"><button class="button button-block button-clear button-sm justify-content-flex-start has-inner-focus margin-top-xxs" title="打印" type="button" aria-label="打印" data-bi-name="print" data-page-action-item="overflow-all" data-popover-close="" data-print-page="" data-check-hidden="true" style="box-sizing: inherit; outline-color: inherit; margin: 0px; font-family: inherit; font-size: 0.875rem; line-height: 1.5; overflow: visible; text-transform: none; appearance: button; color: currentcolor; background-color: rgba(0, 0, 0, 0); cursor: pointer; user-select: none; min-height: 2.25em; box-shadow: none; vertical-align: top; border: 1px solid rgba(0, 0, 0, 0); border-radius: 0.25rem; justify-content: center; align-items: center; padding-block: calc(0.375em - 1px); padding-inline: 0.75em; display: flex; position: relative; margin-block-start: 0.5rem !important; text-align: center; font-weight: 600; text-decoration: none; width: 190.4px;"><span class="icon" aria-hidden="true" style="box-sizing: inherit; outline-color: inherit; justify-content: center; align-items: center; display: inline-flex; width: 1em; height: 1em; font-size: 0.875em; margin-inline-end: 0.375em;"><span class="docon docon-print font-size-sm color-primary" style="box-sizing: inherit; outline-color: inherit; color: var(--theme-primary-base) !important; font-size: inherit; font-family: docons; speak: none; font-variant: normal; text-transform: none; text-align: center; direction: ltr; -webkit-font-smoothing: antialiased; font-style: normal; font-weight: 400; line-height: 16px; display: inline-block;"></span></span><span class="margin-left-xxs" style="box-sizing: inherit; outline-color: inherit; margin-inline-start: 0.5rem !important;"></span></button></div></details>

# 键盘输入

- 项目
- 2024/02/06
- 6 个参与者

反馈

本文内容[本节内容](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/keyboard-input#in-this-section)[另请参阅](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/keyboard-input#see-also)

本部分介绍系统如何生成键盘输入，以及应用程序如何接收和处理该输入。



## 本节内容

展开表

| 名称                                                         | 描述                       |
| :----------------------------------------------------------- | :------------------------- |
| [关于键盘输入](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/about-keyboard-input) | 讨论键盘输入。             |
| [使用键盘输入](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/using-keyboard-input) | 涵盖与键盘输入关联的任务。 |
| [键盘输入引用](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/keyboard-input-reference) | 包含 API 引用。            |



### 函数

展开表

| 名称                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [**ActivateKeyboardLayout**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-activatekeyboardlayout) | 设置调用线程或当前进程的输入区域设置标识符（以前称为键盘布局句柄）。 输入区域设置标识符指定区域设置以及键盘的物理布局。 |
| [BlockInput](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-blockinput) | 阻止键盘和鼠标输入事件到达应用程序。                         |
| [EnableWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enablewindow) | 启用或禁用指定窗口或控件的鼠标和键盘输入。 禁用输入时，窗口不会接收鼠标单击和按键等输入。 启用输入时，窗口会接收所有输入。 |
| [GetActiveWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getactivewindow) | 检索附加到调用线程消息队列中的活动窗口的句柄。               |
| [GetAsyncKeyState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getasynckeystate) | 确定调用函数时键是向上还是向下，以及上次调用 [GetAsyncKeyState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getasynckeystate) 后是否按下了该键。 |
| [GetFocus](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getfocus) | 如果窗口附加到调用线程的消息队列，则检索具有键盘焦点的窗口的句柄。 |
| [**GetKeyboardLayout**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayout) | 检索指定线程的活动输入区域设置标识符（以前称为键盘布局）。 如果 idThread 参数为零，则返回活动线程的输入区域设置标识符。 |
| [**GetKeyboardLayoutList**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutlist) | 检索与系统中的当前输入区域设置集相对应的输入区域设置标识符（以前称为键盘布局句柄）。 该函数将标识符复制到指定的缓冲区。 |
| [**GetKeyboardLayoutName**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutnamea) | 检索活动输入区域设置标识符的名称（以前称为键盘布局）。       |
| [GetKeyboardState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardstate) | 将 256 个虚拟密钥的状态复制到指定的缓冲区。                  |
| [GetKeyNameText](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeynametexta) | 检索表示键的名称的字符串。                                   |
| [**GetKeyState**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeystate) | 检索指定虚拟键的状态。 状态指定键是向上、向下还是切换（每次按键时交替打开、关闭）。 |
| [GetLastInputInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getlastinputinfo) | 检索最后一个输入事件的时间。                                 |
| [IsWindowEnabled](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindowenabled) | 确定是否针对鼠标和键盘输入启用指定的窗口。                   |
| [LoadKeyboardLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadkeyboardlayouta) | 将新的输入区域设置标识符（以前称为键盘布局）加载到系统中。 一次可以加载多个输入区域设置标识符，但每个进程一次只有一个处于活动状态。 加载多个输入区域设置标识符可以在它们之间快速切换。 |
| [**MapVirtualKey**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeya) | 将虚拟键代码转换为（映射到）扫描代码或字符值，或将扫描代码转换为虚拟键代码。 若要指定用于转换指定代码的键盘布局的句柄，请使用 [MapVirtualKeyEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeyexa) 函数。 |
| [MapVirtualKeyEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeyexa) | 将虚拟键代码映射到扫描代码或字符值，或将扫描代码转换为虚拟键代码。 该函数使用输入语言和输入区域设置标识符转换代码。 |
| [OemKeyScan](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-oemkeyscan) | 将 OEMASCII 代码 0 到 0x0FF 映射到 OEM 扫描代码和偏移状态。 该函数提供的信息允许程序通过模拟键盘输入将 OEM 文本发送到另一个程序。 |
| [RegisterHotKey](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerhotkey) | 定义系统范围内的热键。                                       |
| [**SendInput**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendinput) | 合成键击、鼠标动作和按钮单击。                               |
| [SetActiveWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setactivewindow) | 激活窗口。 窗口必须附加到调用线程的消息队列。                |
| [SetFocus](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setfocus) | 将键盘焦点设置为指定的窗口。 窗口必须附加到调用线程的消息队列。 |
| [SetKeyboardState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setkeyboardstate) | 将键盘键状态的 256 字节数组复制到调用线程的键盘输入状态表中。 这是由 [GetKeyboardState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardstate) 和 [GetKeyState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeystate) 函数访问的同一个表。 对此表所做的更改不会影响任何其他线程的键盘输入。 |
| [ToAscii](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-toascii) | 将指定的虚拟键代码和键盘状态转换为相应的一个或多个字符。 该函数使用输入语言和由键盘布局句柄标识的物理键盘布局转换代码。 若要指定用于转换指定代码的键盘布局的句柄，请使用 [ToAsciiEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-toasciiex) 函数。 |
| [ToAsciiEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-toasciiex) | 将指定的虚拟键代码和键盘状态转换为相应的一个或多个字符。 该函数使用输入语言和由输入区域设置标识符标识的物理键盘布局转换代码。 |
| [**ToUnicode**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tounicode) | 将指定的虚拟键代码和键盘状态转换为相应的一个或多个 Unicode 字符。 若要指定用于转换指定代码的键盘布局的句柄，请使用 [ToUnicodeEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tounicodeex) 函数。 |
| [ToUnicodeEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tounicodeex) | 将指定的虚拟键代码和键盘状态转换为相应的一个或多个 Unicode 字符。 |
| [UnloadKeyboardLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unloadkeyboardlayout) | 卸载输入区域设置标识符（以前称为键盘布局）。                 |
| [UnregisterHotKey](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterhotkey) | 释放以前由调用线程注册的热键。                               |
| [VkKeyScanEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-vkkeyscanexa) | 将字符转换为相应的虚拟键代码和偏移状态。 该函数使用输入语言和由输入区域设置标识符标识的物理键盘布局转换字符。 |

以下函数已过时。

展开表

| 函数                                                         | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [**GetKBCodePage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkbcodepage) | 检索当前代码页。                                             |
| [**keybd_event**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-keybd_event) | 合成键击。 系统可以使用这种合成的键击来生成 [WM_KEYUP](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keyup) 或 [WM_KEYDOWN](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keydown) 消息。 键盘驱动程序的中断处理程序调用 [keybd_event](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-keybd_event) 函数。 |
| [**VkKeyScan**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-vkkeyscana) | 将字符转换为当前键盘的相应虚拟键代码和偏移状态。             |

### 键盘消息

| 名称                                                         | 描述                                                    |
| :----------------------------------------------------------- | :------------------------------------------------------ |
| [WM_GETHOTKEY](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-gethotkey) | 确定与窗口关联的热键。                                  |
| [WM_SETHOTKEY](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-sethotkey) | 将热键与窗口相关联。 当用户按下热键时，系统会激活窗口。 |

### 键盘的通知

| 名称                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [WM_ACTIVATE](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-activate) | 同步发送到正在激活的窗口和正在停用的窗口。 如果窗口使用相同的输入队列，则消息将同步发送，首先发送到正在停用的顶级窗口的窗口过程，然后发送到正在激活的顶级窗口的窗口过程。 如果窗口使用不同的输入队列，则消息将异步发送，因此会立即激活窗口。 |
| [WM_APPCOMMAND](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-appcommand) | 通知窗口用户生成了应用程序命令事件，例如，使用鼠标单击应用程序命令按钮或在键盘上键入应用程序命令键。 |
| [WM_CHAR](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-char) | 在 [TranslateMessage](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-translatemessage) 函数对 [WM_KEYDOWN](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keydown) 消息进行转换后发布给具有键盘焦点的窗口。 [WM_CHAR](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-char) 消息包含所按的键的字符代码。 |
| [WM_DEADCHAR](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-deadchar) | 在 [TranslateMessage](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-translatemessage) 函数对 [WM_KEYUP](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keyup) 消息进行转换后发布给具有键盘焦点的窗口。 [WM_DEADCHAR](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-deadchar) 指定由死键生成的字符代码。 死键是与其他字符组合形成复合字符的键，例如元音变音符（双点）。 例如，通过键入元音变音符的死键，然后键入 O 键，生成元音变音符 O 字符。 |
| [WM_HOTKEY](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-hotkey) | 在用户按下通过 [RegisterHotKey](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerhotkey) 函数注册的热键时发送。 此消息放置在与注册了热键的线程关联的消息队列的顶部。 |
| [WM_KEYDOWN](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keydown) | 按下非系统键时，使用键盘焦点发布到窗口。 非系统键是在未按下 ALT 键时按下的键。 |
| [WM_KEYUP](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keyup) | 非系统键被释放时，发布到具有键盘焦点的窗口。 非系统键是未按下 ALT 键的情况下按下的键，或者当窗口具有键盘焦点时按下的键盘键。 |
| [WM_KILLFOCUS](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-killfocus) | 在失去键盘焦点之前立即发送到窗口。                           |
| [WM_SETFOCUS](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-setfocus) | 在获得键盘焦点后发送到窗口。                                 |
| [WM_SYSDEADCHAR](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-sysdeadchar) | 在 [TranslateMessage](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-translatemessage) 函数对 [WM_SYSKEYDOWN](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-syskeydown) 消息进行转换后，使用键盘焦点发送给窗口。 [WM_SYSDEADCHAR](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-sysdeadchar) 指定系统死键的字符代码，即按住 ALT 键时按下的死键。 |
| [WM_SYSKEYDOWN](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-syskeydown) | 当用户按下 F10 键（这将激活菜单栏）或按住 ALT 键然后按下另一个键时，发布到具有键盘焦点的窗口。 当目前没有窗口具有键盘焦点时也会发生这种情况；在这种情况下，[WM_SYSKEYDOWN](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-syskeydown) 消息被发送到活动窗口。 接收消息的窗口可以通过检查 lParam 参数中的上下文代码来区分这两个上下文。 |
| [WM_SYSKEYUP](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-syskeyup) | 当用户释放在按住 ALT 键的同时按下的键时，发布到具有键盘焦点的窗口。 当目前没有窗口具有键盘焦点时也会发生这种情况；在这种情况下，[WM_SYSKEYUP](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-syskeyup) 消息被发送到活动窗口。 接收消息的窗口可以通过检查 lParam 参数中的上下文代码来区分这两个上下文。 |
| [WM_UNICHAR](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-unichar) | 在 [TranslateMessage](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-translatemessage) 函数对 [WM_KEYDOWN](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keydown) 消息进行转换后发布给具有键盘焦点的窗口。 [WM_UNICHAR](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-unichar) 消息包含所按的键的字符代码。 |

----

## HOTKEY 热键MOD_和 VK_ 的虚拟键代码

| **值**                  | **含义**                                                     |
| :---------------------- | :----------------------------------------------------------- |
| **MOD_ALT** 0x0001      | 必须按住任一 ALT 键。                                        |
| **MOD_CONTROL** 0x0002  | 必须按住 Ctrl 键。                                           |
| **MOD_NOREPEAT** 0x4000 | 更改热键行为，使键盘自动重复不会生成多个热键通知。 **Windows Vista：不支持** 此标志。 |
| **MOD_SHIFT** 0x0004    | 必须按住 Shift 键。                                          |
| **MOD_WIN** 0x0008      | 必须按住任一 WINDOWS 密钥。 这些键标有 Windows 徽标。 涉及 WINDOWS 键的键盘快捷方式保留供操作系统使用。 |

| 常数                     | Value   | 说明                                                         |
| :----------------------- | :------ | :----------------------------------------------------------- |
| `VK_LBUTTON`             | 0x01    | 鼠标左键                                                     |
| `VK_RBUTTON`             | 0x02    | 鼠标右键                                                     |
| `VK_CANCEL`              | 0x03    | 控制中断处理                                                 |
| `VK_MBUTTON`             | 0x04    | 鼠标中键                                                     |
| `VK_XBUTTON1`            | 0x05    | X1 鼠标按钮                                                  |
| `VK_XBUTTON2`            | 0x06    | X2 鼠标按钮                                                  |
| `-`                      | 0x07    | 保留                                                         |
| `VK_BACK`                | 0x08    | BACKSPACE 键                                                 |
| `VK_TAB`                 | 0x09    | Tab 键                                                       |
| `-`                      | 0x0A-0B | 预留                                                         |
| `VK_CLEAR`               | 0x0C    | CLEAR 键                                                     |
| `VK_RETURN`              | 0x0D    | Enter 键                                                     |
| `-`                      | 0x0E-0F | 未分配                                                       |
| `VK_SHIFT`               | 0x10    | SHIFT 键                                                     |
| `VK_CONTROL`             | 0x11    | CTRL 键                                                      |
| `VK_MENU`                | 0x12    | Alt 键                                                       |
| `VK_PAUSE`               | 0x13    | PAUSE 键                                                     |
| `VK_CAPITAL`             | 0x14    | CAPS LOCK 键                                                 |
| `VK_KANA`                | 0x15    | IME Kana 模式                                                |
| `VK_HANGUL`              | 0x15    | IME Hanguel 模式                                             |
| `VK_IME_ON`              | 0x16    | IME 打开                                                     |
| `VK_JUNJA`               | 0x17    | IME Junja 模式                                               |
| `VK_FINAL`               | 0x18    | IME 最终模式                                                 |
| `VK_HANJA`               | 0x19    | IME Hanja 模式                                               |
| `VK_KANJI`               | 0x19    | IME Kanji 模式                                               |
| `VK_IME_OFF`             | 0x1A    | IME 关闭                                                     |
| `VK_ESCAPE`              | 0x1B    | ESC 键                                                       |
| `VK_CONVERT`             | 0x1C    | IME 转换                                                     |
| `VK_NONCONVERT`          | 0x1D    | IME 不转换                                                   |
| `VK_ACCEPT`              | 0x1E    | IME 接受                                                     |
| `VK_MODECHANGE`          | 0x1F    | IME 模式更改请求                                             |
| `VK_SPACE`               | 0x20    | 空格键                                                       |
| `VK_PRIOR`               | 0x21    | PAGE UP 键                                                   |
| `VK_NEXT`                | 0x22    | PAGE DOWN 键                                                 |
| `VK_END`                 | 0x23    | END 键                                                       |
| `VK_HOME`                | 0x24    | HOME 键                                                      |
| `VK_LEFT`                | 0x25    | LEFT ARROW 键                                                |
| `VK_UP`                  | 0x26    | UP ARROW 键                                                  |
| `VK_RIGHT`               | 0x27    | RIGHT ARROW 键                                               |
| `VK_DOWN`                | 0x28    | DOWN ARROW 键                                                |
| `VK_SELECT`              | 0x29    | SELECT 键                                                    |
| `VK_PRINT`               | 0x2A    | PRINT 键                                                     |
| `VK_EXECUTE`             | 0x2B    | EXECUTE 键                                                   |
| `VK_SNAPSHOT`            | 0x2C    | PRINT SCREEN 键                                              |
| `VK_INSERT`              | 0x2D    | INS 键                                                       |
| `VK_DELETE`              | 0x2E    | DEL 键                                                       |
| `VK_HELP`                | 0x2F    | HELP 键                                                      |
|                          | 0x30    | 0 键                                                         |
|                          | 0x31    | 1 个键                                                       |
|                          | 0x32    | 2 键                                                         |
|                          | 0x33    | 3 键                                                         |
|                          | 0x34    | 4 键                                                         |
|                          | 0x35    | 5 键                                                         |
|                          | 0x36    | 6 键                                                         |
|                          | 0x37    | 7 键                                                         |
|                          | 0x38    | 8 键                                                         |
|                          | 0x39    | 9 键                                                         |
| `-`                      | 0x3A-40 | Undefined                                                    |
|                          | 0x41    | A 键                                                         |
|                          | 0x42    | B 键                                                         |
|                          | 0x43    | C 键                                                         |
|                          | 0x44    | D 键                                                         |
|                          | 0x45    | E 键                                                         |
|                          | 0x46    | F 键                                                         |
|                          | 0x47    | G 键                                                         |
|                          | 0x48    | H 键                                                         |
|                          | 0x49    | I 键                                                         |
|                          | 0x4A    | J 键                                                         |
|                          | 0x4B    | K 键                                                         |
|                          | 0x4C    | L 键                                                         |
|                          | 0x4D    | M 键                                                         |
|                          | 0x4E    | N 键                                                         |
|                          | 0x4F    | O 键                                                         |
|                          | 0x50    | P 键                                                         |
|                          | 0x51    | Q 键                                                         |
|                          | 0x52    | R 键                                                         |
|                          | 0x53    | S 键                                                         |
|                          | 0x54    | T 键                                                         |
|                          | 0x55    | U 键                                                         |
|                          | 0x56    | V 键                                                         |
|                          | 0x57    | W 键                                                         |
|                          | 0x58    | X 键                                                         |
|                          | 0x59    | Y 键                                                         |
|                          | 0x5A    | Z 键                                                         |
| `VK_LWIN`                | 0x5B    | 左 Windows 键                                                |
| `VK_RWIN`                | 0x5C    | 右侧 Windows 键                                              |
| `VK_APPS`                | 0x5D    | 应用程序密钥                                                 |
| `-`                      | 0x5E    | 预留                                                         |
| `VK_SLEEP`               | 0x5F    | 计算机休眠键                                                 |
| `VK_NUMPAD0`             | 0x60    | 数字键盘 0 键                                                |
| `VK_NUMPAD1`             | 0x61    | 数字键盘 1 键                                                |
| `VK_NUMPAD2`             | 0x62    | 数字键盘 2 键                                                |
| `VK_NUMPAD3`             | 0x63    | 数字键盘 3 键                                                |
| `VK_NUMPAD4`             | 0x64    | 数字键盘 4 键                                                |
| `VK_NUMPAD5`             | 0x65    | 数字键盘 5 键                                                |
| `VK_NUMPAD6`             | 0x66    | 数字键盘 6 键                                                |
| `VK_NUMPAD7`             | 0x67    | 数字键盘 7 键                                                |
| `VK_NUMPAD8`             | 0x68    | 数字键盘 8 键                                                |
| `VK_NUMPAD9`             | 0x69    | 数字键盘 9 键                                                |
| `VK_MULTIPLY`            | 0x6A    | 乘号键                                                       |
| `VK_ADD`                 | 0x6B    | 加号键                                                       |
| `VK_SEPARATOR`           | 0x6C    | 分隔符键                                                     |
| `VK_SUBTRACT`            | 0x6D    | 减号键                                                       |
| `VK_DECIMAL`             | 0x6E    | 句点键                                                       |
| `VK_DIVIDE`              | 0x6F    | 除号键                                                       |
| `VK_F1`                  | 0x70    | F1 键                                                        |
| `VK_F2`                  | 0x71    | F2 键                                                        |
| `VK_F3`                  | 0x72    | F3 键                                                        |
| `VK_F4`                  | 0x73    | F4 键                                                        |
| `VK_F5`                  | 0x74    | F5 键                                                        |
| `VK_F6`                  | 0x75    | F6 键                                                        |
| `VK_F7`                  | 0x76    | F7 键                                                        |
| `VK_F8`                  | 0x77    | F8 键                                                        |
| `VK_F9`                  | 0x78    | F9 键                                                        |
| `VK_F10`                 | 0x79    | F10 键                                                       |
| `VK_F11`                 | 0x7A    | F11 键                                                       |
| `VK_F12`                 | 0x7B    | F12 键                                                       |
| `VK_F13`                 | 0x7C    | F13 键                                                       |
| `VK_F14`                 | 0x7D    | F14 键                                                       |
| `VK_F15`                 | 0x7E    | F15 键                                                       |
| `VK_F16`                 | 0x7F    | F16 键                                                       |
| `VK_F17`                 | 0x80    | F17 键                                                       |
| `VK_F18`                 | 0x81    | F18 键                                                       |
| `VK_F19`                 | 0x82    | F19 键                                                       |
| `VK_F20`                 | 0x83    | F20 键                                                       |
| `VK_F21`                 | 0x84    | F21 键                                                       |
| `VK_F22`                 | 0x85    | F22 键                                                       |
| `VK_F23`                 | 0x86    | F23 键                                                       |
| `VK_F24`                 | 0x87    | F24 键                                                       |
| `-`                      | 0x88-8F | 保留                                                         |
| `VK_NUMLOCK`             | 0x90    | NUM LOCK 键                                                  |
| `VK_SCROLL`              | 0x91    | SCROLL LOCK 键                                               |
| `-`                      | 0x92-96 | OEM 特有                                                     |
| `-`                      | 0x97-9F | 未分配                                                       |
| `VK_LSHIFT`              | 0xA0    | 左 SHIFT 键                                                  |
| `VK_RSHIFT`              | 0xA1    | 右 SHIFT 键                                                  |
| `VK_LCONTROL`            | 0xA2    | 左 Ctrl 键                                                   |
| `VK_RCONTROL`            | 0xA3    | 右 Ctrl 键                                                   |
| `VK_LMENU`               | 0xA4    | 左 ALT 键                                                    |
| `VK_RMENU`               | 0xA5    | 右 ALT 键                                                    |
| `VK_BROWSER_BACK`        | 0xA6    | 浏览器后退键                                                 |
| `VK_BROWSER_FORWARD`     | 0xA7    | 浏览器前进键                                                 |
| `VK_BROWSER_REFRESH`     | 0xA8    | 浏览器刷新键                                                 |
| `VK_BROWSER_STOP`        | 0xA9    | 浏览器停止键                                                 |
| `VK_BROWSER_SEARCH`      | 0xAA    | 浏览器搜索键                                                 |
| `VK_BROWSER_FAVORITES`   | 0xAB    | 浏览器收藏键                                                 |
| `VK_BROWSER_HOME`        | 0xAC    | 浏览器“开始”和“主页”键                                       |
| `VK_VOLUME_MUTE`         | 0xAD    | 静音键                                                       |
| `VK_VOLUME_DOWN`         | 0xAE    | 音量减小键                                                   |
| `VK_VOLUME_UP`           | 0xAF    | 音量增加键                                                   |
| `VK_MEDIA_NEXT_TRACK`    | 0xB0    | 下一曲目键                                                   |
| `VK_MEDIA_PREV_TRACK`    | 0xB1    | 上一曲目键                                                   |
| `VK_MEDIA_STOP`          | 0xB2    | 停止媒体键                                                   |
| `VK_MEDIA_PLAY_PAUSE`    | 0xB3    | 播放/暂停媒体键                                              |
| `VK_LAUNCH_MAIL`         | 0xB4    | 启动邮件键                                                   |
| `VK_LAUNCH_MEDIA_SELECT` | 0xB5    | 选择媒体键                                                   |
| `VK_LAUNCH_APP1`         | 0xB6    | 启动应用程序 1 键                                            |
| `VK_LAUNCH_APP2`         | 0xB7    | 启动应用程序 2 键                                            |
| `-`                      | 0xB8-B9 | 预留                                                         |
| `VK_OEM_1`               | 0xBA    | 用于杂项字符；它可能因键盘而异。 对于美国标准键盘，键`;:`    |
| `VK_OEM_PLUS`            | 0xBB    | 对于任何国家/地区，键`+`                                     |
| `VK_OEM_COMMA`           | 0xBC    | 对于任何国家/地区，键`,`                                     |
| `VK_OEM_MINUS`           | 0xBD    | 对于任何国家/地区，键`-`                                     |
| `VK_OEM_PERIOD`          | 0xBE    | 对于任何国家/地区，键`.`                                     |
| `VK_OEM_2`               | 0xBF    | 用于杂项字符；它可能因键盘而异。 对于美国标准键盘，键`/?`    |
| `VK_OEM_3`               | 0xC0    | 用于杂项字符；它可能因键盘而异。 对于美国标准键盘，键``~`    |
| `-`                      | 0xC1-DA | 保留                                                         |
| `VK_OEM_4`               | 0xDB    | 用于杂项字符；它可能因键盘而异。 对于美国标准键盘，键`[{`    |
| `VK_OEM_5`               | 0xDC    | 用于杂项字符；它可能因键盘而异。 对于美国标准键盘，键`\\|`   |
| `VK_OEM_6`               | 0xDD    | 用于杂项字符；它可能因键盘而异。 对于美国标准键盘，键`]}`    |
| `VK_OEM_7`               | 0xDE    | 用于杂项字符；它可能因键盘而异。 对于美国标准键盘，键`'"`    |
| `VK_OEM_8`               | 0xDF    | 用于杂项字符；它可能因键盘而异。                             |
| `-`                      | 0xE0    | 预留                                                         |
| `-`                      | 0xE1    | OEM 特有                                                     |
| `VK_OEM_102`             | 0xE2    | 美国标准键盘上的 `<>` 键，或非美国 102 键键盘上的 `\\|` 键   |
| `-`                      | 0xE3-E4 | OEM 特有                                                     |
| `VK_PROCESSKEY`          | 0xE5    | IME PROCESS 键                                               |
| `-`                      | 0xE6    | OEM 特有                                                     |
| `VK_PACKET`              | 0xE7    | 用于将 Unicode 字符当作键击传递。 `VK_PACKET` 键是用于非键盘输入法的 32 位虚拟键值的低位字。 有关更多信息，请参阅 [`KEYBDINPUT`](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-keybdinput)、[`SendInput`](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendinput)、[`WM_KEYDOWN`](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keydown) 和 [`WM_KEYUP`](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/wm-keyup) 中的注释 |
| `-`                      | 0xE8    | 未分配                                                       |
| `-`                      | 0xE9-F5 | OEM 特有                                                     |
| `VK_ATTN`                | 0xF6    | Attn 键                                                      |
| `VK_CRSEL`               | 0xF7    | CrSel 键                                                     |
| `VK_EXSEL`               | 0xF8    | ExSel 键                                                     |
| `VK_EREOF`               | 0xF9    | Erase EOF 键                                                 |
| `VK_PLAY`                | 0xFA    | Play 键                                                      |
| `VK_ZOOM`                | 0xFB    | Zoom 键                                                      |
| `VK_NONAME`              | 0xFC    | 预留                                                         |
| `VK_PA1`                 | 0xFD    | PA1 键                                                       |
| `VK_OEM_CLEAR`           | 0xFE    | Clear 键                                                     |

----------

## DT 设置文本格式

```
[in] format
```

设置文本格式的方法。 此参数可使用以下一个或多个值

| 值                          | 含义                                                         |
| :-------------------------- | :----------------------------------------------------------- |
| **DT_BOTTOM**               | 将文本与矩形底部对齐。 此值仅用于DT_SINGLELINE值。           |
| **DT_CALCRECT**             | 确定矩形的宽度和高度。 如果存在多行文本， **DrawText** 将使用 *lpRect* 参数指向的矩形宽度，并扩展矩形的基底以绑定最后一行文本。 如果最大字比矩形宽，则宽度将展开。 如果文本小于矩形的宽度，宽度将减小。 如果只有一行文本， **DrawText** 将修改矩形的右侧，使其绑定行中的最后一个字符。 在任一情况下， **DrawText** 均返回带格式文本的高度，但不绘制文本。 |
| **DT_CENTER**               | 在矩形中水平居中放置文本。                                   |
| **DT_EDITCONTROL**          | 复制多行编辑控件的文本显示特征。 具体而言，平均字符宽度的计算方式与编辑控件的计算方式相同，并且 函数不显示部分可见的最后一行。 |
| **DT_END_ELLIPSIS**         | 对于显示的文本，如果字符串的末尾不适合矩形，则会将其截断并添加省略号。 如果不在字符串末尾的单词超出矩形的限制，则会将其截断，且不带省略号。除非指定了DT_MODIFYSTRING标志，否则不会修改字符串。与DT_PATH_ELLIPSIS和DT_WORD_ELLIPSIS进行比较。 |
| **DT_EXPANDTABS**           | 扩展制表符。 每个制表符的默认字符数是 8。 DT_WORD_ELLIPSIS、DT_PATH_ELLIPSIS和DT_END_ELLIPSIS值不能与DT_EXPANDTABS值一起使用。 |
| **DT_EXTERNALLEADING**      | 在行高中包括字体外部间隙。 通常，外部前导不包括在文本行的高度中。 |
| **DT_HIDEPREFIX**           | 忽略文本中的与 (&) 前缀字符。 后面的字母不会加下划线，但仍会处理其他助记符前缀字符。例如：输入字符串：“A&bc&&d”normal：“Abc&d”DT_HIDEPREFIX：“Abc&d”与DT_NOPREFIX和DT_PREFIXONLY进行比较。 |
| **DT_INTERNAL**             | 使用系统字体计算文本规格。                                   |
| **DT_LEFT**                 | 将文本左对齐。                                               |
| **DT_MODIFYSTRING**         | 修改指定的字符串以匹配显示的文本。 除非指定DT_END_ELLIPSIS或DT_PATH_ELLIPSIS，否则此值无效。 |
| **DT_NOCLIP**               | 绘制时不剪裁。 使用 DT_NOCLIP 时**，DrawText** 的速度会稍快一些。 |
| **DT_NOFULLWIDTHCHARBREAK** | 防止在 DBCS (双宽字符串) 换行，使换行规则等效于 SBCS 字符串。 例如，这可以在朝鲜语窗口中使用，以便提高图标标签的可读性。 除非指定DT_WORDBREAK，否则此值无效。 |
| **DT_NOPREFIX**             | 关闭对前缀字符的处理。 通常， **DrawText** 将助记键前缀字符 & 解释为指令以下划线后面的字符，将助记键前缀字符 && 作为指令来打印单个 &。 通过指定DT_NOPREFIX，此处理将关闭。 例如，例如：输入字符串：“A&bc&&d”normal：“Abc&d”DT_NOPREFIX：“A&bc&&d”与DT_HIDEPREFIX和DT_PREFIXONLY进行比较。 |
| **DT_PATH_ELLIPSIS**        | 对于显示的文本，将字符串中间的字符替换为省略号，以便结果适合指定的矩形。 如果字符串包含反斜杠 (\\) 个字符，DT_PATH_ELLIPSIS将尽可能多地保留最后一个反斜杠后的文本。除非指定了DT_MODIFYSTRING标志，否则不会修改字符串。与DT_END_ELLIPSIS和DT_WORD_ELLIPSIS进行比较。 |
| **DT_PREFIXONLY**           | 仅在与字符后的位置绘制下划线， (&) 前缀字符。 不绘制字符串中的任何其他字符。 例如，例如：输入字符串：“A&bc&&d”nnormal：“Abc&d”DT_PREFIXONLY：“_ ”与DT_HIDEPREFIX和DT_NOPREFIX进行比较。 |
| **DT_RIGHT**                | 使文本向右对齐。                                             |
| **DT_RTLREADING**           | 当在 *hdc* 中选择的字体是希伯来语或阿拉伯语字体时，双向文本的从右到左阅读顺序布局。 所有文本的默认阅读顺序都是从左到右。 |
| **DT_SINGLELINE**           | 仅显示单行上的文本。 回车符和换行符不会中断该行。            |
| **DT_TABSTOP**              | 设置制表位。 15-8 位 (*uFormat* 参数的低序字) 的高阶字节指定每个选项卡的字符数。每个选项卡的默认字符数为 8。 DT_CALCRECT、DT_EXTERNALLEADING、DT_INTERNAL、DT_NOCLIP和DT_NOPREFIX值不能与DT_TABSTOP值一起使用。 |
| **DT_TOP**                  | 使文本与矩形顶部对齐。                                       |
| **DT_VCENTER**              | 垂直居中文本。 此值仅用于DT_SINGLELINE值。                   |
| **DT_WORDBREAK**            | 中断字词。 如果单词超出 *lpRect* 参数指定的矩形边缘，则单词之间的行会自动断开。 回车符换行序列也会中断该行。如果未指定此项，则输出位于一行中。 |
| **DT_WORD_ELLIPSIS**        | 截断矩形中不适合的任何单词，并添加省略号。与DT_END_ELLIPSIS和DT_PATH_ELLIPSIS进行比较。 |

---

# WinUser 使用的接口函数

## 函数

展开表

|                                                              |
| :----------------------------------------------------------- |
| [ActivateKeyboardLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-activatekeyboardlayout)  设置调用线程或当前进程的输入区域设置标识符（以前称为键盘布局句柄）。 输入区域设置标识符指定区域设置以及键盘的物理布局。 |
| [AddClipboardFormatListener](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-addclipboardformatlistener)  在系统维护的剪贴板格式侦听器列表中Places给定窗口。 |
| [AdjustWindowRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-adjustwindowrect)  根据所需的客户端矩形大小计算窗口矩形的所需大小。 然后，可以将窗口矩形传递给 CreateWindow 函数，以创建工作区为所需大小的窗口。 |
| [AdjustWindowRectEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-adjustwindowrectex)  根据所需的客户端矩形大小计算窗口矩形的所需大小。 然后，可以将窗口矩形传递给 CreateWindowEx 函数，以创建工作区为所需大小的窗口。 |
| [AdjustWindowRectExForDpi](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-adjustwindowrectexfordpi)  根据所需的客户端矩形大小和提供的 DPI 计算窗口矩形的所需大小。 |
| [AllowSetForegroundWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-allowsetforegroundwindow)  允许指定进程使用 SetForegroundWindow 函数设置前台窗口。 调用进程必须已能够设置前台窗口。 有关详细信息，请参阅本主题后面的备注。 |
| [AnimateWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-animatewindow)  使你可以在显示或隐藏窗口时生成特殊效果。 有四种类型的动画：_roll、幻灯片、折叠或展开以及 alpha 混合淡出。 |
| [AnyPopup](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-anypopup)  指示屏幕上是否存在自有窗口、可见窗口、顶级弹出窗口或重叠窗口。 函数搜索整个屏幕，而不仅仅是调用应用程序的工作区。 |
| [AppendMenuA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-appendmenua)  将新项追加到指定菜单栏、下拉菜单、子菜单或快捷菜单的末尾。 可以使用此函数指定菜单项的内容、外观和行为。 (ANSI) |
| [AppendMenuW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-appendmenuw)  将新项追加到指定菜单栏、下拉菜单、子菜单或快捷菜单的末尾。 可以使用此函数指定菜单项的内容、外观和行为。 (Unicode) |
| [AreDpiAwarenessContextsEqual](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-aredpiawarenesscontextsequal)  确定两个DPI_AWARENESS_CONTEXT值是否相同。 |
| [ArrangeIconicWindows](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-arrangeiconicwindows)  将指定父窗口的所有最小化 (图标) 子窗口进行排列。 |
| [AttachThreadInput](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-attachthreadinput)  将一个线程的输入处理机制附加到或分离另一个线程的输入处理机制。 |
| [BeginDeferWindowPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-begindeferwindowpos)  为多窗口位置结构分配内存，并将句柄返回到结构。 |
| [BeginPaint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-beginpaint)  BeginPaint 函数准备用于绘制的指定窗口，并使用有关绘图的信息填充 PAINTSTRUCT 结构。 |
| [BlockInput](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-blockinput)  阻止键盘和鼠标输入事件到达应用程序。 |
| [BringWindowToTop](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-bringwindowtotop)  将指定的窗口置于 Z 顺序的顶部。 如果窗口是顶级窗口，则会激活它。 如果窗口是子窗口，则会激活与子窗口关联的顶级父窗口。 |
| [BroadcastSystemMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-broadcastsystemmessage)  BroadcastSystemMessage 函数将消息发送到指定的收件人。 (BroadcastSystemMessage) |
| [BroadcastSystemMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-broadcastsystemmessagea)  向指定的收件人发送邮件。 (BroadcastSystemMessageA) |
| [BroadcastSystemMessageExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-broadcastsystemmessageexa)  向指定的收件人发送邮件。 (BroadcastSystemMessageExA) |
| [BroadcastSystemMessageExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-broadcastsystemmessageexw)  向指定的收件人发送邮件。 (BroadcastSystemMessageExW) |
| [BroadcastSystemMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-broadcastsystemmessagew)  BroadcastSystemMessageW (Unicode) 函数将消息发送到指定的收件人。 (BroadcastSystemMessageW) |
| [CalculatePopupWindowPosition](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-calculatepopupwindowposition)  使用指定的定位点、弹出窗口大小、标志和可选的排除矩形计算适当的弹出窗口位置。 |
| [CallMsgFilterA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-callmsgfiltera)  将指定的消息和挂钩代码传递给与WH_SYSMSGFILTER和WH_MSGFILTER挂钩关联的挂钩过程。 (ANSI) |
| [CallMsgFilterW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-callmsgfilterw)  将指定的消息和挂钩代码传递给与WH_SYSMSGFILTER和WH_MSGFILTER挂钩关联的挂钩过程。 (Unicode) |
| [CallNextHookEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-callnexthookex)  将挂钩信息传递给当前挂钩链中的下一个挂钩过程。 挂钩过程可以在处理挂钩信息之前或之后调用此函数。 |
| [CallWindowProcA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-callwindowproca)  将消息信息传递给指定的窗口过程。 (ANSI) |
| [CallWindowProcW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-callwindowprocw)  将消息信息传递给指定的窗口过程。 (Unicode) |
| [CascadeWindows](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-cascadewindows)  级联指定父窗口的指定子窗口。 |
| [ChangeClipboardChain](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changeclipboardchain)  从剪贴板查看器链中删除指定的窗口。 |
| [ChangeDisplaySettingsA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changedisplaysettingsa)  ChangeDisplaySettings 函数将默认显示设备的设置更改为指定的图形模式。 (ANSI) |
| [ChangeDisplaySettingsExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changedisplaysettingsexa)  ChangeDisplaySettingsEx 函数将指定显示设备的设置更改为指定的图形模式。 (ANSI) |
| [ChangeDisplaySettingsExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changedisplaysettingsexw)  ChangeDisplaySettingsEx 函数将指定显示设备的设置更改为指定的图形模式。 (Unicode) |
| [ChangeDisplaySettingsW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changedisplaysettingsw)  ChangeDisplaySettings 函数将默认显示设备的设置更改为指定的图形模式。 (Unicode) |
| [ChangeWindowMessageFilter](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changewindowmessagefilter)  在用户界面特权隔离 (UIPI) 消息筛选器中添加或删除消息。 |
| [ChangeWindowMessageFilterEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changewindowmessagefilterex)  修改指定窗口的用户界面特权隔离 (UIPI) 消息筛选器。 |
| [CharLowerA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charlowera)  将字符串或单个字符转换为小写。 如果操作数是字符串，则函数将就地转换字符。 (ANSI) |
| [CharLowerBuffA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charlowerbuffa)  将缓冲区中的大写字符转换为小写字符。 函数就地转换字符。 (ANSI) |
| [CharLowerBuffW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charlowerbuffw)  将缓冲区中的大写字符转换为小写字符。 函数就地转换字符。 (Unicode) |
| [CharLowerW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charlowerw)  将字符串或单个字符转换为小写。 如果操作数是字符串，则函数将就地转换字符。 (Unicode) |
| [CharNextA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charnexta)  检索指向字符串中下一个字符的指针。 此函数可以处理由单字节或多字节字符组成的字符串。 (ANSI) |
| [CharNextExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charnextexa)  检索指向字符串中下一个字符的指针。 此函数可以处理由单字节或多字节字符组成的字符串。 |
| [CharNextW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charnextw)  检索指向字符串中下一个字符的指针。 此函数可以处理由单字节或多字节字符组成的字符串。 (Unicode) |
| [CharPrevA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charpreva)  检索指向字符串中上一个字符的指针。 此函数可以处理由单字节或多字节字符组成的字符串。 (ANSI) |
| [CharPrevExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charprevexa)  检索指向字符串中上一个字符的指针。 此函数可以处理由单字节或多字节字符组成的字符串。 |
| [CharPrevW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charprevw)  检索指向字符串中上一个字符的指针。 此函数可以处理由单字节或多字节字符组成的字符串。 (Unicode) |
| [CharToOemA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-chartooema)  将字符串转换为 OEM 定义的字符集。警告 请勿使用。 (ANSI) |
| [CharToOemBuffA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-chartooembuffa)  将字符串中指定数量的字符转换为 OEM 定义的字符集。 (ANSI) |
| [CharToOemBuffW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-chartooembuffw)  将字符串中指定数量的字符转换为 OEM 定义的字符集。 (Unicode) |
| [CharToOemW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-chartooemw)  将字符串转换为 OEM 定义的字符集。警告 请勿使用。 (Unicode) |
| [CharUpperA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charuppera)  将字符串或单个字符转换为大写。 如果操作数是字符串，则函数将就地转换字符。 (ANSI) |
| [CharUpperBuffA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charupperbuffa)  将缓冲区中的小写字符转换为大写字符。 函数就地转换字符。 (ANSI) |
| [CharUpperBuffW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charupperbuffw)  将缓冲区中的小写字符转换为大写字符。 函数就地转换字符。 (Unicode) |
| [CharUpperW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-charupperw)  将字符串或单个字符转换为大写。 如果操作数是字符串，则函数将就地转换字符。 (Unicode) |
| [CheckDlgButton](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-checkdlgbutton)  更改按钮控件的检查状态。 |
| [CheckMenuItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-checkmenuitem)  将指定菜单项检查标记属性的状态设置为选中或清除。 |
| [CheckMenuRadioItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-checkmenuradioitem)  检查指定的菜单项并使其成为单选项。 同时，函数会清除关联组中的所有其他菜单项，并清除这些项目的单选项类型标志。 |
| [CheckRadioButton](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-checkradiobutton)  将检查标记添加到 (检查) 组中指定的单选按钮，并从中删除检查标记， (清除组中所有其他单选按钮) 。 |
| [ChildWindowFromPoint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-childwindowfrompoint)  确定属于父窗口的子窗口（如果有）包含指定点的子窗口。 搜索仅限于即时子窗口。 不搜索孙子和更深的后代窗口。 |
| [ChildWindowFromPointEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-childwindowfrompointex)  确定属于指定父窗口的子窗口（如果有）包含指定点。 |
| [ClientToScreen](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-clienttoscreen)  ClientToScreen 函数将指定点的工作区坐标转换为屏幕坐标。 |
| [ClipCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-clipcursor)  将光标限制在屏幕上的矩形区域。 |
| [CloseClipboard](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-closeclipboard)  关闭剪贴板。 |
| [CloseDesktop](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-closedesktop)  关闭桌面对象的打开句柄。 |
| [CloseGestureInfoHandle](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-closegestureinfohandle)  关闭与手势信息句柄关联的资源。 |
| [CloseTouchInputHandle](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-closetouchinputhandle)  关闭触摸输入句柄，释放与其关联的进程内存，并使句柄失效。 |
| [CloseWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-closewindow)  最小化 (但不销毁指定窗口) 。 |
| [CloseWindowStation](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-closewindowstation)  关闭打开的窗口工作站句柄。 |
| [CopyAcceleratorTableA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-copyacceleratortablea)  复制指定的快捷键表。 此函数用于获取与 accelerator-table 句柄对应的 accelerator-table 数据，或用于确定 accelerator-table 数据的大小。 (ANSI) |
| [CopyAcceleratorTableW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-copyacceleratortablew)  复制指定的快捷键表。 此函数用于获取与 accelerator-table 句柄对应的 accelerator-table 数据，或用于确定 accelerator-table 数据的大小。 (Unicode) |
| [CopyCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-copycursor)  复制指定的游标。 |
| [CopyIcon](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-copyicon)  将指定的图标从另一个模块复制到当前模块。 |
| [CopyImage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-copyimage)  (图标、光标或位图) 创建新图像，并将指定图像的属性复制到新图像。 如有必要，函数会拉伸位以适应新图像的所需大小。 |
| [CopyRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-copyrect)  CopyRect 函数将一个矩形的坐标复制到另一个矩形。 |
| [CountClipboardFormats](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-countclipboardformats)  检索剪贴板上当前不同数据格式的数量。 |
| [CreateAcceleratorTableA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createacceleratortablea)  创建快捷键表。 (ANSI) |
| [CreateAcceleratorTableW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createacceleratortablew)  创建快捷键表。 (Unicode) |
| [CreateCaret](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createcaret)  为系统插入点创建一个新形状，并将插入点的所有权分配给指定窗口。 插入符号形状可以是线条、块或位图。 |
| [CreateCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createcursor)  创建具有指定大小、位模式和热点的游标。 |
| [CreateDesktopA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdesktopa)  创建新的桌面，将其与调用进程的当前窗口工作站相关联，并将其分配给调用线程。 (ANSI) |
| [CreateDesktopExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdesktopexa)  创建具有指定堆的新桌面，将其与调用进程的当前窗口工作站相关联，并将其分配给调用线程。 (ANSI) |
| [CreateDesktopExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdesktopexw)  创建具有指定堆的新桌面，将其与调用进程的当前窗口工作站相关联，并将其分配给调用线程。 (Unicode) |
| [CreateDesktopW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdesktopw)  创建新的桌面，将其与调用进程的当前窗口工作站相关联，并将其分配给调用线程。 (Unicode) |
| [CreateDialogA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdialoga)  从对话框模板资源创建无模式对话框。 CreateDialog 宏使用 CreateDialogParam 函数。 (ANSI) |
| [CreateDialogIndirectA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdialogindirecta)  从内存中的对话框模板创建无模式对话框。 CreateDialogIndirect 宏使用 CreateDialogIndirectParam 函数。 (ANSI) |
| [CreateDialogIndirectParamA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdialogindirectparama)  从内存中的对话框模板创建无模式对话框。 (ANSI) |
| [CreateDialogIndirectParamW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdialogindirectparamw)  从内存中的对话框模板创建无模式对话框。 (Unicode) |
| [CreateDialogIndirectW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdialogindirectw)  从内存中的对话框模板创建无模式对话框。 CreateDialogIndirect 宏使用 CreateDialogIndirectParam 函数。 (Unicode) |
| [CreateDialogParamA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdialogparama)  从对话框模板资源创建无模式对话框。 (ANSI) |
| [CreateDialogParamW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdialogparamw)  从对话框模板资源创建无模式对话框。 (Unicode) |
| [CreateDialogW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createdialogw)  从对话框模板资源创建无模式对话框。 CreateDialog 宏使用 CreateDialogParam 函数。 (Unicode) |
| [CreateIcon](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createicon)  创建具有指定大小、颜色和位图案的图标。 |
| [CreateIconFromResource](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createiconfromresource)  从描述图标的资源位创建图标或光标。 (CreateIconFromResource) |
| [CreateIconFromResourceEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createiconfromresourceex)  从描述图标的资源位创建图标或光标。 (CreateIconFromResourceEx) |
| [CreateIconIndirect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createiconindirect)  从 ICONINFO 结构创建图标或光标。 |
| [CreateMDIWindowA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createmdiwindowa)  (MDI) 子窗口创建多文档界面。 (ANSI) |
| [CreateMDIWindowW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createmdiwindoww)  (MDI) 子窗口创建多文档界面。 (Unicode) |
| [CreateMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createmenu)  创建菜单。 菜单最初为空，但可以使用 InsertMenuItem、AppendMenu 和 InsertMenu 函数填充菜单项。 |
| [CreatePopupMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createpopupmenu)  创建下拉菜单、子菜单或快捷菜单。 |
| [CreateSyntheticPointerDevice](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createsyntheticpointerdevice)  为调用应用程序配置指针注入设备，并初始化应用可以注入的最大同时指针数。 |
| [CreateWindowA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createwindowa)  创建重叠窗口、弹出窗口或子窗口。 (ANSI) |
| [CreateWindowExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createwindowexa)  创建具有扩展窗口样式的重叠窗口、弹出窗口或子窗口;否则，此函数与 CreateWindow 函数相同。 (ANSI) |
| [CreateWindowExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createwindowexw)  创建具有扩展窗口样式的重叠窗口、弹出窗口或子窗口;否则，此函数与 CreateWindow 函数相同。 (Unicode) |
| [CreateWindowStationA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createwindowstationa)  创建一个窗口工作站对象，将其与调用进程相关联，并将其分配给当前会话。 (ANSI) |
| [CreateWindowStationW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createwindowstationw)  创建一个窗口工作站对象，将其与调用进程相关联，并将其分配给当前会话。 (Unicode) |
| [CreateWindowW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createwindoww)  创建重叠窗口、弹出窗口或子窗口。 (Unicode) |
| [DefDlgProcA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defdlgproca)  调用默认对话框窗口过程，为具有专用窗口类的对话框不处理的任何窗口消息提供默认处理。 (ANSI) |
| [DefDlgProcW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defdlgprocw)  调用默认对话框窗口过程，为具有专用窗口类的对话框不处理的任何窗口消息提供默认处理。 (Unicode) |
| [DeferWindowPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-deferwindowpos)  汇报指定窗口的指定多窗口位置结构。 |
| [DefFrameProcA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defframeproca)  为多文档界面的窗口过程 (MDI) 框架窗口不处理的任何窗口消息提供默认处理。 (ANSI) |
| [DefFrameProcW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defframeprocw)  为多文档界面的窗口过程 (MDI) 框架窗口不处理的任何窗口消息提供默认处理。 (Unicode) |
| [DefMDIChildProcA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defmdichildproca)  为多文档界面的窗口过程 (MDI) 子窗口不处理的任何窗口消息提供默认处理。 (ANSI) |
| [DefMDIChildProcW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defmdichildprocw)  为多文档界面的窗口过程 (MDI) 子窗口不处理的任何窗口消息提供默认处理。 (Unicode) |
| [DefRawInputProc](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defrawinputproc)  验证 RAWINPUTHEADER 结构的大小是否正确。 |
| [DefWindowProcA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defwindowproca)  调用默认窗口过程，为应用程序不处理的任何窗口消息提供默认处理。 (ANSI) |
| [DefWindowProcW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-defwindowprocw)  调用默认窗口过程，为应用程序不处理的任何窗口消息提供默认处理。 (Unicode) |
| [DeleteMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-deletemenu)  从指定菜单中删除项。 如果菜单项打开菜单或子菜单，此函数将销毁菜单或子菜单的句柄，并释放菜单或子菜单使用的内存。 |
| [DeregisterShellHookWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-deregistershellhookwindow)  注销已注册以接收 Shell 挂钩消息的指定 Shell 窗口。 |
| [DestroyAcceleratorTable](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-destroyacceleratortable)  销毁加速键表。 |
| [DestroyCaret](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-destroycaret)  销毁插入点的当前形状，从窗口中释放插入点，并从屏幕中删除插入点。 |
| [DestroyCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-destroycursor)  销毁游标并释放游标占用的任何内存。 请勿使用此函数销毁共享游标。 |
| [DestroyIcon](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-destroyicon)  销毁图标并释放图标占用的任何内存。 |
| [DestroyMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-destroymenu)  销毁指定的菜单并释放该菜单占用的任何内存。 |
| [DestroySyntheticPointerDevice](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-destroysyntheticpointerdevice)  销毁指定的指针注入设备。 |
| [DestroyWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-destroywindow)  销毁指定的窗口。 |
| [DialogBoxA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dialogboxa)  从对话框模板资源创建模式对话框。 在指定的回调函数通过调用 EndDialog 函数终止模式对话框之前，DialogBox 不会返回控件。 (ANSI) |
| [DialogBoxIndirectA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dialogboxindirecta)  从内存中的对话框模板创建模式对话框。 在指定的回调函数通过调用 EndDialog 函数终止模式对话框之前，DialogBoxIndirect 不会返回控件。 (ANSI) |
| [DialogBoxIndirectParamA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dialogboxindirectparama)  从内存中的对话框模板创建模式对话框。 (ANSI) |
| [DialogBoxIndirectParamW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dialogboxindirectparamw)  从内存中的对话框模板创建模式对话框。 (Unicode) |
| [DialogBoxIndirectW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dialogboxindirectw)  从内存中的对话框模板创建模式对话框。 在指定的回调函数通过调用 EndDialog 函数终止模式对话框之前，DialogBoxIndirect 不会返回控件。 (Unicode) |
| [DialogBoxParamA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dialogboxparama)  从对话框模板资源创建模式对话框。 (ANSI) |
| [DialogBoxParamW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dialogboxparamw)  从对话框模板资源创建模式对话框。 (Unicode) |
| [DialogBoxW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dialogboxw)  从对话框模板资源创建模式对话框。 在指定的回调函数通过调用 EndDialog 函数终止模式对话框之前，DialogBox 不会返回控件。 (Unicode) |
| [DisableProcessWindowsGhosting](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-disableprocesswindowsghosting)  禁用调用 GUI 进程的窗口虚影功能。 窗口虚影是一项 Windows 管理器功能，可让用户最小化、移动或关闭未响应的应用程序的main窗口。 |
| [DispatchMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dispatchmessage)  DispatchMessage 函数将消息调度到窗口过程。 它通常用于调度 GetMessage 函数检索到的消息。 |
| [DispatchMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dispatchmessagea)  将消息调度到窗口过程。 它通常用于调度 GetMessage 函数检索到的消息。 (DispatchMessageA) |
| [DispatchMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dispatchmessagew)  DispatchMessageW (Unicode) 函数将消息调度到窗口过程。 它通常用于调度 GetMessage 函数检索到的消息。 |
| [DisplayConfigGetDeviceInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-displayconfiggetdeviceinfo)  DisplayConfigGetDeviceInfo 函数检索有关设备的显示配置信息。 |
| [DisplayConfigSetDeviceInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-displayconfigsetdeviceinfo)  DisplayConfigSetDeviceInfo 函数设置目标的属性。 |
| [DlgDirListA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dlgdirlista)  将列表框的内容替换为指定目录中的子目录和文件的名称。 可以通过指定一组文件属性来筛选名称列表。 该列表可以选择包含映射的驱动器。 (ANSI) |
| [DlgDirListComboBoxA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dlgdirlistcomboboxa)  将组合框的内容替换为指定目录中的子目录和文件的名称。 可以通过指定一组文件属性来筛选名称列表。 名称列表可以包含映射的驱动器号。 (ANSI) |
| [DlgDirListComboBoxW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dlgdirlistcomboboxw)  将组合框的内容替换为指定目录中的子目录和文件的名称。 可以通过指定一组文件属性来筛选名称列表。 名称列表可以包含映射的驱动器号。 (Unicode) |
| [DlgDirListW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dlgdirlistw)  将列表框的内容替换为指定目录中的子目录和文件的名称。 可以通过指定一组文件属性来筛选名称列表。 该列表可以选择包含映射的驱动器。 (Unicode) |
| [DlgDirSelectComboBoxExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dlgdirselectcomboboxexa)  使用 DlgDirListComboBox 函数从填充的组合框中检索当前选定内容。 所选内容被解释为驱动器号、文件或目录名称。 (ANSI) |
| [DlgDirSelectComboBoxExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dlgdirselectcomboboxexw)  使用 DlgDirListComboBox 函数从填充的组合框中检索当前选定内容。 所选内容被解释为驱动器号、文件或目录名称。 (Unicode) |
| [DlgDirSelectExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dlgdirselectexa)  从单选列表框中检索当前选定内容。 它假定列表框已由 DlgDirList 函数填充，并且所选内容是驱动器号、文件名或目录名称。 (ANSI) |
| [DlgDirSelectExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dlgdirselectexw)  从单选列表框中检索当前选定内容。 它假定列表框已由 DlgDirList 函数填充，并且所选内容是驱动器号、文件名或目录名称。 (Unicode) |
| [DragDetect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dragdetect)  捕获鼠标并跟踪其移动，直到用户释放左键、按 ESC 键或将鼠标移动到围绕指定点的拖动矩形外部。 |
| [DrawAnimatedRects](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawanimatedrects)  对窗口描述文字进行动画处理，以指示图标的打开或窗口的最小化或最大化。 |
| [DrawCaption](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawcaption)  DrawCaption 函数描述文字绘制窗口。 |
| [DrawEdge](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawedge)  DrawEdge 函数绘制矩形的一个或多个边缘。 |
| [DrawFocusRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawfocusrect)  DrawFocusRect 函数以用于指示矩形具有焦点的样式绘制矩形。 |
| [DrawFrameControl](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawframecontrol)  DrawFrameControl 函数绘制指定类型和样式的帧控件。 |
| [DrawIcon](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawicon)  将图标或光标绘制到指定的设备上下文中。 |
| [DrawIconEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawiconex)  将图标或光标绘制到指定的设备上下文中，执行指定的光栅操作，并按指定拉伸或压缩图标或光标。 |
| [DrawMenuBar](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawmenubar)  重绘指定窗口的菜单栏。 如果菜单栏在系统创建窗口后发生更改，则必须调用此函数来绘制已更改的菜单栏。 |
| [DrawStateA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawstatea)  DrawState 函数显示图像并应用视觉效果来指示状态，例如禁用或默认状态。 (ANSI) |
| [DrawStateW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawstatew)  DrawState 函数显示图像并应用视觉效果来指示状态，例如禁用或默认状态。 (Unicode) |
| [DrawText](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawtext)  DrawText 函数在指定矩形中绘制带格式的文本。 (DrawText 函数) |
| [DrawTextA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawtexta)  DrawText 函数在指定矩形中绘制带格式的文本。 它根据指定的方法格式化文本 (展开制表符、对齐字符、断行等) 。 (DrawTextA) |
| [DrawTextExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawtextexa)  DrawTextEx 函数在指定的矩形中绘制格式化文本。 (ANSI) |
| [DrawTextExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawtextexw)  DrawTextEx 函数在指定的矩形中绘制格式化文本。 (Unicode) |
| [DrawTextW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-drawtextw)  DrawTextW (Unicode) 函数在指定矩形中绘制格式化文本。 (DrawTextW 函数) |
| [EmptyClipboard](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-emptyclipboard)  清空剪贴板并释放剪贴板中的数据句柄。 然后，函数将剪贴板的所有权分配给当前已打开剪贴板的窗口。 |
| [EnableMenuItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enablemenuitem)  启用、禁用指定菜单项或将指定菜单项灰显。 |
| [EnableMouseInPointer](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enablemouseinpointer)  使鼠标充当指针输入设备并发送WM_POINTER消息。 |
| [EnableNonClientDpiScaling](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enablenonclientdpiscaling)  在高 DPI 显示器中，启用指定顶级窗口的非工作区部分的自动显示缩放。 必须在初始化该窗口期间调用。 |
| [EnableScrollBar](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enablescrollbar)  EnableScrollBar 函数启用或禁用一个或两个滚动条箭头。 |
| [EnableWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enablewindow)  启用或禁用指定窗口或控件的鼠标和键盘输入。 禁用输入时，窗口不会接收鼠标单击和按键等输入。 启用输入时，窗口会接收所有输入。 |
| [EndDeferWindowPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enddeferwindowpos)  在单个屏幕刷新周期中同时更新一个或多个窗口的位置和大小。 |
| [EndDialog](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enddialog)  销毁模式对话框，导致系统结束对对话框的任何处理。 |
| [EndMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-endmenu)  结束调用线程的活动菜单。 |
| [EndPaint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-endpaint)  EndPaint 函数在指定窗口中标记绘制的结束。 每次调用 BeginPaint 函数都需要此函数，但仅在绘制完成后。 |
| [EndTask](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-endtask)  强行关闭指定的窗口。 |
| [EnumChildWindows](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumchildwindows)  通过将句柄传递到每个子窗口，再将传递给应用程序定义的回调函数，枚举属于指定父窗口的子窗口。 |
| [EnumClipboardFormats](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumclipboardformats)  枚举剪贴板上当前可用的数据格式。 |
| [EnumDesktopsA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdesktopsa)  枚举与调用进程的指定窗口工作站关联的所有桌面。 函数将每个桌面的名称依次传递给应用程序定义的回调函数。 (ANSI) |
| [EnumDesktopsW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdesktopsw)  枚举与调用进程的指定窗口工作站关联的所有桌面。 函数将每个桌面的名称依次传递给应用程序定义的回调函数。 (Unicode) |
| [EnumDesktopWindows](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdesktopwindows)  枚举与指定桌面关联的所有顶级窗口。 它将句柄传递到每个窗口，进而传递到应用程序定义的回调函数。 |
| [EnumDisplayDevicesA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaydevicesa)  EnumDisplayDevices 函数可用于获取有关当前会话中显示设备的信息。 (ANSI) |
| [EnumDisplayDevicesW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaydevicesw)  EnumDisplayDevices 函数可用于获取有关当前会话中显示设备的信息。 (Unicode) |
| [EnumDisplayMonitors](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaymonitors)  EnumDisplayMonitors 函数枚举显示监视器 (包括与镜像驱动程序关联的不可见伪监视器) ，该监视器与指定剪辑矩形的交集所形成的区域与设备上下文的可见区域相交。 EnumDisplayMonitors 为枚举的每个监视器调用一次应用程序定义的 MonitorEnumProc 回调函数。 请注意，GetSystemMetrics (SM_CMONITORS) 仅对显示监视器进行计数。 |
| [EnumDisplaySettingsA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaysettingsa)  EnumDisplaySettings 函数检索有关显示设备的图形模式之一的信息。 若要检索显示设备的所有图形模式的信息，请对此函数进行一系列调用。 (ANSI) |
| [EnumDisplaySettingsExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaysettingsexa)  EnumDisplaySettingsEx 函数检索有关显示设备的图形模式之一的信息。 若要检索显示设备的所有图形模式的信息，请对此函数进行一系列调用。 (ANSI) |
| [EnumDisplaySettingsExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaysettingsexw)  EnumDisplaySettingsEx 函数检索有关显示设备的图形模式之一的信息。 若要检索显示设备的所有图形模式的信息，请对此函数进行一系列调用。 (Unicode) |
| [EnumDisplaySettingsW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaysettingsw)  EnumDisplaySettings 函数检索有关显示设备的图形模式之一的信息。 若要检索显示设备的所有图形模式的信息，请对此函数进行一系列调用。 (Unicode) |
| [EnumPropsA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumpropsa)  通过将窗口的属性列表中的所有条目逐个传递给指定的回调函数来枚举这些条目。 EnumProps 一直持续到枚举最后一个条目或回调函数返回 FALSE。 (ANSI) |
| [EnumPropsExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumpropsexa)  通过将窗口的属性列表中的所有条目逐个传递给指定的回调函数来枚举这些条目。 EnumPropsEx 一直持续到枚举最后一个条目或回调函数返回 FALSE。 (ANSI) |
| [EnumPropsExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumpropsexw)  通过将窗口的属性列表中的所有条目逐个传递给指定的回调函数来枚举这些条目。 EnumPropsEx 一直持续到枚举最后一个条目或回调函数返回 FALSE。 (Unicode) |
| [EnumPropsW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumpropsw)  通过将窗口的属性列表中的所有条目逐个传递给指定的回调函数来枚举这些条目。 EnumProps 一直持续到枚举最后一个条目或回调函数返回 FALSE。 (Unicode) |
| [EnumThreadWindows](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumthreadwindows)  通过将句柄传递到每个窗口，再将传递给应用程序定义的回调函数，枚举与线程关联的所有非子窗口。 |
| [EnumWindows](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumwindows)  通过将句柄传递到每个窗口，进而将传递给应用程序定义的回调函数，枚举屏幕上的所有顶级窗口。 枚举窗口将一直持续到最后一个顶级窗口被枚举或回调函数返回 FALSE。 |
| [EnumWindowStationsA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumwindowstationsa)  枚举当前会话中的所有窗口工作站。 函数将每个窗口工作站的名称依次传递给应用程序定义的回调函数。 (ANSI) |
| [EnumWindowStationsW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumwindowstationsw)  枚举当前会话中的所有窗口工作站。 函数将每个窗口工作站的名称依次传递给应用程序定义的回调函数。 (Unicode) |
| [EqualRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-equalrect)  EqualRect 函数通过比较其左上角和右下角的坐标来确定两个指定的矩形是否相等。 |
| [EvaluateProximityToPolygon](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-evaluateproximitytopolygon)  返回多边形作为可能触摸目标 (的多边形的分数，该分数与与触摸接触区) 和多边形内调整的触摸点相交的所有其他多边形相比。 |
| [EvaluateProximityToRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-evaluateproximitytorect)  与与触摸接触区域相交的所有其他矩形相比，返回矩形作为可能触摸目标的分数，以及矩形内调整的触摸点。 |
| [ExcludeUpdateRgn](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-excludeupdatergn)  ExcludeUpdateRgn 函数通过从剪辑区域中排除窗口中更新的区域，防止在窗口的无效区域中绘制。 |
| [ExitWindows](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-exitwindows)  调用 ExitWindowsEx 函数以注销交互式用户。 |
| [ExitWindowsEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-exitwindowsex)  注销交互式用户，关闭系统，或关闭并重启系统。 |
| [FillRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-fillrect)  FillRect 函数使用指定的画笔填充矩形。 此函数包括左边框和上边框，但不包括矩形的右边框和下边框。 |
| [FindWindowA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-findwindowa)  检索其类名和窗口名称与指定字符串匹配的顶级窗口的句柄。 此函数不搜索子窗口。 此函数不执行区分大小写的搜索。 (ANSI) |
| [FindWindowExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-findwindowexa)  检索其类名和窗口名称与指定字符串匹配的窗口的句柄。 函数搜索子窗口，从指定子窗口后面的子窗口开始。 此函数不执行区分大小写的搜索。 (ANSI) |
| [FindWindowExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-findwindowexw)  检索其类名和窗口名称与指定字符串匹配的窗口的句柄。 函数搜索子窗口，从指定子窗口后面的子窗口开始。 此函数不执行区分大小写的搜索。 (Unicode) |
| [FindWindowW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-findwindoww)  检索其类名和窗口名称与指定字符串匹配的顶级窗口的句柄。 此函数不搜索子窗口。 此函数不执行区分大小写的搜索。 (Unicode) |
| [FlashWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-flashwindow)  将指定的窗口闪烁一次。 它不会更改窗口的活动状态。 |
| [FlashWindowEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-flashwindowex)  闪烁指定的窗口。 它不会更改窗口的活动状态。 |
| [FrameRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-framerect)  FrameRect 函数使用指定的画笔在指定矩形周围绘制边框。 边框的宽度和高度始终是一个逻辑单元。 |
| [GET_APPCOMMAND_LPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_appcommand_lparam)  从指定的 LPARAM 值检索应用程序命令。 |
| [GET_DEVICE_LPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_device_lparam)  从指定的 LPARAM 值检索输入设备类型。 |
| [GET_FLAGS_LPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_flags_lparam)  从指定的 LPARAM 值检索某些虚拟密钥的状态。 (GET_FLAGS_LPARAM) |
| [GET_KEYSTATE_LPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_keystate_lparam)  从指定的 LPARAM 值检索某些虚拟密钥的状态。 (GET_KEYSTATE_LPARAM) |
| [GET_KEYSTATE_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_keystate_wparam)  从指定的 WPARAM 值检索某些虚拟密钥的状态。 |
| [GET_NCHITTEST_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_nchittest_wparam)  从指定的 WPARAM 值检索命中测试值。 |
| [GET_POINTERID_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_pointerid_wparam)  使用指定值检索指针 ID。 |
| [GET_RAWINPUT_CODE_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_rawinput_code_wparam)  从 WM_INPUT 中的 wParam 检索输入代码。 |
| [GET_WHEEL_DELTA_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_wheel_delta_wparam)  从指定的 WPARAM 值检索 wheel-delta 值。 |
| [GET_XBUTTON_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-get_xbutton_wparam)  从指定的 WPARAM 值检索某些按钮的状态。 |
| [GetActiveWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getactivewindow)  检索附加到调用线程消息队列中的活动窗口的句柄。 |
| [GetAltTabInfoA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getalttabinfoa)  如果指定窗口是应用程序切换 (ALT+TAB) 窗口，则检索指定窗口的状态信息。 (ANSI) |
| [GetAltTabInfoW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getalttabinfow)  如果指定窗口是应用程序切换 (ALT+TAB) 窗口，则检索指定窗口的状态信息。 (Unicode) |
| [GetAncestor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getancestor)  检索指定窗口的上级句柄。 |
| [GetAsyncKeyState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getasynckeystate)  确定调用函数时键是向上还是向下，以及上次调用 GetAsyncKeyState 后是否按下了该键。 |
| [GetAutoRotationState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getautorotationstate)  检索包含系统屏幕自动旋转状态的AR_STATE值，例如是否支持自动旋转以及用户是否启用自动旋转。 |
| [GetAwarenessFromDpiAwarenessContext](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getawarenessfromdpiawarenesscontext)  从DPI_AWARENESS_CONTEXT检索DPI_AWARENESS值。 |
| [GetCapture](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcapture)  检索任何捕获鼠标的窗口句柄（如果有）。 一次只能有一个窗口捕获鼠标；无论光标是否在其边框内，此窗口都会收到鼠标输入。 |
| [GetCaretBlinkTime](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcaretblinktime)  检索反转插入点像素所需的时间。 用户可以设置此值。 |
| [GetCaretPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcaretpos)  将插入点的位置复制到指定的 POINT 结构。 |
| [GetCIMSSM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcimssm)  (GetCurrentInputMessageSourceInSendMessage) 检索输入消息的源。 |
| [GetClassInfoA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclassinfoa)  检索有关窗口类的信息。 (ANSI) |
| [GetClassInfoExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclassinfoexa)  检索有关窗口类的信息，包括与窗口类关联的小图标的句柄。 GetClassInfo 函数不会检索小图标的句柄。 (ANSI) |
| [GetClassInfoExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclassinfoexw)  检索有关窗口类的信息，包括与窗口类关联的小图标的句柄。 GetClassInfo 函数不会检索小图标的句柄。 (Unicode) |
| [GetClassInfoW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclassinfow)  检索有关窗口类的信息。 (Unicode) |
| [GetClassLongA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclasslonga)  从与指定窗口关联的 WNDCLASSEX 结构中检索指定的 32 位 (DWORD) 值。 (ANSI) |
| [GetClassLongPtrA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclasslongptra)  从与指定窗口关联的 WNDCLASSEX 结构中检索指定值。 (ANSI) |
| [GetClassLongPtrW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclasslongptrw)  从与指定窗口关联的 WNDCLASSEX 结构中检索指定值。 (Unicode) |
| [GetClassLongW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclasslongw)  从与指定窗口关联的 WNDCLASSEX 结构中检索指定的 32 位 (DWORD) 值。 (Unicode) |
| [GetClassName](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclassname)  GetClassName 函数检索指定窗口所属的类的名称。 (GetClassName) |
| [GetClassNameA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclassnamea)  检索指定窗口所属的类的名称。 (GetClassNameA) |
| [GetClassNameW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclassnamew)  GetClassNameW (Unicode) 函数检索指定窗口所属的类的名称。 (GetClassNameW) |
| [GetClassWord](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclassword)  将指定偏移量处的 16 位 (WORD) 值检索到指定窗口所属的窗口类的额外类内存中。 |
| [GetClientRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclientrect)  检索窗口工作区的坐标。 |
| [GetClipboardData](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclipboarddata)  从剪贴板中检索指定格式的数据。 剪贴板之前必须已打开。 |
| [GetClipboardFormatNameA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclipboardformatnamea)  从剪贴板检索指定注册格式的名称。 函数将名称复制到指定的缓冲区。 (ANSI) |
| [GetClipboardFormatNameW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclipboardformatnamew)  从剪贴板检索指定注册格式的名称。 函数将名称复制到指定的缓冲区。 (Unicode) |
| [GetClipboardOwner](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclipboardowner)  检索剪贴板当前所有者的窗口句柄。 |
| [GetClipboardSequenceNumber](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclipboardsequencenumber)  检索当前窗口工作站的剪贴板序列号。 |
| [GetClipboardViewer](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclipboardviewer)  检索剪贴板查看器链中第一个窗口的句柄。 |
| [GetClipCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclipcursor)  检索光标所限制的矩形区域的屏幕坐标。 |
| [GetComboBoxInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcomboboxinfo)  检索有关指定组合框的信息。 |
| [GetCurrentInputMessageSource](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcurrentinputmessagesource)  检索输入消息的源。 |
| [GetCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcursor)  检索当前游标的句柄。 |
| [GetCursorInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcursorinfo)  检索有关全局游标的信息。 |
| [GetCursorPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getcursorpos)  检索鼠标光标的位置（以屏幕坐标为单位）。 |
| [GetDC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdc)  GetDC 函数检索指定窗口的工作区或整个屏幕的设备上下文 (DC) 的句柄。 |
| [GetDCEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdcex)  GetDCEx 函数检索指定窗口的工作区或整个屏幕的设备上下文 (DC) 的句柄。 |
| [GetDesktopWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdesktopwindow)  检索桌面窗口的句柄。 桌面窗口覆盖整个屏幕。 桌面窗口是在上面绘制其他窗口的区域。 |
| [GetDialogBaseUnits](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdialogbaseunits)  检索系统的对话框基单位，即系统字体中字符的平均宽度和高度。 |
| [GetDialogControlDpiChangeBehavior](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdialogcontroldpichangebehavior)  检索对话框中子窗口的 DPI 缩放行为替代并按监视器进行替代。 |
| [GetDialogDpiChangeBehavior](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdialogdpichangebehavior)  返回先前调用 SetDialogDpiChangeBehavior 时可能在给定对话上设置的标志。 |
| [GetDisplayAutoRotationPreferences](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdisplayautorotationpreferences)  检索当前进程的屏幕自动旋转首选项。 |
| [GetDisplayAutoRotationPreferencesByProcessId](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdisplayautorotationpreferencesbyprocessid)  检索 dwProcessId 参数指示的进程的屏幕自动旋转首选项。 |
| [GetDisplayConfigBufferSizes](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdisplayconfigbuffersizes)  GetDisplayConfigBufferSizes 函数检索调用 QueryDisplayConfig 函数所需的缓冲区大小。 |
| [GetDlgCtrlID](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdlgctrlid)  检索指定控件的标识符。 |
| [GetDlgItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdlgitem)  检索指定对话框中控件的句柄。 |
| [GetDlgItemInt](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdlgitemint)  将对话框中指定控件的文本转换为整数值。 |
| [GetDlgItemTextA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdlgitemtexta)  检索与对话框中的控件关联的标题或文本。 (ANSI) |
| [GetDlgItemTextW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdlgitemtextw)  检索与对话框中的控件关联的标题或文本。 (Unicode) |
| [GetDoubleClickTime](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdoubleclicktime)  检索鼠标的当前双击时间。 |
| [GetDpiAwarenessContextForProcess](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdpiawarenesscontextforprocess)  获取指定进程的DPI_AWARENESS_CONTEXT句柄。 |
| [GetDpiForSystem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdpiforsystem)  返回系统 DPI。 |
| [GetDpiForWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdpiforwindow)  返回指定窗口的每英寸点数 (dpi) 值。 |
| [GetDpiFromDpiAwarenessContext](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdpifromdpiawarenesscontext)  从给定DPI_AWARENESS_CONTEXT句柄检索 DPI。 这使你可以确定线程的 DPI，而无需检查在该线程中创建的窗口。 |
| [GetFocus](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getfocus)  如果窗口附加到调用线程的消息队列，则检索具有键盘焦点的窗口的句柄。 |
| [GetForegroundWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getforegroundwindow)  检索前台窗口的句柄， (用户当前正在使用) 窗口。 系统为创建前台窗口的线程分配的优先级略高于其他线程的优先级。 |
| [GetGestureConfig](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getgestureconfig)  检索从窗口发送 Windows 触控手势消息的配置。 |
| [GetGestureExtraArgs](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getgestureextraargs)  从手势的 GESTUREINFO 句柄中检索有关手势的其他信息。 |
| [GetGestureInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getgestureinfo)  检索给定手势信息的句柄的 GESTUREINFO 结构。 |
| [GetGuiResources](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getguiresources)  检索图形用户界面 (GUI) 指定进程正在使用的对象的句柄计数。 |
| [GetGUIThreadInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getguithreadinfo)  检索有关活动窗口或指定 GUI 线程的信息。 |
| [GetIconInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-geticoninfo)  检索有关指定图标或光标的信息。 |
| [GetIconInfoExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-geticoninfoexa)  检索有关指定图标或光标的信息。 GetIconInfoEx 使用更新的 ICONINFOEX 结构扩展 GetIconInfo。 (ANSI) |
| [GetIconInfoExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-geticoninfoexw)  检索有关指定图标或光标的信息。 GetIconInfoEx 使用更新的 ICONINFOEX 结构扩展 GetIconInfo。 (Unicode) |
| [GetInputState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getinputstate)  确定调用线程的消息队列中是否存在鼠标按钮或键盘消息。 |
| [GetKBCodePage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkbcodepage)  检索当前代码页。 |
| [GetKeyboardLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayout)  检索以前称为键盘布局) (活动输入区域设置标识符。 |
| [GetKeyboardLayoutList](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutlist)  检索与系统中的当前输入区域设置集相对应的输入区域设置标识符（以前称为键盘布局句柄）。 该函数将标识符复制到指定的缓冲区。 |
| [GetKeyboardLayoutNameA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutnamea)  检索活动输入区域设置标识符的名称， (调用线程以前称为键盘布局) 。 (ANSI) |
| [GetKeyboardLayoutNameW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutnamew)  检索活动输入区域设置标识符的名称， (调用线程以前称为键盘布局) 。 (Unicode) |
| [GetKeyboardState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardstate)  将 256 个虚拟密钥的状态复制到指定的缓冲区。 |
| [GetKeyboardType](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeyboardtype)  检索有关当前键盘的信息。 |
| [GetKeyNameTextA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeynametexta)  检索表示键的名称的字符串。 (ANSI) |
| [GetKeyNameTextW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeynametextw)  检索表示键的名称的字符串。 (Unicode) |
| [GetKeyState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getkeystate)  检索指定虚拟键的状态。 状态指定在每次按下键) 时，键是向上、向下还是切换 (打开、关闭。 |
| [GetLastActivePopup](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getlastactivepopup)  确定指定窗口拥有的哪个弹出窗口最近处于活动状态。 |
| [GetLastInputInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getlastinputinfo)  检索最后一个输入事件的时间。 |
| [GetLayeredWindowAttributes](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getlayeredwindowattributes)  检索分层窗口的不透明度和透明度颜色键。 |
| [GetListBoxInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getlistboxinfo)  检索指定列表框中每列的项数。 |
| [获取菜单](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenu)  检索分配给指定窗口的菜单的句柄。 |
| [GetMenuBarInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenubarinfo)  检索有关指定的菜单栏的信息。 |
| [GetMenuCheckMarkDimensions](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenucheckmarkdimensions)  检索默认检查标记位图的尺寸。 |
| [GetMenuContextHelpId](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenucontexthelpid)  检索与指定菜单关联的帮助上下文标识符。 |
| [GetMenuDefaultItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenudefaultitem)  确定指定菜单上的默认菜单项。 |
| [GetMenuInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenuinfo)  检索有关指定菜单的信息。 |
| [GetMenuItemCount](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenuitemcount)  确定指定菜单中的项数。 |
| [GetMenuItemID](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenuitemid)  检索位于菜单中指定位置的菜单项的菜单项标识符。 |
| [GetMenuItemInfoA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenuiteminfoa)  检索有关菜单项的信息。 (ANSI) |
| [GetMenuItemInfoW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenuiteminfow)  检索有关菜单项的信息。 (Unicode) |
| [GetMenuItemRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenuitemrect)  检索指定菜单项的边框。 |
| [GetMenuState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenustate)  检索与指定菜单项关联的菜单标志。 |
| [GetMenuStringA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenustringa)  将指定菜单项的文本字符串复制到指定的缓冲区中。 (ANSI) |
| [GetMenuStringW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmenustringw)  将指定菜单项的文本字符串复制到指定的缓冲区中。 (Unicode) |
| [GetMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessage)  GetMessage 函数从调用线程的消息队列中检索消息。 (GetMessage) |
| [GetMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessagea)  从调用线程的消息队列中检索消息。 函数调度传入的已发送消息，直到已发布的消息可供检索。 (GetMessageA) |
| [GetMessageExtraInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessageextrainfo)  检索当前线程的额外消息信息。 额外消息信息是与当前线程的消息队列关联的应用程序或驱动程序定义的值。 |
| [GetMessagePos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessagepos)  检索 GetMessage 函数检索的最后一条消息的游标位置。 |
| [GetMessageTime](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessagetime)  检索 GetMessage 函数检索的最后一条消息的消息时间。 |
| [GetMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessagew)  GetMessageW 函数 (Unicode) 从调用线程的消息队列中检索消息。 (GetMessageW) |
| [GetMonitorInfoA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmonitorinfoa)  GetMonitorInfo 函数检索有关显示监视器的信息。 (ANSI) |
| [GetMonitorInfoW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmonitorinfow)  GetMonitorInfo 函数检索有关显示监视器的信息。 (Unicode) |
| [GetMouseMovePointsEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmousemovepointsex)  检索最多 64 个鼠标或笔的先前坐标的历史记录。 |
| [GetNextDlgGroupItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getnextdlggroupitem)  检索一组控件中第一个控件的句柄，该控件位于 (或) 对话框中的指定控件之后。 |
| [GetNextDlgTabItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getnextdlgtabitem)  检索具有WS_TABSTOP样式的第一个控件的句柄，该样式位于 (或) 指定控件之后。 |
| [GetNextWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getnextwindow)  检索 Z 顺序中下一个或上一个窗口的句柄。 下一个窗口位于指定窗口下方;上一个窗口位于上面。 |
| [GetOpenClipboardWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getopenclipboardwindow)  检索当前已打开剪贴板的窗口的句柄。 |
| [GetParent](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getparent)  检索指定窗口的父或所有者的句柄。 |
| [GetPhysicalCursorPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getphysicalcursorpos)  检索光标在物理坐标中的位置。 |
| [GetPointerCursorId](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointercursorid)  检索与指定指针关联的游标标识符。 |
| [GetPointerDevice](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerdevice)  获取有关指针设备的信息。 |
| [GetPointerDeviceCursors](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerdevicecursors)  获取映射到与指针设备关联的游标的游标 ID。 |
| [GetPointerDeviceProperties](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerdeviceproperties)  获取未包含在 POINTER_DEVICE_INFO 结构中的设备属性。 |
| [GetPointerDeviceRects](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerdevicerects)  获取指针设备 (高) 的 x 和 y 范围，以及指针设备映射到的显示器 (当前分辨率) x 和 y 范围。 |
| [GetPointerDevices](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerdevices)  获取有关附加到系统的指针设备的信息。 |
| [GetPointerFrameInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerframeinfo)  获取与当前消息关联的指定指针的整个信息帧。 |
| [GetPointerFrameInfoHistory](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerframeinfohistory)  获取整个信息帧， (包括与当前消息关联的指定指针) 合并的输入帧。 |
| [GetPointerFramePenInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerframepeninfo)  获取与当前消息关联的指定指针 (类型PT_PEN) 的整个基于笔的信息帧。 |
| [GetPointerFramePenInfoHistory](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerframepeninfohistory)  获取基于笔的信息的整个帧， (包括与当前消息关联的指定指针 (PT_PEN) 的合并输入) 帧。 |
| [GetPointerFrameTouchInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerframetouchinfo)  获取与当前消息关联的PT_TOUCH) 类型 (的指定指针的基于触摸的信息的整个帧。 |
| [GetPointerFrameTouchInfoHistory](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerframetouchinfohistory)  获取基于触摸的信息的整个帧， (包括与当前消息关联的指定指针 (PT_TOUCH) 的合并输入帧) 。 |
| [GetPointerInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerinfo)  获取与当前消息关联的指定指针的信息。 |
| [GetPointerInfoHistory](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerinfohistory)  获取与合并到指定指针的当前消息中的单个输入（如果有）关联的信息。 |
| [GetPointerInputTransform](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerinputtransform)  获取与当前消息关联的指针信息坐标的一个或多个转换。 |
| [GetPointerPenInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerpeninfo)  获取与当前消息关联的类型PT_PEN) 的指定指针 (的基于笔的信息。 |
| [GetPointerPenInfoHistory](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointerpeninfohistory)  获取与PT_PEN) 类型的指定指针 (的当前消息（如果有）关联的基于笔的信息（如果有）。 |
| [GetPointerTouchInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointertouchinfo)  获取与当前消息关联的类型PT_TOUCH) 的指定指针 (的基于触摸的信息。 |
| [GetPointerTouchInfoHistory](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointertouchinfohistory)  获取与PT_TOUCH) 类型的指定指针 (的当前消息（如果有）关联的基于触摸的信息。 |
| [GetPointerType](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpointertype)  检索指定指针的指针类型。 |
| [GetPriorityClipboardFormat](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpriorityclipboardformat)  检索指定列表中的第一个可用剪贴板格式。 |
| [GetProcessDefaultLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getprocessdefaultlayout)  检索在没有父级或所有者的情况下创建窗口时使用的默认布局。 |
| [GetProcessWindowStation](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getprocesswindowstation)  检索调用进程的当前窗口工作站的句柄。 |
| [GetPropA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpropa)  从指定窗口的属性列表中检索数据句柄。 字符串标识要检索的句柄。 字符串和句柄必须已通过对 SetProp 函数的先前调用添加到属性列表。 (ANSI) |
| [GetPropW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getpropw)  从指定窗口的属性列表中检索数据句柄。 字符串标识要检索的句柄。 字符串和句柄必须已通过对 SetProp 函数的先前调用添加到属性列表。 (Unicode) |
| [GetQueueStatus](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getqueuestatus)  检索在调用线程的消息队列中找到的消息类型。 |
| [GetRawInputBuffer](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getrawinputbuffer)  对原始输入数据执行缓冲读取。 |
| [GetRawInputData](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getrawinputdata)  从指定设备检索原始输入。 |
| [GetRawInputDeviceInfoA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getrawinputdeviceinfoa)  检索有关原始输入设备的信息。 (ANSI) |
| [GetRawInputDeviceInfoW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getrawinputdeviceinfow)  检索有关原始输入设备的信息。 (Unicode) |
| [GetRawInputDeviceList](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getrawinputdevicelist)  枚举附加到系统的原始输入设备。 |
| [GetRawPointerDeviceData](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getrawpointerdevicedata)  从指针设备获取原始输入数据。 |
| [GetRegisteredRawInputDevices](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getregisteredrawinputdevices)  检索有关当前应用程序的原始输入设备的信息。 |
| [GetScrollBarInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getscrollbarinfo)  GetScrollBarInfo 函数检索有关指定滚动条的信息。 |
| [GetScrollInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getscrollinfo)  GetScrollInfo 函数检索滚动条的参数，包括最小和最大滚动位置、页面大小以及滚动框 (thumb) 的位置。 |
| [GetScrollPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getscrollpos)  GetScrollPos 函数在指定的滚动条中 (thumb) 检索滚动框的当前位置。 |
| [GetScrollRange](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getscrollrange)  GetScrollRange 函数检索当前最小和最大滚动框 (thumb) 指定滚动条的位置。 |
| [GetShellWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getshellwindow)  检索 Shell 桌面窗口的句柄。 |
| [GetSubMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getsubmenu)  检索由指定菜单项激活的下拉菜单或子菜单的句柄。 |
| [GetSysColor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getsyscolor)  检索指定显示元素的当前颜色。 |
| [GetSysColorBrush](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getsyscolorbrush)  GetSysColorBrush 函数检索标识与指定颜色索引相对应的逻辑画笔的句柄。 |
| [GetSystemDpiForProcess](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getsystemdpiforprocess)  检索与给定进程关联的系统 DPI。 这可用于避免在具有不同系统 DPI 值的多个系统感知进程之间共享 DPI 敏感信息导致的兼容性问题。 |
| [GetSystemMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getsystemmenu)  使应用程序能够访问窗口菜单 (也称为系统菜单或控件菜单) 进行复制和修改。 |
| [GetSystemMetrics](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getsystemmetrics)  检索指定的系统指标或系统配置设置。 |
| [GetSystemMetricsForDpi](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getsystemmetricsfordpi)  检索指定的系统指标或系统配置设置，同时考虑提供的 DPI。 |
| [GetTabbedTextExtentA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gettabbedtextextenta)  GetTabbedTextExtent 函数计算字符串的宽度和高度。 (ANSI) |
| [GetTabbedTextExtentW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gettabbedtextextentw)  GetTabbedTextExtent 函数计算字符串的宽度和高度。 (Unicode) |
| [GetThreadDesktop](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getthreaddesktop)  检索分配给指定线程的桌面的句柄。 |
| [GetThreadDpiAwarenessContext](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getthreaddpiawarenesscontext)  获取当前线程的DPI_AWARENESS_CONTEXT。 |
| [GetThreadDpiHostingBehavior](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getthreaddpihostingbehavior)  从当前线程检索DPI_HOSTING_BEHAVIOR。 |
| [GetTitleBarInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gettitlebarinfo)  检索有关指定标题栏的信息。 |
| [GetTopWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gettopwindow)  检查与指定父窗口关联的子窗口的 Z 顺序，并检索 Z 顺序顶部子窗口的句柄。 |
| [GetTouchInputInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gettouchinputinfo)  检索有关与特定触摸输入句柄关联的触摸输入的详细信息。 |
| [GetUnpredictedMessagePos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getunpredictedmessagepos)  在完成触摸预测处理之前获取指针数据。 |
| [GetUpdatedClipboardFormats](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getupdatedclipboardformats)  检索当前支持的剪贴板格式。 |
| [GetUpdateRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getupdaterect)  GetUpdateRect 函数检索完全包围指定窗口更新区域的最小矩形的坐标。 |
| [GetUpdateRgn](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getupdatergn)  GetUpdateRgn 函数通过将窗口的更新区域复制到指定区域来检索该窗口的更新区域。 更新区域的坐标相对于窗口的左上角 (即，它们是) 的客户端坐标。 |
| [GetUserObjectInformationA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getuserobjectinformationa)  检索有关指定窗口工作站或桌面对象的信息。 (ANSI) |
| [GetUserObjectInformationW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getuserobjectinformationw)  检索有关指定窗口工作站或桌面对象的信息。 (Unicode) |
| [GetUserObjectSecurity](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getuserobjectsecurity)  检索指定用户对象的安全信息。 |
| [GetWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindow)  检索具有指定关系 (Z-Order 或所有者) 到指定窗口的窗口的句柄。 |
| [GetWindowContextHelpId](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowcontexthelpid)  检索与指定窗口关联的帮助上下文标识符（如果有）。 |
| [GetWindowDC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowdc)  GetWindowDC 函数检索整个窗口（包括标题栏、菜单和滚动条） (DC) 的设备上下文。 |
| [GetWindowDisplayAffinity](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowdisplayaffinity)  从任何进程中检索给定窗口的当前显示相关性设置。 |
| [GetWindowDpiAwarenessContext](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowdpiawarenesscontext)  返回与窗口关联的DPI_AWARENESS_CONTEXT。 |
| [GetWindowDpiHostingBehavior](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowdpihostingbehavior)  返回指定窗口的DPI_HOSTING_BEHAVIOR。 |
| [GetWindowFeedbackSetting](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowfeedbacksetting)  检索窗口的反馈配置。 |
| [GetWindowInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowinfo)  检索有关指定窗口的信息。 (GetWindowInfo) |
| [GetWindowLongA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowlonga)  检索有关指定窗口的信息。 (GetWindowLongA) |
| [GetWindowLongPtrA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowlongptra)  检索有关指定窗口的信息。 函数还会将指定偏移量的值检索到额外的窗口内存中。 (ANSI) |
| [GetWindowLongPtrW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowlongptrw)  检索有关指定窗口的信息。 该函数还会将指定偏移量的值检索到额外的窗口内存中。 (Unicode) |
| [GetWindowLongW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowlongw)  检索有关指定窗口的信息。 (GetWindowLongW) |
| [GetWindowModuleFileNameA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowmodulefilenamea)  检索与指定窗口句柄关联的模块的完整路径和文件名。 (ANSI) |
| [GetWindowModuleFileNameW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowmodulefilenamew)  检索与指定窗口句柄关联的模块的完整路径和文件名。 (Unicode) |
| [GetWindowPlacement](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowplacement)  检索指定窗口的显示状态以及已还原、最小化和最大化的位置。 |
| [GetWindowRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowrect)  检索指定窗口的边框的尺寸。 尺寸以相对于屏幕左上角的屏幕坐标提供。 |
| [GetWindowRgn](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowrgn)  GetWindowRgn 函数获取窗口的窗口区域的副本。 |
| [GetWindowRgnBox](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowrgnbox)  GetWindowRgnBox 函数检索窗口窗口区域最紧密边框的尺寸。 |
| [GetWindowTextA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowtexta)  如果指定窗口的标题栏有一个) 到缓冲区中，则复制指定窗口标题栏的文本 (。 如果指定的窗口是控件，则复制控件的文本。 但是，GetWindowText 无法检索另一个应用程序中控件的文本。 (ANSI) |
| [GetWindowTextLengthA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowtextlengtha)  检索指定窗口的标题栏文本 (的长度（以字符为单位），如果窗口具有标题栏) 。 (ANSI) |
| [GetWindowTextLengthW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowtextlengthw)  检索指定窗口的标题栏文本 (的长度（以字符为单位），如果窗口具有标题栏) 。 (Unicode) |
| [GetWindowTextW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowtextw)  如果指定窗口的标题栏有一个) 到缓冲区中，则复制指定窗口标题栏的文本 (。 如果指定的窗口是控件，则复制控件的文本。 但是，GetWindowText 无法检索另一个应用程序中控件的文本。 (Unicode) |
| [GetWindowThreadProcessId](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowthreadprocessid)  检索创建指定窗口的线程的标识符，以及创建该窗口的进程（可选）的标识符。 |
| [GetWindowWord](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowword)  检索 16 位 (**DWORD**) 指定偏移量到额外窗口记忆中的值 |
| [GID_ROTATE_ANGLE_FROM_ARGUMENT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gid_rotate_angle_from_argument)  GID_ROTATE_ANGLE_FROM_ARGUMENT 宏用于在接收 WM_GESTURE 结构中的值时解释 GID_ROTATE ullArgument 值。 |
| [GID_ROTATE_ANGLE_TO_ARGUMENT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gid_rotate_angle_to_argument)  将弧度值转换为旋转手势消息的参数。 |
| [GrayStringA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-graystringa)  GrayString 函数在指定位置绘制灰色文本。 (ANSI) |
| [GrayStringW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-graystringw)  GrayString 函数在指定位置绘制灰色文本。 (Unicode) |
| [HAS_POINTER_CONFIDENCE_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-has_pointer_confidence_wparam)  检查指定的指针消息是否被视为有意的，而不是意外的。 |
| [HideCaret](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-hidecaret)  从屏幕中删除插入点。 隐藏插入点不会破坏其当前形状或使插入点失效。 |
| [HiliteMenuItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-hilitemenuitem)  在菜单栏中的项中添加或删除突出显示。 |
| [InflateRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-inflaterect)  InflateRect 函数增加或减小指定矩形的宽度和高度。 |
| [InheritWindowMonitor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-inheritwindowmonitor)  使指定窗口继承另一个窗口的监视器。 |
| [InitializeTouchInjection](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-initializetouchinjection)  配置调用应用程序的触摸注入上下文，并初始化应用可以注入的最大同时触点数。 |
| [InjectSyntheticPointerInput](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-injectsyntheticpointerinput)  模拟笔或触摸) (指针输入。 |
| [InjectTouchInput](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-injecttouchinput)  模拟触摸输入。 |
| [InSendMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-insendmessage)  确定当前窗口过程正在处理从同一进程中的另一个线程 (发送的消息，还是通过调用 SendMessage 函数) 不同的进程发送的消息。 |
| [InSendMessageEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-insendmessageex)  确定当前窗口过程正在处理从同一进程中的另一个线程 (发送的消息，还是处理其他进程) 。 |
| [InsertMenuA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-insertmenua)  将新的菜单项插入到菜单中，将其他项向下移动菜单。 (ANSI) |
| [InsertMenuItemA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-insertmenuitema)  在菜单中的指定位置插入新菜单项。 (ANSI) |
| [InsertMenuItemW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-insertmenuitemw)  在菜单中的指定位置插入新菜单项。 (Unicode) |
| [InsertMenuW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-insertmenuw)  将新的菜单项插入到菜单中，将其他项向下移动菜单。 (Unicode) |
| [InternalGetWindowText](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-internalgetwindowtext)  如果指定窗口的标题栏有一个) 到缓冲区中，则复制指定窗口标题栏的文本 (。 |
| [IntersectRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-intersectrect)  IntersectRect 函数计算两个源矩形的交集，并将交集矩形的坐标放入目标矩形中。 |
| [InvalidateRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-invalidaterect)  InvalidateRect 函数将矩形添加到指定窗口的更新区域。 更新区域表示必须重绘的窗口工作区部分。 |
| [InvalidateRgn](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-invalidatergn)  InvalidateRgn 函数通过将指定区域中的工作区添加到窗口的当前更新区域来使其失效。 |
| [InvertRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-invertrect)  InvertRect 函数通过对矩形内部中每个像素的颜色值执行逻辑 NOT 运算来反转窗口中的矩形。 |
| [IS_INTRESOURCE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_intresource)  确定值是否为资源的整数标识符。 |
| [IS_POINTER_CANCELED_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_canceled_wparam)  检查指定的指针输入是突然结束还是无效，指示交互未完成。 |
| [IS_POINTER_FIFTHBUTTON_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_fifthbutton_wparam)  检查指定的指针是否执行了第五个操作。 |
| [IS_POINTER_FIRSTBUTTON_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_firstbutton_wparam)  检查指定的指针是否执行了第一个操作。 |
| [IS_POINTER_FLAG_SET_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_flag_set_wparam)  检查指针宏是否设置指定的标志。 |
| [IS_POINTER_FOURTHBUTTON_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_fourthbutton_wparam)  检查指定的指针是否执行了第四个操作。 |
| [IS_POINTER_INCONTACT_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_incontact_wparam)  检查指定的指针是否处于接触中。 |
| [IS_POINTER_INRANGE_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_inrange_wparam)  检查指定的指针是否在范围内。 |
| [IS_POINTER_NEW_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_new_wparam)  检查指定的指针是否为新指针。 |
| [IS_POINTER_PRIMARY_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_primary_wparam)  检查指定的指针是否执行了主要操作。 |
| [IS_POINTER_SECONDBUTTON_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_secondbutton_wparam)  检查指定的指针是否执行了第二个操作。 |
| [IS_POINTER_THIRDBUTTON_WPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-is_pointer_thirdbutton_wparam)  检查指定的指针是否执行了第三个操作。 |
| [IsCharAlphaA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischaralphaa)  确定字符是否为字母字符。 此确定基于用户在设置期间或通过控制面板选择的语言的语义。 (ANSI) |
| [IsCharAlphaNumericA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischaralphanumerica)  确定字符是字母字符还是数字字符。 此确定基于用户在设置期间或通过控制面板选择的语言的语义。 (ANSI) |
| [IsCharAlphaNumericW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischaralphanumericw)  确定字符是字母字符还是数字字符。 此确定基于用户在设置期间或通过控制面板选择的语言的语义。 (Unicode) |
| [IsCharAlphaW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischaralphaw)  确定字符是否为字母字符。 此确定基于用户在设置期间或通过控制面板选择的语言的语义。 (Unicode) |
| [IsCharLowerA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischarlowera)  确定字符是否为小写。 此确定基于用户在设置期间或通过控制面板选择的语言的语义。 |
| [IsCharLowerW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischarlowerw)  IsCharLowerW (Unicode) 函数确定字符是否为小写。 (IsCharLowerW) |
| [IsCharUpperA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischaruppera)  确定字符是否为大写。 此确定基于用户在设置期间或通过控制面板选择的语言的语义。 (ANSI) |
| [IsCharUpperW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischarupperw)  确定字符是否为大写。 此确定基于用户在设置期间或通过控制面板选择的语言的语义。 (Unicode) |
| [IsChild](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischild)  确定窗口是指定父窗口的子窗口还是子窗口。 |
| [IsClipboardFormatAvailable](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isclipboardformatavailable)  确定剪贴板是否包含指定格式的数据。 |
| [IsDialogMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isdialogmessagea)  确定消息是否适用于指定的对话框，如果是，则处理该消息。 (ANSI) |
| [IsDialogMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isdialogmessagew)  确定消息是否适用于指定的对话框，如果是，则处理该消息。 (Unicode) |
| [IsDlgButtonChecked](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isdlgbuttonchecked)  IsDlgButtonChecked 函数确定是选中按钮控件，还是选中、未选中还是不确定三态按钮控件。 |
| [IsGUIThread](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isguithread)  确定调用线程是否已经是 GUI 线程。 它还可以选择将线程转换为 GUI 线程。 |
| [IsHungAppWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ishungappwindow)  确定系统是否认为指定的应用程序没有响应。 |
| [IsIconic](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isiconic)  确定指定的窗口是否最小化 (图标) 。 |
| [IsImmersiveProcess](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isimmersiveprocess)  确定进程是否属于 Windows 应用商店应用。 |
| [IsMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ismenu)  确定句柄是否为菜单句柄。 |
| [IsMouseInPointerEnabled](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ismouseinpointerenabled)  指示是否将 EnableMouseInPointer 设置为鼠标充当指针输入设备并发送WM_POINTER消息。 |
| [IsProcessDPIAware](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isprocessdpiaware)  IsProcessDPIAware 可能已更改或不可用。 请改用 GetProcessDPIAwareness。 |
| [IsRectEmpty](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isrectempty)  IsRectEmpty 函数确定指定的矩形是否为空。 |
| [IsTouchWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-istouchwindow)  检查指定的窗口是否支持触摸，并（可选）检索为窗口的触摸功能设置的修饰符标志。 |
| [IsValidDpiAwarenessContext](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isvaliddpiawarenesscontext)  确定指定的DPI_AWARENESS_CONTEXT是否有效且受当前系统支持。 |
| [IsWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindow)  确定指定的窗口句柄是否标识现有窗口。 |
| [IsWindowArranged](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindowarranged)  确定指定窗口是否 (排列，即是否贴靠) 。 |
| [IsWindowEnabled](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindowenabled)  确定是否针对鼠标和键盘输入启用指定的窗口。 |
| [IsWindowUnicode](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindowunicode)  确定指定的窗口是否为本机 Unicode 窗口。 |
| [IsWindowVisible](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindowvisible)  确定指定窗口的可见性状态。 |
| [IsWinEventHookInstalled](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswineventhookinstalled)  确定是否有一个已安装的 WinEvent 挂钩，该挂钩可能会收到指定事件的通知。 |
| [IsWow64Message](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswow64message)  确定从当前线程队列中读取的最后一条消息是否源自 WOW64 进程。 |
| [IsZoomed](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iszoomed)  确定是否最大化窗口。 |
| [keybd_event](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-keybd_event)  合成键击。 |
| [KillTimer](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-killtimer)  销毁指定的计时器。 |
| [LoadAcceleratorsA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadacceleratorsa)  加载指定的快捷键表。 (ANSI) |
| [LoadAcceleratorsW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadacceleratorsw)  加载指定的快捷键表。 (Unicode) |
| [LoadBitmapA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadbitmapa)  LoadBitmap 函数从模块的可执行文件加载指定的位图资源。 (ANSI) |
| [LoadBitmapW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadbitmapw)  LoadBitmap 函数从模块的可执行文件加载指定的位图资源。 (Unicode) |
| [LoadCursorA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadcursora)  从与应用程序实例关联的可执行 (.EXE) 文件加载指定的游标资源。 (ANSI) |
| [LoadCursorFromFileA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadcursorfromfilea)  基于文件中包含的数据创建游标。 (ANSI) |
| [LoadCursorFromFileW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadcursorfromfilew)  基于文件中包含的数据创建游标。 (Unicode) |
| [LoadCursorW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadcursorw)  从与应用程序实例关联的可执行 (.EXE) 文件加载指定的游标资源。 (Unicode) |
| [LoadIconA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadicona)  从与应用程序实例关联的可执行 (.exe) 文件加载指定的图标资源。 (ANSI) |
| [LoadIconW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadiconw)  从与应用程序实例关联的可执行 (.exe) 文件加载指定的图标资源。 (Unicode) |
| [LoadImageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadimagea)  加载图标、光标、动画光标或位图。 (ANSI) |
| [LoadImageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadimagew)  加载图标、光标、动画光标或位图。 (Unicode) |
| [LoadKeyboardLayoutA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadkeyboardlayouta)  将新的输入区域设置标识符（以前称为键盘布局）加载到系统中。 (ANSI) |
| [LoadKeyboardLayoutW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadkeyboardlayoutw)  将新的输入区域设置标识符（以前称为键盘布局）加载到系统中。 (Unicode) |
| [LoadMenuA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadmenua)  从与应用程序实例关联的可执行 (.exe) 文件加载指定的菜单资源。 (ANSI) |
| [LoadMenuIndirectA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadmenuindirecta)  在内存中加载指定的菜单模板。 (ANSI) |
| [LoadMenuIndirectW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadmenuindirectw)  在内存中加载指定的菜单模板。 (Unicode) |
| [LoadMenuW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadmenuw)  从与应用程序实例关联的可执行 (.exe) 文件加载指定的菜单资源。 (Unicode) |
| [LoadStringA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadstringa)  从与指定模块关联的可执行文件加载字符串资源，将该字符串复制到缓冲区中，并追加终止 null 字符。 (ANSI) |
| [LoadStringW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-loadstringw)  从与指定模块关联的可执行文件加载字符串资源，将该字符串复制到缓冲区中，并追加终止 null 字符。 (Unicode) |
| [LockSetForegroundWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-locksetforegroundwindow)  前台进程可以调用 LockSetForegroundWindow 函数来禁用对 SetForegroundWindow 函数的调用。 |
| [LockWindowUpdate](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-lockwindowupdate)  LockWindowUpdate 函数禁用或启用指定窗口中的绘图。 一次只能锁定一个窗口。 |
| [LockWorkStation](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-lockworkstation)  锁定工作站的显示器。 |
| [LogicalToPhysicalPoint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-logicaltophysicalpoint)  将窗口中点的逻辑坐标转换为物理坐标。 |
| [LogicalToPhysicalPointForPerMonitorDPI](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-logicaltophysicalpointforpermonitordpi)  将窗口中的点从逻辑坐标转换为物理坐标，而不考虑每英寸点数 (dpi) 调用方感知。 |
| [LookupIconIdFromDirectory](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-lookupiconidfromdirectory)  在图标或光标数据中搜索最适合当前显示设备的图标或光标。 (LookupIconIdFromDirectory) |
| [LookupIconIdFromDirectoryEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-lookupiconidfromdirectoryex)  在图标或光标数据中搜索最适合当前显示设备的图标或光标。 (LookupIconIdFromDirectoryEx) |
| [MAKEINTRESOURCEA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-makeintresourcea)  将整数值转换为与资源管理功能兼容的资源类型。 此宏用于代替包含资源名称的字符串。 (ANSI) |
| [MAKEINTRESOURCEW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-makeintresourcew)  将整数值转换为与资源管理功能兼容的资源类型。 此宏用于代替包含资源名称的字符串。 (Unicode) |
| [MAKELPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-makelparam)  创建一个值，用作消息中的 lParam 参数。 宏连接指定的值。 |
| [MAKELRESULT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-makelresult)  创建一个值，用作窗口过程中的返回值。 宏连接指定的值。 |
| [MAKEWPARAM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-makewparam)  创建一个值，用作消息中的 wParam 参数。 宏连接指定的值。 |
| [MapDialogRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapdialogrect)  将指定的对话框单位转换为屏幕单位 (像素) 。 |
| [MapVirtualKeyA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeya)  将虚拟键代码转换为（映射到）扫描代码或字符值，或将扫描代码转换为虚拟键代码。 (ANSI) |
| [MapVirtualKeyExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeyexa)  将虚拟键代码转换为（映射到）扫描代码或字符值，或将扫描代码转换为虚拟键代码。 该函数使用输入语言和输入区域设置标识符转换代码。 (ANSI) |
| [MapVirtualKeyExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeyexw)  将虚拟键代码转换为（映射到）扫描代码或字符值，或将扫描代码转换为虚拟键代码。 该函数使用输入语言和输入区域设置标识符转换代码。 (Unicode) |
| [MapVirtualKeyW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapvirtualkeyw)  将虚拟键代码转换为（映射到）扫描代码或字符值，或将扫描代码转换为虚拟键代码。 (Unicode) |
| [MapWindowPoints](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mapwindowpoints)  MapWindowPoints 函数将 (映射) 一组点从相对于一个窗口的坐标空间转换为相对于另一个窗口的坐标空间。 |
| [MenuItemFromPoint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-menuitemfrompoint)  确定哪个菜单项（如果有）位于指定位置。 |
| [MessageBeep](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messagebeep)  播放波形声音。 每种声音类型的波形声音由注册表中的条目标识。 |
| [MessageBox](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messagebox)  MessageBox 函数显示一个模式对话框，其中包含一个系统图标、一组按钮和一条特定于应用程序的简短消息。 |
| [MessageBoxA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messageboxa)  显示一个模式对话框，其中包含一个系统图标、一组按钮和一条简短的应用程序特定消息，例如状态或错误信息。 消息框返回一个整数值，指示用户单击的按钮。 (MessageBoxA) |
| [MessageBoxExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messageboxexa)  创建、显示和操作消息框。 (ANSI) |
| [MessageBoxExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messageboxexw)  创建、显示和操作消息框。 (Unicode) |
| [MessageBoxIndirectA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messageboxindirecta)  创建、显示和操作消息框。 消息框包含应用程序定义的消息文本和标题、任何图标以及预定义按钮的任意组合。 (ANSI) |
| [MessageBoxIndirectW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messageboxindirectw)  创建、显示和操作消息框。 消息框包含应用程序定义的消息文本和标题、任何图标以及预定义按钮的任意组合。 (Unicode) |
| [MessageBoxW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-messageboxw)  MessageBoxW (Unicode) 函数显示一个模式对话框，其中包含一个系统图标、一组按钮和一条特定于应用程序的简短消息。 |
| [ModifyMenuA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-modifymenua)  更改现有菜单项。 (ANSI) |
| [ModifyMenuW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-modifymenuw)  更改现有菜单项。 (Unicode) |
| [MonitorFromPoint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-monitorfrompoint)  MonitorFromPoint 函数检索包含指定点的显示监视器的句柄。 |
| [MonitorFromRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-monitorfromrect)  MonitorFromRect 函数检索具有指定矩形交集面积最大的显示监视器的句柄。 |
| [MonitorFromWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-monitorfromwindow)  MonitorFromWindow 函数检索具有与指定窗口边界矩形交集面积最大的显示监视器的句柄。 |
| [mouse_event](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-mouse_event)  mouse_event 函数合成鼠标运动和按钮单击。 |
| [MoveWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-movewindow)  更改指定窗口的位置和尺寸。 |
| [MsgWaitForMultipleObjects](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-msgwaitformultipleobjects)  等待，直到一个或所有指定对象处于信号状态或超时间隔已过。 对象可以包括输入事件对象。 |
| [MsgWaitForMultipleObjectsEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-msgwaitformultipleobjectsex)  等待一个或所有指定对象处于信号状态、I/O 完成例程或异步过程调用 (APC) 排队到线程，或者超时间隔已过。 对象的数组可以包括输入事件对象。 |
| [NEXTRAWINPUTBLOCK](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-nextrawinputblock)  检索 RAWINPUT 结构数组中下一个结构的位置。 |
| [NotifyWinEvent](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-notifywinevent)  向系统发出信号，指出发生了预定义事件。 如果任何客户端应用程序为该事件注册了挂钩函数，系统将调用客户端的挂钩函数。 |
| [OemKeyScan](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-oemkeyscan)  将 OEMASCII 代码 0 到 0x0FF 映射到 OEM 扫描代码和偏移状态。 该函数提供的信息允许程序通过模拟键盘输入将 OEM 文本发送到另一个程序。 |
| [OemToCharA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-oemtochara)  将 OEM 定义的字符集中的字符串转换为 ANSI 或宽字符字符串。警告 请勿使用。 (ANSI) |
| [OemToCharBuffA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-oemtocharbuffa)  将 OEM 定义的字符集中字符串中的指定数量的字符转换为 ANSI 或宽字符字符串。 (ANSI) |
| [OemToCharBuffW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-oemtocharbuffw)  将 OEM 定义的字符集中字符串中的指定数量的字符转换为 ANSI 或宽字符字符串。 (Unicode) |
| [OemToCharW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-oemtocharw)  将 OEM 定义的字符集中的字符串转换为 ANSI 或宽字符字符串。警告 请勿使用。 (Unicode) |
| [OffsetRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-offsetrect)  OffsetRect 函数按指定的偏移量移动指定的矩形。 |
| [OpenClipboard](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-openclipboard)  打开剪贴板以供检查，并阻止其他应用程序修改剪贴板内容。 |
| [OpenDesktopA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-opendesktopa)  打开指定的桌面对象。 (ANSI) |
| [OpenDesktopW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-opendesktopw)  打开指定的桌面对象。 (Unicode) |
| [OpenIcon](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-openicon)  将最小化 (图标) 窗口还原到其以前的大小和位置;然后激活窗口。 |
| [OpenInputDesktop](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-openinputdesktop)  打开接收用户输入的桌面。 |
| [OpenWindowStationA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-openwindowstationa)  打开指定的窗口工作站。 (ANSI) |
| [OpenWindowStationW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-openwindowstationw)  打开指定的窗口工作站。 (Unicode) |
| [PackTouchHitTestingProximityEvaluation](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-packtouchhittestingproximityevaluation)  返回邻近度评估分数和调整后的触摸点坐标，作为WM_TOUCHHITTESTING回调的打包值。 |
| [PaintDesktop](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-paintdesktop)  PaintDesktop 函数使用桌面图案或壁纸填充指定设备上下文中的剪裁区域。 函数主要为 shell 桌面提供。 |
| [PeekMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-peekmessagea)  调度传入的非排队消息，检查线程消息队列中是否存在已发布的消息，并检索 (消息（如果存在任何) ）。 (ANSI) |
| [PeekMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-peekmessagew)  调度传入的非排队消息，检查线程消息队列中是否存在已发布的消息，并检索 (消息（如果存在任何) ）。 (Unicode) |
| [PhysicalToLogicalPoint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-physicaltologicalpoint)  将窗口中点的物理坐标转换为逻辑坐标。 |
| [PhysicalToLogicalPointForPerMonitorDPI](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-physicaltologicalpointforpermonitordpi)  将窗口中的点从物理坐标转换为逻辑坐标，而不考虑每英寸点数 (dpi) 调用方感知。 |
| [POINTSTOPOINT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-pointstopoint)  POINTSTOPOINT 宏将 POINTS 结构的内容复制到 POINT 结构中。 |
| [POINTTOPOINTS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-pointtopoints)  POINTTOPOINTS 宏将 POINT 结构转换为 POINTS 结构。 |
| [PostMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-postmessagea)  Places (在与创建指定窗口的线程关联的消息队列中发布) 消息，并在不等待线程处理消息的情况下返回消息。 (ANSI) |
| [PostMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-postmessagew)  Places (在与创建指定窗口的线程关联的消息队列中发布) 消息，并在不等待线程处理消息的情况下返回消息。 (Unicode) |
| [PostQuitMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-postquitmessage)  向系统指示线程已发出终止请求， (退出) 。 它通常用于响应WM_DESTROY消息。 |
| [PostThreadMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-postthreadmessagea)  将消息发布到指定线程的消息队列。 它返回，而无需等待线程处理消息。 (ANSI) |
| [PostThreadMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-postthreadmessagew)  将消息发布到指定线程的消息队列。 它返回，而无需等待线程处理消息。 (Unicode) |
| [PrintWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-printwindow)  PrintWindow 函数将可视窗口复制到指定的设备上下文 (DC) ，通常是打印机 DC。 |
| [PrivateExtractIconsA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-privateextracticonsa)  创建从指定文件中提取的图标的句柄数组。 (ANSI) |
| [PrivateExtractIconsW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-privateextracticonsw)  创建从指定文件中提取的图标的句柄数组。 (Unicode) |
| [PtInRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ptinrect)  PtInRect 函数确定指定的点是否位于指定的矩形内。 |
| [QueryDisplayConfig](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-querydisplayconfig)  QueryDisplayConfig 函数检索有关当前设置中所有显示设备或视图的所有可能显示路径的信息。 |
| [RealChildWindowFromPoint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-realchildwindowfrompoint)  检索指定点处子窗口的句柄。 搜索仅限于即时子窗口;不搜索孙子和更深的后代窗口。 |
| [RealGetWindowClassA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-realgetwindowclassa)  检索指定窗口类型的字符串。 (ANSI) |
| [RealGetWindowClassW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-realgetwindowclassw)  检索指定窗口类型的字符串。 (Unicode) |
| [RedrawWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-redrawwindow)  RedrawWindow 函数更新窗口工作区中的指定矩形或区域。 |
| [RegisterClassA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerclassa)  注册一个窗口类，以便在调用 CreateWindow 或 CreateWindowEx 函数时使用。 (RegisterClassA) |
| [RegisterClassExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerclassexa)  注册一个窗口类，以便在调用 CreateWindow 或 CreateWindowEx 函数时使用。 (RegisterClassExA) |
| [RegisterClassExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerclassexw)  注册一个窗口类，以便在调用 CreateWindow 或 CreateWindowEx 函数时使用。 (RegisterClassExW) |
| [RegisterClassW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerclassw)  注册一个窗口类，以便在调用 CreateWindow 或 CreateWindowEx 函数时使用。 (RegisterClassW) |
| [RegisterClipboardFormatA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerclipboardformata)  注册新的剪贴板格式。 然后，可以将此格式用作有效的剪贴板格式。 (ANSI) |
| [RegisterClipboardFormatW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerclipboardformatw)  注册新的剪贴板格式。 然后，可以将此格式用作有效的剪贴板格式。 (Unicode) |
| [RegisterDeviceNotificationA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerdevicenotificationa)  注册窗口将接收通知的设备或设备类型。 (ANSI) |
| [RegisterDeviceNotificationW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerdevicenotificationw)  注册窗口将接收通知的设备或设备类型。 (Unicode) |
| [RegisterForTooltipDismissNotification](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerfortooltipdismissnotification)  允许应用或 UI 框架注册和注销窗口，以接收通知以关闭其工具提示窗口。 |
| [RegisterHotKey](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerhotkey)  定义系统范围内的热键。 |
| [RegisterPointerDeviceNotifications](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerpointerdevicenotifications)  注册一个窗口来处理WM_POINTERDEVICECHANGE、WM_POINTERDEVICEINRANGE和WM_POINTERDEVICEOUTOFRANGE指针设备通知。 |
| [RegisterPointerInputTarget](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerpointerinputtarget)  允许调用方注册目标窗口，指定类型的所有指针输入都重定向到该窗口。 |
| [RegisterPointerInputTargetEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerpointerinputtargetex)  RegisterPointerInputTargetEx 可能已更改或不可用。 请改用 RegisterPointerInputTarget。 |
| [RegisterPowerSettingNotification](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerpowersettingnotification)  注册应用程序以接收特定电源设置事件的电源设置通知。 |
| [RegisterRawInputDevices](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerrawinputdevices)  注册提供原始输入数据的设备。 |
| [RegisterShellHookWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registershellhookwindow)  注册指定的 Shell 窗口，以接收对 Shell 应用程序有用的事件或通知的某些消息。 |
| [RegisterSuspendResumeNotification](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registersuspendresumenotification)  注册以在系统暂停或恢复时接收通知。 类似于 PowerRegisterSuspendResumeNotification，但在用户模式下运行，可以采用窗口句柄。 |
| [RegisterTouchHitTestingWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registertouchhittestingwindow)  注册一个窗口来处理WM_TOUCHHITTESTING通知。 |
| [RegisterTouchWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registertouchwindow)  将窗口注册为支持触摸。 |
| [RegisterWindowMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerwindowmessagea)  定义保证在整个系统中唯一的新窗口消息。 发送或发布消息时可以使用消息值。 (ANSI) |
| [RegisterWindowMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerwindowmessagew)  定义保证在整个系统中唯一的新窗口消息。 发送或发布消息时可以使用消息值。 (Unicode) |
| [ReleaseCapture](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-releasecapture)  从当前线程中的窗口释放鼠标捕获，并还原正常鼠标输入处理。 |
| [ReleaseDC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-releasedc)  ReleaseDC 函数 (DC) 释放设备上下文，释放它供其他应用程序使用。 ReleaseDC 函数的效果取决于 DC 的类型。 它仅释放公用 DC 和窗口 DC。 它对类或专用 DC 没有影响。 |
| [RemoveClipboardFormatListener](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-removeclipboardformatlistener)  从系统维护的剪贴板格式侦听器列表中删除给定窗口。 |
| [RemoveMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-removemenu)  删除菜单项或从指定菜单分离子菜单。 |
| [RemovePropA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-removepropa)  从指定窗口的属性列表中删除条目。 指定的字符串标识要删除的条目。 (ANSI) |
| [RemovePropW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-removepropw)  从指定窗口的属性列表中删除条目。 指定的字符串标识要删除的条目。 (Unicode) |
| [ReplyMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-replymessage)  答复 SendMessage 函数从另一个线程发送的消息。 |
| [ScreenToClient](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-screentoclient)  ScreenToClient 函数将屏幕上指定点的屏幕坐标转换为工作区坐标。 |
| [ScrollDC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-scrolldc)  ScrollDC 函数水平和垂直滚动位矩形。 |
| [ScrollWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-scrollwindow)  ScrollWindow 函数滚动指定窗口工作区的内容。 |
| [ScrollWindowEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-scrollwindowex)  ScrollWindowEx 函数滚动指定窗口工作区的内容。 |
| [SendDlgItemMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-senddlgitemmessagea)  将消息发送到对话框中的指定控件。 (ANSI) |
| [SendDlgItemMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-senddlgitemmessagew)  将消息发送到对话框中的指定控件。 (Unicode) |
| [SendInput](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendinput)  合成键击、鼠标动作和按钮单击。 |
| [SendMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessage)  SendMessage 函数将指定的消息发送到窗口或窗口。 (SendMessage 函数) |
| [SendMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessagea)  将指定的消息发送到一个或多个窗口。 SendMessage 函数调用指定窗口的窗口过程，在窗口过程处理消息之前不会返回。 (SendMessageA) |
| [SendMessageCallbackA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessagecallbacka)  将指定的消息发送到一个或多个窗口。 (SendMessageCallbackA) |
| [SendMessageCallbackW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessagecallbackw)  将指定的消息发送到一个或多个窗口。 (SendMessageCallbackW) |
| [SendMessageTimeoutA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessagetimeouta)  将指定的消息发送到一个或多个窗口。 (ANSI) |
| [SendMessageTimeoutW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessagetimeoutw)  将指定的消息发送到一个或多个窗口。 (Unicode) |
| [SendMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessagew)  SendMessageW (Unicode) 函数将指定的消息发送到窗口或窗口。 (SendMessageW) |
| [SendNotifyMessageA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendnotifymessagea)  将指定的消息发送到一个或多个窗口。 (SendNotifyMessageA) |
| [SendNotifyMessageW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendnotifymessagew)  将指定的消息发送到一个或多个窗口。 (SendNotifyMessageW) |
| [SetActiveWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setactivewindow)  激活窗口。 窗口必须附加到调用线程的消息队列。 |
| [SetAdditionalForegroundBoostProcesses](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setadditionalforegroundboostprocesses)  SetAdditionalForegroundBoostProcesses 是一种性能辅助 API，可帮助具有多进程应用程序模型的应用程序，其中多个进程作为数据或呈现为前台体验做出贡献。 |
| [SetCapture](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setcapture)  将鼠标捕获设置为属于当前线程的指定窗口。 |
| [SetCaretBlinkTime](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setcaretblinktime)  将插入点闪烁时间设置为指定的毫秒数。 闪烁时间是反转插入符号像素所需的已用时间（以毫秒为单位）。 |
| [SetCaretPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setcaretpos)  将插入点移动到指定的坐标。 如果拥有插入点的窗口是使用 CS_OWNDC 类样式创建的，则指定的坐标受与该窗口关联的设备上下文的映射模式的约束。 |
| [SetClassLongA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setclasslonga)  将指定偏移量处指定的 32 位 (长) 值替换为指定窗口所属类的额外类内存或 WNDCLASSEX 结构。 (ANSI) |
| [SetClassLongPtrA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setclasslongptra)  替换指定窗口所属类的额外类内存或 WNDCLASSEX 结构的指定偏移量处的指定值。 (ANSI) |
| [SetClassLongPtrW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setclasslongptrw)  替换指定窗口所属类的额外类内存或 WNDCLASSEX 结构的指定偏移量处的指定值。 (Unicode) |
| [SetClassLongW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setclasslongw)  将指定偏移量处指定的 32 位 (长) 值替换为指定窗口所属类的额外类内存或 WNDCLASSEX 结构。 (Unicode) |
| [SetClassWord](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setclassword)  将指定偏移量处的 16 位 (WORD) 值替换为指定窗口所属的窗口类的额外类内存。 |
| [SetClipboardData](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setclipboarddata)  以指定的剪贴板格式Places剪贴板上的数据。 |
| [SetClipboardViewer](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setclipboardviewer)  将指定的窗口添加到剪贴板查看器链。 每当剪贴板内容发生更改时，剪贴板查看器窗口都会收到WM_DRAWCLIPBOARD消息。 此函数用于向后兼容早期版本的 Windows。 |
| [SetCoalescableTimer](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setcoalescabletimer)  创建具有指定超时值和合并容错延迟的计时器。 |
| [SetCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setcursor)  设置光标形状。 |
| [SetCursorPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setcursorpos)  将光标移动到指定的屏幕坐标。 |
| [SetDialogControlDpiChangeBehavior](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setdialogcontroldpichangebehavior)  替代对话框中子窗口的默认每监视器 DPI 缩放行为。 |
| [SetDialogDpiChangeBehavior](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setdialogdpichangebehavior)  Per-Monitor v2 上下文中的对话框会自动缩放 DPI。 使用此方法可以自定义其 DPI 更改行为。 |
| [SetDisplayAutoRotationPreferences](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setdisplayautorotationpreferences)  设置当前进程的屏幕自动旋转首选项。 |
| [SetDisplayConfig](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setdisplayconfig)  SetDisplayConfig 函数通过独占方式在当前会话中启用指定路径来修改显示拓扑、源和目标模式。 |
| [SetDlgItemInt](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setdlgitemint)  将对话框中控件的文本设置为指定整数值的字符串表示形式。 |
| [SetDlgItemTextA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setdlgitemtexta)  设置对话框中控件的标题或文本。 (ANSI) |
| [SetDlgItemTextW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setdlgitemtextw)  设置对话框中控件的标题或文本。 (Unicode) |
| [SetDoubleClickTime](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setdoubleclicktime)  设置鼠标的双击时间。 |
| [SetFocus](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setfocus)  将键盘焦点设置为指定的窗口。 窗口必须附加到调用线程的消息队列。 |
| [SetForegroundWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setforegroundwindow)  将创建指定窗口的线程引入前台并激活窗口。 |
| [SetGestureConfig](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setgestureconfig)  为 Windows 触控手势配置从窗口发送的消息。 |
| [SetKeyboardState](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setkeyboardstate)  将键盘键状态数组复制到调用线程的键盘输入状态表中。 这是由 GetKeyboardState 和 GetKeyState 函数访问的同一个表。 对此表所做的更改不会影响任何其他线程的键盘输入。 |
| [SetLastErrorEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setlasterrorex)  设置最后一个错误代码。 |
| [SetLayeredWindowAttributes](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setlayeredwindowattributes)  设置分层窗口的不透明度和透明度颜色键。 |
| [SetMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmenu)  将新菜单分配给指定的窗口。 |
| [SetMenuContextHelpId](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmenucontexthelpid)  将帮助上下文标识符与菜单相关联。 |
| [SetMenuDefaultItem](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmenudefaultitem)  设置指定的菜单的默认菜单项。 |
| [SetMenuInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmenuinfo)  设置指定菜单的信息。 |
| [SetMenuItemBitmaps](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmenuitembitmaps)  将指定的位图与菜单项相关联。 无论菜单项是选中还是清除，系统都显示菜单项旁边的相应位图。 |
| [SetMenuItemInfoA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmenuiteminfoa)  更改有关菜单项的信息。 (ANSI) |
| [SetMenuItemInfoW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmenuiteminfow)  更改有关菜单项的信息。 (Unicode) |
| [SetMessageExtraInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmessageextrainfo)  设置当前线程的额外消息信息。 |
| [SetParent](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setparent)  更改指定子窗口的父窗口。 |
| [SetPhysicalCursorPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setphysicalcursorpos)  设置光标在物理坐标中的位置。 |
| [SetProcessDefaultLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setprocessdefaultlayout)  在仅针对当前正在运行的进程创建没有父级或所有者的窗口时，更改默认布局。 |
| [SetProcessDPIAware](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setprocessdpiaware)  SetProcessDPIAware 可能已更改或不可用。 请改用 SetProcessDPIAwareness。 |
| [SetProcessDpiAwarenessContext](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setprocessdpiawarenesscontext)  将当前进程设置为指定的每英寸点数 (dpi) 感知上下文。 DPI 感知上下文来自 DPI_AWARENESS_CONTEXT 值。 |
| [SetProcessRestrictionExemption](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setprocessrestrictionexemption)  使调用进程不受阻止桌面进程与 Windows 应用商店应用环境交互的限制。 开发和调试工具使用此函数。 |
| [SetProcessWindowStation](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setprocesswindowstation)  将指定的窗口工作站分配给调用进程。 |
| [SetPropA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setpropa)  在指定窗口的属性列表中添加新条目或更改现有条目。 (ANSI) |
| [SetPropW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setpropw)  在指定窗口的属性列表中添加新条目或更改现有条目。 (Unicode) |
| [SetRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setrect)  SetRect 函数设置指定矩形的坐标。 这相当于将左、上、右和下三个参数分配给 RECT 结构的相应成员。 |
| [SetRectEmpty](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setrectempty)  SetRectEmpty 函数创建一个空矩形，其中所有坐标都设置为零。 |
| [SetScrollInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setscrollinfo)  SetScrollInfo 函数设置滚动条的参数，包括最小和最大滚动位置、页面大小以及滚动框 (thumb) 的位置。 如果请求，函数还会重绘滚动条。 |
| [SetScrollPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setscrollpos)  SetScrollPos 函数 (thumb) 在指定滚动条中设置滚动框的位置，并根据需要重绘滚动条以反映滚动框的新位置。 |
| [SetScrollRange](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setscrollrange)  SetScrollRange 函数设置指定滚动条的最小和最大滚动框位置。 |
| [SetSysColors](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setsyscolors)  设置指定显示元素的颜色。 |
| [SetSystemCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setsystemcursor)  使应用程序能够自定义系统游标。 它将 id 参数指定的系统游标的内容替换为由 hcur 参数指定的游标的内容，然后销毁 hcur。 |
| [SetThreadCursorCreationScaling](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setthreadcursorcreationscaling)  设置要在此线程上创建的游标的 DPI 刻度。 缩放要显示它的特定监视器的游标时，会考虑此值。 |
| [SetThreadDesktop](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setthreaddesktop)  将指定的桌面分配给调用线程。 桌面上的所有后续操作都使用授予桌面的访问权限。 |
| [SetThreadDpiAwarenessContext](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setthreaddpiawarenesscontext)  将当前线程的 DPI 感知设置为提供的值。 |
| [SetThreadDpiHostingBehavior](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setthreaddpihostingbehavior)  设置线程的DPI_HOSTING_BEHAVIOR。 此行为允许在线程中创建的窗口托管具有不同DPI_AWARENESS_CONTEXT的子窗口。 |
| [SetTimer](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-settimer)  创建具有指定超时值的计时器。 |
| [SetUserObjectInformationA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setuserobjectinformationa)  设置有关指定窗口工作站或桌面对象的信息。 (ANSI) |
| [SetUserObjectInformationW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setuserobjectinformationw)  设置有关指定窗口工作站或桌面对象的信息。 (Unicode) |
| [SetUserObjectSecurity](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setuserobjectsecurity)  设置用户对象的安全性。 例如，这可以是窗口或 DDE 对话。 |
| [SetWindowContextHelpId](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowcontexthelpid)  将帮助上下文标识符与指定的窗口相关联。 |
| [SetWindowDisplayAffinity](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity)  在与窗口关联的 hWnd 上以内核模式存储显示关联设置。 |
| [SetWindowFeedbackSetting](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowfeedbacksetting)  设置窗口的反馈配置。 |
| [SetWindowLongA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowlonga)  更改指定窗口的属性。 函数还将指定偏移量的 32 位 (长) 值设置为额外的窗口内存。 (ANSI) |
| [SetWindowLongPtrA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowlongptra)  更改指定窗口的属性。 (ANSI) |
| [SetWindowLongPtrW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowlongptrw)  更改指定窗口的属性。 (Unicode) |
| [SetWindowLongW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowlongw)  更改指定窗口的属性。 函数还将指定偏移量的 32 位 (长) 值设置为额外的窗口内存。 (Unicode) |
| [SetWindowPlacement](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowplacement)  设置指定窗口的显示状态和还原、最小化和最大化的位置。 |
| [SetWindowPos](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowpos)  更改子窗口、弹出窗口或顶级窗口的大小、位置和 Z 顺序。 这些窗口根据它们在屏幕上的外观进行排序。 最上面的窗口接收最高排名，是 Z 顺序中的第一个窗口。 |
| [SetWindowRgn](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowrgn)  SetWindowRgn 函数设置窗口的窗口区域。 |
| [SetWindowsHookExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowshookexa)  将应用程序定义的挂钩过程安装到挂钩链中。 (ANSI) |
| [SetWindowsHookExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowshookexw)  将应用程序定义的挂钩过程安装到挂钩链中。 (Unicode) |
| [SetWindowTextA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowtexta)  如果指定窗口的标题栏有一个) ，则更改 (的文本。 如果指定的窗口是控件，则会更改控件的文本。 但是，SetWindowText 无法更改另一个应用程序中控件的文本。 (ANSI) |
| [SetWindowTextW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowtextw)  如果指定窗口的标题栏有一个) ，则更改 (的文本。 如果指定的窗口是控件，则会更改控件的文本。 但是，SetWindowText 无法更改另一个应用程序中控件的文本。 (Unicode) |
| [SetWinEventHook](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwineventhook)  为一系列事件设置事件挂钩函数。 |
| [ShowCaret](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showcaret)  使插入点在屏幕上的当前位置显示插入点。 当插入点变为可见时，它会自动开始闪烁。 |
| [ShowCursor](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showcursor)  显示或隐藏光标。 (ShowCursor) |
| [ShowOwnedPopups](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showownedpopups)  显示或隐藏指定窗口拥有的所有弹出窗口。 |
| [ShowScrollBar](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showscrollbar)  ShowScrollBar 函数显示或隐藏指定的滚动条。 |
| [ShowWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showwindow)  设置指定窗口的显示状态。 |
| [ShowWindowAsync](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showwindowasync)  设置窗口的显示状态，而无需等待操作完成。 |
| [ShutdownBlockReasonCreate](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-shutdownblockreasoncreate)  指示系统无法关闭，并设置在启动系统关闭时向用户显示的原因字符串。 |
| [ShutdownBlockReasonDestroy](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-shutdownblockreasondestroy)  指示可以关闭系统并释放原因字符串。 |
| [ShutdownBlockReasonQuery](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-shutdownblockreasonquery)  检索 ShutdownBlockReasonCreate 函数设置的原因字符串。 |
| [SkipPointerFrameMessages](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-skippointerframemessages)  确定哪个指针输入帧为指定指针生成了最近检索到的消息，并丢弃从同一指针输入帧生成的任何排队 (未检索) 指针输入消息。 |
| [SoundSentry](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-soundsentry)  触发视觉信号以指示正在播放声音。 |
| [SubtractRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-subtractrect)  SubtractRect 函数确定通过将一个矩形与另一个矩形相减而形成的矩形的坐标。 |
| [SwapMouseButton](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-swapmousebutton)  反转或还原鼠标左键和右键的含义。 |
| [SwitchDesktop](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-switchdesktop)  使指定的桌面可见并激活它。 这使桌面能够接收来自用户的输入。 |
| [SwitchToThisWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-switchtothiswindow)  将焦点切换到指定的窗口，并将其置于前台。 |
| [SystemParametersInfoA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-systemparametersinfoa)  检索或设置系统范围参数之一的值。 (ANSI) |
| [SystemParametersInfoForDpi](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-systemparametersinfofordpi)  检索系统范围参数之一的值，同时考虑提供的 DPI 值。 |
| [SystemParametersInfoW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-systemparametersinfow)  检索或设置系统范围参数之一的值。 (Unicode) |
| [TabbedTextOutA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tabbedtextouta)  TabbedTextOut 函数在指定位置写入字符串，将制表符扩展到制表位位置数组中指定的值。 文本以当前所选字体、背景色和文本颜色书写。 (ANSI) |
| [TabbedTextOutW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tabbedtextoutw)  TabbedTextOut 函数在指定位置写入字符串，将制表符扩展到制表位位置数组中指定的值。 文本以当前所选字体、背景色和文本颜色书写。 (Unicode) |
| [TileWindows](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tilewindows)  平铺指定父窗口的指定子窗口。 |
| [ToAscii](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-toascii)  将指定的虚拟键代码和键盘状态转换为相应的一个或多个字符。 |
| [ToAsciiEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-toasciiex)  将指定的虚拟键代码和键盘状态转换为相应的一个或多个字符。 该函数使用输入语言和由输入区域设置标识符标识的物理键盘布局转换代码。 |
| [TOUCH_COORD_TO_PIXEL](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-touch_coord_to_pixel)  将触摸坐标转换为像素。 |
| [ToUnicode](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tounicode)  将指定的虚拟键代码和键盘状态转换为相应的一个或多个 Unicode 字符。 (ToUnicode) |
| [ToUnicodeEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tounicodeex)  将指定的虚拟键代码和键盘状态转换为相应的一个或多个 Unicode 字符。 (ToUnicodeEx) |
| [TrackMouseEvent](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-trackmouseevent)  当在指定时间内鼠标指针离开窗口或将鼠标悬停在窗口上时，发布消息。 |
| [TrackPopupMenu](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-trackpopupmenu)  在指定位置显示快捷菜单，并跟踪菜单上项目的选择。 快捷菜单可以出现在屏幕上的任意位置。 |
| [TrackPopupMenuEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-trackpopupmenuex)  在指定位置显示快捷菜单，并跟踪快捷菜单上的项选择。 快捷菜单可以出现在屏幕上的任意位置。 |
| [TranslateAcceleratorA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-translateacceleratora)  处理菜单命令的快捷键。 (ANSI) |
| [TranslateAcceleratorW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-translateacceleratorw)  处理菜单命令的快捷键。 (Unicode) |
| [TranslateMDISysAccel](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-translatemdisysaccel)  处理多文档界面的窗口菜单命令的快捷键击 (MDI) 与指定 MDI 客户端窗口关联的子窗口。 |
| [TranslateMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-translatemessage)  将虚拟键消息转换为字符消息。 字符消息将发布到调用线程的消息队列，以便下次线程调用 GetMessage 或 PeekMessage 函数时读取。 |
| [UnhookWindowsHookEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unhookwindowshookex)  删除 SetWindowsHookEx 函数安装在挂钩链中的挂钩过程。 |
| [UnhookWinEvent](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unhookwinevent)  删除先前对 SetWinEventHook 的调用所创建的事件挂钩函数。 |
| [UnionRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unionrect)  UnionRect 函数创建两个矩形的联合。 并集是包含两个源矩形的最小矩形。 |
| [UnloadKeyboardLayout](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unloadkeyboardlayout)  卸载输入区域设置标识符（以前称为键盘布局）。 |
| [UnregisterClassA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterclassa)  取消注册窗口类，释放该类所需的内存。 (ANSI) |
| [UnregisterClassW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterclassw)  取消注册窗口类，释放该类所需的内存。 (Unicode) |
| [UnregisterDeviceNotification](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterdevicenotification)  关闭指定的设备通知句柄。 |
| [UnregisterHotKey](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterhotkey)  释放以前由调用线程注册的热键。 |
| [UnregisterPointerInputTarget](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterpointerinputtarget)  允许调用方取消注册指定类型的所有指针输入重定向到的目标窗口。 |
| [UnregisterPointerInputTargetEx](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterpointerinputtargetex)  UnregisterPointerInputTargetEx 可能已更改或不可用。 请改用 UnregisterPointerInputTarget。 |
| [UnregisterPowerSettingNotification](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregisterpowersettingnotification)  取消注册电源设置通知。 |
| [UnregisterSuspendResumeNotification](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregistersuspendresumenotification)  取消注册以在系统暂停或恢复时接收通知。 类似于 PowerUnregisterSuspendResumeNotification，但在用户模式下运行。 |
| [UnregisterTouchWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-unregistertouchwindow)  将窗口注册为不再支持触摸。 |
| [UpdateLayeredWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-updatelayeredwindow)  更新分层窗口的位置、大小、形状、内容和透明度。 |
| [UpdateWindow](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-updatewindow)  如果窗口的更新区域不为空，UpdateWindow 函数通过向窗口发送WM_PAINT消息来更新指定窗口的工作区。 |
| [UserHandleGrantAccess](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-userhandlegrantaccess)  授予或拒绝对具有用户界面限制的作业的 User 对象的句柄的访问权限。 |
| [ValidateRect](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-validaterect)  ValidateRect 函数通过从指定窗口的更新区域中删除矩形来验证矩形中的工作区。 |
| [ValidateRgn](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-validatergn)  ValidateRgn 函数通过从指定窗口的当前更新区域中删除该区域来验证区域中的工作区。 |
| [VkKeyScanA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-vkkeyscana)  将字符转换为当前键盘的相应虚拟键代码和偏移状态。 (ANSI) |
| [VkKeyScanExA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-vkkeyscanexa)  将字符转换为相应的虚拟键代码和偏移状态。 该函数使用输入语言和由输入区域设置标识符标识的物理键盘布局转换字符。 (ANSI) |
| [VkKeyScanExW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-vkkeyscanexw)  将字符转换为相应的虚拟键代码和偏移状态。 该函数使用输入语言和由输入区域设置标识符标识的物理键盘布局转换字符。 (Unicode) |
| [VkKeyScanW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-vkkeyscanw)  将字符转换为当前键盘的相应虚拟键代码和偏移状态。 (Unicode) |
| [WaitForInputIdle](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-waitforinputidle)  等待指定进程完成处理其初始输入，并等待用户输入且没有挂起的输入，或直到超时间隔已过。 |
| [WaitMessage](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-waitmessage)  当线程在其消息队列中没有其他消息时，向其他线程生成控制权。 WaitMessage 函数暂停线程，并且不会返回，直到新消息放入线程的消息队列中。 |
| [WindowFromDC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-windowfromdc)  WindowFromDC 函数返回与指定的显示设备上下文关联的窗口的句柄 (DC) 。 使用指定设备上下文的输出函数将绘制到此窗口中。 |
| [WindowFromPhysicalPoint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-windowfromphysicalpoint)  检索包含指定物理点的窗口的句柄。 |
| [WindowFromPoint](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-windowfrompoint)  检索包含指定点的窗口的句柄。 |
| [WinHelpA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-winhelpa)  启动 Windows 帮助 (Winhelp.exe) 并传递指示应用程序请求的帮助性质的其他数据。 (ANSI) |
| [WinHelpW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-winhelpw)  启动 Windows 帮助 (Winhelp.exe) 并传递指示应用程序请求的帮助性质的其他数据。 (Unicode) |
| [wsprintfA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-wsprintfa)  将格式化的数据写入指定的缓冲区。 (ANSI) |
| [wsprintfW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-wsprintfw)  将格式化的数据写入指定的缓冲区。 (Unicode) |
| [wvsprintfA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-wvsprintfa)  使用指向参数列表的指针将格式化数据写入指定的缓冲区。 (ANSI) |
| [wvsprintfW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-wvsprintfw)  使用指向参数列表的指针将格式化数据写入指定的缓冲区。 (Unicode) |



## 回调函数

展开表

|                                                              |
| :----------------------------------------------------------- |
| [DLGPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-dlgproc)  应用程序定义的回调函数与 CreateDialog 和 DialogBox 系列函数一起使用。 |
| [DRAWSTATEPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-drawstateproc)  DrawStateProc 函数是应用程序定义的回调函数，用于呈现 DrawState 函数的复杂图像。 |
| [EDITWORDBREAKPROCA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-editwordbreakproca)  与EM_SETWORDBREAKPROC消息一起使用的应用程序定义的回调函数。 (ANSI) |
| [EDITWORDBREAKPROCW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-editwordbreakprocw)  与EM_SETWORDBREAKPROC消息一起使用的应用程序定义的回调函数。 (Unicode) |
| [GRAYSTRINGPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-graystringproc)  OutputProc 函数是与 GrayString 函数一起使用的应用程序定义的回调函数。 |
| [HOOKPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-hookproc)  与 SetWindowsHookEx 函数一起使用的应用程序定义或库定义的回调函数。 在调用 SendMessage 函数后，系统会调用此函数。 挂钩过程可以检查消息;它无法修改它。 |
| [MONITORENUMPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-monitorenumproc)  MonitorEnumProc 函数是由 EnumDisplayMonitors 函数调用的应用程序定义的回调函数。 |
| [MSGBOXCALLBACK](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-msgboxcallback)  在应用程序中定义的回调函数，用于处理消息框的帮助事件。 |
| [PROPENUMPROCA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-propenumproca)  与 EnumProps 函数一起使用的应用程序定义的回调函数。 (ANSI) |
| [PROPENUMPROCEXA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-propenumprocexa)  与 EnumPropsEx 函数一起使用的应用程序定义的回调函数。 (ANSI) |
| [PROPENUMPROCEXW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-propenumprocexw)  与 EnumPropsEx 函数一起使用的应用程序定义的回调函数。 (Unicode) |
| [PROPENUMPROCW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-propenumprocw)  与 EnumProps 函数一起使用的应用程序定义的回调函数。 (Unicode) |
| [SENDASYNCPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-sendasyncproc)  与 SendMessageCallback 函数一起使用的应用程序定义的回调函数。 |
| [TIMERPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-timerproc)  处理WM_TIMER消息的应用程序定义的回调函数。 TIMERPROC 类型定义指向此回调函数的指针。 TimerProc 是应用程序定义的函数名称的占位符。 |
| [WINEVENTPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-wineventproc)  应用程序定义的回调 (或挂钩) 函数，系统调用该函数以响应可访问对象生成的事件。 |
| [WNDPROC](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-wndproc)  在应用程序中定义的回调函数，用于处理发送到窗口的消息。 |



## 结构

展开表

|                                                              |
| :----------------------------------------------------------- |
| [ACCEL](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-accel)  定义快捷键表中使用的快捷键。 |
| [ACCESSTIMEOUT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-accesstimeout)  包含有关与辅助功能关联的超时期限的信息。 |
| [ALTTABINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-alttabinfo)  包含应用程序切换 (ALT+TAB) 窗口的状态信息。 |
| [ANIMATIONINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-animationinfo)  描述与用户操作关联的动画效果。 |
| [AUDIODESCRIPTION](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-audiodescription)  包含与音频说明关联的信息。 指定SPI_GETAUDIODESCRIPTION或SPI_SETAUDIODESCRIPTION操作值时，此结构与 SystemParametersInfo 函数一起使用。 |
| [BSMINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-bsminfo)  包含有关拒绝来自 BroadcastSystemMessageEx 的请求的窗口的信息。 |
| [CBT_CREATEWNDA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-cbt_createwnda)  包含在创建窗口之前传递给WH_CBT挂钩过程 CBTProc 的信息。 (ANSI) |
| [CBT_CREATEWNDW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-cbt_createwndw)  包含在创建窗口之前传递给WH_CBT挂钩过程 CBTProc 的信息。 (Unicode) |
| [CBTACTIVATESTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-cbtactivatestruct)  包含在激活窗口之前传递给WH_CBT挂钩过程 CBTProc 的信息。 |
| [CHANGEFILTERSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-changefilterstruct)  包含通过调用 ChangeWindowMessageFilterEx 函数获取的扩展结果信息。 |
| [CLIENTCREATESTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-clientcreatestruct)  包含有关菜单和 MDI 客户端窗口子窗口 (MDI) 多文档界面的信息。 |
| [COMBOBOXINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-comboboxinfo)  包含组合框状态信息。 |
| [COMPAREITEMSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-compareitemstruct)  为排序的所有者绘制列表框或组合框中的两个项提供标识符和应用程序提供的数据。 |
| [COPYDATASTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-copydatastruct)  包含要通过WM_COPYDATA消息传递到另一个应用程序的数据。 |
| [CREATESTRUCTA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-createstructa)  定义传递给应用程序的窗口过程的初始化参数。 这些成员与 CreateWindowEx 函数的参数相同。 (ANSI) |
| [CREATESTRUCTW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-createstructw)  定义传递给应用程序的窗口过程的初始化参数。 这些成员与 CreateWindowEx 函数的参数相同。 (Unicode) |
| [CURSORINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-cursorinfo)  包含全局游标信息。 |
| [CURSORSHAPE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-cursorshape)  包含有关游标的信息。 |
| [CWPRETSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-cwpretstruct)  定义传递给WH_CALLWNDPROCRET挂钩过程 CallWndRetProc 的消息参数。 |
| [CWPSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-cwpstruct)  定义传递给WH_CALLWNDPROC挂钩过程 CallWndProc 的消息参数。 |
| [DEBUGHOOKINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-debughookinfo)  包含传递给WH_DEBUG挂钩过程 DebugProc 的调试信息。 |
| [DELETEITEMSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-deleteitemstruct)  描述已删除的列表框或组合框项。 |
| [DLGITEMTEMPLATE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-dlgitemtemplate)  定义对话框中控件的尺寸和样式。 其中一个或多个结构与 DLGTEMPLATE 结构组合在一起，形成对话框的标准模板。 |
| [DLGTEMPLATE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-dlgtemplate)  定义对话框的尺寸和样式。 |
| [DRAWITEMSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-drawitemstruct)  提供所有者窗口用于确定如何绘制所有者绘制的控件或菜单项的信息。 |
| [DRAWTEXTPARAMS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-drawtextparams)  DRAWTEXTPARAMS 结构包含 DrawTextEx 函数的扩展格式设置选项。 |
| [EVENTMSG](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-eventmsg)  包含有关发送到系统消息队列的硬件消息的信息。 此结构用于存储 JournalPlaybackProc 回调函数的消息信息。 |
| [FILTERKEYS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-filterkeys)  包含有关 FilterKeys 辅助功能的信息，该功能使残障用户能够设置键盘重复率 (RepeatKeys) 、接受延迟 (SlowKeys) ，以及跳出率 (BounceKeys) 。 |
| [FLASHWINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-flashwinfo)  包含窗口的闪烁状态以及系统应闪烁窗口的次数。 |
| [GESTURECONFIG](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-gestureconfig)  获取并设置用于启用手势消息的配置以及此配置的类型。 |
| [GESTUREINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-gestureinfo)  存储有关手势的信息。 |
| [GESTURENOTIFYSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-gesturenotifystruct)  使用WM_GESTURENOTIFY消息传输时，传递有关手势的信息。 |
| [GUITHREADINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-guithreadinfo)  包含有关 GUI 线程的信息。 |
| [HARDWAREINPUT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-hardwareinput)  包含有关由键盘或鼠标以外的输入设备生成的模拟消息的信息。 |
| [HELPINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-helpinfo)  包含有关已为其请求上下文相关帮助的项的信息。 |
| [HELPWININFOA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-helpwininfoa)  包含主要或辅助帮助窗口的大小和位置。 应用程序可以通过使用 HELP_SETWINPOS 值调用 WinHelp 函数来设置此信息。 (ANSI) |
| [HELPWININFOW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-helpwininfow)  包含主要或辅助帮助窗口的大小和位置。 应用程序可以通过使用 HELP_SETWINPOS 值调用 WinHelp 函数来设置此信息。 (Unicode) |
| [HIGHCONTRASTA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-highcontrasta)  包含有关高对比度辅助功能的信息。 (ANSI) |
| [HIGHCONTRASTW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-highcontrastw)  包含有关高对比度辅助功能的信息。 (Unicode) |
| [ICONINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-iconinfo)  包含有关图标或光标的信息。 |
| [ICONINFOEXA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-iconinfoexa)  包含有关图标或光标的信息。 扩展 ICONINFO。 由 GetIconInfoEx 使用。 (ANSI) |
| [ICONINFOEXW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-iconinfoexw)  包含有关图标或光标的信息。 扩展 ICONINFO。 由 GetIconInfoEx 使用。 (Unicode) |
| [ICONMETRICSA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-iconmetricsa)  包含与图标关联的可缩放指标。 指定 SPI_GETICONMETRICS 或 SPI_SETICONMETRICS 操作时，此结构与 SystemParametersInfo 函数一起使用。 (ANSI) |
| [ICONMETRICSW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-iconmetricsw)  包含与图标关联的可缩放指标。 指定 SPI_GETICONMETRICS 或 SPI_SETICONMETRICS 操作时，此结构与 SystemParametersInfo 函数一起使用。 (Unicode) |
| [INPUT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-input)  由 SendInput 用于存储用于合成输入事件（例如击键、鼠标移动和鼠标单击）的信息。 |
| [INPUT_INJECTION_VALUE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-input_injection_value)  包含输入注入详细信息。 |
| [INPUT_MESSAGE_SOURCE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-input_message_source)  包含有关输入消息源的信息。 |
| [INPUT_TRANSFORM](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-input_transform)  定义表示消息使用者上的转换的矩阵。 |
| [KBDLLHOOKSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-kbdllhookstruct)  包含有关低级别键盘输入事件的信息。 |
| [KEYBDINPUT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-keybdinput)  包含有关模拟键盘事件的信息。 |
| [LASTINPUTINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-lastinputinfo)  包含最后一个输入的时间。 |
| [MDICREATESTRUCTA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-mdicreatestructa)  包含有关多文档界面的类、标题、所有者、位置和大小的信息， (MDI) 子窗口。 (ANSI) |
| [MDICREATESTRUCTW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-mdicreatestructw)  包含有关多文档界面的类、标题、所有者、位置和大小的信息， (MDI) 子窗口。 (Unicode) |
| [MDINEXTMENU](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-mdinextmenu)  包含有关要激活的菜单的信息。 |
| [MEASUREITEMSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-measureitemstruct)  通知系统所有者绘制的控件或菜单项的尺寸。 这允许系统正确处理用户与 控件的交互。 |
| [MENUBARINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-menubarinfo)  包含菜单栏信息。 |
| [MENUGETOBJECTINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-menugetobjectinfo)  包含有关鼠标光标所在的菜单的信息。 |
| [MENUINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-menuinfo)  包含有关菜单的信息。 |
| [MENUITEMINFOA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-menuiteminfoa)  包含有关菜单项的信息。 (MENUITEMINFOA) |
| [MENUITEMINFOW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-menuiteminfow)  包含有关菜单项的信息。 (MENUITEMINFOW) |
| [MENUITEMTEMPLATE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-menuitemtemplate)  定义菜单模板中的菜单项。 |
| [MENUITEMTEMPLATEHEADER](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-menuitemtemplateheader)  定义菜单模板的标头。 完整的菜单模板由一个标题和一个或多个菜单项列表组成。 |
| [MINIMIZEDMETRICS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-minimizedmetrics)  包含与最小化窗口关联的可缩放指标。 |
| [MINMAXINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-minmaxinfo)  包含有关窗口的最大大小和位置及其最小和最大跟踪大小的信息。 |
| [MONITORINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-monitorinfo)  MONITORINFO 结构包含有关显示监视器的信息。GetMonitorInfo 函数将信息存储在 MONITORINFO 结构或 MONITORINFOEX 结构中。MONITORINFO 结构是 MONITORINFOEX 结构的子集。 |
| [MONITORINFOEXA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-monitorinfoexa)  MONITORINFOEX 结构包含有关显示监视器的信息。GetMonitorInfo 函数将信息存储到 MONITORINFOEX 结构或 MONITORINFO 结构中。MONITORINFOEX 结构是 MONITORINFO 结构的超集。 (ANSI) |
| [MONITORINFOEXW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-monitorinfoexw)  MONITORINFOEX 结构包含有关显示监视器的信息。GetMonitorInfo 函数将信息存储到 MONITORINFOEX 结构或 MONITORINFO 结构中。MONITORINFOEX 结构是 MONITORINFO 结构的超集。 (Unicode) |
| [MOUSEHOOKSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-mousehookstruct)  包含有关传递给WH_MOUSE挂钩过程 MouseProc 的鼠标事件的信息。 |
| [MOUSEHOOKSTRUCTEX](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-mousehookstructex)  包含有关传递给WH_MOUSE挂钩过程 MouseProc 的鼠标事件的信息。 这是 MOUSEHOOKSTRUCT 结构的扩展，其中包含有关滚轮移动或 X 按钮使用的信息。 |
| [MOUSEINPUT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-mouseinput)  包含有关模拟鼠标事件的信息。 |
| [MOUSEKEYS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-mousekeys)  包含有关 MouseKeys 辅助功能的信息。 |
| [MOUSEMOVEPOINT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-mousemovepoint)  包含有关鼠标在屏幕坐标中的位置的信息。 |
| [味精](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-msg)  包含来自线程的消息队列的消息信息。 |
| [MSGBOXPARAMSA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-msgboxparamsa)  包含用于显示消息框的信息。 MessageBoxIndirect 函数使用此结构。 (ANSI) |
| [MSGBOXPARAMSW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-msgboxparamsw)  包含用于显示消息框的信息。 MessageBoxIndirect 函数使用此结构。 (Unicode) |
| [MSLLHOOKSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-msllhookstruct)  包含有关低级别鼠标输入事件的信息。 |
| [MULTIKEYHELPA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-multikeyhelpa)  指定要搜索的关键字 (keyword) ，以及要由 Windows 帮助搜索的关键字 (keyword) 表。 (ANSI) |
| [MULTIKEYHELPW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-multikeyhelpw)  指定要搜索的关键字 (keyword) ，以及要由 Windows 帮助搜索的关键字 (keyword) 表。 (Unicode) |
| [NCCALCSIZE_PARAMS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-nccalcsize_params)  包含应用程序在处理WM_NCCALCSIZE消息时可用于计算窗口工作区的大小、位置和有效内容的信息。 |
| [NMHDR](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-nmhdr)  NMHDR 结构包含有关通知消息的信息。 (NMHDR 结构) |
| [NONCLIENTMETRICSA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-nonclientmetricsa)  包含与非小窗口的非工作区关联的可缩放指标。 (ANSI) |
| [NONCLIENTMETRICSW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-nonclientmetricsw)  包含与非小窗口的非工作区关联的可缩放指标。 (Unicode) |
| [PAINTSTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-paintstruct)  PAINTSTRUCT 结构包含应用程序的信息。 此信息可用于绘制该应用程序拥有的窗口的工作区。 |
| [POINTER_DEVICE_CURSOR_INFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-pointer_device_cursor_info)  包含指针设备的游标 ID 映射。 |
| [POINTER_DEVICE_INFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-pointer_device_info)  包含有关指针设备的信息。 这些结构的数组是从 GetPointerDevices 函数返回的。 从对 GetPointerDevice 函数的调用返回单个结构。 |
| [POINTER_DEVICE_PROPERTY](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-pointer_device_property)  包含基于指针的设备属性 (人机接口设备 (HID) 对应于 HID 用法) 全局项。 |
| [POINTER_INFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-pointer_info)  包含所有指针类型通用的基本指针信息。 应用程序可以使用 GetPointerInfo、GetPointerFrameInfo、GetPointerInfoHistory 和 GetPointerFrameInfoHistory 函数检索此信息。 |
| [POINTER_PEN_INFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-pointer_pen_info)  定义所有指针类型通用的基本笔信息。 |
| [POINTER_TOUCH_INFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-pointer_touch_info)  定义所有指针类型通用的基本触摸信息。 |
| [POINTER_TYPE_INFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-pointer_type_info)  包含有关指针输入类型的信息。 |
| [POWERBROADCAST_SETTING](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-powerbroadcast_setting)  随电源设置事件一起发送，并包含有关特定更改的数据。 |
| [RAWHID](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawhid)  描述来自人机接口设备 (HID) 的原始输入的格式。 |
| [RAWINPUT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinput)  包含来自设备的原始输入。 |
| [RAWINPUTDEVICE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinputdevice)  定义原始输入设备的信息。 |
| [RAWINPUTDEVICELIST](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinputdevicelist)  包含有关原始输入设备的信息。 |
| [RAWINPUTHEADER](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinputheader)  包含属于原始输入数据的标头信息。 |
| [RAWKEYBOARD](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawkeyboard)  包含有关键盘状态的信息。 |
| [RAWMOUSE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawmouse)  包含有关鼠标状态的信息。 |
| [RID_DEVICE_INFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rid_device_info)  定义来自任何设备的原始输入数据。 |
| [RID_DEVICE_INFO_HID](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rid_device_info_hid)  定义来自指定的人机接口设备 (HID) 的原始输入数据。 |
| [RID_DEVICE_INFO_KEYBOARD](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rid_device_info_keyboard)  定义来自指定键盘的原始输入数据。 |
| [RID_DEVICE_INFO_MOUSE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rid_device_info_mouse)  定义来自指定鼠标的原始输入数据。 |
| [SCROLLBARINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-scrollbarinfo)  SCROLLBARINFO 结构包含滚动条信息。 |
| [SCROLLINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-scrollinfo)  SCROLLINFO 结构包含由 SetScrollInfo 函数 (或SBM_SETSCROLLINFO消息) 设置的滚动条参数，或者由 GetScrollInfo 函数 (或SBM_GETSCROLLINFO消息) 检索的滚动条参数。 |
| [SERIALKEYSA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-serialkeysa)  包含有关 SerialKeys 辅助功能的信息，该功能将连接到串行端口的通信辅助数据解释为导致系统模拟键盘和鼠标输入的命令。 (ANSI) |
| [SERIALKEYSW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-serialkeysw)  包含有关 SerialKeys 辅助功能的信息，该功能将连接到串行端口的通信辅助数据解释为导致系统模拟键盘和鼠标输入的命令。 (Unicode) |
| [SOUNDSENTRYA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-soundsentrya)  包含有关 SoundSentry 辅助功能的信息。 当 SoundSentry 功能处于打开状态时，计算机仅在生成声音时显示视觉指示。 (ANSI) |
| [SOUNDSENTRYW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-soundsentryw)  包含有关 SoundSentry 辅助功能的信息。 当 SoundSentry 功能处于打开状态时，计算机仅在生成声音时显示视觉指示。 (Unicode) |
| [STICKYKEYS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-stickykeys)  包含有关 StickyKeys 辅助功能的信息。 |
| [STYLESTRUCT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-stylestruct)  包含窗口的样式。 |
| [TITLEBARINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-titlebarinfo)  包含标题栏信息。 |
| [TITLEBARINFOEX](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-titlebarinfoex)  通过包括标题栏的每个元素的坐标，扩展 TITLEBARINFO 结构中描述的信息。 |
| [TOGGLEKEYS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-togglekeys)  包含有关 ToggleKeys 辅助功能的信息。 |
| [TOUCH_HIT_TESTING_INPUT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-touch_hit_testing_input)  包含有关触摸数字化器报告的触摸接触区域的信息。 |
| [TOUCH_HIT_TESTING_PROXIMITY_EVALUATION](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-touch_hit_testing_proximity_evaluation)  包含命中测试分数，指示相对于与触摸接触区域相交的其他对象，该对象是否是触摸接触区域的可能目标。 |
| [TOUCHINPUT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-touchinput)  封装触摸输入的数据。 |
| [TOUCHPAD_PARAMETERS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-touchpad_parameters)  包含与所有检测到的触摸板相关的用户触摸板设置和系统信息。 |
| [TOUCHPREDICTIONPARAMETERS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-touchpredictionparameters)  包含硬件输入详细信息，可用于预测触摸目标，并帮助补偿处理包含距离和速度数据的触摸和手势输入时的硬件延迟。 |
| [TPMPARAMS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-tpmparams)  包含 TrackPopupMenuEx 函数的扩展参数。 |
| [TRACKMOUSEEVENT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-trackmouseevent)  由 TrackMouseEvent 函数用来跟踪在指定的时间范围内，鼠标指针何时离开窗口或鼠标悬停在窗口上。 |
| [UPDATELAYEREDWINDOWINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-updatelayeredwindowinfo)  由 UpdateLayeredWindowIndirect 用于为分层窗口提供位置、大小、形状、内容和半透明信息。 |
| [USAGE_PROPERTIES](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-usage_properties)  包含设备属性 (人机接口设备 (HID) 全局项，对应于任何类型的 HID 输入设备的 HID 用法) 。 |
| [USEROBJECTFLAGS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-userobjectflags)  包含有关窗口工作站或桌面句柄的信息。 |
| [WINDOWINFO](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-windowinfo)  包含窗口信息。 |
| [WINDOWPLACEMENT](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-windowplacement)  包含有关窗口在屏幕上的位置的信息。 |
| [WINDOWPOS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-windowpos)  包含有关窗口大小和位置的信息。 |
| [WNDCLASSA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-wndclassa)  包含由 RegisterClass 函数注册的窗口类属性。 (ANSI) |
| [WNDCLASSEXA](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-wndclassexa)  包含窗口类信息。 (ANSI) |
| [WNDCLASSEXW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-wndclassexw)  包含窗口类信息。 (Unicode) |
| [WNDCLASSW](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-wndclassw)  包含由 RegisterClass 函数注册的窗口类属性。 (Unicode) |
| [WTSSESSION_NOTIFICATION](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-wtssession_notification)  提供有关会话更改通知的信息。 服务在其 HandlerEx 函数中接收此结构，以响应会话更改事件。 |



## 枚举

展开表

|                                                              |
| :----------------------------------------------------------- |
| [AR_STATE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-ar_state)  指示系统的屏幕自动旋转状态。 例如，是否支持自动轮换，以及它是否由用户启用。 |
| [DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-dialog_control_dpi_change_behaviors)  介绍对话中子窗口的每监视器 DPI 缩放行为替代。 此枚举中的值是位字段，可以组合使用。 |
| [DIALOG_DPI_CHANGE_BEHAVIORS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-dialog_dpi_change_behaviors)  在 Per Monitor v2 上下文中，对话框将通过调整自身大小并重新计算其子窗口的位置来自动响应 DPI 更改， (此处称为重新布局) 。 |
| [FEEDBACK_TYPE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-feedback_type)  指定与事件关联的视觉反馈。 |
| [INPUT_MESSAGE_DEVICE_TYPE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-input_message_device_type)  发送输入消息的设备类型。 |
| [INPUT_MESSAGE_ORIGIN_ID](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-input_message_origin_id)  输入消息源的 ID。 |
| [LEGACY_TOUCHPAD_FEATURES](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-legacy_touchpad_features)  标识旧式触摸板已指示支持的设置。 |
| [ORIENTATION_PREFERENCE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-orientation_preference)  指示桌面应用进程的屏幕方向首选项。 |
| [POINTER_BUTTON_CHANGE_TYPE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-pointer_button_change_type)  标识与指针关联的按钮状态的更改。 |
| [POINTER_DEVICE_CURSOR_TYPE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-pointer_device_cursor_type)  标识指针设备游标类型。 |
| [POINTER_DEVICE_TYPE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-pointer_device_type)  标识指针设备类型。 |
| [POINTER_FEEDBACK_MODE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-pointer_feedback_mode)  标识可用于 CreateSyntheticPointerDevice 的视觉反馈行为。 |
| [tagPOINTER_INPUT_TYPE](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-tagpointer_input_type)  标识指针输入类型。 |
| [TOOLTIP_DISMISS_FLAGS](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-tooltip_dismiss_flags)  TOOLTIP_DISMISS_FLAGS 枚举定义常量，这些常量指示是注册还是取消注册窗口以接收工具提示消除通知。 |
| [TOUCHPAD_SENSITIVITY_LEVEL](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/ne-winuser-touchpad_sensitivity_level)  标识触摸板敏感度设置的值。 |

## 丰富的控件样式

以下窗口样式对丰富编辑控件是唯一的。

展开表

| 返回的常量              | 说明                                                         |
| :---------------------- | :----------------------------------------------------------- |
| **ES_DISABLENOSCROLL**  | 禁用滚动条，而不是在不需要滚动条时隐藏滚动条。               |
| **ES_EX_NOCALLOLEINIT** | 防止控件在创建时调用 [**OleInitialize**](https://learn.microsoft.com/zh-cn/windows/desktop/api/ole2/nf-ole2-oleinitialize) 函数。 此窗口样式仅在对话模板中有用，因为 [**CreateWindowEx**](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-createwindowexa) 不接受此样式。 |
| **ES_NOIME**            | 禁用 IME 操作。 此样式仅适用于亚洲语言支持。                 |
| **ES_NOOLEDRAGDROP**    | 禁用对 OLE 对象的拖放支持。                                  |
| **ES_SAVESEL**          | 当控件失去焦点时，保留所选内容。 默认情况下，控件重新获得焦点时将选择其全部内容。 |
| **ES_SELECTIONBAR**     | 向左边距添加空格，使光标变为向右向上箭头，从而允许用户选择整行文本。 |
| **ES_SELFIME**          | 指示富编辑控件，以允许应用程序处理所有 IME 操作。 此样式仅适用于亚洲语言支持。 |
| **ES_SUNKEN**           | 显示具有凹陷边框样式的控件，以便富编辑控件显示在其父窗口中。 |
| **ES_VERTICAL**         | 在垂直方向绘制文本和对象。 此样式仅适用于亚洲语言支持。      |

丰富的编辑控件还支持以下编辑控件样式。

展开表

| 返回的常量         | 说明                                                         |
| :----------------- | :----------------------------------------------------------- |
| **ES_AUTOHSCROLL** | 当用户在行尾键入一个字符时，自动将文本向右滚动 10 个字符。 当用户按下 Enter 时，控件会将所有文本向后滚动到位置 0。 |
| **ES_AUTOVSCROLL** | 当用户在最后一行按下 Enter 时，自动将文本向上滚动一页。      |
| **ES_CENTER**      | 将单行或多行编辑控件中的文本居中。                           |
| **ES_LEFT**        | 左对齐文本。                                                 |
| **ES_MULTILINE**   | 指定多行编辑控件。 默认值为单行编辑控件。                    |
| **ES_NOHIDESEL**   | 否定编辑控件的默认行为。 当控件失去输入焦点时，默认行为会隐藏所选内容，并在控件收到输入焦点时反转所选内容。 如果指定 [**ES_NOHIDESEL**](https://learn.microsoft.com/zh-cn/windows/win32/controls/edit-control-styles)，即使控件没有焦点，所选文本也会反转。 |
| **ES_NUMBER**      | 只允许将数字输入到编辑控件中。                               |
| **ES_PASSWORD**    | 显示编辑控件中键入的每个字符的星号 (*) 。 此样式仅对单行编辑控件有效。 |
| **ES_READONLY**    | 防止用户在编辑控件中键入或编辑文本。                         |
| **ES_RIGHT**       | 右对齐单行或多行编辑控件中的文本。                           |
| **ES_WANTRETURN**  | 指定当用户在对话框中将文本输入到多行编辑控件时按 Enter 键时插入回车符。 如果未指定此样式，则按 Enter 键的效果与按对话框的默认按钮的效果相同。 此样式对单行编辑控件不起作用。 |

富编辑控件不支持以下编辑控件样式。

- [**ES_LOWERCASE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/edit-control-styles)
- [**ES_OEMCONVERT**](https://learn.microsoft.com/zh-cn/windows/win32/controls/edit-control-styles)
- [**ES_UPPERCASE**](https://learn.microsoft.com/zh-cn/windows/win32/controls/edit-control-styles)