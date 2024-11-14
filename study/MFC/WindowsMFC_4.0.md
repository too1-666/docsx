# MFC4.0

----

## spy++能干什么 

vs的工具 很好用 但是没人知道 所以我介绍一下Vs工具怎么用 

1. 可以 监控消息  选择 监视里的日志消息即可监控
2. 消息 可以过滤想要的消息

----

### 设置ColorDialog 

这个东西很方便 设置调整颜色的 方法  , 随便一个button 启动 一下这个

```c++

void CUIDlg::OnBnClickedColor()
{
	// TODO: 在此添加控件通知处理程序代码
	CColorDialog dlg; 
	if (dlg.DoModal() == IDOK) {
		COLORREF color = dlg.GetColor(); // 获取 Color值选择的颜色
		CString csFmt; //格式化字符串
		csFmt.Format(_T("%08x"), color);  // 16 进制 的Color
		AfxMessageBox(csFmt);
	
	}
}
```

这是简单的获取颜色的十六进制信息的方法

* 选择其他颜色 红绿蓝(RGB) 会 以 **00(透明度)00(蓝)00(绿)00(红)**的形式存在

---

### 学习使用CFileDlg

首先知道结构是什么

CFileDialog 的结构体

```c++
explicit CFileDialog(
 BOOL bOpenFileDialog,
 LPCTSTR lpszDefExt = NULL,
 LPCTSTR lpszFileName = NULL,
 DWORD dwFlags = OFN_HIDEREADONLY | OFN_OVERWRITEPROMPT,
 LPCTSTR lpszFilter = NULL,
 CWnd* pParentWnd = NULL,
 DWORD dwSize = 0,
 BOOL bVistaStyle = TRUE);
```

>bOpenFileDialog [in] 参数，指定要创建的对话框类型。 将其设置为 TRUE 可构造“文件 > 打开”对话框。 将其设置为 FALSE 可构造“文件 > 另存为”对话框。

> lpszDefExt [in] 默认的文件扩展名。 如果用户不包含已知扩展名 (在文件名框中) 用户计算机上具有 关联的扩展， 则 lpszDefExt 指定的扩展名会自动追加到文件名中。 如果此参数为 NULL，则不会追加任何扩展名。

> lpszFileName [in] “文件名”框中显示的初始文件名。 如果为 NULL，则不会显示初始文件名。

> dwFlags [in] 一个或多个标志的组合，可用于自定义对话框。 有关这些标志的说明，请参阅 Windows SDK 中的 OPENFILENAME 结构。 如果修改 m_ofn.Flags 结构成员，请在更改 中使用按位或运算符以保持默认行为不变。

> lpszFilter [in] 一系列字符串对，用于指定可应用于文件的筛选器。 如果指定文件筛选器，则只有与 筛选条件匹配的文件才会显示在“文件”列表中。 请参阅“注解”部分，详细了解如何使用文 件筛选器。

> pParentWnd [in] 一个指针，指向文件对话框的父窗口或所有者窗口。

> dwSize [in] OPENFILENAME 结构的大小。 此值取决于操作系统版本。 MFC 使用了此参数来确定要 创建的相应对话框类型。 默认大小为 0 表示 MFC 代码将根据运行程序的操作系统版本确 定要使用的正确的对话框大小。

> bVistaStyle [in] 注意 此参数在 Visual Studio 2008 及更高版本中可用，因此，仅当你在 Windows Vista 或更高版本中运行时，才使用新样式对话框。指定文件对话框样式的参数。 将其设置为 TRUE 可使用新 Vista 样式文件对话框。 否则 将使用旧样式的对话框。 请参阅“注解”部分，详细了解如何在 Vista 下运行。	

---

只需要记得 第一个参数需要添加

如果为FALSE 的另存为需要 

```c++
static TCHAR BASED_CODE szFilter[] = _T("自定义 (*.txt)|*.txt||");
```

```c++
void CUIDlg::OnBnClickedUiDialog()
{
	static TCHAR BASED_CODE szFilter[] = _T("自定义 (*.txt)|*.txt||");
	CFileDialog dlg(FALSE,szFilter,_T("MyBlog=e1elibrary.com"), OFN_HIDEREADONLY | OFN_OVERWRITEPROMPT, szFilter);  // 打开要求为TRUE,另存为 为FALSE
	if(dlg.DoModal()== IDOK){
		AfxMessageBox(dlg.GetPathName());
	}
}

```

这样就可以默认txt 另存为了

如果为TRUE 是打开的意思

