# 复健MFC

## 创建非Domodel() 非模态 对话框 

通过菜单创建 在资源文件夹创建 Menu 项目 作为创建 模态化对话框 的基础  在此之前 决定先创建一个 CButton 来试试水

```c++
void CtestView::On32771()
{
	

	CRect rc;
	rc.SetRect(0, 0, 400, 100);
	Button1.Create(_T("OK!!"), BS_PUSHBUTTON| WS_VISIBLE, rc, this, 10011);
	
	// TODO: 在此添加命令处理程序代码
}

```

>  Button1在 .h里不能作为临时变量储存在该函数里

之前学的都是什么静态程序自己加的 现在是动态了 所以 要进行 手动创建一个动态,在头文件里面的消息映射函数弄一个 TestButon()作为我的消息处理函数 

```c++
public :
afx_msg void TestButton1();
```

然后再消息映射里 

```c++
BEGIN_MESSAGE_MAP(CtestView, CView)
//略
    ON_BN_CLICKED(10011, CtestView::TestButton1)

END_MESSAGE_MAP()
```

写出 函数

```c++
void CtestView::TestButton1()
{
	AfxMessageBox(_T("HEllo"));

}
```

**这样就是非模态化的创建流程了 不过我没有做限制**

### 创建微软自带的模态化对话框

#### 刚才不是 学了如何创建按钮了吧. 接下来创建一个对话框 我先拿MFC 的颜色对话框举例	

还是Menu 创建 对话框 在View 创建就行

> CColorDialog 的使用

直接调用 使用DoModel即可

```c++

void CtestView::On32772()  //Color

{
	CColorDialog ColorDlg;
	
	ColorDlg.DoModal();

    COLORREF clr = ColorDlg.GetColor();
	
	
	// TODO: 在此添加命令处理程序代码
}
```

这不就用上了

-------

#### 接下来是 文件对话框

和颜色同理 就是使用 Domodal 调用 不过是CFileDialog而已

> CFileDialog 的使用

他的创建和正常的不太一样 他需要添加参数	

```c++
explicit CFileDialog(
BOOL bOpenFileDialog, //参数，指定要创建的对话框类型。 将其设置为 TRUE 可 打开”对话框。FALSE 另存为”对话框。
LPCTSTR lpszDefExt = NULL,// 追加拓展名
LPCTSTR lpszFileName = NULL,
DWORD dwFlags = OFN_HIDEREADONLY | OFN_OVERWRITEPROMPT,_T(
LPCTSTR lpszFilter = NULL,
CWnd* pParentWnd = NULL,
DWORD dwSize = 0,
BOOL bVistaStyle = TRUE);
```

我选择让他 添加过滤 比如

```c++
static TCHAR BASED_CODE szGL[] = _T("txt(*.txt)|*.txt|")_T("MarkDown(*.md)|*.md|")_T("*.*(*.*)|*.*||");
```

然后再进行 CFileDialog 调用

```c++
void CtestView::WenJian()
{
	static TCHAR BASED_CODE szGL[] = _T("txt(*.txt)|*.txt|")_T("MarkDown(*.md)|*.md|")_T("*.*(*.*)|*.*||");
	
	CFileDialog FileDlg(FALSE,NULL,NULL,OFN_HIDEREADONLY | OFN_OVERWRITEPROMPT,szGL);
	FileDlg.DoModal();

	auto Path = FileDlg.GetPathName();
	auto File = FileDlg.GetFileName();
	auto Name = FileDlg.GetFileTitle();

	// TODO: 在此添加命令处理程序代码
}
```

这是保存

##### 这是打开

```c++
void CtestView::WenJian()
{
	static TCHAR BASED_CODE szGL[] = _T("txt(*.txt)|*.txt|")_T("MarkDown(*.md)|*.md|")_T("*.*(*.*)|*.*||");
	
	CFileDialog FileDlg(TRUE,NULL,NULL,OFN_HIDEREADONLY | OFN_OVERWRITEPROMPT,szGL);
	if (FileDlg.DoModal() == IDOK)
	{
		auto Path = FileDlg.GetPathName();
		auto File = FileDlg.GetFileName();
		auto Name = FileDlg.GetFileTitle();
	}

```

如果IDOK 那么回显 路径 否则不显示就是这样的 

### 公式化类工厂 复健

类工厂相当于模块化操作 

```c++
#include <iostream>
using namespace std;
class ClassAB
{
public:
};


class ClassA : public ClassAB
{
public:
	ClassA() { cout << "HiA"<<endl; }

};

class ClassB: public ClassAB
{
public:
	ClassB() { cout << "HiB" << endl; }

};

ClassAB* GetAll(int nID) {
	switch (nID)
	{
	case 0:
		return new ClassA;
		break;
	
	case 1 :
		return new ClassB;
		break;
	
	}
}



int main() {
	auto A = GetAll(0);
	auto B = GetAll(1);
	return 0;
}
```

非常简单的例子 我要封装 让switch 消失不见

稍微改造一下 利用多态

```c++
#include <iostream>
using namespace std;
class ClassAB
{
public:
	ClassAB() {}
	virtual ~ClassAB() {}
};
class ClassF
{
public:
	
	virtual ClassAB* Create() = 0;
};
class ClassA : public ClassAB
{
public:
	ClassA() { cout << "HiA"<<endl; }

};
class ClassB: public ClassAB
{
public:
	ClassB() { cout << "HiB" << endl; }

};

class ClassFA : public ClassF
{
public:
	virtual ClassAB* Create() { return new ClassA; };
};


class ClassFB : public ClassF
{
public:
	virtual ClassAB* Create() { return new ClassB; };
};


ClassAB* GetAll(ClassF* pF) {

	return pF->Create();
}





int main() {
	auto A = GetAll(new ClassFA);
	auto B = GetAll(new ClassFB);
	return 0;
}
```

实现子类化和工厂的实现 , ClassAB 作为父类指针 指向子类 另一个ClassF操作ClassAB不带参数版本 带参数版本 EXB讲解