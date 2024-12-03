# WindowsMFC 5.5 但是CAD

-----

绘图 就是画画

### 第一次尝试划线

划线就是左键按下 动一动 然后弹起

CDC 给了API 分别是MoveTo 和LineTo分别代表了 划线开始和结束 所以 说 我们只需要这几点

1. CDC::MoveTo (int x , int y)  开始
2. CDC::LineTo (POINT point)  二者相通 结尾 
3. WM_CLICKUP
4. WM_CLICKDOWN

------

### 如何使用 

先设好 保存点 

```c++
private:
	Cpoint	m_ptBegin;
	Cpoint  m_ptEnd;
}

```

这样就可以保存好

---

然后讲point 里面的坐标 存入这两个里面  开始和结尾保存好

```c++

void CCADView::OnLButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	m_ptBegin = point;
	CView::OnLButtonDown(nFlags, point);
}


void CCADView::OnLButtonUp(UINT nFlags, CPoint point)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	m_ptEnd = point;
	CView::OnLButtonUp(nFlags, point);
}

```

使用Move 和Line 划线

```c++
void CCADView::OnDraw(CDC* pDC)
{
	CCADDoc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;

	pDC->MoveTo(m_ptBegin);
	pDC->LineTo(m_ptEnd);
}
```

这样就可以划线 但是 只能画一条不太好

----

把刚才那个捕获删除  定时删除 我们可以在 鼠标抬起时候 刷新 不刷背景

```c++
void CCADView::OnLButtonUp(UINT nFlags, CPoint point)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	m_ptEnd = point;
	InvalidateRect(NULL, FALSE);  // 保存之前画的
	CView::OnLButtonUp(nFlags, point);  
}
```

这样就能画直线了

---

### 鼠标效果 使用例

我们刚才使用的时候发现没有效果不知道画哪里所以呢 完善这个操作 在MouseMove里进行操作 

```c++
	if (nFlags & MK_LBUTTON) {  // 按位域结果为 1  就是 目标操作者对得上  也可以===
		m_ptEnd = point;
		InvalidateRect(NULL, FALSE);
		CView::OnMouseMove(nFlags, point);
	}
}
```

这样就能按下的时候画 不按的时候不画 但是一股放射味道 肯定不是能这么写

过于生草 所以我觉得 还是用老板比较好

```c++
void CCADView::OnMouseMove(UINT nFlags, CPoint point)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	
		m_ptEnd = point;
		InvalidateRect(NULL,TRUE );
		CView::OnMouseMove(nFlags, point);
	
}



void CCADView::OnLButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	m_ptBegin = point;
	CView::OnLButtonDown(nFlags, point);
}


void CCADView::OnLButtonUp(UINT nFlags, CPoint point)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	if (nFlags & MK_LBUTTON) {  // 按位域结果为 1  就是 目标操作者对得上
		m_ptEnd = point;
		InvalidateRect(NULL, TRUE);
		
	}
	CView::OnLButtonUp(nFlags, point);
}

```

------

### 我的鼠标放到外面怎么没反应了?  SetCapture捕获鼠标          | |    releaseCapture 不在捕获鼠标

挪出窗口外就会没有用所以我们使用setCapture 这个函数来进行操作

```c++
HWND SetCapture(
  [in] HWND hWnd  //当前线程中窗口的句柄，用于捕获鼠标
);
```

这个使用来捕获鼠标 当然了还有 不再不捕获鼠标 

```c++
BOOL ReleaseCapture();  // 直接用 函数成功返回非0 
```

-----

```c++


void CCADView::OnMouseMove(UINT nFlags, CPoint point)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	if (nFlags & MK_LBUTTON) {  // 移动但是要判断按没按下 否则他会一直移动
		m_ptEnd = point;
		InvalidateRect(NULL, TRUE);
		CView::OnMouseMove(nFlags, point);
	}
}



void CCADView::OnLButtonDown(UINT nFlags, CPoint point)
{	
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	m_ptBegin = point;
	SetCapture();  // 设置捕获

}


void CCADView::OnLButtonUp(UINT nFlags, CPoint point)
{
		m_ptEnd = point;
		InvalidateRect(NULL, TRUE);
		ReleaseCapture();
	}
	
	

```

使用方法

---------

### 画来画去只能画一条 

不能忍,数据结构启动!!!!!!

##### 使用链表保存 

当然了 MFC 贴心的加上了CList 链表 

```c++
//链表初始化
// This code defines myList as a list of strings
// such that memory gets allocated in chunks of
// 16 strings.
CList<CString, CString &> myList(16);
// This code defines myList2 as a list of ints
// such that memory gets allocated in chunks of
// 128 ints.
CList<int, int> myList2(128);
```

所以我们初始化应该是	

**CList <int> MyList;**, 这样的初始化  然后 开20个空间  (举例)

```c++
for (int i = 0; i < 20; i++) {
	MyList.AddTail(i);  // 链表新建尾部节点 
}
```