```c++
void CUIDlg::OnBnClickedUiDialog()
{

	CFileDialog dlg(FALSE) //则为打开
	if(dlg.DoModal()== IDOK){
		AfxMessageBox(dlg.GetPathName());
	}
}

```

----

### FOnt 加载使用

```c++

void CUIDlg::OnBnClickedFonts()
{
	CFontDialog dlg;
	if (dlg.DoModal() == IDOK) {
		LOGFONT lf;
	dlg.GetCurrentFont(&lf);
		m_Font.CreateFont(
			lf.lfHeight,
			0, 
			0, 
			0, 
			FW_NORMAL, 
			FALSE, 
			FALSE, 
			0, 
			ANSI_CHARSET, 
			OUT_DEFAULT_PRECIS, 
			CLIP_DEFAULT_PRECIS, 
			DEFAULT_QUALITY, 
			DEFAULT_PITCH | FF_SWISS, 
			lf.lfFaceName);
		AfxMessageBox(_T("Choose"));
		InvalidateRect(nullptr);
	
	}
}

```



接下来是加载Font 了 首先我们需要思考 怎么才能加载  按照以前开看 我们需要设置字体选择字体 无效化区域 才能展示 

* 设置一个 值 Font 在UIDlg.h设置一个**CFont m_Font**

* 在PAINT 里面设置 但是要注意判断那个要删掉不然不会加载

  ```c++
  GetClientRect(&rect);
  SelectObject(m_Font)
  ```

* 通过 这个代码实现更改 Font 

> CFontDialog dlg;
> 	if (dlg.DoModal() == IDOK) {
> 	

* 需要一个加载地方

  >LOGFONT lf;
  >	dlg.GetCurrentFont(&lf);  得把 Font 参数 加载吧

   

* 通过**m_Font.CreateFont()**载入Font 参数   LOGFONT是结构体

```c++
LOGFONT lf;
	dlg.GetCurrentFont(&lf);
		m_Font.CreateFont(
			lf.lfHeight,
			0, 
			0, 
			0, 
			FW_NORMAL, 
			FALSE, 
			FALSE, 
			0, 
			ANSI_CHARSET, 
			OUT_DEFAULT_PRECIS, 
			CLIP_DEFAULT_PRECIS, 
			DEFAULT_QUALITY, 
			DEFAULT_PITCH | FF_SWISS, 
			lf.lfFaceName);
```

```c++
typedef struct tagLOGFONTW {
  LONG  lfHeight;
  LONG  lfWidth;
  LONG  lfEscapement;
  LONG  lfOrientation;
  LONG  lfWeight;
  BYTE  lfItalic;
  BYTE  lfUnderline;
  BYTE  lfStrikeOut;
  BYTE  lfCharSet;
  BYTE  lfOutPrecision;
  BYTE  lfClipPrecision;
  BYTE  lfQuality;
  BYTE  lfPitchAndFamily;
  WCHAR lfFaceName[LF_FACESIZE];
} LOGFONTW, *PLOGFONTW, *NPLOGFONTW, *LPLOGFONTW;  //结构
```

这是几个要素  , 无效化 挂载上 输出  就可以实现

-------

### 优化 没有new 对象导致出现的错误 

首先CFont* m_pFont = nullptr 设置初始化

然后做是否为空 的判断如果是空那么加载进去

> if (m_pFont!=nullptr)
> 	dc.SelectObject(&m_pFont); 

在刚才设置字体界面的地方添加new 值

```c++
CFontDialog dlg;
if (dlg.DoModal() == IDOK) {
	m_pFont = new CFont;
	if (m_pFont == nullptr) {
		delete m_pFont;
	}
	
	LOGFONT lf;
dlg.GetCurrentFont(&lf);
	m_pFont->CreateFont(
		lf.lfHeight,
		0, 
		0, 
		0, 
		FW_NORMAL, 
		FALSE, 
		FALSE, 
		0, 
		ANSI_CHARSET, 
		OUT_DEFAULT_PRECIS, 
		CLIP_DEFAULT_PRECIS, 
		DEFAULT_QUALITY, 
		DEFAULT_PITCH | FF_SWISS, 
		lf.lfFaceName);
	AfxMessageBox(_T("Choose"));
	InvalidateRect(nullptr);

}
```

**不要忘了销毁**

```c++
void CUIDlg::OnDestroy()
{
	CDialogEx::OnDestroy();
	if (m_pFont == nullptr) {
		delete m_pFont; 
	}
}

```

