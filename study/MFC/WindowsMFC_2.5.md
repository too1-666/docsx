# WindowsMFC_2.5 PROMAX

---

当我们接收消息时候 81 个消息不知所措 , 因为每个消息都要响应 所以WindowsMFC开发用一个方便的宏来进行 range 操作

```c++
ON_COMMAND_RANGE(1000, 2000, &CMineDlg::OnCommandRange) // 开始nid 末尾nid 进行枚举
```

需要提前声明操作

```c++
void CMineDlg:: OnCommandRange(UINT nID)
{
	CString CFmt;
	CFmt.Format("%d", nID);
	AfxMessageBox(CFmt);
}
```

这样就可以枚举nID操作

---

接下来是子类化修改过程函数  OnOK 本来是OK 接下来添加点新功能就行

 通过MyButton类实现绘制 首先创建MFC 的CButton类 然后设置类 MyButton  作为接收按钮 

因为我们的扫雷 都是以按钮作为触发条件 所以 要在CButton 进行接收Paint的绘制消息

```c++
void CMineDlg::OnStart()
{
	m_nButtonCount = 9*9;
	CButton* m_pButtons = new MyButton[m_nButtonCount]; // 句柄进入 在MyButton 绘制
	int nID = 0;
	CString csFmt;
	//CButton button;
	CRect rc;
	for (int i = 0; i < 9; i++	) {
		for (int j = 0; j < 9; j++) {
			csFmt.Format("% d", nID);
			rc.left = j * 32;
			rc.top = i * 32;
			rc.right = rc.left + 32;
			rc.bottom = rc.top + 32;
			
			m_pButtons[nID].Create(csFmt, BS_PUSHBUTTON, rc, this, 1000 + nID);
			m_pButtons[nID].ShowWindow(SW_SHOWNORMAL);
			nID++;
		}
	}
}
```

开始处理

```c++
void MyButton::OnPaint()
{
	CPaintDC dc(this); // device context for painting,
	dc.SetTextColor(RGB(255, 0, 0));
	dc.TextOut(0, 0,"1");
}

```

对吧开始游戏得绘制什么 绘制 雷区 我设置1 为扫雷的地区 , 这样我就可以触发Button

---

### 显然不符合预期

我们可以使用 自绘消息来进行消息处理坐标判断 使用BS_OWNDRAW 来进行 自绘按钮 他会发送WM_DRAWITEM 消息 我可以在MyButton里面进行操作

但是 发了WM_PAINT的话 WM_DRAWAITEM 就会接收不到, 微软贴心的把那个Draw作为虚函数 出现了 这样就能接受到DRAWITEM 的消息了

**(如果真有人看请记得把MyButton的 , 向前声明 删除掉)** 如果 你做了自绘 那么必须要处理 否则断言宏 就会断.

但是 由于我们走了虚函数多态就不在需要PAINT消息删掉就行全程自绘即可

---

# 先结束 下章再讲 前置逻辑很重要