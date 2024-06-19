#  C++之面向文件
> 我们学了这么多只能在表面肤浅 的学习如何码 但是从现在开始不一样了 我们要面向文件了



| 数据类型 | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| ofstream | 该数据类型表示输出文件流，用于创建文件并向文件写入信息。     |
| ifstream | 该数据类型表示输入文件流，用于从文件读取信息                 |
| fstream  | 该数据类型通常表示文件流，且同时具有 ofstream 和 ifstream 两种功能，这意味着它可以创建文件，向文件写入信息，从文件读取信息。 |
| iostream | 定义了cin cout , 读取文件和写入文件 则是通过 fstream 这个标准库 这一章我们讲解如何使用fstream |





### 打开文件 

* 我们要想写入 文件 和读取文件的时候必须得 把文件打开 这是候 就可以用 前面我说过的 ofstream 和fstream 两个对象, 读取则用ifstream对象

```c++
void open(const char *文件和位置, ios::打开的模式);  // open 函数在这三个库里面都能用  前面一定要加上命名空间 ios::
```
这里写一下ios 的模式
|模式      |               作用                                          |
|----------|-------------------------------------------------------------|
|ios::app  |追加模式 把写入的所有东西都扔到文件末尾                      |
|ios::ate  |定位, 打开自动定位到文件末尾                                 |
|ios::in   |打开文件用于读取文件                                         |
|ios::out  |打开文件用于写入                                             |
|ios::trunc|如果 文件存在了  把文件长度设为0 (清空存在文件内容 重新赋值) |

-----------------------------------------------------------------------------------

* 可以二合一的 并不是只能用 一个指令 '|'符号 可以把两个结合在一起 我在下面会有示例 来使用这个符号
```c++ 
//例子
ofstream outflie ; 定义输出
outflie.open("text.dat",ios::out | ios::trunc);  // 同时使用了两个 我写入 还想截断文件
```
> 可以进行读写操作
```c++
ifstream iflie ; 定义iflie 是我随便设的
iflie.open ("c:\user\admin\text.dat",ios::out|ios::in) // 也可以用绝对路径  读写
```
> 有开就有关 __void close()__

#### 写入文件 

* 之前我们就知道cout<< 这个操作了 但是 对于文件 << (我们使用流插入运算符时候)不用cout 而是用ofstream和fstream  (写入就像是 把内容写入到屏幕一样 cout那种)
ifstream  afile;
afile.open("file.dat", ios::out | ios::in );
-----------------------------------------------------------------------------------------------------------------

#### 读取文件
* 一样的 cin>>  (>>符号) 使用流读取运算符 从键盘读取信息, 但是我们不能用 现在用 ifstream 和fstream 对象而不是 cin 


#### 实例展示
```c++
#include <fstream>
#include <iostream>
int main()

{
  char data [100];
  outflie outflie;
  outflie.open("text.dat");
std::cout << "write in" <<'\n';
std::cout << "enter ur name";
std::cin.getline(data,100); //   getline拓展
outflie << data << '\n' //写入again
std::cout << "enter age";
std::cin >> data ;
std::cin.ingore();//忽略之前的字符
outflie << data << '\n'; //写入again
outflie.close(); //关闭打开文件
//--------------------------------------------写入
//读取文件
ifstream.inflie(); //读取模式
inflie.open("text.dat");
std::cout << "DuQu flie" << '\n';
inflie >> data;
cout << data << '\n';
inflie.close();
return 0 ;
}
```
> 这个是简单的使用了 输入输出流文件的教程


#### 文件指针 
> istream ostream 提供了定位文件位置的指针的成员函数  istream 的seekg 和ostream 的seekp  ios::beg(是从流开头定位的)也可以ios::cur(流当前定位) 也可以ios::end(流末尾)

```c++
file.seekg (n);//指针定位到 从头的开始的第n个字节
file.seekg(n,ios::cur);//指针定位到 当前位置后移n字节
file.seekg(n,ios::end);//当前位置后移 n个字节
file.seekg(0,ios::end);//定位到末尾
```
## END
> 我后期会备注 一些常用的 ios::
