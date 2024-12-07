# CAD 矩形 直线代码简单实现篇

我们刚才学会了 画直线但是 矩形没学啊 我们知道了Rectangle() 是CDC 我们可以模仿一下于是乎  

```c++
CPoint m_ptBegin;
CPoint m_ptEnd; 
CPoint m_ptBegin2;
CPoint m_ptEnd2;
typedef struct PointLines {
	CPoint m_ptBegin;
	CPoint m_ptEnd;
}Lines, * PLines;  // 结构体传参防止 再看一眼就会爆炸
typedef struct PointLines2 {
	CPoint m_ptBegin2;
	CPoint m_ptEnd2;
}Lines2, * PLines2;  // 结构体传参防止 再看一眼就会爆炸
CList <Lines> m_CLine;  // 保存链表
CList <Lines2> m_CLine2;
int m_nId; // 判断 Menu状态
```

在弄个链表 但是记得我们是位图 矩形是一大块 这个提前说一声  相当于在来一遍 画直线 不过变成 矩形而已

```c++
void CCADView::CPdU(CPoint point)
{
	if (m_nId == IDM_LINE) {
		m_ptEnd = point;
		m_CLine.AddTail(Lines{ m_ptBegin,m_ptEnd });  // 鼠标抬起时候是保存 所以 保存链表
	}
	else if (m_nId == IDM_RECTANGLE) {
		m_ptEnd2 = point;
		m_CLine2.AddTail(Lines2{ m_ptBegin2,m_ptEnd2 });  // 鼠标抬起时候是保存 所以 保存链表
	}

}
```

这个判断抬起,下面是判断落下

```c+
void CCADView::CpdD(CPoint point)
{
	if (m_nId == IDM_LINE) {
		// TODO: 在此添加消息处理程序代码和/或调用默认值
		m_ptBegin = point;
	}
	if (m_nId == IDM_RECTANGLE) {
		m_ptBegin2 = point;
	}

}
```

经典的判断Menu 状态 

```c++
void CCADView::ZhiXian()
{
	m_nId = IDM_LINE;
}
void CCADView::OnRectangle()  // Choose
{
	m_nId = IDM_RECTANGLE;
}

//m_nId为指示
```

接下来是Move 其实一次无效区域也可以 我是为了显得文章多:)

```c++
void CCADView::OnMouseMove(UINT nFlags, CPoint point)
{
		
		// TODO: 在此添加消息处理程序代码和/或调用默认值
	if (m_nId == IDM_LINE) {
		if (nFlags & MK_LBUTTON) {  // 移动但是要判断按没按下 否则他会一直移动
			m_ptEnd = point;
			InvalidateRect(NULL, FALSE);
		}
	}
	else if (m_nId == IDM_RECTANGLE) {
		if (nFlags & MK_LBUTTON) {  // 移动但是要判断按没按下 否则他会一直移动
			m_ptEnd2 = point;
			InvalidateRect(NULL, FALSE);
		}
	}
		
	
}

```

核心思想 双缓冲视图 

```c++

	CDC DC;  // 创建 兼容设备上下文
	
	CRect Rc;
	GetClientRect(&Rc);
	DC.CreateCompatibleDC(pDC);// 找到目标
	CBitmap Bitmaps;
	
	Bitmaps.CreateCompatibleBitmap(pDC, Rc.Width(), Rc.Height());
	//选择目标
	DC.SelectObject(&Bitmaps);
	DC.FillSolidRect(&Rc, RGB(255, 255, 255));   // 重画背景色
	//绘个图先

	POSITION a_pos = m_CLine.GetHeadPosition();
	POSITION a_pos2 = m_CLine2.GetHeadPosition();
	
	while (a_pos2) {  // 矩形第一个让他绘制的时候线在前面  每次重绘都是把里面图片贴上去啊!!!!
		Lines2& line2 = m_CLine2.GetNext(a_pos2);  // 把链表的值取出来  里面是POSITION
		DC.Rectangle(line2.m_ptBegin2.x, line2.m_ptBegin2.y, line2.m_ptEnd2.x, line2.m_ptEnd2.y);
		k++;
	}

	while (a_pos) {
		Lines& line = m_CLine.GetNext(a_pos);  // 把链表的值取出来  里面是POSITION


		DC.MoveTo(line.m_ptBegin);
		DC.LineTo(line.m_ptEnd);
		k++;
	}
	if (m_nId == IDM_RECTANGLE) {
		DC.Rectangle(m_ptBegin2.x, m_ptBegin2.y, m_ptEnd2.x, m_ptEnd2.y);
	}

	if (m_nId == IDM_LINE) {
	DC.MoveTo(m_ptBegin);
	DC.LineTo(m_ptEnd);
}
	
		pDC->BitBlt(0, 0, Rc.Width(), Rc.Height(), &DC, 0, 0, SRCCOPY);
	
}

```

这样就可以实现了