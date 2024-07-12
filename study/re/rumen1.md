# RE的入门 技巧 (1)
### 前置 先别管其他的先看眼下就行 不要多想
> 你需要知道简单的汇编才能学习
> 首先是  计算机只能识别二进制数字 这时候协助 我们的编码系统出现了  ASCII 和Unicode字符集出现了 在这里一般以16进制出现 基础就不说了
> h是16进制 o是八进制 b是2进制 d是10进制结尾 这些是要理清的
> 大小端问题 对的就是大小端 Big end 和little end  例如 存储141312h 有大学的汇编基础就是入栈是下面的入栈方式

<br>|12h|<br>
<br>|13h|<br>
<br>|14h|<br> 
头塞里面
内存的写入就是这样 (小端)
一般x86 的处理器都是小端(little endian)
Power PC 的 大端 的方式 
大端的写入方法
<br> |14h| <br>
<br> |13h| <br>
<br> |12h| <br>
顺序是反的
一般的网络协议都是以大端的方式传输数据的 这个big endian 也被称之为 网络字节序

### windows 系统
win 的api函数
#### win32 API函数
大多数人都用windows 所以要研究 windows api的知识
对于啥也不懂的人来说 也需要你听过但是没见过  API 是个很神秘的东西 但是他就是个应用程序的程序的接口   当初 程序员使用的编程工具 只有API 函数  他提供了图形接口 窗口管理 内存管理服务功能 这一堆 以函数库的形式 合成在一起 成为了win API 的 神奇东西 win api 的子系统把 转换成Windows系统的服务调用 win api子系统的基石 他的下面就是win 的内核   顺序从深处到浅层顺序是 硬件层和系统服务(核心层)-->(用户层)api子系统-->windows的应用程序

##### win API 的一些分类
用于 16位的Windows系统的API被称之为 win16
用于 32位的Windows系统的API被称之为 win32
用于 64位的Windows系统的API被称之为 win64
但是 win64 的API函数名字 还是用win32的不过是用64位实现的
windows 的运转核心 是 动态链接 Window提供了丰富的应用程序可以利用的函数调用 这显函数采用动态链接库 DLL的方法 这些东西在\system里面和\system32里面 最初Window 有3个主要子系统 主要部分就在这三个动态库里实现
Kernel 由KERNEL32.DLL实现) :操作系统核心功能服务 包括进程与线程控制 内存管理 文件访问等控制
User USER32.DLL实现:负责处理用户的接口 包括 键盘鼠标桌面菜单管理
GDI (由GDI32.DLL实现): 图形设备接口允许程序在屏幕和打印机上显示文本和图形
除了上面的模块 还有其他的dll支持的功能 包括吗前夕 注册表操作 的 ADVAPI32.DLL  通用控件 COMCTL32.DLL 公共对话框COMDLG32.DLL 用户界面SHELL32.DLL 网络NETAPI32.DLL 
win API 是基于 C语言的 其他语言其实也可以调用 调用的时候遵循规范 就可以.
#### Unicode 
Unicode 影响计算机行业每个部分 对于操作系统和编程语言影响很大一些系统就是基于Unicode 的研发 系统核心用Unicode 函数工作  如果传递 一个ASCII的字符串 系统会把字符串转换成Unicode 再传递给操作系统 如果希望传递回 ASCII字符串 就会把Unicode码转换为ASCII码 再将结果传递回 应用程序
win32api 字符集中'A'代表ansi 'W'代表Unicode 前面是单字节 后面是宽字节 处理双字节 每个字符串为参数的win32函数在操作系统中都有这两种版本  
例如  编程使用MessageBox(创建一个对话框) 在user32.dll 里没有这个函数的入口 其实有俩入口一个名字为 MessageBoxA 另一个是MessageBoxB ANSI 和 Unicode的
我们不用担心选择问题 开发工具回根据设置调用其中一个 **程序员只需要写代码就可以了 而编译工具需要考虑的事情就很多了**



```
int MessageBox(
	HWND hWnd,  //父窗口句柄
	LPCTSTR lpText,//消息框文本地址
	LPCTSTR lpCaption, //消息框标题地址
	UINT uType //消息框样式
)
```

上面是函数原型 下面是Window是 里的 MessageBoxA的函数内部结构

```
int MessageBoxA(   
MessageBoxExA{  // 函数调用
MBToWCSEx()     // 消息框主题文字转换成unicode
MBToWCSEx()    // 标题栏的文字转换为 Unicode
MessageBoxExW() // 调用此函数 
HeapFree()  //释放内存
}
)
```

> 表明了 MessageBoxExA 其实是反应的替换层 用于 分配内存  并将 ANSI 字符串转换成  Unicode 字符串  系统最终调用 Unicode 'W'的函数执行 也就是MessageBoxExW 的函数执行 当 次函数执行返回时候 他便释放内存缓存  在这个过程中 系统必须执行额外的转换操作因此ANSI的应用程序需要更多的CPU资源和更多的的内存  Unicode的程序在NT架构下执行效率高很多

Win32大量调用系统提供的API函数而win32 平台上的调试器 xdebug 那种的 有针对 API函数断电的强大功能 因此掌握常见的API函数的用法会给程序的跟踪调试带来极大的方便 

### WOW64     

标题是64位Windows操作系统的子系统 可以使大多数32位应用程序 在进行不修改的情况下运行在64位的操作系统 上  64位的Windows 除了带有64位操作系统文件还带有32位32位操作系统应有的系统文件**Windows的64位系统文件都放在了一个叫做System32的文件夹中这里包含原生的64位64位映像文件 为了兼容32位操作系统  还增加了 SysWOW64文件夹 存储了32位的系统文件**

64位应用程序会加载System32 目录下的64位的kernel32.dll user32.dl ntdll.dll 当32位应用程序加载时候 WOW64 会建立32位 ntdll.dll 所需要的启动环境  将CPU模式切换为32位并开始执行32位加载器

就如同该进程在原生32位的系统一样. WOW64会对32位ntdll.dll 的重定向ntdll.dll(64位) 而不是原生的32位系统调用指令 WOW64转换到原生的64位模式,捕获系统调用有关的参数,发出对应的64位系统调用 当原生的系统调用返回时候 WOW64在返回32位模式之前把所有的输出参数从64位转换为32位

WOW64既不支持16位应用程序的执行 (32位系统支持16位的) 也不支持加载32位内核模式的设备驱动程序 他只能加载32位的dll  不能加载原生的64位dll   同样的 原生的64位进程不能加载32位的dll