然后查询头部元素

```c++
POSITION pos = MyList.GetHeadPosition();  // 获取头部元素  空则返回NULL
```

```c++
POSITION pos = MyList.GetHeadPosition();  // 获取头部元素  空则返回NULL POSITION是规定  结构体指针 
while (pos) {
	int val = MyList.GetNext(pos);
	 // 遍历 获取值
}
```

-------

#### 正式使用

首先得定义吧 这是完整定义

```c++
private:
	CPoint m_ptBegin;
	CPoint m_ptEnd;	
typedef struct PointLines {
		CPoint m_ptBegin;  // 起点终点 封装
		CPoint m_ptEnd;
	}Lines, * PLines;  // 结构体传参防止 再看一眼就会爆炸  栈爆了
	CList <Lines> m_CLine;  //<-- 链表  保存
	
```

然后就是保存输出了

```c++
pDC->MoveTo(m_ptBegin);  // 绘制当前直线
pDC->LineTo(m_ptEnd);  

POSITION a_pos = m_CLine.GetHeadPosition();
while (a_pos) {
	Lines& line = m_CLine.GetNext(a_pos);  // 把链表的值取出来  里面是POSITION
	pDC->MoveTo(line.m_ptBegin);
	pDC->LineTo(line.m_ptEnd);
}

```

这就是简单画画了

---

### 我寻思 不太对吧  ------>使用双缓冲绘图防止闪烁

确实保存之前画画的痕迹了

**BUT** 有没有一种可能 ? 我没画一次 他也画一下 实时的并不是严格意义的保存 你画画一下他不能一直抖吧 所以 我们使用双缓冲绘图来实现

↓  兼容设备上下文  设置兼容位图 把位图塞进DC里 然后绘图 把DC图片COPY到客户区

```c++
WindowsGDI 的DC 里的 CreateCompatibleDC(HDC hdc)  // 兼容设备上下文
```

> 和大象放进冰箱是一样的  按部就行 其实没难的

1. 我要创建DC!!!!

```c++
CDC DC;  经典套路
DC.CreateCompatibleDC(pDC);  //pDC自带的
```

2. 我要创建一个位图!!!

```c++
CRect Rc;  // 获取Rc 为了宽高
GetClientRect(&Rc); // 获取
CBitmap Bitmaps; // 创建位图
Bitmaps.CreateCompatibleBitmap(pDC, Rc.Width(), Rc.Height());  // DC , 长宽
```

3. 我需要枪才能把弹夹压入 对吧 所以是时候选择枪了 

```c++
	//选择目标
	DC.SelectObject(&Bitmaps);
```

4. 子弹的类型  选择装填的目标  我们画线那么就把刚才的线装进去 

```c++
POSITION a_pos = m_CLine.GetHeadPosition();
	while (a_pos) {
		Lines& line = m_CLine.GetNext(a_pos);  // 把链表的值取出来  里面是POSITION
		DC.MoveTo(line.m_ptBegin);  // 记住不再是存在pDC输出了
		DC.LineTo(line.m_ptEnd);
	}
DC.MoveTo(m_ptBegin);
DC.LineTo(m_ptEnd);
```

5 发射 的方法 我们是创建图片 把画的东西都以位图形式出现了 

```c++
//我们是pDC输出的
pDC->BitBlt(0, 0, Rc.Width(), Rc.Height(), &DC, 0, 0, SRCCOPY);  // 懵逼请看 3 3是选择图片  2是把pDC的内容以位图形式保存
```

调试 出现一大块黑色发现背景是黑的 所以 我们要刷白 选择完再刷白

```c++
DC.SelectObject(&Bitmaps);
DC.FillSolidRect(&Rc, RGB(255, 255, 255));   // 重画背景色
```

怎么还闪啊?  仔细观看 咱们可是覆盖位图啊 所以不用刷背景

```c++
void CCADView::OnMouseMove(UINT nFlags, CPoint point)
{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	if (nFlags & MK_LBUTTON) {  // 移动但是要判断按没按下 否则他会一直移动
		m_ptEnd = point;
		InvalidateRect(NULL, FALSE);
		CView::OnMouseMove(nFlags, point);
	}

}



void CCADView::OnLButtonDown(UINT nFlags, CPoint point)
{	
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	m_ptBegin = point;
	SetCapture();  // 设置捕获

}


void CCADView::OnLButtonUp(UINT nFlags, CPoint point)
{
		m_ptEnd = point;
		m_CLine.AddTail(Lines{ m_ptBegin,m_ptEnd });  // 鼠标抬起时候是保存 所以 保存链表
		
		InvalidateRect(NULL, FALSE);
		ReleaseCapture();
	}
```

每个调试一下 发现都会导致闪 因为刷新背景把图片刷没了 所以会闪 

调成FALSE就没事了  ,这个思想挺重要的

-------

# END
