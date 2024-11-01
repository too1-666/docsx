# MFC 2.0 开发

走完新手教程了 

----

### 扫雷

首先 咱们先了解一下Vs特性 众所周知 rec 是rc 二进制 rec 保存在exe里还是明文 所以 可以用vs打开exe文件 来修改素材

-----

### START

偷走这些 图片后 咱们就可以编写了 首先编写菜单 的开始 设置开始MENU 消息为IDM_START 在CMineDlg里进行类向导添加COMMAND IDM_START

---

### 编写OnStart 

开始肯定得 出现按钮对吧 假如说 扫雷的每个格子都是一个按钮 那么初级的就有9*9 个格子 

所以两个for循环在Cbutton 调用 Create (), 但是呢ID 和前面的string 就得靠格式化CStringT  快捷格式化了,同时利用int 值 循环生成ID

```c++
void CMineDlg::OnStart()
{	
	int nID = 1;
	CString csFmt;
	//CButton button;
	CButton* pButton = new CButton();
	CRect rc(0,0,16,16);
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			csFmt.Format("% d", nID++);
			pButton->Create(csFmt,BS_PUSHBUTTON,rc,this,nID);
		}
	}
}
void CMineDlg::OnStart()
{	
	int nID = 1;
	CString csFmt;
	//CButton button;
	CButton* pButton = new CButton();
	CRect rc(0,0,16,16);
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			csFmt.Format("% d", nID);
			pButton->Create(csFmt,BS_PUSHBUTTON,rc,this,nID);
			nID++;
		}
	}
}

```

无事发生因为没有调用 Menu 所以并不会出现InitDlg 也就是调用的地方调用Menu 在.h 声明一下

> private:
>
> CMenu m_MainMenu

这样就可以了

```c++
m_MainMenu.LoadMenu(IDR_MENU1);
SetMenu(&m_MainMenu);
```



---

### 测试 

测试后发现错误

```c++
pButton->Create(csFmt,BS_PUSHBUTTON,rc,this,nID);
```

重试后 跳转至错误

```c++
ASSERT(pWnd->m_hWnd == NULL);   // only do once
```

窗口句柄只能出现一个

```c++
ASSERT(pWnd->m_hWnd == NULL);   // only do once
```

结合之前的Create 发现 Create 后 值覆盖  由于是new 就会产生新的句柄 导致ASSERT 中断

```c++
CButton* pButton = new CButton();
```

修复很简单 首先确定出现错误的原因 因为我每个 Create的出现都要new一次所以 但是没有过销毁

所以一直出现新的句柄 这个对象创建了两次

只需要循环里new 就可以对应了

```c++
void CMineDlg::OnStart()
{	
	int nID = 1;
	CString csFmt;
	//CButton button;
	CRect rc;
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			csFmt.Format("% d", nID);
			rc.left = j * 32;
			rc.top = i * 32;
			rc.right = rc.left + 32;
			rc.bottom = rc.top + 32;
			CButton* pButton = new CButton();
			pButton->Create(csFmt,BS_PUSHBUTTON,rc,this,nID);
			pButton->ShowWindow(SW_SHOWNORMAL); 展示
            nID++;
		}
	}
}

```

修正后 这样ASSERT 断言宏就不会 中断了 说到断言宏 还有一个TRACE

TRACE = OutPutDebugString  自动输出文件名位置还有自定义的文字

```c++
TRACE("ABCD") 
```

在发行版不会输出 

---

### 处理一下溢出问题 

一直new 会溢出 所以选择数组的形式进行 存储Button

```c++
	m_nButtonCount = 81;  // 提前声明了 .h
	CButton* m_pButtons = new CButton[m_nButtonCount];// 提前声明了 .h
	int nID = 0;
	CString csFmt;
	//CButton button;
	CRect rc;
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			csFmt.Format("% d", nID);
			rc.left = j * 32;
			rc.top = i * 32;
			rc.right = rc.left + 32;
			rc.bottom = rc.top + 32;
			
			m_pButtons[nID].Create(NULL, BS_PUSHBUTTON, rc, this, 1000 + nID);
			m_pButtons[nID].ShowWindow(SW_SHOWNORMAL);
			nID++;
		}
	}
}

// 下面是销毁
void CMineDlg::OnDestroy()
{
	if (m_pButtons != nullptr) {
		delete[] m_pButtons;
		m_pButtons = nullptr;
	}


	CDialogEx::OnDestroy();

	// TODO: 在此处添加消息处理程序代码
}
```

这样就能销毁 成功了

-------

# END

