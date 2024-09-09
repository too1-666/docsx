---
typora-root-url: ..\..\public
---

# 怎么寻找入口点Main函数

受到不同因素影响 位置不一样

发行版本 或者debug x86 x64 编译器版本都有可能影响main 函数位置

纯真(老)版本 入口点 

1. push
2. push
3. push
4. call

入口点位置 

fastcall 约定(在以前记录里能找到)

RCX

RDX 

R8

#### 入口点

-----------------------------------------------------------------------------------------------------------------------------------

>怎么找main 函数 

### 使用的实验代码

>我使用vs2015 版本的 代码 (MTD) 进行逆向

```c++
#include <stdio.h>
#include <stdlib.h>
int main() {
	printf("hello,world");
	system("pause");
	return 0;
}

```

此代码  拖入 ida 进行分析 直接进入main函数 (有).plb直接进入  main_0界面 

```assembly
; Attributes: thunk

; int __cdecl main_0(int argc, const char **argv, const char **envp)
_main_0 proc near

argc= dword ptr  4
argv= dword ptr  8
envp= dword ptr  0Ch

jmp     _main
_main_0 endp
```

jmp main 解释跳转到main 函数的地方 双击就可以

非可视化界面 使用ctrl + "+"找到main 双击进入即可进入 主函数

 

-----------------------------------------------------------------------------

#### __cdecl main_0

但是 我们目的是什么 我们要探索该代码的规则 所以查看调用的 函数也就是**__cdecl main_0**

使用交叉引用就可以 找到调用到上个 函数 快捷键位ctrl + x

####  __cdecl invoke_main()

```assembly
; Attributes: library function bp-based frame

; int __cdecl invoke_main()
invoke_main proc near
push    ebp
mov     ebp, esp
call    j___get_initial_narrow_environment  
push    eax             ; envp
call    j____p___argv
mov     eax, [eax]
push    eax             ; argv
call    j____p___argc
mov     ecx, [eax]
push    ecx             ; argc
call    _main_0 ;<---- 这个就是上个main_0 函数
add     esp, 0Ch
pop     ebp
retn
invoke_main endp

```



一共三个 call 第三个 call  就是mian _0 我在注释上写 了 

但是咱们不是往深处找 往 回找 找到最初的路线 __cdecl invoke_mai__ 就是咱们要找的 点击进去然后 继续使用交叉引用跳转到

![](/studyre/how_to_find main/how_find.png)

这里

invoke main 这里 就是刚才的入口 然后发现太麻烦了 可以选择变成普通模式

空格键可以变普通模式	like this ↓

![](/studyre/how_to_find main/howfind2.png)

#### FTP & _scrt_common_main_seh函数

```assembly
                               add     esp, 4
.text:00450EE6                 movzx   eax, al
.text:00450EE9                 test    eax, eax
.text:00450EEB                 jz      short loc_450EFB
.text:00450EED                 mov     ecx, [ebp+tls_dtor_callback]
.text:00450EF0                 mov     edx, [ecx]
.text:00450EF2                 push    edx             ; _Callback
.text:00450EF3                 call    j___register_thread_local_exe_atexit_callback
.text:00450EF8                 add     esp, 4
.text:00450EFB
.text:00450EFB loc_450EFB:                             ; CODE XREF: __scrt_common_main_seh+128↑j
.text:00450EFB                                         ; __scrt_common_main_seh+13B↑j
.text:00450EFB                 call    invoke_main  ; main函数
```



这里是个特殊的代码区 没有第二个 通过指令判断 这是什么 ? --> C++程序启动和线程局部存储（Thread Local Storage, TLS）

向上翻找到特殊的关键字看到main 的时候**__scrt_common_main**

