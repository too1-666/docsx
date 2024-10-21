---
typora-root-url: ..\..\public
---

# WindowsSdk 05

------

###  资源文件 

在资源文件里创建 .rc Resource 文件 

保存后查看 就是自带的格式化 不用自己手搓

```c++
IDD_DIALOG1 DIALOGEX 0, 0, 310, 177
STYLE DS_SETFONT | DS_MODALFRAME | DS_FIXEDSYS | WS_POPUP | WS_CAPTION | WS_SYSMENU
CAPTION "Dialog"
FONT 8, "MS Shell Dlg", 400, 0, 0x1
BEGIN
    DEFPUSHBUTTON   "确定",IDOK,199,156,50,14
    PUSHBUTTON      "取消",IDCANCEL,253,156,50,14
END

```

---

在工具箱里找 Alt+ctrl +X 就可以显示工具箱 点击对话框编辑器就可以 显示出控件 保存后控件内容就会在Rc 里 然后打开rc文件的显示如下

````c++
STYLE DS_SETFONT | DS_MODALFRAME | DS_FIXEDSYS | WS_POPUP | WS_CLIPSIBLINGS | WS_CAPTION | WS_SYSMENU
CAPTION "Dialog"
FONT 8, "MS Shell Dlg", 400, 0, 0x1
BEGIN
    DEFPUSHBUTTON   "确定",IDOK,199,156,50,14
    PUSHBUTTON      "取消",IDCANCEL,253,156,50,14
    PUSHBUTTON      "Button1",IDC_BUTTON1,109,54,50,14
END
````

多了个Button1 这一坨就相当于 脚本 也会被写进EXE 里  

---

提供一个叫资源编译器的神奇东西 把RC里面的东西 转变成二进制结构体

就是类似于

```c++
sruct Data
```

这种的结构体直接读取

---

当编译完成后 rc文件会编译出一个res 后缀的 文件  使用010 查看还是能看到明文 BUTTON的 变成了 2 进制的 也就是说  res 的文件 内容会再exe 里展示 本质就是这些  就是系统自己调用 

---

如果想创建CHILD 那么就要在他的下面在加个资源 即可

----

怎么使用 由于可视化调用这些东西非常方便只需要进行 工具箱里操作就行了 在属性里进行调试 

```c++
BEGIN
    DEFPUSHBUTTON   "确定",IDOK,199,216,50,14
    PUSHBUTTON      "取消",IDCANCEL,351,216,50,14
    PUSHBUTTON      "Button1",IDC_BUTTON1,147,216,50,14
    GROUPBOX        "Static",IDC_STATIC,17,18,303,124
    CONTROL         "Check1",IDC_CHECK1,"Button",BS_AUTOCHECKBOX | WS_TABSTOP,39,36,39,10
    CONTROL         "Check2",IDC_CHECK2,"Button",BS_AUTOCHECKBOX | WS_TABSTOP,97,36,39,10
    CONTROL         "",IDC_SLIDER1,"msctls_trackbar32",TBS_BOTH | TBS_NOTICKS | WS_TABSTOP,37,78,229,5
    CONTROL         "",IDC_ANIMATE1,"SysAnimate32",WS_BORDER | WS_TABSTOP,79,106,21,13
    CONTROL         "",IDC_LIST1,"SysListView32",LVS_ALIGNLEFT | WS_BORDER | WS_TABSTOP,209,100,6,13
    CONTROL         "",IDC_TREE1,"SysTreeView32",WS_BORDER | WS_HSCROLL | WS_TABSTOP,104,97,98,40
END

```

发现一件事情 IDC_ 这个ID 并不知道  搜索搜不到 那是因为他是编译时候自动生成的   其实也是可以找到的 位置在**resource.h** 文件里他的ID 都在这里出现  不要乱改哦

-----

### 对话框函数的引用

**使用DialogBox()**函数使用

```c++
void DialogBoxA(
  [in, optional]  hInstance,  //包含对话框模板的模块的句柄。 如果此参数为 NULL，则使用当前可执行文件。
  [in]            lpTemplate,//对话框模板。 此参数是指向指定对话框模板名称的以空字符结尾的字符串的指针，或者是指定对话框模板的资源标识符的整数值。 如果参数指定了资源标识符，则其高位字必须为零，其低位字必须包含该标识符。 
  [in, optional]  hWndParent, // 父句柄
  [in, optional]  lpDialogFunc  //对话框过程指针
);
```

使用例 以刚才的Dialog 作为示例

首先需要创建一个 对话过程的指针 DiaglogPorc  由于不需要处理就可以使用return FALSE 进行默认不处理

```c++
INT_PTR Dlgproc(HWND hWmd,UINT uMsg,WPARAM wParam,	LPARAM lParam){
	return FALSE;
}
```

接下来在Winmain 里声明这个 函数

