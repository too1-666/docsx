# WIndowsMFC 3.0 ?

----

提到了虚函数WIndows 的DrawITem 下面是微软官方使用例

```c++
void MyButton::DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct)  // 触发自绘 消息就不用 关心Print消息了
{
    UINT uStyle = DFCS_BUTTONPUSH;

    // This code only works with buttons.
    ASSERT(lpDrawItemStruct->CtlType == ODT_BUTTON);

    // If drawing selected, add the pushed style to DrawFrameControl.
    if (lpDrawItemStruct->itemState & ODS_SELECTED)
        uStyle |= DFCS_PUSHED;

    // Draw the button frame.
    ::DrawFrameControl(lpDrawItemStruct->hDC, &lpDrawItemStruct->rcItem,
        DFC_BUTTON, uStyle);

    // Get the button's text.
    CString strText;
    GetWindowText(strText);

    // Draw the button text using the text color red.
    COLORREF crOldColor = ::SetTextColor(lpDrawItemStruct->hDC, RGB(255, 0, 0));
    ::DrawText(lpDrawItemStruct->hDC, strText, strText.GetLength(),
        &lpDrawItemStruct->rcItem, DT_SINGLELINE | DT_VCENTER | DT_CENTER);
    ::SetTextColor(lpDrawItemStruct->hDC, crOldColor);
}

```

当然了这只是演示

---

```c++
void MyButton::DrawItem(LPDRAWITEMSTRUCT lpDrawItemStruct)  // 触发自绘 消息就不用 关心Print消息了
{
    if (lpDrawItemStruct->itemState & ODS_SELECTED)  // 判断状态 是否点击
    {
        CDC dc;
        dc.Attach(lpDrawItemStruct->hDC);  // DC 加载到hDC 里面
        CBitmap BitMap;
        CDC bdc;
        BitMap.LoadBitmap(IDB_BITMAP3);
        bdc.CreateCompatibleDC(&dc);
        bdc.SelectObject(BitMap);
        BITMAP map;
        BitMap.GetBitmap(&map);
        dc.BitBlt(0, 0, map.bmWidth, map.bmHeight, &bdc, 0, map.bmWidth * 1, SRCCOPY);
    }
    else {
        CDC dc;
        dc.Attach(lpDrawItemStruct->hDC);  // DC 加载到hDC 里面
        CBitmap BitMap;
        CDC bdc;
        BitMap.LoadBitmap(IDB_BITMAP3);
        bdc.CreateCompatibleDC(&dc);
        bdc.SelectObject(BitMap);
        BITMAP map;
        BitMap.GetBitmap(&map);
        dc.BitBlt(0,0,map.bmWidth,map.bmHeight,&bdc,0,map.bmWidth*0,SRCCOPY);
    }
}
```

采用了上上章写的 绘制俄罗斯方块 就是那个PAINT消息 只不过是用在了虚函数DrawItem 里面

------

### 可以使用 手动设置CheckBox 来进行按块操作

可以在MyButton 设置Private 类 **Bool lsMyButton = false;**  先进行初始化 然后在**ODS_ELECTED**那个判断里进行 取反

```c++
f (lpDrawItemStruct->itemState & ODS_SELECTED)  // 判断状态 是否点击
{
        dc.BitBlt(0, 0, map.bmWidth, map.bmHeight, &bdc, 0, map.bmWidth * 1, SRCCOPY);
		IsMyButton = true;    
}
    else if (IsMyButton ){
 
        dc.BitBlt(0,0,map.bmWidth,map.bmHeight,&bdc,0,map.bmWidth*0,SRCCOPY);
    }
}
```

以下为最终版本

```c++
 CDC dc;
 dc.Attach(lpDrawItemStruct->hDC);  // DC 加载到hDC 里面
 CBitmap BitMap;
 CDC bdc;
 BitMap.LoadBitmap(IDB_BITMAP3);
 bdc.CreateCompatibleDC(&dc);
 bdc.SelectObject(BitMap);
 BITMAP map;
 BitMap.GetBitmap(&map);
 if (lpDrawItemStruct->itemState & ODS_SELECTED){  // 判断状态
     dc.StretchBlt(0, 0, 32, 32,&bdc, 0, map.bmWidth * 0, 16,16,SRCCOPY);
     MyIsCheck = !MyIsCheck;
 }
 else if (MyIsCheck) {
     dc.StretchBlt(0, 0, 32,32, &bdc, 0, map.bmWidth * 3,16,16,SRCCOPY);
 }
 else {
     dc.StretchBlt(0, 0, 32, 32, &bdc, 0, map.bmWidth * 0,16,16, SRCCOPY);
 }
```

---

### 动态子类化

实现用其他的Button 按钮实现动态子类化  (点击其他按钮触发扫雷的 控件)

现在需要知道一个方法 那就是 对象转为句柄

```c++
HWND hMybutton = GetDlgItem(IDOK)->GetSafeHwnd();   //将对象转句柄
```

