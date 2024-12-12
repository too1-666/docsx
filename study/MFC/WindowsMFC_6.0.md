	#  I/O(序列化)

----

我要内存里的东西保存到文件保存文件,我要把文件里的东西读到内存 

不得不品的两个操作

---

### 重新 品鉴stdio.h库

首先定义点东西

```c++
class Student {
public:
    Student() : m_nAge(0) {}
    Student(const string& Name, int Age) : m_szName(Name), m_nAge(Age) {}

private:
    string m_szName;
    int m_nAge;
};
```

一个学生表然后创建int main()

```c++
int main() {
    Student S1("shuaibi", 18);
    Student S2("dashuaibi", 19);
    Student S3("CSHshuaibi", 20);

    auto file = fopen(" Student.stu", "wb+");  // 自动  w
        if (file == 0) {
            return 0; // 错误处理
        }
  
        fwrite(&S1, sizeof(Student), 1, file);  //写入
        fwrite(&S1, sizeof(Student), 1, file);  //写入
        fwrite(&S1, sizeof(Student), 1, file);  //写入

        
        fclose(file);  // 关闭
    return 0;
}
```

就可以实现 存入打开关闭

- r 以只读方式打开文件，该文件必须存在。

- r+ 以可读写方式打开文件，该文件必须存在。

- rb+ 读写打开一个二进制文件，允许读数据。

- rw+ 读写打开一个文本文件，允许读和写。

- w 打开只写文件，若文件存在则文件长度清为0，即该文件内容会消失。若文件不存在则建立该文件。

- w+ 打开可读写文件，若文件存在则文件长度清为零，即该文件内容会消失。若文件不存在则建立该文件。

- a 以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾，即文件原先的内容会被保留。（EOF符保留）

- a+ 以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。 （原来的EOF符不保留）

- wb 只写打开或新建一个二进制文件；只允许写数据。

- wb+ 读写打开或建立一个二进制文件，允许读和写。

- ab+ 读写打开一个二进制文件，允许读或在文件末追加数据。

- at+ 打开一个叫string的文件，a表示append,就是说写入处理的时候是接着原来文件已有内容写入，不是从头写入覆盖掉，t表示打开文件的类型是文本文件，+号表示对文件既可以读也可以写。

- 上述的形态字符串都可以再加一个b字符，如rb、w+b或ab+等组合，加入b 字符用来告诉函数库以二进制模式打开文件。如果不加b，表示默认加了t，即rt,wt,其中t表示以文本模式打开文件。由fopen()所建立的新文件会具有S_IRUSR|S_IWUSR|S_IRGRP|S_IWGRP|S_IROTH|S_IWOTH(0666)权限，此文件权限也会参考umask 值。

  有些C编译系统可能不完全提供所有这些功能，有的C版本不用"r+","w+","a+",而用"rw","wr","ar"等，读者注意所用系统的规定。

  ------

  ### 输出流

  由于感觉我的代码不简洁所以我选择 优化一下 Un为反序列化

  ```c++
  // Iostream 控制台品鉴.cpp : 此文件包含 "main" 函数。程序执行将在此处开始并结束。
  //
  #define _CRT_SECURE_NO_WARNINGS
  #include <iostream>
  #include <string>
  
  #include <cstring> // 为了使用strlen和strcpy
  #include <cstdio>
  
  
  using namespace std;
  
  class Student {
  public:
      Student() : m_nAge(0) {}
      Student(string Name, int Age) : m_szName(Name), m_nAge(Age) {}
      void Serialize(FILE* file);
      void UnSerialize(FILE* file);
      int nCount;
  private:
      string m_szName;
      int m_nAge;
  };
  
  void Student::UnSerialize(FILE* file)
  {
      int nlen = 0;
     
      fread(&nlen, sizeof(int), 1, file);
      string* sString = new string[nlen + 1]{};//+{}不用memset
      fread(&m_szName, sizeof(nlen + 1), 1, file);
      fread((&m_nAge), sizeof(int), 1, file);
      fclose(file);
  
  }
  void Student::Serialize(FILE* file) {
      int nLen = sizeof(m_szName);
      fwrite(&nLen, sizeof(int), 1, file);  //写入
      fwrite(&m_szName, sizeof(m_szName), 1, file);  //写入
      fwrite(&m_nAge, sizeof(int), 1, file);  //写入
     
  }
  int Writing() {
      Student S1("shuabi", 18);
      Student S2("bshuabi", 19);
      Student S3("dshuaibi", 20);
      auto file = fopen(" Student.stu", "wb+");  // 自动
      if (file == 0) {
          return 0; // 错误处理
      }
      int n = 3;
  fwrite(&n, sizeof(int), 1, file);
  S1.Serialize(file) ;
  S2.Serialize(file)  ;
  S3.Serialize(file);
  
  fclose(file);
  }
  int main() {
    Writing();  // 序列化 读写
      auto file = fopen(" Student.stu", "rb+");  // 自动
      if (file == 0) {
          return 0; // 错误处理
      }
      int nCount = 0; 
      fread(&nCount, sizeof(int), 1, file);
      Student* pArry = new Student[nCount];
      for (int i = 0; i < nCount; ++i) {
          pArry[i].UnSerialize(file);
      }
      fclose(file);
      // 反序列化 读取
      return 0;
  }
  
  
                 
  
  ```

  我写在这里大家品鉴  通过读取n 计数 来for 循环 因为n在第一位

