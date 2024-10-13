# WindowsSdk 4.0

------

### 补充句柄

句柄分局部和全局,  窗口句柄例外可以跨程序

----

### COMMAND消息

可能是 菜单消息  快捷键消息 和控件消息

> 什么是快捷键 都知道了 我们通过KEY_DOWN 判断该消息是否是正确的快捷键 太麻烦了 

我们选择使用COMMAND 消息来判断

## CreateAcceleratorTable

使用CreateAcceleratorTable 创建快捷键表

```c++
HACCEL CreateAcceleratorTableA(
  [in] LPACCEL paccel,  //描述加速器表的 ACCEL 结构的数组。
  [in] int     cAccel  //数组中 ACCEL 结构的数目。 这必须在 1 到 32767 的范围内，否则函数将失败。
);
```

#### ACCEL的结构数组

```c++
typedef struct tagACCEL {
  BYTE  fVirt;
  WORD  key;  //加速键。 此成员可以是 虚拟键代码 或字符代码。
  WORD  cmd;  //快捷键标识符。 按下加速键时，此值放置在WM_COMMAND或WM_SYSCOMMAND消息的 wParam 参数的低位字中。
} ACCEL, *LPACCEL;
```

fVrit 内容可以是 一下一个或者多个值

| Value             | 含义                                                         |
| :---------------- | :----------------------------------------------------------- |
| **FALT**0x10      | 按下快捷键时，必须按住 Alt 键。                              |
| **FCONTROL**0x08  | 按下加速键时，必须按住 Ctrl 键。                             |
| **FNOINVERT**0x02 | 使用快捷键时，不会突出显示顶级菜单项。 如果未指定此标志，则使用快捷键时，会尽可能突出显示顶级菜单项。 此属性已过时，保留只是为了与专为 16 位 Windows 设计的资源文件向后兼容。 |
| **FSHIFT**0x04    | 按下加速键时，必须按住 SHIFT 键。                            |
| **FVIRTKEY**TRUE  | **密钥**成员指定虚拟键代码。 如果未指定此标志，则假定 **键** 指定字符代码。 |

--------

需要申请动态分配堆地址LocalAlloc()才能使用 根据大小分配 显然静态无法做到

### 申请局部堆地址LocalAlloc()

```c++
DECLSPEC_ALLOCATOR HLOCAL LocalAlloc(
  [in] UINT   uFlags,
  [in] SIZE_T uBytes   //要分配的字节数。 如果此参数为零且 uFlags 参数指定 LMEM_MOVEABLE，则函数将返回标记为已丢弃的内存对象的句柄。
);
```

**uFlags**

内存分配属性。 默认值为 **LMEM_FIXED** 值。 此参数可以是以下一个或多个值，但特别指出的不兼容组合除外。

展开表