```assembly
__scrt_common_main_seh proc near        ; CODE XREF: __scrt_common_main+8↑p   
.text:00450DB0
.text:00450DB0 var_40          = dword ptr -40h
.text:00450DB0 var_3C          = dword ptr -3Ch
.text:00450DB0 var_38          = dword ptr -38h
.text:00450DB0 return_code     = dword ptr -34h
.text:00450DB0 xcptnum         = dword ptr -30h
.text:00450DB0 main_result     = dword ptr -2Ch
.text:00450DB0 Target          = dword ptr -28h
.text:00450DB0 tls_dtor_callback= dword ptr -24h
.text:00450DB0 tls_init_callback= dword ptr -20h
.text:00450DB0 is_nested       = byte ptr -1Ah
.text:00450DB0 has_cctor       = byte ptr -19h
.text:00450DB0 ms_exc          = CPPEH_RECORD ptr -18h
.text:00450DB0
.text:00450DB0 ; __unwind { // __except_handler4
.text:00450DB0   
```

  继续交叉引用   跳转到这里 这个函数 

#### scrt_common_main()

```assembly
scrt_common_main proc near            ; CODE XREF: _mainCRTStartup+3↓p
.text:00450D90                 push    ebp
.text:00450D91                 mov     ebp, esp
.text:00450D93                 call    j____security_init_cookie
.text:00450D98                 call    __scrt_common_main_seh  ;<--- 刚才那个函数上面那个的call 入口 
.text:00450D9D                 pop     ebp
.text:00450D9E                 retn
.text:00450D9E __scrt_common_main endp
```

这个第二个call 就是 根据 scrt_common_main 反向推 继续交叉引用 

你会寻找到唯一的call **__scrt_common_main**  这就是刚才的入口继续找\

#### mainCRTStartup()

```assembly
mainCRTStartup proc near               ; CODE XREF: start_1↑j
.text:004510B0                 push    ebp
.text:004510B1                 mov     ebp, esp
.text:004510B3                 call    __scrt_common_main
.text:004510B8                 pop     ebp
.text:004510B9                 retn
.text:004510B9 _mainCRTStartup endp
```

这个是真正的入口点 vs 编译的入口点真正的入口点 

**mainCRTStartup**然后继续往上推进 交叉引用

 就会找到第一层	

#### int __cdecl start_1()

```assembly
.text:0044A730
.text:0044A730 ; int __cdecl start_1()
.text:0044A730                 public start_1
.text:0044A730 start_1         proc near
.text:0044A730                 jmp     _mainCRTStartup
.text:0044A730 start_1         endp
.text:0044A730
```

哎 你再交叉引用 你就没了

这就是第一层了 没了

### 动态调试查看 代码 (没有注释版本)

为啥要这么弄呢

![](/studyre/how_to_find main/howfindnopdb.png)

.pdb 是符号 文件 

咱们能看见这些函数名字都是因为他 所以咱们 把他删掉的时候 函数都会变成一串的数字

删除ilk 和pdb 然后

使用动态调试调试 一下 之前咱们调试过发现 搜索main 即可进入

但是咱们现在 把pdb删除了 

现在进入ntdll.dll 了没有进入该程序 使用f9 进入断点 进入程序入口

那么入口就是咱们的__cdecl start_1 里面的jmp _mainCRTStartup

--------------

![](/studyre/how_to_find main/rukoudian.png)

如图所示

- F9 运行 

- F8 单步步过

* F7单步步进
* F2 是断点

然后使用F8 进入JMP 函数 

![](/studyre/how_to_find main/6rukoudian.png)

 这个 呢就是 **mainCRTStartup**

进入这个projecx 里面 f8 到call 这里f7 这里就是 __scrt_common_main() __的里面了

可以返回看为什么是2个call 对上了 第二个call 就是 下一个入口  第二个是下一个main 的入口点

![](/studyre/how_to_find main/dongtairukou.png)

然后进入下一个点寻找符合TLS 的函数来寻找下一个入口点的  _scrt_common_main_seh 区域  (自己回去找)

![](/studyre/how_to_find main/TLSC++.png)

也就是说第二个call 就是main函数入口点 下个断点试试看

然后进入第二个call 发现了这个

* 其实是__cdecl invoke_main()函数

![](/studyre/how_to_find main/call4.png)

第四个call 就是 正确的call入口

进入后发现了大家很熟悉的东西

![](/studyre/how_to_find main/main.png)

hello world 这就是入口点

也就是说可以写个类似的东西 就仿照一下就可以猜出来
