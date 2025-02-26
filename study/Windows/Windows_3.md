# 进程!



---------

## 序

Windows 进程  Win 提供了 3 种 方式来创建进程

- Winexec  历史遗留16位
- ShellExecute 一样
- CreaeteProcess  功能强大的

----

###  1. Winexec 

```c++
UINT WinExec(
  [in] LPCSTR lpCmdLine,
  [in] UINT   uCmdShow //使用 SW_参数
);
```

参数1

> [in] lpCmdLine

命令行 (文件名以及要执行的应用程序) 可选参数。 如果 *lpCmdLine* 参数中的可执行文件的名称不包含目录路径，则系统会按以下顺序搜索可执行文件：

1. 从中加载应用程序的目录。
2. 当前目录。
3. Windows 系统目录。 [GetSystemDirectory](https://learn.microsoft.com/zh-cn/windows/desktop/api/sysinfoapi/nf-sysinfoapi-getsystemdirectorya) 函数检索此目录的路径。
4. Windows 目录。 [GetWindowsDirectory](https://learn.microsoft.com/zh-cn/windows/desktop/api/sysinfoapi/nf-sysinfoapi-getwindowsdirectorya) 函数检索此目录的路径。
5. PATH 环境变量中列出的目录。

---

##### 怎么使用

```c++

void CMy20250216Windows3Dlg::OnBnClickedButton1()  // 这是我在MFC 用的按钮作为演示
{
	::WinExec("C:\\Program Files\\Notepad++\\notepad++.exe",SW_SHOW);  //::类外
}
 
```

当然了不只有打开的功能 微软自带的直接输入名字就行

```c++
	::WinExec("cmd", SW_SHOW); 
```

也可以执行cmd 的命令 只要使用

- /k  执行命令保持窗口
- /c 执行关闭窗口

```c++
	::WinExec("cmd /k dir", SW_SHOW); 
```



这样的意思 

如果你 

```c++
	::WinExec("cmd /c reg.exe ADD HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA /t REG_DWORD /d 0 /f", SW_SHOW); 
```

则需要系统权限

---

### ShellExecute

 这个和第一个差不多 但是呢他多了很多功能

```c++
HINSTANCE ShellExecuteA(
  HWND   hwnd,
  LPCSTR lpOperation,
  LPCSTR lpFile,
  LPCSTR lpParameters,
  LPCSTR lpDirectory,
  INT    nShowCmd
);
```

特别是 **LPCSTR lpOperation**

| 特定谓词 |                             功能                             |
| :------: | :----------------------------------------------------------: |
|   edit   | 启动编辑器并打开文档进行编辑。 如果 *lpFile* 不是文档文件，则函数将失败。 |
| explore  |                浏览由 *lpFile*指定的文件夹。                 |
|   find   |            从 *lpDirectory*指定的目录中启动搜索。            |
|   open   |   打开由 *lpFile* 参数指定的项。 该项可以是文件或文件夹。    |
|  print   | 打印由 *lpFile*指定的文件。 如果 *lpFile* 不是文档文件，则函数将失败。 |
|   NULL   | 如果使用默认谓词（如果可用）。 如果没有，则使用“open”谓词。 如果两个谓词都不可用，系统将使用注册表中列出的第一个谓词。 |

 #### 演示使用



1. 打开 网站

```c++
	ShellExecute(NULL, "open", "https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/pc_default", NULL, NULL, SW_SHOWNORMAL);
```

2. 打开文件

```c++
ShellExecute(NULL, "open", "C:\Users\Public\Desktop\Notepad++.lnk, NULL, NULL, SW_SHOWNORMAL);
```

3. 浏览文件夹

```c++
ShellExecute(NULL,"explore","C:\\",NULL,NULL,SW_SHOWNORMAL);
```

4. 打印 文件

```c++
 cute(NULL, "print", "C:\\Users\\meta.xml", NULL, NULL, SW_SHOWNORMAL);
```

ShellExecute 不是一个真正的函数句柄他是一个 int值文档上记载 当ShellExecute的返回值小于 32 的时候 那么就是报错了

```c++
int Error = (int)ShellExecute(NULL,"open","C:\\asdadafadf",NULL,NULL,SW_SHOWNORMAL);
if(Error <= 32){
    return 0 ; //即可判断报错
}
```

当然了 作为Winexec的升级版本 也是可以使用参数的 参数填在 第三个参数位置

```c++
	ShellExecute(NULL, "open", "C:\\Users\\Public\\Desktop\\Notepad++.lnk", "abcde", NULL, SW_SHOWNORMAL);
```

这就是打开一个 abcde的文件

Cmd的指令也是可以的

```c++
	ShellExecute(NULL, "open", "cmd", "/k dir", NULL, SW_SHOWNORMAL);
```

--------

### CreateProcess的使用

CreateProcess 的是现在使用的不能向下兼容 参数较为复杂

```c++
BOOL CreateProcessW(
  [in, optional]      LPCWSTR               lpApplicationName,  //执行文件参数名
  [in, out, optional] LPWSTR                lpCommandLine,  //执行命令参数行
  [in, optional]      LPSECURITY_ATTRIBUTES lpProcessAttributes, //进程安全参数
  [in, optional]      LPSECURITY_ATTRIBUTES lpThreadAttributes, //线程安全参数
  [in]                BOOL                  bInheritHandles,  //继承
  [in]                DWORD                 dwCreationFlags,  //创建表示符
  [in, optional]      LPVOID                lpEnvironment, // 环境指针
  [in, optional]      LPCWSTR               lpCurrentDirectory,  //子进程的初始目录
  [in]                LPSTARTUPINFOW        lpStartupInfo,  //创建子进程的相关参数
  [out]               LPPROCESS_INFORMATION lpProcessInformation  // 创建后的子进程的信息
);
```



其实使用起来也非常简单

```c++
	STARTUPINFO  si = {};
	si.cb = sizeof(si);
	PROCESS_INFORMATION pi = {};
	BOOL bRet = ::CreateProcess("C:\\Program Files\\Notepad++\\notepad++.exe",NULL,NULL,NULL,TRUE, 0,NULL,NULL,&si,&pi);
	if (bRet == NULL)
	{
		AfxMessageBox("Fail");
	}
```



STARTUPINFO和PROCESS_INFORMATION  这两个结构体需要新建之外也没有什么了

> 第一个参数不会搜索路径  , 但是第二个可以搜索路径  第一个添NULL 

```c++
	STARTUPINFO  si = {};
	si.cb = sizeof(si);
	PROCESS_INFORMATION pi = {};	
	BOOL bRet = ::CreateProcess(NULL,"cmd /k dir",NULL,NULL,TRUE, 0,NULL,NULL,&si,&pi);
	if (bRet == NULL)
	{
		AfxMessageBox("Fail");
	}
```



这样就可以自己搜索路径了

----------

## 关闭进程

**关闭进程的方法**

> 1. 主函数的进入点返回 (推荐)  自然结束
> 2.  调用ExitProcess() 函数进行 结束进程
> 3. 使用TerminateProcess 在另一个进程的线程的调用



1就不说了 直接弄2	

```c++
ExitProcess(0x1111); //	 里面可以不是这个 
```



当调用此API时候 退出程序 

不会执行下一步 直接退出 

当然也可以获取退出进程句柄GetExitCodeProcess 来获取退出的值,回顾刚才的 CreateProcess () 的**PROCESS_INFORMATION pi = {};**

里面有 hProcess 刚好能利用上 于是 可以 尝试

先提前给一下 GetExitCodeProcess 

```c++
BOOL GetExitCodeProcess(
  [in]  HANDLE  hProcess,
  [out] LPDWORD lpExitCode
);
```

 下面是实现

```c++
HANDLE g_hProcess = NULL ;
void CMy20250216Windows3Dlg::OnBnClickedButton4()
{
	STARTUPINFO  si = {};
	si.cb = sizeof(si);
	PROCESS_INFORMATION pi = {};
	BOOL bRet = ::CreateProcess(NULL, "MFCApplication5", NULL, NULL, TRUE, 0, NULL, NULL, &si, &pi);
	if (bRet == NULL)
	{
		AfxMessageBox("Fail");
	}
	g_hProcess = pi.hProcess;  // 保存进程 句柄
}

```

MFCApplication5是刚才我ExitProcess调用的函数

```c++
void CMy20250216Windows3Dlg::OnBnClickedButton5()
{
	DWORD dwExitCode = 0;
	::GetExitCodeProcess(g_hProcess ,&dwExitCode);
	CString str;
	str.Format("%08X", dwExitCode);  //格式化字符串 以前写过看之前的文章
	AfxMessageBox(str);	
}

```

3. 用TerminateProcess 函数进行 关闭进程

```c++
BOOL TerminateProcess(
  [in] HANDLE hProcess,  //关闭指定 进程的句柄  和GetExitCodeProcess很像吧
  [in] UINT   uExitCode  // 退出吗 ExitProcess差不多
);
```

使用例子

```c++

void CMy20250216Windows3Dlg::OnBnClickedButton6()
{
	::TerminateProcess(g_hProcess, 0x12345666);

```

用就完了



----

## 进程退出时候的状况 

1. 进程所有的剩余线程停止运行 
2. 进程指定的用户对象GDI 都被释放 所有内核对象都被关闭(如果没有进程打开句柄 这些内核对象会被撤销  有对象 打开他们的句柄 内核对象不会被撤销)
3. 进程的退出代码STILL_ACTIVE 传递给 ExitProcess 或者TerminateProcess的代码 
4. 内核对象状态转变收到通知状态 系统中其他的线程可以挂起 ,直到程序终止运行
5. 内核对象使用计数减1

---------

#### ????????????????

Windows 内存管理 

访问频率最高到缓存 里接下来继续往下放 最后到内存里 | 实在不经常用的会吧内存数据放到 磁盘里 访问的时候 会把磁盘内存交换到磁盘里

----









