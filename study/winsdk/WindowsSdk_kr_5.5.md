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

设置并替换Cursor 案例如下TVINSERTSTRUCT

```c++
HCURSOR hCursor = LoadCursor(g_hInstance, MAKEINTRESOURCE(IDC_CURSOR1));
SetCursor(hCursor);
SetClassLongPtr(hDialog, GCLP_HCURSOR, (LONG_PTR)hCursor);  // 旧版本是SetClassLong  第三个参数是 LONG而不是LONG PTR
SetMenu(hDialog,hMenu);
```

----

### TreeItem

这个比较麻烦需要新的头文件

```c++
#include <commctrl.h>
```

然后呢需要获取子句柄 hTree的

```c++
HWND hTree = GetDlgItem(hWnd,IDC_TREE1)  // 父句柄和 获取的控件ID  ,作用为遍历然后获取指定的ID 句柄
```

再然后就要获取一个消息**TVM_INSERTITEM **,在树视图控件中插入新项。 可以显式发送此消息;

发现要一个结构体 **TVINSERTSTRUCT**

```c++
TVINSERTSTRUCTA ts;
ts.hParent = TVI_ROOT ;  // 根节点
ts.item.pszText = szText; // 设置文本
ts.item.mask = TVIF_TEXT; // 文本输出
ts.hInsertAfter=TVI_LAST;
ts.item.cchTextMax = sizeof(szText + 1); //文本长度 我用的时候好像可以不用

```

这样再进行 HRTREEITEM

```c++
HTREEITEM hTreeItem = (HTREEITEM) SendMessage(hTree,TVM_INSERTITEM,NULL,(LPARAM) &ts);
```

就可以输出了,然后我们设立一个子树 ,由于结构体可以重复使用 至于为什么 他是在里面复制一个 新的

```c++
char szText2[] = { "Noobs2" };  // 子节点
ts.hParent = hTreeItem;
ts.item.pszText = szText2; // 设置文本
ts.item.mask = TVIF_TEXT; // 文本输出
ts.hInsertAfter = TVI_LAST;
ts.item.cchTextMax = sizeof(szText2 + 1); //文本长度 我用的时候好像可以不用
HTREEITEM hchild = (HTREEITEM)SendMessage(hTree, TVM_INSERTITEM, NULL, (LPARAM)&ts);
```

子节点的子节点

```c++
	char szText3[] = { "Noobs3" };  // 子节点
	ts.hParent = hchild;
	ts.item.pszText = szText3; // 设置文本
	ts.item.mask = TVIF_TEXT; // 文本输出
	ts.hInsertAfter = TVI_LAST;
	ts.item.cchTextMax = sizeof(szText3 + 1); //文本长度 我用的时候好像可以不用
	HTREEITEM hchild2 = (HTREEITEM)SendMessage(hTree, TVM_INSERTITEM, NULL, (LPARAM)&ts);
}
```

样式 除了用维新派还可以用传统派来进行修改样式 GetWindowLong()来获取样式

```c++
SetWindowLongPtr(hTree, GWL_STYLE, GetWindowLongPtr(hTree, GWL_STYLE) | TVS_HASLINES);
```

这个含义是添加样式 因为SetWindowLongPtr是设置一个样式 GetWindowPtr是遍历窗口样式在通过或语句进行添加新的 样式  类似于 MB_OK|MB_CANCEL这种

-------

### 补充 还记得之前写的吗 

Notify作为高级消息过来

使用case Notify 接收 会发现Notify一直来 所以我们需要做个判断

```c++
if (wParam == IDC_TREE1) {
	
	MessageBox(NULL, _T("来了"), _T("Notify"), MB_OK);
}
```

但是发现每次来的都是他 所以需要再次进行过滤

在Notify里面 lParam 要进行转换成NMTREEVIEW才合适哦 在WM_Notify里面

```c++
	NMTREEVIEW *NM = (NMTREEVIEW*)lParam;
```

