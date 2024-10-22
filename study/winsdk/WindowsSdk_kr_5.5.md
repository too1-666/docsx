# WindowsSdk 5.5 PRO MAX

### 如何解决全部销毁

可以在建一个函数把 Dialogbox的Dlgproc 换成这个函数就可以了

```c++
INT_PTR Dlgproc2(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	switch (uMsg)
	{
	case WM_INITDIALOG:   //WM_CREATE == WM_INITDIALOG,模态化
		return TRUE;
	case WM_DESTROY:
		MessageBox(NULL, _T("Destroy"), _T("OK"), MB_OK);;
		return TRUE;
	case WM_CLOSE:
		EndDialog(hWnd,0);  // 模态化窗口销毁
		return TRUE;

	}
	return FALSE;
}
```

注意这是模态化窗口 使用EndDialog

----

### 使用StringTable

微软给的东西自然有他的意义比如说修改一个词 修改的话需要从头改到尾很麻烦 但是我们可以用String Table 来存储

**使用方法:** 添加ID 值和名字即可

> 使用 LoadString()进行加载

```c++
int LoadStringA(
  [in, optional] HINSTANCE hInstance,  // 句柄
  [in]           UINT      uID,  // 要使用的ID
  [out]          LPSTR     lpBuffer,  // 设置的Char
  [in]           int       cchBufferMax  // Char的长度
);
```

使用例

```c++
char szSAVE[MAXBYTE];
char szTITLE[MAXBYTE];
char szOPEN[MAXBYTE];  // 全局变量

BOOL Name() {  // 定义一个布尔值 作为传值函数方便管理
	LoadString(g_hInstance, IDS_SAVE, szSAVE, sizeof(szSAVE));
	LoadString(g_hInstance, IDS_OPEN, szOPEN, sizeof(szOPEN));
	LoadString(g_hInstance, IDS_TITLE, szTITLE, sizeof(szTITLE));
	return TRUE;
}
//调用使用
LRESULT OnCommand(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	WORD WID = LOWORD(wParam);
	Name();
	if (WID == IDM_OPEN){
		MessageBox(NULL, szOPEN, szTITLE, MB_OK);
	}
	else if (WID == IDM_SAVE){
		MessageBox(NULL, szSAVE, szTITLE, MB_OK);
	}
	else if (WID == IDB_LOGIN){
		DialogBox(g_hInstance, MAKEINTRESOURCE(IDD_LOGINING), hWnd, Dlgproc2);  //自带消息循环,模态对话框 , 模态对话框	INT_PTR
	}
	return TRUE;
}

```

调用Name()既可以使用里面的值

当然了 这些值都可以在Debug的EXE例找到英文 明文 用010查一查就知道了 当然中文也可以找到不过需要修改一下文字 Unicode形式 在010里修改二进制值也可以有修改的作用

有些喜欢破解的 改名字什么的就这样改

---

### 光标的替换

如何去替换一个光标首先在资源栏设置一个光标图案

在Resource.h的头文件拿到他的ID  

根据套路 LoadXXXX

> 所以是 LoadCursor()\

设置并替换Cursor 案例如下

```c++
HCURSOR hCursor = LoadCursor(g_hInstance, MAKEINTRESOURCE(IDC_CURSOR1));
SetCursor(hCursor);
SetClassLongPtr(hDialog, GCLP_HCURSOR, (LONG_PTR)hCursor);  // 旧版本是SetClassLong  第三个参数是 LONG而不是LONG PTR
SetMenu(hDialog,hMenu);
```