-----

	### 多类存储

 现实中并不会出现这种 出现一整个的出现 我们可以选择继承这个招数 

父类为Student 

```c++
class Human : public Student
{
    public:
        Human(){}
        Human(string Name, int Age,int nId):Student(Name,Age), m_nId(nId) {}
        void UnSerializes(FILE* file);
        void Serializes(FILE* file);
    private:
        int m_nId;
};
};
void Human::Serializes(FILE* file) {
    Serialize(file);  // father
    fread(&m_nId, sizeof(int), 1, file);
}

void Human::UnSerializes(FILE* file) {
    UnSerialize(file); // father
    fread(&m_nId, sizeof(int), 1, file);
}

```

这样继承了父类就可以 操作了

但是读取时候并不知道出现什么那我问你那我问你 你打开WinHex 你能看见 你用他读取的时候就分不出来了 我们使用枚举的这个招数 来快速识别文件 

```c++
enum EnumHumStu{  // 枚举对象
    CT_HUMAN,
    CT_STUDENT
};
int Writing() {
  
    Student S1("shuabi", 18);
    Student S2("bshuabi", 19);
    Student S3("dshuaibi", 20);
    
    Human human1("cxk",27,1001);
    Human human2("LiTianSuo", 114, 1002);
    Human human3("Bochi", 20, 1003);
    auto file = fopen(" Student.stu", "wb+");  // 自动
    if (file == 0) {
        return 0; // 错误处理
        }
    int n = 6;
    fwrite(&n, sizeof(int), 1, file);
    
    EnumHumStu ClassType = CT_STUDENT;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    S1.Serialize(file) ;
    
    ClassType = CT_HUMAN;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    human1.Serializes(file);

    
    ClassType = CT_STUDENT;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    S2.Serialize(file)  ;
    
    ClassType = CT_HUMAN;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    human2.Serializes(file);


    ClassType = CT_STUDENT;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    S3.Serialize(file);
    
    ClassType = CT_HUMAN;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    human3.Serializes(file);
    
    fclose(file);
}

```

我把标识写进去不就得了

----

### 使用MFC的 CArchive 进行序列化存储

持久性是CArchive特点 但是我们咋么用呢 微软序列化文档标识了这一点

