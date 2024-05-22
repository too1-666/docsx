---
typora-root-url: public
---

#                             CLASS 二周目

1. 首先前面说了三个类 接下来该讲解 怎么使用了 

> 在class 类里面 有类成员函数  类的成员函数是指那些把定义和原型写在类定义内部的函数
>
> 构造函数  (初始化列表)
>
> 友元函数
>
> 内联函数
>
> this指针
>
> 静态函数
>
> 析构函数

先讲点简单的 ，把比较简单函数讲了

## 1.构造函数

__示例构造函数__类的**构造函数**是类的一种特殊的成员函数，它会在每次创建类的新对象时执行。

构造函数的名称与类的名称是完全相同的，并且不会返回任何类型，也不会返回 void。构造函数可用于为某些成员变量设置初始值。(不用提前void什么的)

```c++
#include <iostream>
 
using namespace std;
 
class Line
{
   public:
      void setLength( double len );
      double getLength( void );
      Line();  // 这是构造函数
 
   private:
      double length;
};
 
// 成员函数定义，包括构造函数
Line::Line(void)
{
    cout << "Object is being created" << endl;
}
 
void Line::setLength( double len )
{
    length = len;
}
 
double Line::getLength( void )
{
    return length;
}
// 程序的主函数
int main( )
{
   Line line;
 
   // 设置长度
   line.setLength(6.0); 
   cout << "Length of line : " << line.getLength() <<endl;
 
   return 0; // 来自noobrun

//这是构造函数
 #include <iostream>
 
using namespace std;
 
class Line
{
   public:
      void setLength( double len );
      double getLength( void );
      Line(double len);  // 这是构造函数
 
   private:
      double length;
};
 
// 成员函数定义，包括构造函数
Line::Line( double len)
{
    cout << "Object is being created, length = " << len << endl;
    length = len;
}
 
void Line::setLength( double len )
{
    length = len;
}
 
double Line::getLength( void )
{
    return length;
}
// 程序的主函数
int main( )
{
   Line line(10.0);
 
   // 获取默认设置的长度
   cout << "Length of line : " << line.getLength() <<endl;
   // 再次设置长度
   line.setLength(6.0); 
   cout << "Length of line : " << line.getLength() <<endl;
 
   return 0;
}
    //这也是
   
```

 #### 初始化函数初始化

```c++
//简单写一下
class line
{
    privat:
    	int len
    public；
        line (int a):len(a){} //这是构造函数的初始化构造函数体然后初始化正常用就行
}

//传统的初始化
Line::Line( double len): length(len)
{
    cout << "Object is being created, length = " << len << endl;
}
//等于
Line::Line( double len)
{
    length = len;
    cout << "Object is being created, length = " << len << endl;
}
    //只是多了给：而已用哪个都行 : 就是a=b变成了a(b)而已
```

### 2.友元函数

友元函数上章节说了概念了这章详细讲解
```c++
//友元函数就是:类的友元函数是定义在类外部，但有权访问类的所有私有（private）成员和保护（protected）成员。尽管友元函数的原型有在类的定义中出现过，但是友元函数并不是成员函数。 不是成员函数哦 友元也可是类 他破坏了封装

 //如果要声明一个友元函数
 class line
 {
  private :
     	int long;
  public: friend void NeedLong(line len)
 };
 void printWidth(line  len)
 {len = long;}
//示例通过友元函数 直接访问私有破坏了函数封装的完整
//还有一个是友元类 声明方法如下
friend class line2;


//这就是友元
/*因为友元函数没有this指针，则参数要有三种情况： 

要访问非static成员时，需要对象做参数；

要访问static成员或全局变量时，则不需要对象做参数；

如果做参数的对象是全局对象，则不需要对象做参数.

可以直接调用友元函数，不需要通过对象或指针 大佬的总结我就不做任何修改了
*/
//我举个例子来访问静态类型 
class MyClass {  
    static int staticVar;  
public:  
    friend void accessStaticVar();  
};  
  
int MyClass::staticVar = 42; // 静态成员需要在类外部定义和初始化  
  
void accessStaticVar() {  
    // 作为友元函数，可以直接访问MyClass的静态成员  
    std::cout << "Static variable: " << MyClass::staticVar << std::endl;  
}  
  
int main() {  
    accessStaticVar(); // 直接调用友元函数，无需传递对象  
    return 0;  
}
    
```

