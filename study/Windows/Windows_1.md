# Windows 6.1.1 OBj的使用/静态/动态库

--------

都知道 OBJ 是生成EXE的一部分 oBJ 有妙用 比如说 在其他人

### 使用OBJ的方法:

 首先创建控制台然后做加减法 的两个.h 和.cpp 

```c
// sub.h
#pragma once
int Sub(int n3, int n4 );

// sub.cpp
#include "Sub.h"
#include <stdio.h>
int Sub(int n3, int n4) {

	printf("n1 %d And n2 %d", n3, n4);
	return n3 - n4;

}
```

```c
//And.h
#pragma once
int And(int n1, int n2);
 // And.cpp
 #include "And.h"
#include <stdio.h>
int And(int n1, int n2) {

	printf("n1 %d And n2 %d",n1,n2);
	return n1 + n2;

}
```

编译 把obj 保存 起来 然后 呢 咱们再创建给新的 只把 .h文件转移到新项目 再用这个头文件 函数写main 里面

```c++
int main()
{
    And(1, 2);
    Sub(5, 1);
    std::cout << "Hello World!\n";
}
```

编译一下 发现抱错 因为没有 main 函数 出现

>LNK2019	无法解析的外部符号 "int __cdecl Sub(int,int)" (?Sub@@YAHHH@Z)，函数 main 中引用了该符号	ConsoleApplication1	C:\Users\Lenovo\source\repos\ConsoleApplication1\ConsoleApplication1.obj	1		

因为没有实现功能什么的都没有

##### 方法1

所以我们要移植第一个的OBJ来进行 直接把两个OBJ文件拖进此项目 他会自动加进去 不要拖进文件夹他不识别

这是第一种手动拖进去方法

##### 方法2

再项目里面属性连接器直接添加 obj 名字 记得换行

#### 如何C++ 的obj在C的文件使用

使用extern "c	"即可

如果混用编译器无法识别

```c++
#ifdef __cplusplus
extern "C" {
#endif
     
    int And(int n1, int n2);
 #ifdef __cplusplus
}
#endif
    
```

按照C的编译的话报错 所以要加声明 让他不要修饰这个东西 ,当他 他可以直接在.c使用并且在c++中声明extern 可以直接让cpp确认这个没有修饰过 实现了兼容  跨版本不兼容 所以很难绷

---

### 静态库:

**作者作者转移OBJ的方式还是太难有没有什么更简单的 方法?**

 有的有的 如题, 静态库就是个不错的选择   这个和OBJ 的使用方法一样 的  可以把他拖到资源文件里  (lib)文件 这个其实也没有好说的

还有不通过 vss的连接器 和拖入大法 直接通过链接命令

```c++
#pragma comment (lib , "StaticLib2.lib")	
```

用法:

```c++

#include <iostream>
#include "And.h"
#include "Sub.h"


#pragma comment (lib, "StaticLib2.lib")  // 直接使用

int main()
{
    And(1, 2);
    Sub(8, 1);
    std::cout << "Hello World!\n";
}

```

什么是.lib  可以试试 把And.obj 和lib 做比较发现有很多相同的地方事实上就是包含了一部分不是完全一样

当然了这个是有缺点 的 比如说更新了  就要重新编译一下 这个文件 并且 exe越多其他的也需要这个lib 导致 很大很大 并且其他语言无法使用  

> 有没有一种 方法 他可以什么都兼容呢 并且不太麻烦的办法 ,有的有的 使用 动态库就可以实现

### 动态库 (动态链接库)dll  so

 的优点就是他们静态的缺点反义

简单看看dll 文件

