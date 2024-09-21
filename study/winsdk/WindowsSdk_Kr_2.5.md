# 鼠标消息

----

 使用WM_LBUTTONDOWN (按下鼠标)可以捕获鼠标消息

```c++
//和WM_MOVE的代码差不多
LRESULT OnButtonDown(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = LOWORD(lParam);
    int yPos = HIWORD(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("BUTTONxPos:%d yPos:%d"), xPos, yPos);
    MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    return FALSE;
}



case WM_LBUTTONDOWN :
    lResult = OnButtonDown(hWnd, uMsg, lParam, wParam);
    break;
}  
```

> 只在客户区域才有反应 

-----

使用 WM_LBUTTONUP (按下鼠标起来) 捕获

```C++

LRESULT OnButtonUp(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    int xPos = LOWORD(lParam);
    int yPos = HIWORD(lParam);
    TCHAR Space[MAXBYTE];
    wsprintf(Space, _T("BUTTONxPos:%d yPos:%d"), xPos, yPos);
    MessageBox(NULL, Space, _T("e1elibrary.com"), MB_OK);
    return FALSE;
}



case WM_LBUTTONDOWN :
    lResult = OnButtonDown(hWnd, uMsg, lParam, wParam);
    break;
} 
```