```c++
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR pCmdLine, int nCmdShow) {
	DialogBox(hInstance, MAKEINTRESOURCE(IDD_DIALOG1), NULL, Dlgproc);  // INT_PTR参数
	return 0;
}
```

就可以正式使用

> #include "resource.h"的声明是必不可少的因为 他的ID 控件 在这个头文件里

**备注: Dialog 自带消息循环**  这种对话框称之为 模态对话框

他的退出和平常的WM_Destroy消息 不同他需要EndDialog 函数进行销毁  只有销毁对话框才能退出程序 他也不会出现Create消息可以在他的回调函数里进行测试

```c++
INT_PTR Dlgproc(HWND hWmd,UINT uMsg,WPARAM wParam,	LPARAM lParam){
switch (uMsg)
{case WM_CREATE:
	MessageBox(NULL, _T("create"), _T("OK"), MB_OK);    // 发送创建消息测试
	break;
case WM_DESTROY:
	MessageBox(NULL, _T("Destroy"), _T("OK"), MB_OK);//发送销毁消息测试
	break;
case WM_CLOSE :
	MessageBox(NULL, _T("close"), _T("OK"), MB_OK);  //发送关闭消息测试
	EndDialog(hWnd,NULL);
	break;
}
return FALSE;
}
```

如果他创建了 那么就会出现Ok的窗口  销毁消息出现 证明了Create 消息已经出现  使用Dialog 退出成功发送WM_DESTROY 并不是直接发送WM_DESTROY

可以使用控制变量法进行测试  WM_INITDIALOG消息替代了CREATE的消息在DiaLog里面  EndDialog函数是销毁模态对话框

---

### 关于DiaLog的补充 首先 Dialog()的返回值就是结束值 

创建第二个DiaLog时候 直接复制粘贴  他会在第一个结束时候创建 叫做阻塞

他们共用 

> DialogBox(hInstance, MAKEINTRESOURCE(IDD_DIALOG1), NULL, Dlgproc);  //自带消息循环,模态对话框

----

使用非模态对话框

> 非模态对话框不用消息循环

以下为示范

```c++
HWND hDialog = CreateDialog(hInstance, MAKEINTRESOURCE(IDD_DIALOG1), NULL, Dlgproc);
```

他的返回值是个句柄 所以 可以用以前的知识

---

但是他也走这个INT_PTR   DlgPorc 消息  

示例

```c++
#include <Windows.h>
#include "resource.h"
#include<tchar.h>
LRESULT OnCommand(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
INT_PTR Dlgproc(HWND hWnd,UINT uMsg,WPARAM wParam,	LPARAM lParam){
	switch (uMsg)
	{case WM_INITDIALOG:   //WM_CREATE == WM_INITDIALOG
		MessageBox(NULL, _T("INITDIALOG"), _T("OK"), MB_OK);
		return TRUE;
	case WM_DESTROY:
		MessageBox(NULL, _T("Destroy"), _T("OK"), MB_OK);
		return TRUE;
	case WM_CLOSE :
		MessageBox(NULL, _T("close"), _T("OK"), MB_OK);
		EndDialog(hWnd,15);
		return TRUE;
	case WM_COMMAND :
		OnCommand(hWnd, uMsg,  wParam, lParam);
		return TRUE;
	}
	return FALSE;
}
LRESULT OnCommand(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	WORD WID = LOWORD(wParam);
	if (WID == IDC_BUTTON2) {
		MessageBox(NULL, _T("BUTTON"), _T("OK"), MB_OK);
	}
	return TRUE;
}
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR pCmdLine, int nCmdShow) {
	//INT_PTR lresult = DialogBox(hInstance, MAKEINTRESOURCE(IDD_DIALOG1), NULL, Dlgproc);  //自带消息循环,模态对话框 , 模态对话框	
	HWND hDialog  =CreateDialog(hInstance, MAKEINTRESOURCE(IDD_DIALOG1), NULL, Dlgproc);  // 非模态对话框 ,不带消息循环,是个句柄
	ShowWindow(hDialog, SW_SHOWNORMAL);

	return  0;
}
```

显然他没有消息循环需要再WinMain 里面 添加个 消息循环

```c++
BOOL bRet;
MSG msg;
while ((bRet = GetMessage(&msg,NULL, 0, 0)) != 0)
{
	if (bRet == -1)
	{
		break;
	}
	else
	{
		TranslateMessage(&msg);
		DispatchMessage(&msg);
	}
}  
```

这样就能正常运行了但是对于 非模态对话框需要 PostQuitMessage 进行销毁

事实上这一大堆就相当于 DiaLogBox 的集合

---

## 猜想 (对话框资源)

DialogBox进行消息循环那么 其他的 对话是不是不会显示, 因为模态对话框是独立的消息循环 

什么情况下适合使用模态呢?