[工具](https://github.com/lucasg/Dependencies/releases/download/v1.10/Dependencies_x86_Release.zip)为链接下载打开GUI即可

#### 打开工具

 点击user32.dll 以这个例子 打开就看到一堆函数 其他 的不用看以后就懂了 函数在里面都有, 你会发现 全都是熟悉的API 什么CreateWindowExA 和W 

> 如何进行编写Dll 库 掏出Vss 写喽

使用Windows桌面向导进行创建Dll 动态链接库,把之前lib 的文件 拿来用就行了但是用 刚才工具发现都是空的那是因为默认的就是不显示需要使用标识符**__declspec(dllexport)**

然后和之前一样使用 lib 但是发现 这个lib 就几kb 占用很小 问题来了 dll 这个有什么意义呢 ?

---

当我们删除Dll的时候 打开exe发现了 找不到dll 文件 , 如果我们用静态库的时候 是不是直接就编译不了了? 当我们撤销Dll的删除的时候程序又能跑了 这就是dll 的作用 

我们可以做一个宏开关来控制导入导出Dll (隐式加载)

```c++
#ifdef DLL_EXPORT
#define DLLAPI __declspec(dllexport)
#else
#define DLLAPI __declspec(dllimport)
#endif
```

也可以选择性使用C 和C++  和之前方法一样使用

```c++
#pragma once
#include "UserDef.h"
#ifdef __cplusplus
extern "C" {
#endif

	DLLAPI
		int Sub(int n3, int n4);
#ifdef __cplusplus
}
#endif
```

即可 头文件使用就行

---

补充一点 当你使用类 

```c++
#pragma once
#pragma once
#include "UserDef.h"


class DLLAPI CText
{
public:
	CText();
	void print();


};
;
```

在Dll 查看是能看到的 果然多出两个类

这个是靠

```c++
#ifdef DLL_EXPORT
#define DLLAPI __declspec(dllexport)
#else
#define DLLAPI __declspec(dllimport)
#endif
```

的隐式 插件什么的就是显式

--------

#### 显式参数实现

```c++
# include <windows.h>
```

使用此头文件使用

> LoadLibrary()  和 GetProcAcess()

下面是官网参考文档 

> ```
> [in] lpLibFileName
> ```
>
> 模块的名称。 这可以是库模块（.dll 文件）或可执行模块（.exe 文件）。 如果指定的模块是可执行模块，则不会加载静态导入;而是使用 `DONT_RESOLVE_DLL_REFERENCES` 标志 [LoadLibraryEx](https://learn.microsoft.com/zh-cn/windows/desktop/api/libloaderapi/nf-libloaderapi-loadlibraryexw) 加载模块。
>
> 指定的名称是模块的文件名，与库模块本身中存储的名称无关，由模块定义 （.def） 文件中的 **LIBRARY** 关键字指定。
>
> 如果字符串指定完整路径，则函数仅搜索模块的该路径。
>
> 如果字符串指定相对路径或没有路径的模块名称，则函数使用标准搜索策略查找模块;有关详细信息，请参阅“备注”。
>
> 如果函数找不到模块，该函数将失败。 指定路径时，请务必使用反斜杠（\），而不是正斜杠（/）。 有关路径的详细信息，请参阅 [命名文件或目录](https://learn.microsoft.com/zh-cn/windows/desktop/FileIO/naming-a-file)。
>
> 如果字符串指定了没有路径的模块名称，并且省略文件扩展名，该函数会将默认库扩展名“.DLL”追加到模块名称。 若要防止函数将“.DLL”追加到模块名称，请在模块名称字符串中包含尾随点字符（.）。

---

 **怎么使用**

```c++
# include <iostream>
#include <windows.h>
using PFN = int (*) (int,int)
int main {
    HMOUDLE Mod = LoadLibrary ("Usedll.h")
       if(Mod == NILL){
           cout << "NILL";
           return 0;
       }
PFN = pfnadd - (PFN)GetProcAcess(Mod,"Add")
if (pfnadd == NULL){
   cout << "NILL";
           return 0;
}
FreeLibaray (Mod); // 释放
}
```

如何去调试 就可以在写DLL 项目属性添加附加调试 命令附加目标EXE即可

-----

# END 下一个讲DLL劫持
