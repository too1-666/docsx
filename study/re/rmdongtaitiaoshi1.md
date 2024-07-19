---
typora-root-url: ..\..\public
---

# RE的调试技术  入门1

> 动态调试技术最重要的工具是调试器 分为用户模式和内核 模式两种类型 用户模式是指用来调试用户模式应用程序的提示器 工作在 Ring3 级 例如x64dbg vsc++ 自带的调试器 内核模式调试器是能调试系统内核的调试器 例如windbg  
>
> 备注: ring 0 是普通应用程序 权限 也就是虚拟那部分的

**由于我就有x64dbg 我就拿x64dbg 说**



## X64dbg 调试器怎么用?

x64dbg是一款开源的调试器 既支持32位 和64位的程序调试也支持插件的功能 类似与C的表达式解析器 提供了图形模式的代码流程 可调试的脚本支持等强大功能 32dbg支持32位程序 64dbg支持64位  

举例一些功能用法

* 可以在设置选项里去除系统断点
* F9可以让该程序运行 
* ctrl +G 可以打开表达式窗口 输入函数的名字就可以跳到该函数入口处
* F2 可以设置断点
* 在命令环境中输入 bp 函数名也可以设置断点
* F8 单步越过 走出这个目标函数 回到原来代码
* dump 寄存器 可以查看指向的字符串
* 点击类似于可以继续的位置 的入口 按钮  右键单机转到句柄选项卡 刷新找到句柄列表 早列表中找到 哪个继续的安妮 下面则消息断点当设置当单机做件事发送WM_LBUTTONUP(按键是否按下) 会停止
* 在软件名字旁边会有个模块的东西 会显示停在哪个模块处
* ctrl +f9 执行到返回 可以多次使用直行道代码领空 但是很容易陷入无限月读中不容易跳出来
* 找到内存布局窗口找到可执行代码段.text哪个右键设置内存断点 然后f9执行就可以调到调试区了





## WinDbg



windbg提供了强大的机制和丰富的命令来控制调试目标 打开windbg 的flie菜单 可以看见多种调试模式 既可以打开附加的方式调试应用程序 也可以分析dump 文件 还可以进行远程调试 内核调试  内核调试还分为五种 分别是NETUSB1394 COM和本地调试 前四种是双机调试模式 附加筋承担非入侵调试 dump 文件调试 本地内核调试 都属于非实时调试模式 他们不能直接被控制调试目标的中断和运行 一般用于观察内存数据分析数据结构 也可以直接修改内存书记

**怎么下载**

> 下载winget  使用
>
> winget install windbg 即可



## 静态分析技术



### 推荐使用 IDA pro 进行静态反汇编 可以使用DIE  peid 等工具 分析一下 是否加壳和查看32还是64的

IDA是按区块装载 PE 文件的例如 代码块 数据块 资源块 输入表 输出表 反汇编时间和大小成正比



> 用法

1. 分析完目标程序胡进入主窗口 

![re](/studyre/IDArumen1.png)

打开view ->open subviews ->Disassembly 打开反汇编窗口

![](/studyre/viewcaidan1.png)

或者右键快捷菜单中的text view选项切换多文本视图

![](/studyre/textview.png)

空格键可以在文本视图和图形视图来回切换

2. 导航栏 单击菜单的view->toolbars->Navigator

![viewcaidan2](/studyre/viewcaidan2.png)

**认识导航栏**

![](/studyre/navigationshow.png)

每个色块都会解释一下 

* library function 库函数
* DATA 数据
* regular function 规则函数
* Unexplored 未查找过的
* Instruction 指令
* Extrenal symbol 为外部符号

可以根据需要调到代码处

3.注释 注释是很重要的东西 在ida pro 里有两种注释方式 一个是;交叉参考处都会出现注释 还有一个是按着: 是只在该处出现注释 ; : 为快捷键

; 的注释

![](/studyre/fenhaozhushi.png)

: 的注释

![](/studyre/maohaozhushi.png)

演示:  注释

![](/studyre/maohaoyanshi.png)

3. 虚拟函数地址处

   imports窗口 列出了可执行文件调用的所有函数 每个条目列出一个函数名称 双击即可

![](/studyre/Gkuaijiejian.png)

按G后打开 输入十六进制窗口即可显示该地址的 代码

![](/studyre/hanshuimport.png)

#### 交叉参考

通过交叉参考可以知道代码相互调用的关系 

![]()![XREFcankao](/studyre/XREFcankao.png)

该XREF(交叉参考) 为调用__do_global_dtors_aux  j的意思是跳转 o表示偏移量 p是子程序 enter此处即可跳转 双击也可以

在loc_8A3处 按下x 键就可以打开参考窗口 上面的框框就窗口

# 前置已经结束准备开始正式的学习IDA静态反汇编

