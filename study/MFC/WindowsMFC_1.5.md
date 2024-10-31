# WIndowsMFC 1.5 PRO MAX 版本

### 认识MFC 框架的集成

-----

#### CaboutDlg内容

例如:可以自动创建模态化框架 自动生成 

```c++
	CAboutDlg aboutDlg;
	aboutDlg.DoModal();

```

```c++
	CAboutDlg aboutDlg;
	aboutDlg.Create(参数);

```

也可以非模态

### MFC 绘制文字

可以提供大量的绘制功能  拿现成的模板使用

```c++
void CMFCApplication3View::OnDraw(CDC* pDC)
{
	CMFCApplication3Doc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;
	RECT rc;  // 绘制范围
	CString str ("FUCKu");
	GetClientRect(&rc);  // 获取绘制矩形  ,MFC 优化不用写句柄了
	pDC->DrawText(str,&rc,DT_LEFT);
	// TODO: 在此处为本机数据添加绘制代码
```

下面是参考

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

**在CDC 下面 CPaintDC 不是 GetDC 是BeginPaint  ClintDC是GetDC();**

----

### MFC绘制图片

```c++
void CMFCApplication3View::OnDraw(CDC* pDC)
{
	CMFCApplication3Doc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;
	CBitmap bitmap;  
	bitmap.LoadBitmap(IDB_BITMAP1);// 获取BitMap句柄
	CDC dc;  // 创建个空的 
	dc.CreateCompatibleDC(pDC);  //载入到DC
	dc.SelectObject(bitmap);  //设置DC
	BITMAP map;  //设置结构体 map里面有长宽高
	bitmap.GetBitmap(&map);  // 获取句柄到map
	
	
	//CClientDC dc(this);
	RECT rc;  // 绘制范围
	CString str ("FUCKu");
	GetClientRect(&rc);  // 获取绘制矩形
	pDC->DrawText(str,&rc,DT_LEFT);
	pDC->BitBlt(0, 0, map.bmWidth, map.bmHeight, &dc, 0, 0, SRCCOPY);//绘制目标图片
	// TODO: 在此处为本机数据添加绘制代码
}

```

--------

### MFC 更改字体大小(其实可以this指针但是我懒的改)

```c++
	RECT rc;  // 绘制范围
	CString str ("FUCKu");
	GetClientRect(&rc);
	/*CPen pen(PS_SOLID, 1, RGB(255, 0, 0));
	pDC->SelectObject(pen);*/ 
	pDC->SetTextColor(RGB(255,0,0));
	CFont font;
	VERIFY(font.CreateFont(
		12, // nHeight
		0, // nWidth
		0, // nEscapement
		0, // nOrientation
		FW_NORMAL, // nWeight
		FALSE, // bItalic
		FALSE, // bUnderline
		0, // cStrikeOut
		ANSI_CHARSET, // nCharSet
		OUT_DEFAULT_PRECIS, // nOutPrecision
		CLIP_DEFAULT_PRECIS, // nClipPrecision
		DEFAULT_QUALITY, // nQuality
		DEFAULT_PITCH | FF_SWISS, // nPitchAndFamily
		_T("Arial")));
	pDC->SelectObject(font);
	  // 获取绘制矩形
	pDC->DrawText(str,&rc,DT_LEFT);
```

----

MFC右键菜单 右键 CMFCApplication3View类的类视图添加OnButtonDown 消息 编辑 就可以

```c++

void CMFCApplication3View::OnRButtonDown(UINT nFlags, CPoint point)
{
	CMenu menu;
	menu.LoadMenu(IDR_MAINFRAME);
	CMenu* pSubMenu =menu.GetSubMenu(0);  // 获取子菜单  从0开始
	ClientToScreen(&point);  //客户转桌面坐标不然的话 右键坐标对应桌面坐标 会有偏差
	pSubMenu->TrackPopupMenu(TPM_RIGHTBUTTON, point.x, point.y, this);  //指定位置加载菜单区域
	CView::OnRButtonDown(nFlags, point); 
}

```

