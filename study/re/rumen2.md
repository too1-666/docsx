# RE入门(2)

前面的是windows基本,接下来继续深入WIndows 基本

## Windows 消息机制

WIndows 是一个消息驱动式系统  WIndows消息提供在应用程序与应用程序之间 应用程序与WIndows 系统之间进行通信的手带你 应用程序想要实现的功能由消息触发 通过对消息的处理完成WIndows 系统中有两种消息队列一种是系统消息队列另一种是应用程序消息队列 计算机将所有的输入设备由 WIndows 监控 当一个事件发生的时候 windows 把输入的消息放入系统消息队列 再讲输入的消息复制到相应的应用程序队列里  应用程序中的消息循环在他的消息队列中检索每个消息并发送给相应的窗口函数, 一个事件从发生到处理都必须经历上述过程值得注意消息总是按照先后排队的 (部分系统消息除外)也就是说 可能有一些消息外部实时事件得不到及时的处理

Windows的本身是由消息驱动的 所以调试跟踪回到的底层的答案 整个常用的示例



SendMessage函数 应用程序发送信息

```
调用一个SendMessage
LRESULT SendMessage(
	HWND hWND,     //目的窗口句柄
	UNIT Msg,      // 消息标识符
	WPARAM wParam,  // 消息的WPARAM域
	LPARAM lParam,  // 消息的LPARAM域
	);
```

返回值 是具体消息定的 消息投递成功返回非0

**WM_COMMAND 消息**

用户从菜单或者按钮中选择一条命令 或者一个控件时消息被发送给他的父窗口 或者快捷键被释放时候发送 示例如下 Vc++ 的WINUSER.H文件定义 WM消息所对的十六进制书是0111h

**WM_DESTROY 消息**

当一个窗口被销毁时候发送该消息 消息十六进制数是02h 没有参数

**WM_QUIT消息 **

程序调用PostQuitMessage函数(该函数向系统表明有个线程有终止请求)时候  生产的消息 他代表的进制数是012h

**WM_LBUTTONDOWN消息**

当光标停在一个窗口的客户区切用户按下鼠标左键 该消息将被发送 鼠标动作未被捕获 这条消息将被发送给光标下单窗口 否则将被发送到已经捕获的鼠标动作的窗口 16进制数是0201h

返回值 如果应用程序处理了这条程序返回0

## 虚拟内存

> 默认情况下32位Windows操作系统的地址空间在4G以内 win32的[平坦内存](https://blog.csdn.net/yeahwell/article/details/8738064)方式使每个进程都有自己的虚拟空间 对于32位进程来说 这个地址空间是4GB 因为32位指针拥有00000000h~FFFFFFFFh的任何值
>
> 此时程序代码都放在一个同一地址空间中 不必区分代码段和数据端 
>
> 虚拟内存不是真的内存 他通过映射(Map)可用虚拟地址达到4gb 每个一样程序可以获得2gb 的虚拟地址 剩下的2gb留给操作系统自用在WIndowsNT中应用程序甚至可以获得3GB的内存地址
>
> WIndow是分时多任务操作系统 CPU 事件被分成一个个时间片后分配给不同的程序 在一个时间片里这个程序执行的无关内容不会映射到线性地址中 因此每个程序都有自己的4GB寻址空间 互不干扰  物理内存中 操作系统和系统dll 需要提供每个应用程序调用 所以他们在任意时刻必须被映射 用户的exe程序只在自己岁数的时间片里被映射 用户dll有选择的映射 

* 应用程序不会直接访问物理地址
* 虚拟内存管理器通过虚拟地址的访问请求来控制所有的物理地址访问
* 每个应用程序都有独立的4GB寻址龙江 不同应用程序的地址空间是彼此隔离的
* DLL没有私有的空间他们总是被映射到其他应用程序的地址空间中 作为其他程序的一部分运行  如果dll不和其他程序同一个地址空间 应用程序就无法调用它

64位CPU最大寻址空间是16TB



# 基础篇END