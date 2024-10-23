# WindowsSdk 6.0 

-------

新开一个新新项目写写东西

----

### 抽象与封装

众所周知 抽象封装很方便 我们写LResult这个函数回应的时候就会发现 很长很麻烦 源文件写这个不太好 我们给他抽象一下  每个句柄绑定一个类 

都可以封装,我们要封装一个主函数 首先要查看 我们要封装什么注册 ,循环, 窗口的注册等等 把他放进一个类里面,使用带源码的然后我给他封装

---

```c++
#pragma once
#include <Windows.h>
#include "Resource.h"
class CApplication
{
public:
	virtual BOOL InitInstance() {


        // 初始化全局字符串
        LoadStringW(m_hInstance, IDS_APP_TITLE, szTitle, MAXBYTE);
        LoadStringW(m_hInstance, IDC_PROJECT5, szWindowClass, MAXBYTE);
        WNDCLASSEXW wcex;

        wcex.cbSize = sizeof(WNDCLASSEX);

        wcex.style = CS_HREDRAW | CS_VREDRAW;
        wcex.lpfnWndProc = WndProc;
        wcex.cbClsExtra = 0;
        wcex.cbWndExtra = 0;
        wcex.hInstance = m_hInstance;
        wcex.hIcon = LoadIcon(m_hInstance, MAKEINTRESOURCE(IDI_PROJECT5));
        wcex.hCursor = LoadCursor(nullptr, IDC_ARROW);
        wcex.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
        wcex.lpszMenuName = MAKEINTRESOURCEW(IDC_PROJECT5);
        wcex.lpszClassName = szWindowClass;
        wcex.hIconSm = LoadIcon(wcex.hInstance, MAKEINTRESOURCE(IDI_SMALL));

        return RegisterClassExW(&wcex);;

        //hInst = m_hInstance; // 将实例句柄存储在全局变量中

        HWND hWnd = CreateWindow(szWindowClass, szTitle, WS_OVERLAPPEDWINDOW,
            CW_USEDEFAULT, 0, CW_USEDEFAULT, 0, nullptr, nullptr, m_hInstance, nullptr);

        if (!hWnd)
        {
            return FALSE;
        }

        ShowWindow(hWnd, SW_SHOWNORMAL);
        UpdateWindow(hWnd);

        HACCEL hAccelTable = LoadAccelerators(m_hInstance, MAKEINTRESOURCE(IDC_PROJECT5));
    }
    virtual BOOL ExitInstance() { return 0; }
    static INT_PTR CALLBACK About(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam) {
        {
            UNREFERENCED_PARAMETER(lParam);
            switch (message)
            {
            case WM_INITDIALOG:
                return (INT_PTR)TRUE;

            case WM_COMMAND:
                if (LOWORD(wParam) == IDOK || LOWORD(wParam) == IDCANCEL)
                {
                    EndDialog(hDlg, LOWORD(wParam));
                    return (INT_PTR)TRUE;
                }
                break;
            }
            return (INT_PTR)FALSE;
        }
    }
    static LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam){
        {
            switch (message)
            {
            case WM_COMMAND:
            {
                int wmId = LOWORD(wParam);
                // 分析菜单选择:
                switch (wmId)
                {
                case IDM_ABOUT:
                    DialogBox(GetModuleHandle(NULL), MAKEINTRESOURCE(IDD_ABOUTBOX), hWnd, About);
                    break;
                case IDM_EXIT:
                    DestroyWindow(hWnd);
                    break;
                default:
                    return DefWindowProc(hWnd, message, wParam, lParam);
                }
            }
            break;
            case WM_PAINT:
            {
                PAINTSTRUCT ps;
                HDC hdc = BeginPaint(hWnd, &ps);
                // TODO: 在此处添加使用 hdc 的任何绘图代码...
                EndPaint(hWnd, &ps);
            }
            break;
            case WM_DESTROY:
                PostQuitMessage(0);
                break;
            default:
                return DefWindowProc(hWnd, message, wParam, lParam);
            }
            return 0;
        }
    }
  
    int MessageLoop() {
        MSG msg;

        // 主消息循环:
        while (GetMessage(&msg, nullptr, 0, 0))
        {
            if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg))
            {
                TranslateMessage(&msg);
                DispatchMessage(&msg);
            }
        }

        return (int)msg.wParam;
    }

public:
	HINSTANCE m_hInstance;
    WCHAR szTitle[MAXBYTE];                  // 标题栏文本
    WCHAR szWindowClass[MAXBYTE];            // 主窗口类名
    HACCEL hAccelTable;
};


```