MFC左键弹框

> 按照常理 我们吧 需要再消息循环里构造COMMAND 的里面构造LBUTTON消息 MFC 不用他提前构造好了

```c++
void CMFCApplication3View::OnLButtonDown(UINT nFlags, CPoint point)
{
	AfxMessageBox("LEFT");  //提供快速处理,不用封装
	CView::OnLButtonDown(nFlags, point);
}
```

---

双击按钮即可快速创建该响应函数  , 右键控件添加事件处理或者说使用类向导来反应函数 

### 表类型的处理消息

调用ListBox 进行实验 ,创建成功后发现在MessageMap里声明调用函数 其实所有函数指针指向这里  在.h文件里

```c++
   BEGIN_MESSAGE_MAP(CMyDlg, CDialogEx)
	ON_WM_SYSCOMMAND()
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	ON_NOTIFY(LVN_ITEMCHANGED, IDC_LIST1, &CMyDlg::OnLvnItemchangedList1)
	ON_NOTIFY(NM_DBLCLK, IDC_LIST1, &CMyDlg::OnDblclkList1)  //使用视图创建可能创建失败然后没有消息回应
END_MESSAGE_MAP()
```

**注释不要瞎删哦** 也不要乱加  **手删的时候一定要看好这里也要删除声明**

在类向导里可以找到所有可以重写的虚函数.

---

### 关于不使用封装MFC的函数fangfa

DefWindowProc() 这个就是被封装了  HWND被省略了 

如果你使用**::** 符号那么你就不会调用封装的函数 会使用原函数

```c++
return ::DefWindowProc(GetSafeHwnd(),message,wParam,lParam);  //未调用封装的函数
```

调用了

```c++
return DefWindowProc(message,wParam,lParam);  // 调用了省略HWND
```

-----

### OnCommand | OnCmdMsg消息自定义

首先简单写一个 新建就会弹的消息

```c++
void CMFCApplication3View::OnFileNew()
{
	AfxMessageBox("新建文件");
}

```

但是我们不想再这里响应 我们想在Command回应

在单文档里 OnCommand消息在View并不能回应 对话框消息可以用 ,单文档的OnCommand 是在**CMainFrame**先在进行响应然后主窗口调用虚函数调用子窗口, 单文档形式他是在**OnCmdMsg**里进行回应的

```c++
BOOL CMFCApplication3View::OnCmdMsg(UINT nID, int nCode, void* pExtra, AFX_CMDHANDLERINFO* pHandlerInfo)
{
	// TODO: 在此添加专用代码和/或调用基类
	if (nID == ID_FILE_NEW) {
		AfxMessageBox("ID_FILE_NEW");
		return TRUE;
	}
	return CView::OnCmdMsg(nID, nCode, pExtra, pHandlerInfo);
}
```

可以显示出来但是会一直弹 那是因为菜单显示也会有该消息,但是在对话框消息Dlg消息就是Command,然后捏 切换成Dialog 风格的

```c++
void CMyDlg::OnBnClickedOk()
{
	// TODO: 在此添加控件通知处理程序代码
	AfxMessageBox("OK");
}

```

我可以在OnCommand处理

```c++
 void CMyDlg::OnBnClickedOk()
{
	// TODO: 在此添加控件通知处理程序代码
	AfxMessageBox("OK");
}


BOOL CMyDlg::OnCommand(WPARAM wParam, LPARAM lParam)
{
	// TODO: 在此添加专用代码和/或调用基类
	if (LOWORD(wParam) == IDOK) {
		AfxMessageBox("OK!!!");
		//return TRUE; // 会二次处理捏  
	}
	return CDialogEx::OnCommand(wParam, lParam);
}

```

我在return TRUE 打了注释 不注释只会处理一次 OnCommand消息,注释了 会再走一次OnBnClick()

如果点击消息时候添加OnCmdMsg

那么也是OnCommand 先走 然后OnCmdMsg 最后 是 OnBnClick  ,OnCommand解析后再走OnCmdMsg

----



# 结束了 

