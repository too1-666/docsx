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