当新建一个新类RANGE的宏必须要放在最底下mineDlg.cpp的宏

```c++
// 位置mineDlg.cpp
BEGIN_MESSAGE_MAP(CMineDlg, CDialogEx)
	ON_WM_SYSCOMMAND()
	ON_WM_QUERYDRAGICON()
	ON_COMMAND(IDM_START, &CMineDlg::OnStart)
	ON_WM_DESTROY()
	ON_BN_CLICKED(IDC_OK, &CMineDlg::OnBnClickedOk)
	ON_COMMAND_RANGE(1000, 2000, &CMineDlg::OnCommandRange)  // 这个必须要放在最底下
END_MESSAGE_MAP()
```

如果把ON_COMMAND_RANGE  宏放在前面那么后面的宏都会失效

----

写入

``` c++
void CMineDlg::OnBnClickedOk()
{
	HWND hWnd = GetDlgItem(IDC_OK)->GetSafeHwnd();  // 对象转句柄
	MyButton* pObj = new MyButton(); //分配
	pObj->SubclassWindow(hWnd); //传入窗口句柄
}
```



还有 就是SubClassWindow不能创建两次否则会触发断言

```c++
ASSERT(m_hWnd == NULL);     // only attach once, detach on destroy
```

官方说明 只能发送一次  所以我们需要做判断

```c++
static MyButton button; // 没有delete只能使用静态
if(button.SubClassWindow != NULL)
    return;
```

要允许自绘了

```c++
static MyButton button;
	HWND GhWnd = GetSafeHwnd();
	HWND hWnd = GetDlgItem(IDC_OK)->GetSafeHwnd();
	if (button.GetSafeHwnd() != NULL) {
		return;
	}
	button.SubclassWindow(hWnd); //传入窗口句柄
	button.SetButtonStyle(BS_OWNERDRAW,1);  //有hWnd后允许自绘
```

这样Button的按钮就会改变

这是将对象转为句柄 ,接下来是句柄转为对象

---

### 句柄转为对象

首先是最简单的 CWnd cWnd 一下 构造给CWnd

```c++
CWnd cWnd;s
cWnd.attach(hWnd)  //将句柄附加到对象
```

 复杂的 必须是MFC创建的

```c++
CWnd* pWnd = cWnd.FromHandle(hWnd); //返回指向cWnd对象的指针 , 如果没有创建成功 则创建一个临时cWnd的对象
```

-----

### 创建一个小窗

```c++
 
void CMineDlg::OnAbout()
{
	CAboutDlg  Dlg;
	Dlg.DoModal(); //调用此成员函数以调用模式对话框，并在完成后返回对话框结果。 快速调用
}

```

**在这个对话框里使用控件**

正常来说就是GetDlgItem(nID) 对吧 但是麻烦 所以呢就有一个新的获取方法 叫做数据变化绑定

- 打开刚才定制DLG的界面
- 在右键类向导 找到成员变量 (提前新增一个BUTTON一个 EDIT)
- 选择成员变量设置为CString  随便弄个名字我设置的m_csEDIT01(cs的格式类里面)
- 然后就可以使用了

```c++
	CString m_csEdit01;  //设置的结果
```

为了证明是时刻变化的 我们设置按钮 里 获取 EDIT的值 但是 需要UpdateData更新

```c++
void CAboutDlg::OnBnClickedButton1()
{	//数据变化绑定  

	
	UpdateData(TRUE);  // 更新检索
	AfxMessageBox(m_csEdit01);
	
	// 更改EDIT的值
	m_csEdit01 = "ccccccccxk!";  // 修改数据
	UpdateData(FALSE);  //不更新 初始化
}

```

UpdateData (BOOL) 里面的值 是指示是正在初始化对话框 ( FALSE ) 还是正在检索数据 ( TRUE ) 的标志。

设置多个 也可以实现  按按钮同时修改标题 也可以

```c++

void CAboutDlg::OnBnClickedButton1()
{//数据变化绑定  

	m_Button1.SetWindowText("DDF");  // 修改标题
	UpdateData(TRUE);  // 更新检索
	AfxMessageBox(m_csEdit01);
	AfxMessageBox(m_csEDIT2);
	
	m_csEdit01 = "ccccccccxk!";  // 修改数据
	m_csEDIT2 = "ctrl!";  // 修改数据
	UpdateData(FALSE);  //不更新 初始化
}
===
```

这样就可以实现了  **UpdateData** 是重要的东西 他相当于 SetClintRc

UpdateData其实调用的是 F12一下就可以或者查看调用堆栈就行

```c++
void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialogEx::DoDataExchange(pDX);
	DDX_Text(pDX, IDC_EDIT, m_csEdit01);
	DDX_Text(pDX, IDC_EDIT02, m_csEDIT2);
	DDX_Check(pDX, IDC_CHECK1, m_Check1);
	DDX_Control(pDX, IDC_BUTTON1, m_Button1);
}
```

## END!!!!