- [从 CObject 派生类](https://learn.microsoft.com/zh-cn/cpp/mfc/serialization-making-a-serializable-class?view=msvc-170#_core_deriving_your_class_from_cobject)（或者从派生自 `CObject` 的某个类进行派生）。
- [替代 Serialize 成员函数](https://learn.microsoft.com/zh-cn/cpp/mfc/serialization-making-a-serializable-class?view=msvc-170#_core_overriding_the_serialize_member_function)。
- 在类声明中的[使用 DECLARE_SERIAL 宏](https://learn.microsoft.com/zh-cn/cpp/mfc/serialization-making-a-serializable-class?view=msvc-170#_core_using_the_declare_serial_macro)。
- [定义没有参数的构造函数](https://learn.microsoft.com/zh-cn/cpp/mfc/serialization-making-a-serializable-class?view=msvc-170#_core_defining_a_constructor_with_no_arguments)。
- 为你的类[在实现文件中使用 IMPLEMENT_SERIAL 宏](https://learn.microsoft.com/zh-cn/cpp/mfc/serialization-making-a-serializable-class?view=msvc-170#_core_using_the_implement_serial_macro_in_the_implementation_file)。

我们只需要改造一下我们之前的 文档就行

首先继承CObject类, 然后重写 Serialize函数,调用DECLARE_SERIAL宏,构造,最后使用这个宏

我示范使用这个CArchive

但是我得把 我这个改造的源码发出来

```c++
// Iostream 控制台品鉴.cpp : 此文件包含 "main" 函数。程序执行将在此处开始并结束。
//
#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <string>
#include <cstring> // 为了使用strlen和strcpy
#include <cstdio>
using namespace std;



class Student {
    public:
        Student() {}
        Student(string Name, int Age) : m_sName(Name), m_nAge(Age) {}
        void Serialize(FILE* file);  // 此类是 进行序列化也就是写入文件信息的
        void UnSerialize(FILE* file);// 这个是读取 
        int nCount;
  
    private:
        string m_sName;
        int m_nAge;
};

class Human : public Student
{
    public:
        Human(){}
        Human(string Name, int Age,int nId):Student(Name,Age), m_nId(nId) {}
        void UnSerializes(FILE* file);
        void Serializes(FILE* file);
    private:
        int m_nId;
};
void Human::Serializes(FILE* file) {
    Serialize(file);  // father
    fread(&m_nId, sizeof(int), 1, file);
}

void Human::UnSerializes(FILE* file) {
    UnSerialize(file); // father
    fread(&m_nId, sizeof(int), 1, file);
}
enum EnumHumStu
{
    CT_HUMAN,
    CT_STUDENT
};
void Student::UnSerialize(FILE* file){
    int nlen = 0;
    fread(&nlen, sizeof(int), 1, file);
    string* sString = new string[nlen + 1]{};//+{}不用memset
    fread(&m_sName, sizeof(nlen + 1), 1, file);
    fread((&m_nAge), sizeof(int), 1, file);

}
void Student::Serialize(FILE* file) {
    int nLen = sizeof(m_sName);
    fwrite(&nLen, sizeof(int), 1, file);  //写入
    fwrite(&m_sName, sizeof(m_sName), 1, file);  //写入
    fwrite(&m_nAge, sizeof(int), 1, file);  //写入 
}
int Writing() {
  
    Student S1("shuabi", 18);
    Student S2("bshuabi", 19);
    Student S3("dshuaibi", 20);
    
    Human human1("cxk",27,1001);
    Human human2("LiTianSuo", 114, 1002);
    Human human3("Bochi", 20, 1003);
    auto file = fopen(" Student.stu", "wb+");  // 自动
    if (file == 0) {
        return 0; // 错误处理
        }
    int n = 6;
    fwrite(&n, sizeof(int), 1, file);
    
    EnumHumStu ClassType = CT_STUDENT;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    S1.Serialize(file) ;
    
    ClassType = CT_HUMAN;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    human1.Serializes(file);

    
    ClassType = CT_STUDENT;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    S2.Serialize(file)  ;
    
    ClassType = CT_HUMAN;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    human2.Serializes(file);


    ClassType = CT_STUDENT;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    S3.Serialize(file);
    
    ClassType = CT_HUMAN;
    fwrite(&ClassType, sizeof(ClassType), 1, file);
    human3.Serializes(file);
    
    fclose(file);
}
int main(){
  Writing();  // 序列化 读写
    auto file = fopen(" Student.stu", "rb+");  // 自动
    if (file == 0){
        return 0; // 错误处理
    }
    
    int nCount = 0; 
    fread(&nCount, sizeof(int), 1, file);
    Student* pArry = new Student[nCount];
     for (int i = 0; i < nCount; ++i) {
        pArry[i].UnSerialize(file);
    }
    fclose(file);
    // 反序列化 读取
    return 0;
}



```



---

继承CObject类

### MFC序列化反序列化实现步骤

> 首先需要 调用MFC类的窗口程序 然后呢 就需要改造一下 咱们的Class 根据 文档要求
>
> ​           **class Student : public CObject** 的public CObject是必要的

- 其次要声明 一下 序列化函数 
- 然后公类声明宏
- 构造空类

我演示一下 (部分)

```c++
class Student : public CObject 
{
public:
    DECLARE_SERIAL(Student)
public:
   
     Student() {}  // 要求
     Student(CString Name, int Age) : m_sName(Name), m_nAge(Age) {}
     void Serialize(FILE* file);  // 此类是 进行序列化也就是写入文件信息的
     void UnSerialize(FILE* file);// 这个是读取 
     int nCount;
     void Serialize(CArchive& archive) {
        CObject::Serialize(archive);//调父类
        if (archive.IsStoring()) {  // 正在存储 序列化存储
            archive << m_sName << m_nAge;
        }
        else{
            archive >> m_sName >> m_nAge;
        }
     }

private:
    CString m_sName;
    int m_nAge;
};

class Human : public Student {  
public:
    DECLARE_SERIAL(Human)
public:
    Human() {}
    Human(CString Name, int Age, int nId) :Student(Name, Age), m_nId(nId) {}
    void UnSerializes(FILE* file);
    void Serialize(CArchive& archive) {
        CObject::Serialize(archive);//调父类
        if (archive.IsStoring()) {  // 正在存储 序列化存储
            archive << m_nId;
         }

        else{
            archive >> m_nId;
        }
        
    }
private:
    int m_nId;
};
```

**最后一步 实现函数里声明宏**

IMPLEMENT_SERIAL 宏用于定义从 `CObject` 派生可序列化类时所需的各种功能。 您为您的类在实现文件 (.cpp) 中使用此宏。 此宏的前两个参数是类的名称和其直接基类的名称。

该宏的第三个参数是一个架构数字。 架构数字本质上是类的对象的版本号。 请对架构数字使用大于或等于 0 的整数值。 （不要将此架构数字与数据库术语混淆。）

MFC 序列化代码在将对象读入内存时检查架构数字。 如果磁盘上的对象的架构数字与内存中的架构数字不匹配，库将引发 `CArchiveException`，这会阻止您的程序读取不正确的版本的对象。

如果希望 `Serialize` 成员函数能够读取多个版本（即，用不同版本的应用程序编写的文件），可使用值 **VERSIONABLE_SCHEMA** 作为 **IMPLEMENT_SERIAL** 宏的自变量。 有关用法信息和示例，请参阅类 `GetObjectSchema` 的 `CArchive` 成员函数。

以下示例演示如何为派生自 `CObject` 的类 `CPerson` 使用 IMPLEMENT_SERIAL：



```cpp
IMPLEMENT_SERIAL(Student, CObject, 1)
```

这是直接实现 因为这个是 在实现的文件里声明就行 

我的程序是实现声明是一个文件里的 所以 我直接在类外声明

```c++
IMPLEMENT_SERIAL(Student, CObject, 1)//实现声明 这里声明和实现是一个文件 数字版本号
IMPLEMENT_SERIAL(Human, Student, 1)
```



获得可序列化的类后，可序列化该类的对象，如[序列化：序列化对象](https://learn.microsoft.com/zh-cn/cpp/mfc/serialization-serializing-an-object?view=msvc-170)一文所述。

### 不同版本声明

如果希望 `Serialize` 成员函数能够读取多个版本（即，用不同版本的应用程序编写的文件），可使用值 **VERSIONABLE_SCHEMA** 作为 **IMPLEMENT_SERIAL** 宏的自变量。 有关用法信息和示例，请参阅类 `GetObjectSchema` 的 `CArchive` 成员函数。

--------

实现原理就是这个样子 

-------

### Serialize的MFC 使用(序列化案例)

我们使用MFC的单文档 进行实验 在CADView.cpp里面进行 序列化和反序列化操作 当然了 由我自己写的CAD作为案例   推荐重写 用 标志 **override **序列化

```c++
// CADView.h: CCADView 类的接口
virtual void Serialize(CArchive& ar) override; //公类
```

```c++
void CCADView::Serialize(CArchive& ar)
{
	Lines line3;
	Lines2 line4;
	if (ar.IsStoring()) {
	
	ar << line3.m_ptBegin << line3.m_ptEnd;
	ar << line4.m_ptBegin2 << line4.m_ptEnd2;  // 存储
}
else
	{
		ar << line3.m_ptBegin << line3.m_ptEnd;
		ar << line4.m_ptBegin2 << line4.m_ptEnd2;  // 写
	}
}
```

---

# 没了