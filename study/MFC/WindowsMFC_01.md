---
typora-root-url: ..\..\public
---

# WindowsMFC 开发 

-----

欸终于把 WIndowsSdk 搞完了 今天开始开发MFC 咯!

---

MFC是基于SDK 开发的面向对象的封装框架 这就是我为什么前面费劲的讲如何用SDK 然后捏发现一一个事情一堆东西咱们反复用十分麻烦 所以MFC 诞生了

事实上来说就是把所有的关键函数封装好然后呢 构造个HWND hwnd 那种的然后关键调用而已(MFC都干了)

---

 ### 创建一个MFC 程序

创建时候发现什么应用程序类型  单个文档类似于记事本 多个就是像VS开发 而对话框比较简单,当然在使用MFC 时候发现共享Dll 和静态库

- 静态是直接把框架代码链接到程序 则为静态库 无需系统Dll

- 共享Dll 是需要Dll文件才能跑但是省空间

两次下一步发现一个类 App 和Dlg

- App: 业务逻辑数据存储 UI
- Dlg: Dialog 和用户交互用的

---

### 怎么玩

打开后发现啊呀骇死我了,这么多东西看不懂捏 其实他早就为你准备好了 你只需要动动手指

1. 打开视图
2. 找到类视图
3. 选择MFC 
4. CMFCApplication那个类 可以自定义
5. 右键选择类向导 找到自己想要的虚函数 然后重构就完了

层次结构 MFC的层次结构可以访问微软文档进行查看

---

### MFC 层次结构图& 链接

**[MFC层次结构图大全](https://learn.microsoft.com/zh-cn/cpp/mfc/hierarchy-chart?view=msvc-170)**

当然了可能会访问不到 可以选择浏览本文章

![CObject](/WinMFC/MFC_CObject.png)

![MFC_Cwnd](/WinMFC/MFC_CWnd_CCmdTarget.png)

![Not_CObject](/WinMFC/MFC_Not_CObject.png)



----

### 方便初学者的MFC 6.0 的结构图

![](/WinMFC/6.0MFC.png)

![](/WinMFC/MFC_6.0_2.png)

----------

### 创建单文档

创建单文档的风格有很多 但是 MFC 标准样式的是最简单的

来做个对比

类视图类的只有

* CWinApp  应用程序类初始化反初始化

* CDialog

但是 单文档

* CWinApp

* CFrameWnd 主窗口

* CView 视图类 跑一下模板然后看一白色区域就是视图类 使用Spy++ 查看后是类名是AfxFrameOrView140ud

* CDocment 文档类 保存数据

---

###    如何使用CWnd 类 也就是窗口类

1. CWnd wnd;  wnd.xxxx()
2. CWnd::xxxxx()

---

### 如何创建一个简单的窗口非模态的来测试MFC 框架的便捷性

MFCApplication3.cpp里为例子

```c++

// 用于运行对话框的应用程序命令
void CMFCApplication3App::OnAppAbout()
{
	CAboutDlg aboutDlg;
	aboutDlg.DoModal();  // 这是模态化对话框
}

```

然而我要做个非模态的 

```c++

// 用于运行对话框的应用程序命令
void CMFCApplication3App::OnAppAbout()
{
	CAboutDlg aboutDlg;
	aboutDlg.Create(ID_AAA);
	aboutDlg.ShowWindow (SW_SHOWNORMAL);
}

```

但是打开能打开但是会瞬间消失 可以做个实验 可能是析构函数的时候把这个释放了

```c++

// 用于运行对话框的应用程序命令
void CMFCApplication3App::OnAppAbout()
{
	static CAboutDlg aboutDlg;
	aboutDlg.DoModal();
}

```

由于全局不会释放 运行后果然出现了 不学SDK 是不会明白原理的 同时证明 MFC 就是轮椅

---

回顾方便初学者的MFC 6.0 的结构图 的

### Dialog Boxes 类 和View 他们都是视图 为什么还要分类

DialogBox 需要资源 而Views 不需要 ,Views和CDocument 也就是文档有交互

-----

那么下一章就是DC类的交互了