### 3.内联函数



```c++
/*C++ 内联函数是通常与类一起使用。如果一个函数是内联的，那么在编译时，编译器会把该函数的代码副本放置在每个调用该函数的地方。

对内联函数进行任何修改，都需要重新编译函数的所有客户端，因为编译器需要重新更换一次所有的代码，否则将会继续使用旧的函数。

如果想把一个函数定义为内联函数，则需要在函数名前面放置关键字 inline，在调用函数之前需要对函数进行定义。如果已定义的函数多于一行，编译器会忽略 inline 限定符。

在类定义中的定义的函数都是内联函数，即使没有使用 inline 说明符。

下面是一个实例，使用内联函数来返回两个数中的最大值 */
没有用 用了内联函数反而会增加负担
```

### 4.this 指针的含义

__提示这个东西只能是类的成员函数调用__

```c++
#include <iostream>
 
class MyClass {
private:
    int value;
 
public:
    void setValue(int value) {
        this->value = value;
    }
 
    void printValue() {
        std::cout << "Value: " << this->value << std::endl;
    }
};
 
int main() {
    MyClass obj;
    obj.setValue(42);
    obj.printValue();
 
    return 0;
}
//和正常的没没区别 但是友元函数不行因为他不是成员 只能实例
//指向类的指针
#include <iostream>

class MyClass {
public:
    int data;

    void display() {
        std::cout << "Data: " << data << std::endl;
    }
};

int main() {
    // 动态分配内存创建类对象
    MyClass *ptr = new MyClass;
    ptr->data = 42;

    // 通过指针调用成员函数
    ptr->display();

    // 释放动态分配的内存
    delete ptr;

    return 0;
}
//来自noobrun
```

### 5.静态函数

![cpp-static](/cpp-static.png)

图片来自菜鸟编程

> 首先静态成员在类的所有对象中是共享的。如果不存在其他的初始化语句，在创建第一个对象时，所有的静态数据都会被初始化为零，但是可以在类的外部通过使用范围解析运算符 **::** 来重新声明静态变量从而对它进行初始化

```c++
#include <iostream>
 
using namespace std;
 
class Box
{
   public:
      static int objectCount;
      // 构造函数定义
      Box(double l=2.0, double b=2.0, double h=2.0)
      {
         cout <<"Constructor called." << endl;
         length = l;
         breadth = b;
         height = h;
         // 每次创建对象时增加 1
         objectCount++;
      }
      double Volume()
      {
         return length * breadth * height;
      }
   private:
      double length;     // 长度
      double breadth;    // 宽度
      double height;     // 高度
};
 
// 初始化类 Box 的静态成员
int Box::objectCount = 0;       // 他在增长并没有用到其他的
 
int main(void)
{
   Box Box1(3.3, 1.2, 1.5);    // 声明 box1
   Box Box2(8.5, 6.0, 2.0);    // 声明 box2
 
   // 输出对象的总数
   cout << "Total objects: " << Box::objectCount << endl;
 
   return 0;
}
```





### CONST成员的引用表格

| 数据成员              | 非const的普通成员函数 | const成员函数      |
| --------------------- | --------------------- | ------------------ |
| 非const的普通数据成员 | 可以引用可以改变      | 可以引用不可以改变 |
| const数据成员         | 可以用不可以变        | 可以用不可以变     |
| const对象             | 不可以用              | 可以用不可以变     |

#### const对象指针

const 型 指针 可以让对象为初值不能改变 只想不变

> ​	Time *const ptr1 // Time是类



### 拷贝构造函数

**拷贝构造函数**是一种特殊的构造函数，它在创建对象时，是使用同一类中之前创建的对象来初始化新创建的对象。拷贝构造函数通常用于：

- 通过使用另一个同类型的对象来初始化新创建的对象。
- 复制对象把它作为参数传递给函数。
- 复制对象，并从函数返回这个对象。

如果在类中没有定义拷贝构造函数，编译器会自行定义一个。如果类带有指针变量，并有动态内存分配，则它必须有一个拷贝构造函数。拷贝构造函数的最常见形式如下：

```c++
classname (const classname &obj) {
   // 构造函数的主体
} //选自runnoob
```







