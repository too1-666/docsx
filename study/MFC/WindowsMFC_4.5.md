# Windows4.5 MFC

---

搞个炫酷的东西 复刻一下 文件管理的图标

通过类向导设置一个ListControl控件  和一个进度条 命名为m_List  另一个是Progress但是呢 太多东西东一块西一块也不合适 使用UIDlg.cpp 使用吗

> BOOL MyInitControl ()  为我的整合控件

莫忘初始化 **// TODO: 在此添加额外的初始化代码 MyInitControl();**  为啥推荐BOOL 就是因为返回值可以判断

---

### 首先处理 进度条

设置进度条长度 SetRange (0,100) 我要设置进度条0-100 

```c++
BOOL CUIDlg::MyInitControl()
{
	// TODO: 在此处添加实现代码.
	m_Progress.SetRange(0, 100);  // 设置进度条
	SetTimer(1, 100, nullptr);  //0.1 s +10
	return 0;
}
```

SetTime了就要 接收通过类向导 设置TIMMER 

```c++
void CUIDlg::OnTimer(UINT_PTR nIDEvent)  // 定时器ID
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	if (nIDEvent == 1) {
		m_Progress.SetPos(m_Progress.GetPos() + 10);  //SetPos是设置当前进度条位置 GetPos 获取当前位置(每次进度条+10 100 结束)
	}
		CDialogEx::OnTimer(nIDEvent);
	
}
```

很好理解吧

---

### ListControl

CListControl是这个控件

CListImage里面添加点文字吧

```c++

BOOL CUIDlg::MyInitControl()
{
	// TODO: 在此处添加实现代码.
	m_Progress.SetRange(0, 1000);
	SetTimer(1, 100, nullptr);
	m_List.InsertItem(0, TEXT("111"));
	
	return TRUE;
}

```

这样ListControl就有111 这个字了,太孤单多加点

```c++
	BOOL CUIDlg::MyInitControl()
	{
		// TODO: 在此处添加实现代码.
		m_Progress.SetRange(0, 1000);
		SetTimer(1, 100, nullptr);
		for (int i =0; i<= 20; i++) {
			CString Cfmt;
			Cfmt.Format(_T("e1elibrary.com %d"), i);
			m_List.InsertItem(0, Cfmt);
		}

		return TRUE;
	}

```

还是不好 , 加点图片吧 设置一个 

CImageList添加图标 

```c++
BOOL CUIDlg::MyInitControl()
{
	// TODO: 在此处添加实现代码.
	m_Progress.SetRange(0, 1000);
	SetTimer(1, 100, nullptr);
	
	m_ImageList.Create(32, 32, ILC_COLOR8, 0, 4);  // 设置创建图片
	m_ImageList.Add(LoadIcon(AfxGetInstanceHandle(), MAKEINTRESOURCE(IDR_MAINFRAME))); 添加图片
	m_List.SetImageList(&m_ImageList, LVSIL_NORMAL);
	for (int i =0; i<= 20; i++) {
		CString Cfmt;
		Cfmt.Format(_T("e1elibrary.com %d"), i);
		m_List.InsertItem(0, Cfmt);
	}
	
	return TRUE;
}
```



**项目点击回应消息回应 LVM_ITEMCHANGED**

在类向导添加 ListControl的消息相应LVM_ITEMCHANGED即可

```c++

void CUIDlg::OnItemchangedList2(NMHDR* pNMHDR, LRESULT* pResult)
{
	LPNMLISTVIEW pNMLV = reinterpret_cast<LPNMLISTVIEW>(pNMHDR);  //默认给的初始化
	if (pNMLV->uNewState == 3) {  // 点击NewState就是3  可以说是非零值也ky
		CString CsItem = m_List.GetItemText(pNMLV->iItem, pNMLV->iSubItem);  //Item 是索引  ISubItem是子项索引
		AfxMessageBox(CsItem);
	}

	*pResult = 0;
}

```

>  AfxMessageBox(CsItem);就是
>
> 获取标题 Cfmt.Format(_T("e1elibrary.com %d"), i); 

-----

### ListBox 的使用 , 刚才是ListControl

设置控件做演示在Init里面添加ListBox文字

```c++
m_ListBox.InsertString(0, _T("1"));  //第0项+TEXT   添ListBox文字
m_ListBox.InsertString(1, _T("2"));
m_ListBox.InsertString(0, _T("3"));
```

以OK按钮作为回应 

