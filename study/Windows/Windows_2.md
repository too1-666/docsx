# Def 的书写 DLL MAIN 的用法 和Dll 的劫持 

## 什么是DEF?

> DEF就是个类似于声明的东西

但是他和传统不同 

> EXPORTS 开头

这时候就会说 这是什么东西啊 你可以把他想成{ }就行 

在里面声明函数 什么的 比如说我知道上章 dll 里面 有个什么And对吧 先简单认识一下  我不想重新声明了 我写错了 我想改成Add!!!

```c++
{
 Add = And   
}
```

你可以这么理解这个东西 正确用法为

```c++
LIBRARY // 创建自带的
	EXPORTS
    	Add = And
```

然后第二个方法为 设置为 NONAME 什么是NONAME 上一张工具 里面不是能查看dll 文件名字吗 对吧  这个作用就是隐藏自己的 名字 

```c++
LIBRARY // 创建自带的
	EXPORTS
    	Add = And
    	Sub NONAME //匿名
```

第三个方法为序号的定义 我们使用GeProcAddress()是不是输入中既定的dll里面函数名字  也可以使用 序号  (假如我这个是My.dll)

```c++
 LIBRARY // 创建自带的
	EXPORTS
    	Add = And @100 //设置序号为100
    	Sub NONAME
```

调用方法为

```c++
 //略
GeProcAddress(LoadLibrary(My.dll),MAKEINTRESOURCE(100))  // MAKEINTRESOURCE的原因是不识别100 只能自动转换
```

第四个方法 (补充全局变量 的用法)

在头文件进行声明 

```c++
 extern int aaa; //全局变量 就可以用了在找个地方进行声明此值 
```

但是呢 这个不一样了 我们输出的时候编译器可能认为这个是函数值  所以我们使用 DATA 进行声明

```c++
 LIBRARY // 创建自带的
	EXPORTS
    	Add = And @100 //设置序号为100
    	Sub NONAME
     	aaa DATA // 是个数据不是函数的声明
```

使用的时候直接在目标文件

```c++
__declspec (dllimport) extern int aaa;
//--- main 
cout << aaa;
```

---------

## Dllmain

什么是DllMain  ? 

> 分析程序的 **DllMain** 导出函数标识分析程序是否存在，并释放网络监视器用于分析程序的资源。 **DllMain** 必须在所有分析程序 DLL 中实现。

```c++
BOOL WINAPI DllMain(
 HINSTANCE hinstDLL,
   DWORD fdwReason,
       LPVOID Reserved
);
```

这是语法 具体怎么用呢  句柄 你可以认为他是前面的HMOUDEL这样就可以理解 第二个参数就是当我们显式 表达时候

| 值                     | 含义                 |
| ---------------------- | -------------------- |
| **DLL_PROCESS_ATTACH** | 进程开始 LoadLibrary |
| **DLL_PROCESS_DETACH** | 进程结束 FreeLibrary |

你可以这么认为 

他是个布尔值所以我们声明的时候 就要BOOL

```c++
BOOL WINAPI DllMain(HANDLE hInstance.,   DWORD fdwReason,,LPVOID Reserved
){
    switch ( fdwReason)
    {
        case DLL_PROCESS_ATTACH :
            //进程创建
            break;
        case DLL_PROCESS_DETACH :
            //进程结束
            break;
    }
return TRUE;
}
```

  DLL 与EXE 的联系  当我们 使用dll 时候其实相当于映射 到这个程序 LoadLibrary的时候  Free时候才会撤销

---------

## Dll劫持

听起来高大上 其实并没有高大上

就是想办法用你的 dll 来获取什么东西而已 这里用到一种简单的技术 叫做  转发技术 这样就能简单劫持了 , 举个例子

> a.dll  查看 发现 有 add , sub , good , nice 四个函数对吧
>
> 我现在要劫持他 并且要在这个程序上留下我的痕迹 

1.  创建dll 库空的  使用linker(def)同款用法进行操作  然后你把a.dll 改名为c.dll

```c++
//----b.cpp
#pragma comment (linker , "/EXPORTS : add = c.add")
#pragma comment (linker , "/EXPORTS : sub = c.sub")
#pragma comment (linker , "/EXPORTS : good= c.good")
#pragma comment (linker , "/EXPORTS : nice= c.nice")
```

然后把b.dll 名字 改成a.dll 这时候已经移花接木 了 已经不是a dll 了 其实 b.dll 调用了a.dll ,这时候 随便干什么

```c++
//----b.cpp
#pragma comment (linker , "/EXPORTS : add = c.add")
#pragma comment (linker , "/EXPORTS : sub = c.sub")
#pragma comment (linker , "/EXPORTS : good= c.good")
#pragma comment (linker , "/EXPORTS : nice= c.nice")
BOOL WINAPI DllMain(HANDLE hInstance.,   DWORD fdwReason,,LPVOID Reserved
){
    switch ( fdwReason)
    {
        case DLL_PROCESS_ATTACH :
            cout << "ViVo 50!";
            break;
        case DLL_PROCESS_DETACH :
            	cout << "Bye";
            break;
    }
return TRUE;
}
```

下面的函数原来的a.dll 并没有 但是我们通过劫持给他增加了 这些东西 所以 这就是 Dll 劫持的用法  当然了 他也可以拓展一下功能什么的

----

## MFCDll

### 规则类 Dll

谁都能用

###  

### 拓展类 Dll

只有MFC能用







