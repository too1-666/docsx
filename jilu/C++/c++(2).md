# c++的异常处理 (某版本 和 常用 二合一)

### 常用错误抛出

Pyhton的和C++的错误抛出 差不多

```py
try:
    pass 
except:            #pyhton的 错误抛出
```





这是c++   **<exception>**

```c++
try
{
    // 你要写的保护代码
}
catch
{
    
}
```

| 异常                   | 描述                                                         |
| :--------------------- | :----------------------------------------------------------- |
| **std::exception**     | 该异常是所有标准 C++ 异常的父类。                            |
| std::bad_alloc         | 该异常可以通过 **new** 抛出。                                |
| std::bad_cast          | 该异常可以通过 **dynamic_cast** 抛出。                       |
| std::bad_typeid        | 该异常可以通过 **typeid** 抛出。                             |
| std::bad_exception     | 这在处理 C++ 程序中无法预期的异常时非常有用。                |
| **std::logic_error**   | 理论上可以通过读取代码来检测到的异常。                       |
| std::domain_error      | 当使用了一个无效的数学域时，会抛出该异常。                   |
| std::invalid_argument  | 当使用了无效的参数时，会抛出该异常。                         |
| std::length_error      | 当创建了太长的 std::string 时，会抛出该异常。                |
| std::out_of_range      | 该异常可以通过方法抛出，例如 std::vector 和 std::bitset<>::operator[]()。 |
| **std::runtime_error** | 理论上不可以通过读取代码来检测到的异常。                     |
| std::overflow_error    | 当发生数学上溢时，会抛出该异常。                             |
| std::range_error       | 当尝试存储超出范围的值时，会抛出该异常。                     |
| std::underflow_error   | 当发生数学下溢时，会抛出该异常。                             |

这是错误常见的

### 另个版本的错误抛出



他使用 ostream 的 cerr 流错误抛出 

> if  ()
>
> {std::cerr<<"error"<<'\n';}

这种错误抛出手段 cerr 需要用户指定不把出错信息 送到其他文件 通常直接在 显示器输出



clog 错误输出

> cerr 差不多 不过是不经过缓冲区 clog 直接输出    类似于 getchar getch(无缓冲方面)区别类似 



### ostream其他的

put 输入 你可以尝试 使用put 进行输入 当你输入数字的时候可以自动转换成 acii码

也可以例如

> put(65+32) 约等 python eval()函数



#### get类

get输入 除了cin 还有 get  

> get 有三种形式 无参数 有参数 有三个参数  

1. 无参数用法 cin.get()  键盘读取一个字符 可以 while 循环复制 例如 c= cin.get()
2. 有一个参数的方法 cin.get(t)  读取一个字符送进t 也可以循环 
3. 三参数 是 cin.get(字符数组,字符数量n,终止字符)  或者字符数组换成字符指针也可以

getline() 和get 三参数用法一样 但是 是读取一行字符 



### istream其他的

#### eof 函数 

不用说了 终止符号 ctrl+d 可以实现

#### peek函数

作用观察下个字符指针不变 就是看看而已

x=cin.peek() 访问到结束符(EOF)显示 '-1 '

 简单的用法

```c++
x=cin.peek();
std::cout << x<<std::endl;
```

#### putback函数 

cin.putback()调用方法  

例如cin.putback(a)从输入流读取字符a 返回到输入流 插入当前指针的读取的位置 供后面读取



####  ignore 函数

cin.ignore(n , EOF字符/)

跳n个字符 EOF字符为/ 后不在跳过字符了

# END

简单的就是这些了 