```c++
void CUIDlg::OnBnClickedOk()
{
	int nIndex = m_ListBox.GetCurSel();  //获取Index 号
	CString csString;   // 设置空的Cstring保存
	m_ListBox.GetText(nIndex, csString);  // 获取ListBox 目标信息 
	AfxMessageBox(csString);  //打印信息
	CDialogEx::OnOK();
}

```

如果我们想更进一步的话 就不能这个回应 多选回应不了

```c++
	for (int i = 0; i < m_ListBox.GetCount(); i++)
	{
			str.Format(_T("item %d: select state is %s\r\n"),
				i,
				m_ListBox.GetSel(i) > 0 ? _T("true") : _T("false"));
		AfxMessageBox(str);
	}
```

这样可以判断多选



----------

---------

------

## 文件I/O的使用 

当你们看到这个b东西时候是不是怀念C库了 

其实这个很好用

------

## CFileFind 

使用这个就可以 操作文件了 , 首先来弄个操作文件 但是不用 因为看标题 我们学的是MFC 所以 我们使用 MFC自带的FindFile

> FindFile
>
> pstrName: 一个指针，指向包含要查找文件的名称的字符串。 如果为 pstrName 传递 NULL ，则 FindFile 将执行通配符 (*.*) 搜索。 
>
> dwUnused: 预留用于使用派生类实现 FindFile 多态。 必须为 0。

这是适用例 首先记住findfile是BOOL 类型 

```c++
void CUIDlg::OnBnClickedFile()
{
	CFileFind finder;
	BOOL bWorking = finder.FindFile(_T("E:\\HMCL-3.5.8\\*.*"));// 如果 还有目录就是1 没了返回0  *.*表示所有文件  *是通配符 . * 是任意文件后缀 
	while (bWorking)  // 循环判断
	{
		bWorking = finder.FindNextFile();   // 如果没了那么就会返回0 值
		OutputDebugString((LPCTSTR)finder.GetFileName());  // 获取名字
		OutputDebugString(_T("\n"));
		OutputDebugString((LPCTSTR)finder.GetFilePath());  // 获取路径
	}
}

```

​	当然捏 我们可以加强一下  ok 做处理 另写参数递归

```c++
void Enumfile(CString pRootDir) {
	pRootDir += "\\*.*";
	CFileFind finder;
	
	BOOL bWorking = finder.FindFile(pRootDir);// 如果 还有目录就是1 没了返回0  *.*表示所有文件  *是通配符 . * 是任意文件后缀 
	while (bWorking)
	{
		bWorking = finder.FindNextFile();
		if (finder.GetFileName() == "." || finder.GetFileName() == "..")  // 判断上级,目录和本目录  . ..的存在
		{
			continue;  // 过滤跳过本次循环输出
		}

		OutputDebugString((LPCTSTR)finder.GetFileName());
		OutputDebugString(_T("\n"));
	/*	OutputDebugString((LPCTSTR)finder.GetFilePath());*/
	}
}

	void CUIDlg::OnBnClickedFile()
	{
		Enumfile(_T("E:\\HMCL-3.5.8"));
	
	}

```

----

### 优化一下 

肯定能跑 但是发现欸? 怎么回事 子目录但是跑不了  我们需要 通过递归的方式来获取子目录的 内容

```c++
void Enumfile(CString pRootDir) {
	pRootDir += "/*.*";
	CFileFind finder;
	CString Root;
	BOOL bWorking = finder.FindFile(pRootDir);// 如果 还有目录就是1 没了返回0  *.*表示所有文件  *是通配符 . * 是任意文件后缀 
	while (bWorking)
	{
		
		bWorking = finder.FindNextFile();
	
		if (finder.GetFileName() == "." || finder.GetFileName() == "..")  // 判断上级,目录和本目录  . ..的存在
		{
			continue;
		}
		if (finder.IsDirectory()) {  // 判断是否为目录
				
			AfxOutputDebugString(_T("Root :%s"), (LPCTSTR)finder.GetFileName());  // 输出根节点
			OutputDebugString(_T("\n"));
			Enumfile(finder.GetFilePath());  // 递归获取路径
		}
		else
		{
			OutputDebugString((LPCTSTR)finder.GetFileName());
			OutputDebugString(_T("\n"));
			
		}
	}
	
}
```

这样的优化就可以 实现 获取文件 目录

备注:GetVomlume 是system级别的 可以试试



-----------

# END