* 以以这个Typora这个软件为例 使用的时候 如果使用查找键 他可以在两个窗口反复切换那么 这是非模态 ,  因为 使用模态其他的不会操作 

  如果是那种 记事本的页面设置那么 就可以使用模态因为他操作不了其他的

这就是简单的对话框编程

备注: 一定要学会基础 不然直接用这个使用这个就完了.

**还有就是模态化使用EndDialog,非模态就得需要使用DestroyWindow()**

---

### 快捷键消息

如何设置快捷键 ?  方法和设置对话框一样 不过在添加资源换成Accelerator快捷键 在这个右键添加新的快捷键#即可

#### 使用快捷键

和以前的方式差不多但是使用

```c++
HACCEL hAccel = LoadAccelerators(hInstance, MAKEINTRESOURCE(IDR_ACCELERATOR1));  // 快捷键句柄
```

在消息循环里面使用

```c++
BOOL bRet;
MSG  msg;
while ((bRet = GetMessage(&msg, NULL, 0, 0)) != 0) {  // 接收所有 的消息
	if (bRet == -1) {
		break;
	}
	else {  //转换快捷键消息WM_COMMAND
		if (!TranslateAccelerator(hDialog, hAccel, &msg)) {
			TranslateMessage(&msg);//虚拟
			DispatchMessage(&msg); //派发消息
		}
	} 
}
return  0;
```

在COMMAND 里进行接收

```c++
LRESULT OnCommand(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	WORD WID = LOWORD(wParam);
	if (WID == IDK_OPEN)
	{
		MessageBox(NULL, _T("OPEN"), _T("OK,OPEN"), MB_OK);
	}
	else if (WID == IDK_SAVE)
	{
		MessageBox(NULL, _T("SAVE"), _T("OK,SAVE"), MB_OK);
	}
	return TRUE;

```

原理是共同的 只是 从CREATE一个 快捷键数组简洁化

```c++
ACCEL* pAccelNews = (ACCEL*)HeapAlloc(GetProcessHeap(), 0, sizeof(ACCEL) * 2);  // 使用HeapAlloc 进行分配堆地址  创建快捷键
if (pAccelNews == NULL) {
   // 内存分配失败，处理错误  
   return 1;
}
pAccelNews[0].fVirt = FCONTROL | FVIRTKEY;   // 快捷键CTROL + 任意键 + ID
pAccelNews[0].key = 'S';
pAccelNews[0].cmd = IDM_SAVE;
pAccelNews[1].fVirt = FCONTROL | FVIRTKEY;
pAccelNews[1].key = 'O';
pAccelNews[1].cmd = IDM_OPEN;
HACCEL hAccel = CreateAcceleratorTable (pAccelNews, 2);
if (hAccel == NULL){
    HeapFree(GetProcessHeap(), 0, pAccelNews);// 创建加速键表失败，处理错误  
    return 1;
}  // 变成了加载一个快捷键表
```

---

### 使用MENU

> 小贴士 : 菜单 (&F)= ALT +F 键  在菜单MENU里面设置了 **(&F)** 就可以启用这个快捷键了

在使用visual studio的可视化时候 添加的值可以用\t 这种来进行格式化操作

例如 

> 保存\tCtrl+S

这个意思是空一个大的格 就是(\t)制表符

----

关于怎么使用这个根据套路 快捷键用LoadAcclerators(), 那么MENU菜单就可以是LoadMenu()

然后使用SetMenu挂载菜单到hDialog上面 当然了快捷键的句柄一定要和菜单上的句柄相同这样既可以使用菜单的按钮 也可以用快捷键按钮



-----

### 将登录按钮加入模态化窗口

由于BUTTON在COMMAND消息回应因此可以可以在他的COMMAND消息进行操作\

```c++else if (WID == IDB_LOGIN)
{
	DialogBox(g_hInstance, MAKEINTRESOURCE(IDD_LOGINING), NULL, Dlgproc);  //自带消息循环,模态对话框 , 模态对话框	INT_PTR
}
```

g_hInstance 指的是全局变量 由于hInstance是只在Main函数里的变量 Dlgproc接收不到 

```c++
HWND hDialog  =CreateDialog(hInstance, MAKEINTRESOURCE(IDD_DIALOG1), NULL, Dlgproc); 
```

所以只能使用全局变量进行赋值在Main函数使用

```c++
HINSTANCE g_hInstance = hInstance;  //这样给全局变量赋值
```

这样就能使用了

然后设置以为这是子窗口我要设置父句柄 父句柄就是hWnd 因为Dialog是先运行的

```c++
DialogBox(g_hInstance, MAKEINTRESOURCE(IDD_LOGINING), hWnd, Dlgproc);  //自带消息循环,模态对话框 , 模态对话框	INT_PTR
```

我画了个草图来简单的解释一二

![](/winSDK/krre/Kr_Sdk_LoginingAndDialog.png)

这样就能简单的解释一下他的存在



# END
