---
typora-root-url: ..\..\public
---

# Windows SDK _3

----

## 存入

前面几个篇章展示了 如何去 显示到底存输入了什么但是 没有学习如何去存入 

__把buttonon keyon什么的统统删去 或者注释根本用不到  在OnChar(){}使用追加也就是append()来存储

所以从现在开始学习存入消息

>fstream 和 string 这两个头文件 来进行存储

```c++
std::string g_text; // 在代码的使用宏定义 来进行存储 数据
```

```c++
LRESULT OnChar(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {

    g_text += ((char)wParam);

    TCHAR speace[MAXBYTE];


    wsprintf(speace, _T("CHAR,OK push %lc!\n"), g_text.data());
    OutputDebugString(speace);
    return TRUE; ;

```

通过运算符重载大法

g_text += ((char)wParam); 写入g_get 字符串里