这是封装手法 类外定义居然不好使

这回只用在源文件声明即可 

```c++


#include "framework.h"
#include "Project5.h"
#include "CApplication.h"

// 全局变量:                                // 当前实例

// 此代码模块中包含的函数的前向声明:
CApplication g_App;
int APIENTRY wWinMain(_In_ HINSTANCE hInstance,
    _In_opt_ HINSTANCE hPrevInstance,
    _In_ LPWSTR    lpCmdLine,
    _In_ int       nCmdShow)
{
    UNREFERENCED_PARAMETER(hPrevInstance);
    UNREFERENCED_PARAMETER(lpCmdLine);
    g_App.m_hInstance = hInstance;
    g_App.InitInstance();
    g_App.MessageLoop();
    g_App.ExitInstance();
    return g_App.ExitInstance();
}




```



---

在封装个CWindow.h用来操作消息

```c++
#pragma once
#include <Windows.h>
class CWindow
{
public:
		CWindow(HWND hWnd) {
			m_hWnd = hWnd;
		}
		virtual BOOL OnCreate(WPARAM wParam, LPARAM lParam) {
			return FALSE;
		}
		virtual BOOL OnDestroy(WPARAM wParam, LPARAM lParam) {
			return FALSE;
		}
		virtual BOOL OnTimer(WPARAM wParam, LPARAM lParam) {
			return FALSE;
		}
		virtual BOOL OnClose(WPARAM wParam, LPARAM lParam) {
			return FALSE;
		}
		virtual BOOL OnKeydown(WPARAM wParam, LPARAM lParam) {
			return FALSE;
		}
		virtual BOOL OnKeyup(WPARAM wParam, LPARAM lParam) {
			return FALSE;
		}
		virtual BOOL OnCommad(WPARAM wParam, LPARAM lParam) {
			return FALSE;
		}
		virtual BOOL OnPaint(WPARAM wParam, LPARAM lParam) {
			return FALSE;
		}


	public:
		HWND m_hWnd;

	};

```

在CApplication.h里面使用这个需要声明

```c++
#include "CWindow.h"
```

在public添加一个新的指向CWindow函数的指针

```c++
  static CWindow* m_pMainWindow
```

但是呢需要再CApplication.cpp 声明

```c++
   CWindow* CApplication::m_pMainWindow = nullptr;
```

通过CMainWindow接受所以需要写CMainWindow.h

```c++
#pragma once
#include "CWindow.h"
class CMainWindow :public CWindow
{
public: 
	CMainWindow(HWND hWnd) :CWindow(hWnd) {

}
virtual BOOL OnCreate(WPARAM wParam, LPARAM lParam);
virtual BOOL OnDestroy(WPARAM wParam, LPARAM lParam);
virtual BOOL OnClose(WPARAM wParam, LPARAM lParam);
virtual BOOL OnTimer(WPARAM wParam, LPARAM lParam);
virtual BOOL OnKeydown(WPARAM wParam, LPARAM lParam);
virtual BOOL OnKeyup(WPARAM wParam, LPARAM lParam);
virtual BOOL OnCommad(WPARAM wParam, LPARAM lParam);
};


```

在new一个CMainWindow函数一个m_pMainWindow指针,同时在CMainWindow.cpp做处理这个结构就是MVC结构

```c++
#include "CMainWindow.h"
// MVC 结构
BOOL CMainWindow::OnCreate(WPARAM wParam, LPARAM lParam)
{
 	MessageBox(NULL, _T("Create"),_T("e1elibrary.com"),MB_OK);
	return TRUE;
}

BOOL CMainWindow::OnDestroy(WPARAM wParam, LPARAM lParam)
{
	return FALSE;
}

BOOL CMainWindow::OnClose(WPARAM wParam, LPARAM lParam)
{
	PostQuitMessage(0);
	return TRUE;
}

BOOL CMainWindow::OnTimer(WPARAM wParam, LPARAM lParam)
{
	return 0;
}

BOOL CMainWindow::OnKeydown(WPARAM wParam, LPARAM lParam)
{
	return 0;
}

BOOL CMainWindow::OnKeyup(WPARAM wParam, LPARAM lParam)
{
	return 0;
}

BOOL CMainWindow::OnCommad(WPARAM wParam, LPARAM lParam)
{
	return 0;
}

```



他的具体流程位 调用CApplication.h static进行初始化然后CApplication.h调用CMainWindow.h 进行处理后发送给CWindow做最终处理



-----------

#这是简易封装也是 MVC结构 下一章我们要弄一个俄罗斯方块小游戏