| 值                      | 含义                                                         |
| :---------------------- | :----------------------------------------------------------- |
| **LHND**0x0042          | 合并 **LMEM_MOVEABLE** 和 **LMEM_ZEROINIT**。                |
| **LMEM_FIXED**0x0000    | 分配固定内存。 返回值是指向内存对象的指针。                  |
| **LMEM_MOVEABLE**0x0002 | 分配可移动内存。 内存块永远不会在物理内存中移动，但它们可以在默认堆中移动。返回值是内存对象的句柄。 若要将句柄转换为指针，请使用 [LocalLock](https://learn.microsoft.com/zh-cn/windows/desktop/api/winbase/nf-winbase-locallock) 函数。此值不能与 **LMEM_FIXED**组合使用。 |
| **LMEM_ZEROINIT**0x0040 | 将内存内容初始化为零。                                       |
| **LPTR**0x0040          | 合并 **LMEM_FIXED** 和 **LMEM_ZEROINIT**。                   |
| **NONZEROLHND**         | 与 **LMEM_MOVEABLE** 相同。                                  |
| **NONZEROLPTR**         | 与 **LMEM_FIXED** 相同。                                     |

------

### 如何使用LocalAlloc()  

看到这个函数一头雾水 我特意教授如何使用该函数

首先要分配 地址  这是内存句柄

```c++
 HLOCAL hMem = LocalAlloc(LHND, 100);  //申请100字节
```

想要想要拿到地址就要使用 **Locallock()**  

```c++
LPVOID lpMemory = LocalLock(hMem);  // 设置个内存指针
```

不使用的时候 就要 释放 LocalFree()

```c++
LocalFree(hMem);
```

当然这个是个例子 为啥捏 因为通过碎片整理 会导致 内存地址变化 使用 LocalLoclk 就可以锁定变的

---

###  申请全局堆地址空间GlobalAlloc()

GlobalAlloc() 全局  历史遗留问题16 位操作系统时代   现在用的是同一个堆了

不用区分 只是记住 就行

-------

### 最新的API  HeapAlloc()

32位开始 GlobalAlloc() 和 LocalAlloc() 就开始默认调用 HeapAlloc 了



使用HeapAlloc() 就可以 进行分配

```c++
DECLSPEC_ALLOCATOR LPVOID HeapAlloc(
  [in] HANDLE hHeap,
  [in] DWORD  dwFlags,
  [in] SIZE_T dwBytes
);
```

```
[in] hHeap
```

要从中分配内存的堆的句柄。 此句柄由 [HeapCreate](https://learn.microsoft.com/zh-cn/windows/desktop/api/heapapi/nf-heapapi-heapcreate) 或 [GetProcessHeap](https://learn.microsoft.com/zh-cn/windows/desktop/api/heapapi/nf-heapapi-getprocessheap) 函数返回。

```
[in] dwFlags
```

堆分配选项。 指定这些值中的任何一个都将替代使用 [HeapCreate](https://learn.microsoft.com/zh-cn/windows/desktop/api/heapapi/nf-heapapi-heapcreate) 创建堆时指定的相应值。 此参数可使用以下一个或多个值。

展开表

| 值                                     | 含义                                                         |
| :------------------------------------- | :----------------------------------------------------------- |
| **HEAP_GENERATE_EXCEPTIONS**0x00000004 | 系统将引发异常以指示函数失败（例如内存不足情况），而不是返回 **NULL**。若要确保为此函数的所有调用生成异常，请在调用 [HeapCreate](https://learn.microsoft.com/zh-cn/windows/desktop/api/heapapi/nf-heapapi-heapcreate) 时指定**HEAP_GENERATE_EXCEPTIONS**。 在这种情况下，无需在此函数调用中额外指定 **HEAP_GENERATE_EXCEPTIONS** 。 |
| **HEAP_NO_SERIALIZE**0x00000001        | 序列化访问将不用于此分配。有关详细信息，请参阅“备注”。若要确保禁用对此函数的所有调用的序列化访问，请在调用 [HeapCreate](https://learn.microsoft.com/zh-cn/windows/desktop/api/heapapi/nf-heapapi-heapcreate) 中指定**HEAP_NO_SERIALIZE**。 在这种情况下，无需在此函数调用中额外指定 **HEAP_NO_SERIALIZE** 。访问进程的默认堆时，不应指定此值。 系统可能会在应用程序的进程中创建其他线程，例如同时访问进程的默认堆的 CTRL+C 处理程序。 |
| **HEAP_ZERO_MEMORY**0x00000008         | 分配的内存将初始化为零。 否则，内存不会初始化为零。          |

```
[in] dwBytes
```

要分配的字节数。

如果 *hHeap* 参数指定的堆是“不可增长的”堆， *则 dwBytes* 必须小于 0x7FFF8。 可以通过使用非零值调用 [HeapCreate](https://learn.microsoft.com/zh-cn/windows/desktop/api/heapapi/nf-heapapi-heapcreate) 函数来创建不可增长的堆。 

---

### 申请堆地址空间 VirtualAlloc() 可以分配内存属性



```c++
LPVOID VirtualAlloc(
  [in, optional] LPVOID lpAddress,
  [in]           SIZE_T dwSize,
  [in]           DWORD  flAllocationType,
  [in]           DWORD  flProtect
);
```

```
[in, optional] lpAddress
```

要分配的区域的起始地址。 如果保留内存，则指定的地址向下舍入到分配粒度中最近的倍数。 如果内存已保留并正在提交，地址将向下舍入到下一页边界。 若要确定页面的大小和主机计算机上的分配粒度，请使用 [GetSystemInfo](https://learn.microsoft.com/zh-cn/windows/win32/api/sysinfoapi/nf-sysinfoapi-getsysteminfo) 函数。 如果此参数 **NULL**，系统将确定分配区域的位置。

如果此地址位于未通过调用 [InitializeEnclave](https://learn.microsoft.com/zh-cn/windows/win32/api/enclaveapi/nf-enclaveapi-initializeenclave)初始化的 enclave 中，**VirtualAlloc** 为该地址的 enclave 分配零页。 该页必须以前未提交，并且不会使用 Intel Software Guard Extensions 编程模型的 EEXTEND 指令进行测量。

如果地址位于初始化的 enclave 中，则分配操作将失败，并出现 **ERROR_INVALID_ADDRESS** 错误。 对于不支持动态内存管理的 enclave（即 SGX1），这是事实。 SGX2 enclave 将允许分配，并且该页必须在分配后由 enclave 接受。

```
[in] dwSize
```

区域的大小（以字节为单位）。 如果 *lpAddress* 参数 **NULL**，则此值向上舍入到下一页边界。 否则，分配的页面将包含范围中包含一个或多个字节的所有页面，从 *lpAddress* 到 *lpAddress*+*dwSize*。 这意味着跨页边界的 2 字节范围会导致这两个页面都包括在分配的区域。

```
[in] flAllocationType
```

内存分配的类型。 此参数必须包含以下值之一。

展开表

| 价值                        | 意义                                                         |
| :-------------------------- | :----------------------------------------------------------- |
| **MEM_COMMIT**0x00001000    | 为指定的保留内存页分配内存费用（从内存的总体大小和磁盘上的分页文件）。 该函数还保证当调用方稍后最初访问内存时，内容将为零。 除非实际访问虚拟地址/直到实际访问虚拟地址，否则不会分配实际物理页。若要在一个步骤中保留和提交页面，请使用 `MEM_COMMIT | MEM_RESERVE`调用 **virtualAlloc**。除非已保留整个范围，否则尝试通过指定不带 **MEM_RESERVE** 的 **MEM_COMMIT** 并**NULL***lpAddress* 来提交特定地址范围。 生成的错误代码 **ERROR_INVALID_ADDRESS**。尝试提交已提交的页面不会导致函数失败。 这意味着可以提交页面，而无需首先确定每个页面的当前承诺状态。如果 *lpAddress* 指定 enclave 中的地址，则必须 **MEM_COMMIT***flAllocationType*。 |
| **MEM_RESERVE**0x00002000   | 保留进程的虚拟地址空间范围，而无需在内存或磁盘上的分页文件中分配任何实际物理存储。可以在对 **VirtualAlloc** 函数的后续调用中提交保留页。 若要在一个步骤中保留和提交页面，请使用 **MEM_COMMIT** \| **MEM_RESERVE**调用 **VirtualAlloc**。其他内存分配函数（如 **malloc** 和 [LocalAlloc](https://learn.microsoft.com/zh-cn/windows/desktop/api/winbase/nf-winbase-localalloc)）在释放之前无法使用保留的内存范围。 |
| **MEM_RESET**0x00080000     | 指示 *lpAddress* 指定的内存区域中的数据不再感兴趣，*dwSize* 不再感兴趣。 不应从分页文件读取或写入页面。 但是，内存块稍后将再次使用，因此不应将其取消提交。 此值不能用于任何其他值。使用此值不能保证使用 **MEM_RESET** 操作的范围将包含零。 如果希望该区域包含零，请取消提交内存，然后重新提交内存。指定 **MEM_RESET**时，**VirtualAlloc** 函数将忽略 *flProtect*的值。 但是，仍必须将 *flProtect* 设置为有效的保护值，例如 **PAGE_NOACCESS**。**VirtualAlloc** 如果使用 **MEM_RESET** 并且内存范围映射到文件，则返回错误。 仅当共享视图映射到分页文件时，才可接受。 |
| **MEM_RESET_UNDO**0x1000000 | **MEM_RESET_UNDO** 只应在之前成功应用 **MEM_RESET** 的地址范围上调用。 它指示由 *lpAddress 指定的指定内存范围中的数据* 和 *dwSize* 对调用方感兴趣，并尝试扭转 **MEM_RESET**的影响。 如果函数成功，则表示指定地址范围中的所有数据都保持不变。 如果函数失败，则地址范围中的至少一些数据已替换为零。此值不能用于任何其他值。 如果在之前未 **MEM_RESET** 的地址范围上调用 **MEM_RESET_UNDO**，则行为是未定义的。 指定 **MEM_RESET**时，**VirtualAlloc** 函数将忽略 *flProtect*的值。 但是，仍必须将 *flProtect* 设置为有效的保护值，例如 **PAGE_NOACCESS**。**Windows Server 2008 R2、Windows 7、Windows Server 2008、Windows Vista、Windows Server 2003 和 Windows XP：**在 Windows 8 和 Windows Server 2012 之前不支持 **MEM_RESET_UNDO** 标志。 |

此参数还可以按指示指定以下值。

展开表

| 价值                          | 意义                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| **MEM_LARGE_PAGES**0x20000000 | 使用 [大型页面支持](https://learn.microsoft.com/zh-cn/windows/desktop/Memory/large-page-support)分配内存。大小和对齐方式必须是大页最小值的倍数。 若要获取此值，请使用 [GetLargePageMinimum](https://learn.microsoft.com/zh-cn/windows/desktop/api/memoryapi/nf-memoryapi-getlargepageminimum) 函数。如果指定此值，还必须指定 **MEM_RESERVE** 和 **MEM_COMMIT**。 |
| **MEM_PHYSICAL**0x00400000    | 保留可用于映射 [地址窗口扩展插件](https://learn.microsoft.com/zh-cn/windows/desktop/Memory/address-windowing-extensions)（AWE）页的地址范围。此值必须与 **MEM_RESERVE** 一起使用，并且不能用于其他值。 |
| **MEM_TOP_DOWN**0x00100000    | 以最高可能地址分配内存。 这比常规分配要慢，尤其是在分配很多时。 |
| **MEM_WRITE_WATCH**0x00200000 | 使系统跟踪写入到分配区域中的页面。 如果指定此值，还必须指定 **MEM_RESERVE**。若要检索自分配区域或重置写入跟踪状态以来已写入的页面的地址，请调用 [GetWriteWatch](https://learn.microsoft.com/zh-cn/windows/desktop/api/memoryapi/nf-memoryapi-getwritewatch) 函数。 若要重置写入跟踪状态，请调用 **GetWriteWatch** 或 [ResetWriteWatch](https://learn.microsoft.com/zh-cn/windows/desktop/api/memoryapi/nf-memoryapi-resetwritewatch)。 写入跟踪功能将一直为内存区域启用，直到释放该区域。 |

```
[in] flProtect
```

要分配的页面区域的内存保护。 如果要提交页面，则可以指定内存保护常量之一。

如果 *lpAddress* 指定 enclave 中的地址，*flProtect* 不能是以下值之一：

- PAGE_NOACCESS
- PAGE_GUARD
- PAGE_NOCACHE
- PAGE_WRITECOMBINE

为 enclave 分配动态内存时，*flProtect* 参数必须 **PAGE_READWRITE** 或 **PAGE_EXECUTE_READWRITE**。

-------------------

### 正式创建快捷键表

当然我们回归主题通过 HeapAlloc() 进行分配

```c++
 ACCEL *pAccelNews= (ACCEL*)HeapAlloc(GetProcessHeap(), 0, sizeof(ACCEL)*2);
```

解释一下 每个的含义 

* GetProcessHeap() 这个函数返回当前进程的默认堆的句柄。在Windows操作系统中，每个进程都有一个默认的堆，用于满足该进程的内存分配请求。
* 0 这是分配标志参数 设置为0 表示没有设置任何参数
* sizeof(ACCEL)*2 这个参数指定了要分配的内存大小（以字节为单位）

----

然后创建快捷键表CreateAcceleratorTable

```c++
CreateAcceleratorTable(pAccelNews, 2);
```

---

这是最基础的 创建快捷表 的方法现在我要添加东西了

```c++
pAccelNews[0].fVirt = FALT | FCONTROL | FVIRTKEY;
pAccelNews[0].key = 'A';
pAccelNews[0].cmd = WM_COMMAND;

pAccelNews[1].fVirt = FALT | FCONTROL | FVIRTKEY;
pAccelNews[1].key = 'B';
pAccelNews[1].cmd = WM_COMMAND;
```

这是成功创建了一个表 接下来就要产生关系转换成COMMAND消息 才能接收

#### TranslateAccelerator (Winuser.h)

> 处理菜单命令的快捷键。 如果指定快捷键表中) 键有条目，函数会将[WM_KEYDOWN或](https://learn.microsoft.com/zh-cn/windows/desktop/inputdev/wm-keydown)[WM_SYSKEYDOWN](https://learn.microsoft.com/zh-cn/windows/desktop/menurc/wm-syscommand) ( 消息转换为WM_COMMAND或WM_SYSCOMMAND消息，然后将**WM_COMMAND**或**WM_SYSCOMMAND**消息直接发送到指定的窗口过程。 在窗口过程处理完消息之前，**TranslateAccelerator** 不会返回 。

```c++
int TranslateAcceleratorW(
  [in] HWND   hWnd,   // 要转换其消息的窗口的句柄。
  [in] HACCEL hAccTable,  // 快捷键表的句柄。 加速键表必须已通过对 LoadAccelerators 函数的调用加载或通过调用 CreateAcceleratorTable 函数创建。
  [in] LPMSG  lpMsg   //指向 MSG 结构的指针，该结构包含使用 GetMessage 或 PeekMessage 函数从调用线程的消息队列检索到的消息信息。
);
```

```c++
TranslateAccelerator( hWnd,hAccel, &msg )
```

使用例

如果使用调试的话会发现 3 次KeyDown 没有来 来了一次Command 是因为快捷键被转换了一次 Command消息  

----

实战使用例

```c++
  ACCEL *pAccelNews= (ACCEL*)HeapAlloc(GetProcessHeap(), 0, sizeof(ACCEL)*2);  // 使用HeapAlloc 进行分配堆地址

  
  pAccelNews[0].fVirt = FALT | FCONTROL | FVIRTKEY;
  pAccelNews[0].key = 'A';
  pAccelNews[0].cmd = WM_COMMAND;

  pAccelNews[1].fVirt = FALT | FCONTROL | FVIRTKEY;
  pAccelNews[1].key = 'B';
  pAccelNews[1].cmd = WM_COMMAND;
  HACCEL hAccel = CreateAcceleratorTable(pAccelNews, 2);
  if (hAccel == NULL) {
      // 创建加速键表失败，处理错误  
      HeapFree(GetProcessHeap(), 0, pAccelNews);
      return 1;
  }
  if (hWnd == NULL)
    {
        DWORD werror = GetLastError();
        return 0;
    }




    ShowWindow(hWnd, SW_SHOWNORMAL);
    UpdateWindow(hWnd); // 兼容低版本 现在自带功能
    // SetClassLong(hWnd, GCL_HCURSOR, (LONG)LoadCursor(NULL,IDC_HAND)); 
     // 二次修改光标





     //消息循环
    BOOL bRet;
    MSG  msg;
    while ((bRet = GetMessage(&msg, NULL, 0, 0)) != 0)  // 接收所有 的消息
    {

        if (bRet == -1)
        {
            break;
        }
        else
        {  //转换快捷键消息WM_COMMAND
            if (!TranslateAccelerator( hWnd,hAccel, &msg )) 
            {
                TranslateMessage(&msg);//虚拟
                DispatchMessage(&msg); //派发消息
            }
        
        }
    }
   DestroyAcceleratorTable(hAccel);
    HeapFree(GetProcessHeap(), 0, hAccel) ;
    
    return (msg.wParam); // 接收消息

}
```

-----

### 在WM_COMMAND 里接收 快捷键消息  

回去看我之前WindowsSdk 里面就有 WM_COMMAND wParam 和 lParam的概念使用

| 消息源 | wParam（高字）     | wParam（低字）       | lParam         |
| :----- | :----------------- | :------------------- | :------------- |
| 菜单   | 0                  | 菜单标识符 (IDM_*)   | 0              |
| 加速器 | 1                  | 加速器标识符 (IDM_*) | 0              |
| 控件   | 控件定义的通知代码 | 控制标识符           | 控制窗口的句柄 |

加速器快捷键

如果HIWORD (wParam)为 1 那么就是快捷键  0 是菜单 可以结合之前的菜单使用例

```c++
LRESULT OnCommand(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {

    WORD wNottifyCide = HIWORD(wParam);
    if (wNottifyCide == 1)  // 快捷键
    {
        WORD WID = LOWORD(wParam);
        switch (WID)
        {
        case ID_CLOSE:
           
            PostQuitMessage(0);
            break;
        case IDM_SAVE:
            MessageBox(NULL, _T("打开了"), _T("保存"), MB_OK);
            break;
        case IDM_OPEN:
            MessageBox(NULL, _T("打开了"), _T("打开"), MB_OK);
            break;
        
        }
    }
    
    return TRUE;
}

```

这是COMMAND接收下面是 创建 菜单 和快捷键消息 消息ID可以共用

------

```c++
 BOOL ret;
 HMENU hMenu = CreateMenu();
HMENU hSubMenu = CreatePopupMenu();
 
 ret = AppendMenu(hMenu, MF_STRING | MF_POPUP,(UINT_PTR)hSubMenu, "菜单(&F)");
 //AppendMenu(hMenu, MF_STRING | MF_POPUP, 101, "文件(&E)");
 
 //添加子菜单
 
 
 
AppendMenu(hSubMenu, MF_STRING, ID_CLOSE, "关闭");
AppendMenu(hSubMenu, MF_STRING, IDM_SAVE, "保存");
AppendMenu(hSubMenu, MF_STRING, IDM_OPEN, "打开");
  


 SetMenu(hWnd, hMenu);

 ACCEL* pAccelNews = (ACCEL*)HeapAlloc(GetProcessHeap(), 0, sizeof(ACCEL) * 2);  // 使用HeapAlloc 进行分配堆地址
 if (pAccelNews == NULL) {
     // 内存分配失败，处理错误  
     return 1;
 }

 pAccelNews[0].fVirt = FCONTROL | FVIRTKEY;
 pAccelNews[0].key = 'S';
 pAccelNews[0].cmd = IDM_SAVE;

 pAccelNews[1].fVirt = FCONTROL | FVIRTKEY;
 pAccelNews[1].key = 'O';
 pAccelNews[1].cmd = IDM_OPEN;
 HACCEL hAccel = CreateAcceleratorTable (pAccelNews, 2);
 if (hAccel == NULL) {
     // 创建加速键表失败，处理错误  
     HeapFree(GetProcessHeap(), 0, pAccelNews);
     return 1;
 }
 if (hWnd == NULL)
 {
     DWORD werror = GetLastError();
     return 0;
 }

```

---

### 定时器消息 

还记得小字吗 ,只有死循环才不会被刷掉的小字  可以通过定时器消息定时出现

现在来研习**定时器消息** ,每隔多长时间发送一次消息

-------

**SetTimer()**  

```c++
UINT_PTR SetTimer(
  [in, optional] HWND      hWnd,
  [in]           UINT_PTR  nIDEvent,
  [in]           UINT      uElapse,
  [in, optional] TIMERPROC lpTimerFunc
);
```

```
[in, optional] hWnd
```

类型：**HWND**

要与计时器关联的窗口的句柄。 此窗口必须由调用线程拥有。 如果 *hWnd* 的 **NULL** 值与现有计时器的 *nIDEvent* 一起传入，则替换该计时器的方式与现有非 NULL *hWnd* 计时器相同。

```
[in] nIDEvent
```

类型： **UINT_PTR**

非零计时器标识符。 如果 *hWnd* 参数为 **NULL**，并且 *nIDEvent* 与现有计时器不匹配，则忽略它并生成新的计时器 ID。 如果 *hWnd* 参数不为 **NULL** ，并且 *hWnd* 指定的窗口已有一个值为 *nIDEvent* 的计时器，则现有计时器将替换为新的计时器。 **当 SetTimer** 替换计时器时，计时器将重置。 因此，将在当前超时值过后发送消息，但忽略以前设置的超时值。 如果调用不打算替换现有计时器，则*如果 hWnd* 为 **NULL**，*则 nIDEvent* 应为 0。

```
[in] uElapse
```

类型： **UINT**

超时值（以毫秒为单位）。

如果 *uElapse* 小于 **USER_TIMER_MINIMUM** (0x0000000A) ，则超时设置为 **USER_TIMER_MINIMUM**。 如果 *uElapse* 大于 **USER_TIMER_MAXIMUM** (0x7FFFFFFF) ，则超时设置为 **USER_TIMER_MAXIMUM**。

```
[in, optional] lpTimerFunc
```

类型： **TIMERPROC**

指向在超时值过后要通知的函数的指针。 有关 函数的详细信息，请参阅 [TimerProc](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nc-winuser-timerproc)。 如果 *lpTimerFunc* 为 **NULL**，系统会将 [WM_TIMER](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/wm-timer) 消息发布到应用程序队列。 消息的 [MSG](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/ns-winuser-msg) 结构的 **hwnd** 成员包含 *hWnd* 参数的值。

-----

```c++
 SetTimer(hWnd, TIME_ID_1, 1000, nullptr);// 窗口句柄 , 设置一个Time ID ,1000毫秒发送一回 设置NULL 然后让消息发送到WM_TIMER里
```

但是 定时器是需要销毁的

使用KillTimer()进行销毁(最好是在Destroy消息里销毁)

```c++
KillTimer(hWnd,TIME_ID_1);
```

----

### 上次的遗憾一定要完成 在WM_TIMMER 里进行 操作 我要在桌面打广告!!!!!!!!!!!!

```c++
 OutputDebugString("YES_TIME!\n");
 HWND hDesktop = GetDesktopWindow();   //获取桌面句柄
 HDC hdc = GetDC(hDesktop);  // 获取桌面的HDC 句柄
 TextOut(hdc, 0, 0, "e1elibrary.com", 14);  // 每秒往桌面打水印
 ReleaseDC(hDesktop,hdc);  //释放
 return TRUE;
```

但是我调试的时候一直刷time 我发行版本不想刷 可以试试 #ifdef      (wParam是  ID标识符)

> 我先把WParam的消息是标识符 示例展示一下

```c++
OUTPUT ("YES_TIME!\n");
WORD Times = wParam;
if(Times == TIME_ID_1){
    HWND hDesktop = GetDesktopWindow();   //获取桌面句柄
    HDC hdc = GetDC(hDesktop);  // 获取桌面的HDC 句柄
    OUTPUT("YES_TIME!\n");  // 每秒往桌面打水印
    ReleaseDC(hDesktop,hdc);  //释放
}
else if (Times == TIME_ID_2) {
    OUTPUT("YES_TIMEss!\n");// 每秒往桌面打水印 
}
else if (Times == TIME_ID_3){
    OUTPUT("YES_TIMEs!\n");// 每秒往桌面打水印
}
returan TRUE;
}
```

这是#ifdef适用例:

```c++
#ifdef _DEBUG
    #define OUTPUT OutputDebugStringA
#else
    #define OUTPUT

#endif // DEBUG




LRESULT OnTimer(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    OUTPUT ("YES_TIME!\n");
    HWND hDesktop = GetDesktopWindow();   //获取桌面句柄
    HDC hdc = GetDC(hDesktop);  // 获取桌面的HDC 句柄
    TextOut(hdc, 0, 0, "e1elibrary.com", 14);  // 每秒往桌面打水印
    ReleaseDC(hDesktop,hdc);  //释放
    return TRUE;
```

-----

## END  4.5章展示空间消息
