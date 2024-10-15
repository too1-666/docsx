---
typora-root-url: ..\..\public
---

# Windows SDK _3

----

## 存入

前面几个篇章展示了 如何去 显示到底存输入了什么但是 没有学习如何去存入 

__把buttonon keyon什么的统统删去 或者注释根本用不到  在OnChar(){}使用追加也就是append()来存储

所以从现在开始学习存入消息

>fstream 和 string 这两个头文件 来进行存储

```c++
std::string g_text; // 在代码的使用宏定义 来进行存储 数据
```

```c++
LRESULT OnChar(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {

    g_text += ((char)wParam);

    //wsprintf(speace, _T("CHAR,OK push %lc!\n"), g_text.data());
     OutputDebugString(g_text.c_str());
    return TRUE; ;

```

通过运算符重载大法

g_text += ((char)wParam); 写入g_get 字符串里 再进行输出 



----------

## GDI 图形设备接口

1. 什么是GDI

> (GDI) 的 Microsoft Windows 图形设备接口使应用程序能够在视频显示器和打印机上使用图形和格式化文本。 基于 Windows 的应用程序不直接访问图形硬件。 相反，GDI 代表应用程序与设备驱动程序交互。 最后操作显卡

2.   设备上下文(Device Context )  DC

> 绘制图形的时候 多宽长 等属性都保存在设备上下文DC中,绘制任何东西都要有设备上下文
>
> *设备上下文*是一种结构，用于定义一组图形对象及其关联属性，以及影响输出的图形模式。 *图形对象*包括用于线条绘制的笔、用于绘制和填充的画笔、用于复制或滚动屏幕部分的位图、用于定义可用颜色集的调色板、用于剪裁和其他操作的区域，以及用于绘制和绘制操作的路径。 本部分的其余部分分为以下三个区域。

* 每个设备上下文 中都要有 句柄 (handle HDC)

  ​	**需要明白下面几个概念**

  - [图形对象](https://learn.microsoft.com/zh-cn/windows/win32/gdi/graphic-objects)
  - [图形模式](https://learn.microsoft.com/zh-cn/windows/win32/gdi/graphic-modes)
  - [设备上下文类型](https://learn.microsoft.com/zh-cn/windows/win32/gdi/device-context-types)
  - [设备上下文操作](https://learn.microsoft.com/zh-cn/windows/win32/gdi/device-context-operations)
  - [已启用 ICM 的设备上下文函数](https://learn.microsoft.com/zh-cn/windows/win32/gdi/icm-enabled-device-context-functions)

-------

## 区域

1. 什么是区域

   > *区域*是一个矩形、多边形或椭圆 (或两个或更多个形状的组合，) 可以填充、绘制、倒排、定框，并用于对光标位置) 执行命中测试 (测试。

   下面是如何使用区域

   - [关于区域](https://learn.microsoft.com/zh-cn/windows/win32/gdi/about-regions)
   - [使用区域](https://learn.microsoft.com/zh-cn/windows/win32/gdi/using-regions)
   - [区域参考](https://learn.microsoft.com/zh-cn/windows/win32/gdi/region-reference)

   ---

   ## 文本 和字体 

   > 字体用于在视频显示器和其他输出设备上绘制文本。 使用字体和文本功能，可以安装、选择和查询不同的字体。

   1. 如何设置文本格式

   > 格式设置函数可分为三类：检索或设置设备上下文 [的文本格式设置属性](https://learn.microsoft.com/zh-cn/windows/win32/gdi/text-formatting-attributes) 的类别、检索 [字符宽度](https://learn.microsoft.com/zh-cn/windows/win32/gdi/character-widths)的函数 [和检索字符串宽度和高度的](https://learn.microsoft.com/zh-cn/windows/win32/gdi/string-widths-and-heights)函数。

​           2.绘制文本(Windows GDI)

> 在应用程序选择适当的字体、设置所需的文本格式设置选项并计算文本字符串所需的字符宽度和高度值后，它可以通过调用任何文本输出函数开始绘制字符和符号：
>
> - [DrawText](https://learn.microsoft.com/zh-cn/windows/desktop/api/Winuser/nf-winuser-drawtext)
> - [DrawTextEx](https://learn.microsoft.com/zh-cn/windows/desktop/api/Winuser/nf-winuser-drawtextexa)
> - [ExtTextOut](https://learn.microsoft.com/zh-cn/windows/desktop/api/Wingdi/nf-wingdi-exttextouta)
> - [PolyTextOut](https://learn.microsoft.com/zh-cn/windows/desktop/api/Wingdi/nf-wingdi-polytextouta)
> - [TabbedTextOut](https://learn.microsoft.com/zh-cn/windows/desktop/api/Winuser/nf-winuser-tabbedtextouta)
> - [TextOut](https://learn.microsoft.com/zh-cn/windows/desktop/api/Wingdi/nf-wingdi-textouta)

---

​    绘制的时候一定要有HDC 才能 绘制

----

### 如何绘制

1. 获取窗口HDC

> 使用GetDC()函数来获取 HDC

```c++
//获取窗口
HDC hdc = GetDC(hWnd);  //<------------仅在客户区域
//如果想在非客户区域使用 请使用GetWindowDC()
```

__注意__

使用通用 DC 进行绘制后，必须调用 [ReleaseDC](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-releasedc) 函数来释放 DC。 类和专用 DC 不必释放。 **ReleaseDC** 必须从调用 **GetDC** 的同一线程调用。 DC 的数量仅受可用内存的限制。

你会越来越卡 (资源泄露)

GDI 对象会一直增长 内存占用也会增大

现在我想要美化一下我的 客户区 

> TextOut就很不错
>
> ```c++
> BOOL TextOutA(
>   [in] HDC    hdc, //句柄
>   [in] int    x,
>   [in] int    y,
>   [in] LPCSTR lpString,  //输入的文本
>   [in] int    c    // 字符长度
> );
> ```
>
> 

```c++
我在OnChar 里使用 这个TextOut
HDC hdc = GetDC(hWnd); // 用法
TextOut(hdc, 0, 0, _T("e1elibrary.com"), 14);
return TRUE;
```

  ![TextOut](/winSDK/krre/TextOut.png)

**PLUS版本** 如果想更加加强一点可以结合上一章ProMax 版本 的输出 

```c++
  HDC hdc = GetDC(hWnd); // 用法
  TextOut(hdc, 0, 0,g_text.c_str(), g_text.length());
     return TRUE; 

```

这样可以直接输出 打的字在窗口上

------------

__这时候就有人问了__ 诶? 为啥换不了行? 怎么办捏?

显然 TextOut 不支持格式化也不支持换行什么的 , 所以我选个带格式化的

> DrawText()
>
> ```c++
> int DrawText(
>   [in]      HDC     hdc,     //句柄
>   [in, out] LPCTSTR lpchText, // 文本
>   [in]      int     cchText, 文本长度
>   [in, out] LPRECT  lprc,  //指向 RECT 结构的指针，该结构包含要设置文本格式) 逻辑坐标 (矩形
>   [in]      UINT    format  //格式化DT  查表
> );
> ```
>
> 

注意 这个需要定义结构体

指向 [RECT](https://learn.microsoft.com/zh-cn/windows/desktop/api/windef/ns-windef-rect) 结构的指针，该结构包含要设置文本格式) 逻辑坐标 (矩形

RECT 结构体需要获取 大小 所以 我们选择

GetlientRect()函数 来获取 客户区域大小

```c++
BOOL GetClientRect(
  [in]  HWND   hWnd,
  [out] LPRECT lpRect  // RECT 的结构体指针
);
```

使用例子如下

```c++

    g_text += ((char)wParam);
    if ((char)wParam == '\r') {
        g_text += '\n';
    }
    
     OutputDebugString(g_text.c_str());
     // 获取窗口HDC
    // HDC hdc = GetWindowDC(hWnd);
    //获取窗口客户区域大小
     RECT rc;
     GetClientRect(hWnd, &rc);
    
     HDC hdc = GetDC(hWnd); // 用法
     ReleaseDC(hWnd,hdc);  //释放DC
     DrawText(hdc,g_text.c_str(), g_text.length(),&rc,DT_LEFT); //DT_LEFT是靠左输出 
        return TRUE; ;

```

* 这个是 效果图

![DrawText](/winSDK/krre/DrawText.png)

这回 能成功识别回车键 \r 并转换 \n 输出

---

 怎么删去? 是个问题 妹学啊 所以我们可以换个方法 来删除 字符

>  FillRect

```c++
int FillRect(
  [in] HDC        hDC,  //句柄
  [in] const RECT *lprc, //客户区域大小
  [in] HBRUSH     hbr  //刷子
);
```

---

使用此函数可以直接 用背景颜色刷子 提前说设置

```
HBRUSH hBrush = CreateSolidBrush(RGB(255, 0, 0));  // 创建一个红色的刷子
HDC hdc = GetDC(hWnd); // 获取句柄
 RECT rc; //逻辑坐标  
 GetClientRect(hWnd, &rc);  // 获取客户坐标
 
 
 FillRect(hdc, &rc,hBrush );
```

刷子也是GDI 对象 使用**SelectObject()**来进行 选中

> SelectObject() 函数
>
> **SelectObject** 函数在 DC) (指定设备上下文中选择对象。 新 对象替换同一类型的上一个对象。

```c++
HGDIOBJ SelectObject(
  [in] HDC     hdc,
  [in] HGDIOBJ h
);
```

第二个参数可以是以下一个函数 

| Object     | 函数                                                         |
| :--------- | :----------------------------------------------------------- |
| **Bitmap** | [CreateBitmap](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createbitmap)、 [CreateBitmapIndirect](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createbitmapindirect)、 [CreateCompatibleBitmap](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createcompatiblebitmap)、 [CreateDIBitmap](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createdibitmap)、 [CreateDIBSection](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createdibsection)位图只能选择到内存 DC 中。 不能将单个位图同时选入多个 DC。 |
| **Brush**  | [CreateBrushIndirect](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createbrushindirect)、 [CreateDIBPatternBrush](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createdibpatternbrush)、 [CreateDIBPatternBrushPt](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createdibpatternbrushpt)、 [CreateHatchBrush](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createhatchbrush)、 [CreatePatternBrush](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createpatternbrush)、 [CreateSolidBrush](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createsolidbrush) |
| **字体**   | [CreateFont](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createfonta)、 [CreateFontIndirect](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createfontindirecta) |
| **笔**     | [CreatePen](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createpen)、 [CreatePenIndirect](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createpenindirect) |
| **区域**   | [CombineRgn](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-combinergn)、 [CreateEllipticRgn](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createellipticrgn)、 [CreateEllipticRgnIndirect](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createellipticrgnindirect)、 [CreatePolygonRgn](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createpolygonrgn)、 [CreateRectRgn](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createrectrgn)、 [CreateRectRgnIndirect](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createrectrgnindirect) |

究极偷懒大法 每次写上去就刷子重绘操作 然后再输出 这样就可以pop str里的值时候重绘 再输出就有了删除的操作

```c++
RECT rc; //逻辑坐标  
GetClientRect(hWnd, &rc);
//DC选择刷子 
HGDIOBJ hBrushOld = SelectObject(hdc, hBrush);
 
FillRect(hdc, &rc,hBrush );

   
    
    
 
DrawText(hdc,g_text.c_str(), g_text.length(),&rc,DT_LEFT);
SelectObject(hdc, hBrushOld); // 还原默认刷子
DeleteObject(hBrush);  //释放刷子

ReleaseDC(hWnd,hdc);  //释放DC    

```

备注防止失常 特地使用SelectObject(hdc, hBrushOld) 来还原默认刷子

虽然在这个代码里使用hBrush 没关系 但是以后操作可能会出现非预期情况

 就可以删除绘制残留 

---

### 插入

会删除了 就要学插入运算符了

**CreateCaret()**为系统插入点创建一个新形状，并将插入点的所有权分配给指定窗口。 插入符号形状可以是线条、块或位图。

```C++
BOOL CreateCaret(
  [in]           HWND    hWnd,
  [in, optional] HBITMAP hBitmap,
  [in]           int     nWidth,
  [in]           int     nHeight
);
```

HBITMAP

> 用于定义插入点形状的位图的句柄。 如果此参数为 **NULL**，则插入符号为实心。 如果此参数为 `(HBITMAP) 1`，则插入符号为灰色。 如果此参数是位图句柄，则插入符号是指定的位图。 位图句柄必须由 [CreateBitmap](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createbitmap)、 [CreateDIBitmap](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-createdibitmap) 或 [LoadBitmap](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-loadbitmapa) 函数创建。 插入点通过 XOR 操作绘制到屏幕。如果 *hBitmap* 是位图句柄， **CreateCaret** 将忽略 *nWidth* 和 *nHeight* 参数;位图定义其自己的宽度和高度。 在插入符号被销毁或替换为另一个插入点之前，应用程序不应删除 *hBitmap* 。

---

首先使用 

> TEXTMETRIC g_tm  来设置字体信息
>
> **TEXTMETRIC** 结构包含有关物理字体的基本信息。 所有大小都以逻辑单元指定;也就是说，它们依赖于显示上下文的当前映射模式。

 在Create的消息出现时候就要设置 设置窗口句柄

   ```c++
   HDC hdc = GetDC(hWnd);
   ```

获取后就要选择对象了 

采用SelectObject()来创建了 

```c++
SelectObject(hdc, GetStockObject(SYSTEM_FIXED_FONT)); // 我这里采用 GetStocjObject(SYSTEM_FIXED_FONT) 来获取系统字体
```

### **GetStockObject**

- **GetStockObject** 函数检索其中一支股票笔、画笔、字体或调色板的句柄

```c++
HGDIOBJ GetStockObject(
  [in] int i
);//下面为i的值
```

| 值                      | 含义                                                         |
| :---------------------- | :----------------------------------------------------------- |
| **BLACK_BRUSH**         | 黑色画笔。                                                   |
| **DKGRAY_BRUSH**        | 深灰色画笔。                                                 |
| **DC_BRUSH**            | 纯色画笔。 默认颜色为白色。 可以使用 [SetDCBrushColor](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-setdcbrushcolor) 函数更改颜色。 有关详细信息，请参见“备注”部分。 |
| **GRAY_BRUSH**          | 灰色画笔。                                                   |
| **HOLLOW_BRUSH**        | 空心画笔 (等效于NULL_BRUSH) 。                               |
| **LTGRAY_BRUSH**        | 浅灰色画笔。                                                 |
| **NULL_BRUSH**          | null 画笔 (等效于 HOLLOW_BRUSH) 。                           |
| **WHITE_BRUSH**         | 白色画笔。                                                   |
| **BLACK_PEN**           | 黑色触笔。                                                   |
| **DC_PEN**              | 纯色笔颜色。 默认颜色为黑色。 可以使用 [SetDCPenColor](https://learn.microsoft.com/zh-cn/windows/desktop/api/wingdi/nf-wingdi-setdcpencolor) 函数更改颜色。 有关详细信息，请参见“备注”部分。 |
| **NULL_PEN**            | null 触笔。 null 触控笔不绘制任何内容。                      |
| **WHITE_PEN**           | 白色触笔。                                                   |
| **ANSI_FIXED_FONT**     | Windows 固定间距 (正) 系统字体。                             |
| **ANSI_VAR_FONT**       | Windows 可变间距 (比例空间) 系统字体。                       |
| **DEVICE_DEFAULT_FONT** | 设备依赖字体。                                               |
| **DEFAULT_GUI_FONT**    | 用户界面对象（如菜单和对话框）的默认字体。 不建议使用DEFAULT_GUI_FONT或SYSTEM_FONT来获取对话框和窗口使用的字体;有关详细信息，请参阅备注部分。默认字体为 Tahoma。 |
| **OEM_FIXED_FONT**      | 原始设备制造商 (OEM) 依赖固定间距 (正方形) 字体。            |
| **SYSTEM_FONT**         | 系统字体。 默认情况下，系统使用系统字体来绘制菜单、对话框控件和文本。 不建议使用DEFAULT_GUI_FONT或SYSTEM_FONT来获取对话框和窗口使用的字体;有关详细信息，请参阅备注部分。默认系统字体为 Tahoma。 |
| **SYSTEM_FIXED_FONT**   | 固定间距 (单调) 系统字体。 此库存对象仅用于与 3.0 之前的 16 位 Windows 版本兼容。 |
| **DEFAULT_PALETTE**     | 默认调色板。 此调色板由系统调色板中的静态颜色组成。          |

然后使用**GetTextMetrics** 函数 指定填满缓冲区

语法为

```c++
BOOL GetTextMetrics(
  [in]  HDC          hdc,  //设备上下文句柄
  [out] LPTEXTMETRIC lptm //指向接收文本指标的 TEXTMETRIC 结构的指针
);
```

```c++
//整体结构为
LRESULT OnCreate(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    HDC hdc = GetDC(hWnd);
    SelectObject(hdc, GetStockObject(SYSTEM_FIXED_FONT));
    GetTextMetrics(hdc, &g_tm);
    ReleaseDC(hWnd, hdc);
    return TRUE;
```

### ReleaseDC()补充

**ReleaseDC** 函数 (DC) 释放设备上下文，释放它供其他应用程序使用。 **ReleaseDC** 函数的效果取决于 DC 的类型。 它仅释放公用 DC 和窗口 DC。 它对类或专用 DC 没有影响。



## 语法

```c++
int ReleaseDC(
  [in] HWND hWnd, //要释放其 DC 的窗口的句柄。
  [in] HDC  hDC //要释放的 DC 的句柄。
);
```

------

 ### 使用WM_SETFOCUS消息

在获得键盘焦点后发送到窗口的消息

接收到 这个消息时候 就可以 使用CreateCaret()函数了

之后设置__SetCaretPos()__

SetCaretPos作用是将插入点移动到指定的坐标。 如果拥有插入点的窗口是使用 **CS_OWNDC** 类样式创建的，则指定的坐标受与该窗口关联的设备上下文的映射模式的约束。

```c++
BOOL SetCaretPos(
  [in] int X, //插入点的新 x 坐标
  [in] int Y //插入点的新 y 坐标
);
```

使用的完整代码如下  (WM_SETFOCUS)

```c++
LRESULT OnSetfocus (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
    CreateCaret(hWnd, (HBITMAP)NULL, 0, 0);
    SetCaretPos(0, 0);
    ShowCaret(hWnd);
    return TRUE;
```

结束销毁键盘焦点时候

就要销毁当前形状

使用DestroyCaret函数来销毁

完整代码如下(WM_KILLFOCUS)

```c++
LRESULT OnKillFocus (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    DestroyCaret();
    return TRUE;
```

在WM_CHAR消息的时候 就要绘制  更新SetFocus 是 键盘焦点

OnChar 的(部分)内容

```c++
     // 获取窗口HDC
    // HDC hdc = GetWindowDC(hWnd); //待定
    //获取窗口客户区域大小 
     RECT rc; //逻辑坐标  
     GetClientRect(hWnd, &rc);
     //DC选择刷子 
     HGDIOBJ hBrushOld = SelectObject(hdc, hBrush);
     ShowCaret(hWnd);  // 允许绘制.放在前面是保证重绘时候能够 不会有残留
     SetCaretPos(g_tm.tmAveCharWidth * g_text.length(), 0);// 位置是 字符宽度 和 字符串长度 相乘
     FillRect(hdc, &rc,hBrush );     //填充颜色
     DrawText(hdc,g_text.c_str(), g_text.length(),&rc,DT_LEFT);
     SelectObject(hdc, hBrushOld); // 还原默认刷子
     DeleteObject(hBrush);  //释放刷子
     
     ReleaseDC(hWnd,hdc);  //释放DC    
   
     return TRUE; ;


```



-----------

### 使用窗口预定的框架

CreateWindowEx的文档里发没发现 有预定的成品控件

| 类                 | 含义                                                         |
| :----------------- | :----------------------------------------------------------- |
| **BUTTON**         | 指定一个小矩形子窗口，该窗口表示用户可以单击以将其打开或关闭的按钮。 按钮控件可以单独使用，也可以成组使用，并且可以不带文本进行标记或显示。 当用户单击按钮控件时，按钮控件通常会更改外观。 有关详细信息，请参阅 [按钮](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/buttons)。有关可在 *dwStyle* 参数中指定的按钮样式表，请参阅 [按钮样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/button-styles)。 |
| **COMBOBOX**       | 指定由列表框和类似于编辑控件的选择字段组成的控件。 使用此样式时，应用程序应随时显示列表框或启用下拉列表框。 如果列表框可见，在选择字段中键入字符会突出显示与键入的字符匹配的第一个列表框条目。 相反，选择列表框中的项会在选择字段中显示所选文本。 有关详细信息，请参阅 [组合框](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/combo-boxes)。有关可以在 *dwStyle* 参数中指定的组合框样式表，请参阅 [组合框样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/combo-box-styles)。 |
| **EDIT**           | 指定用户可从键盘键入文本的矩形子窗口。 用户选择控件，并通过单击或按 Tab 键移动到控件来为控件提供键盘焦点。 当编辑控件显示闪烁的插入点时，用户可以键入文本;使用鼠标移动光标，选择要替换的字符，或定位光标以插入字符;或使用 键删除字符。 有关详细信息，请参阅 [编辑控件](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/edit-controls)。有关可在 *dwStyle* 参数中指定的编辑控件样式表，请参阅 [编辑控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/edit-control-styles)。 |
| **LISTBOX**        | 指定字符串的列表。 每当应用程序必须提供用户可以从中选择的名称列表（如文件名）时，请指定此控件。 用户可以通过单击来选择字符串。 突出显示所选字符串，并将通知消息传递到父窗口。 有关详细信息，请参阅 [列表框](https://learn.microsoft.com/zh-cn/windows/desktop/uxguide/ctrl-list-boxes)。有关可以在 *dwStyle* 参数中指定的列表框样式表，请参阅 [列表框样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/list-box-styles)。 |
| **MDICLIENT**      | 指定 MDI 客户端窗口。 此窗口接收控制 MDI 应用程序的子窗口的消息。 建议的样式位 **是WS_CLIPCHILDREN** 和 **WS_CHILD**。 指定 **WS_HSCROLL** 和 **WS_VSCROLL** 样式以创建允许用户将 MDI 子窗口滚动到视图中的 MDI 客户端窗口。 有关详细信息，请参阅 [多文档接口](https://learn.microsoft.com/zh-cn/windows/desktop/winmsg/multiple-document-interface)。 |
| **RichEdit**       | 指定 Microsoft Rich Edit 1.0 控件。 此窗口允许用户使用字符和段落格式查看和编辑文本，并且可以将嵌入式组件对象模型 (COM) 对象。 有关详细信息，请参阅 [Rich Edit 控件](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/rich-edit-controls)。有关可在 *dwStyle* 参数中指定的丰富编辑控件样式的表，请参阅 [Rich Edit 控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/rich-edit-control-styles)。 |
| **RICHEDIT_CLASS** | 指定 Microsoft Rich Edit 2.0 控件。 此控件允许用户使用字符和段落格式查看和编辑文本，并且可以包含嵌入的 COM 对象。 有关详细信息，请参阅 [Rich Edit 控件](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/rich-edit-controls)。有关可在 *dwStyle* 参数中指定的丰富编辑控件样式的表，请参阅 [Rich Edit 控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/rich-edit-control-styles)。 |
| **SCROLLBAR**      | 指定一个矩形，该矩形包含一个滚动框，并在两端都有方向箭头。 每当用户单击控件时，滚动条就会向其父窗口发送通知消息。 如有必要，父窗口负责更新滚动框的位置。 有关详细信息，请参阅 [滚动条](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/scroll-bars)。有关可在 *dwStyle* 参数中指定的滚动条控件样式表，请参阅 [滚动条控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/scroll-bar-control-styles)。 |
| **STATIC**         | 指定用于标记、框或分隔其他控件的简单文本字段、框或矩形。 静态控件不采用任何输入，也不提供输出。 有关详细信息，请参阅 [静态控件](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/static-controls)。有关可以在 *dwStyle* 参数中指定的静态控件样式表，请参阅 [静态控件样式](https://learn.microsoft.com/zh-cn/windows/desktop/Controls/static-control-styles)。 |

也就是 CreateWindowEx的第2个参数 可以直接改成这几个名字就可以直接用 示例
```c++
  HWND hChild = CreateWindowExA(
      0,
      "BUTTON",
      "e1eLibrary.com",
      WS_VISIBLE | WS_CHILD,
      0,
      0,
      200,
      100,
      hWnd,  // 指定 父句柄
      NULL,
      hInstance,
      NULL
```

- 子窗口不需要 ShowWindow

------------------------

### 其实可以使用EDIT 来在页面上打字  并不需之前那么麻烦

```c++
     RECT rc;
    GetClientRect(hWnd, &rc);
    HWND hChild = CreateWindowExA(    //系统控件
        0,
        "EDIT",
        "草飞",
        WS_VISIBLE | WS_CHILD| WS_VSCROLL|WS_HSCROLL |ES_MULTILINE,  //上下滚动条, 左右滚动条,ES 拓展 指定多行默认单行 不给水平实现自动换行
        0,
        0,
        rc.right-rc.left,
        rc.bottom-rc.top,
        hWnd,  // 父句柄
        NULL,
        hInstance,
        NULL
    );

```

--------

# 结尾给源代码

```c++
#include <Windows.h>
#include <stdio.h>
#include <tchar.h>
#include <windowsx.h>
#include <fstream>
#include <string>
using namespace std;
string g_text;
TEXTMETRIC g_tm; //字体信息

LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMSG, WPARAM wParam, LPARAM lParam);// 回调{
/*
    键盘消息
    鼠标消息
    快捷键消息
    菜单消息

    客户区域
    */


int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow) // 第二个句柄保留适配老版本
{
    

    WNDCLASSEX wc = { 0 };
    wc.cbSize = sizeof(WNDCLASSEX);
    wc.style = CS_VREDRAW | CS_HREDRAW | CS_DBLCLKS; //窗口类型
    wc.lpfnWndProc = WindowProc; // 窗口过程 (回调函数) -> 处理 消息
    wc.hInstance = hInstance;
    wc.hIcon = LoadIcon(NULL, IDI_SHIELD);
    wc.hCursor = LoadCursor(NULL, IDC_CROSS);
    wc.hbrBackground = CreateSolidBrush(RGB(255, 255, 255));
    wc.lpszMenuName = NULL;
    wc.lpszClassName = "Text";
    if (RegisterClassEx(&wc) == 0) {

        return 0;

    }

    //创建窗口
   
    HWND hWnd = CreateWindowEx(
        0,
        "Text",
        "HELLo",
        WS_MAXIMIZEBOX | WS_MINIMIZEBOX | WS_VISIBLE | WS_SYSMENU,
        CW_USEDEFAULT,
        CW_USEDEFAULT,
        CW_USEDEFAULT,
        CW_USEDEFAULT,
        NULL,
        NULL,
        hInstance,
        NULL
    );
     RECT rc;
    GetClientRect(hWnd, &rc);
    HWND hChild = CreateWindowExA(    //系统控件
        0,
        "EDIT",
        "草飞",
        WS_VISIBLE | WS_CHILD| WS_VSCROLL|WS_HSCROLL |ES_MULTILINE,
        0,
        0,
        rc.right-rc.left,
        rc.bottom-rc.top,
        hWnd,  // 父句柄
        NULL,
        hInstance,
        NULL
    );





    if (hWnd == NULL)
    {
        DWORD werror = GetLastError();
        return 0;
    }




    ShowWindow(hWnd, SW_SHOWNORMAL);  
    
    // SetClassLong(hWnd, GCL_HCURSOR, (LONG)LoadCursor(NULL,IDC_HAND)); 
     // 二次修改光标





     //消息循环
    BOOL bRet;
    MSG  msg;
    while ((bRet = GetMessage(&msg, NULL, 0, 0)) != 0)  // 接收所有 的消息
    {
        
        if (bRet == -1)
        {
            break;
        }
        else
        {   
            TranslateMessage(&msg);//虚拟
            DispatchMessage(&msg); //派发消息
        }
    }
    return (msg.wParam); // 接收消息

}

//LRESULT OnChar(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
//    HBRUSH hBrush = CreateSolidBrush(RGB(255, 255, 255));  // 创建一个红色的刷子
//     HDC hdc = GetDC(hWnd); // 用法
//     if ((char)wParam == '\r') {
//         g_text += ((char)wParam);
//         g_text += '\n';
//    }
//     else if (((char)wParam) == '\b')
//     {
//         if (!g_text.empty())
//             g_text.pop_back();
//     }
//    else {
//        g_text += ((char)wParam);
//    }
//     
//     OutputDebugString(g_text.c_str());
//     // 获取窗口HDC
//    // HDC hdc = GetWindowDC(hWnd); //待定
//    //获取窗口客户区域大小 
//     RECT rc; //逻辑坐标  
//     GetClientRect(hWnd, &rc);
//     //DC选择刷子 
//     HGDIOBJ hBrushOld = SelectObject(hdc, hBrush);
//     ShowCaret(hWnd);  // 允许绘制.放在前面是保证重绘时候能够 不会有残留
//     SetCaretPos(g_tm.tmAveCharWidth * g_text.length(), 0);// 位置是 字符宽度 和 字符串长度 相乘
//     FillRect(hdc, &rc,hBrush );
//     DrawText(hdc,g_text.c_str(), g_text.length(),&rc,DT_LEFT);
//     SelectObject(hdc, hBrushOld); // 还原默认刷子
//     DeleteObject(hBrush);  //释放刷子
//     
//     ReleaseDC(hWnd,hdc);  //释放DC    
//   
//     return TRUE; ;
//
//
//}
//LRESULT OnCreate(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
//    HDC hdc = GetDC(hWnd);
//    SelectObject(hdc, GetStockObject(SYSTEM_FIXED_FONT));  //初始坐标
//    GetTextMetrics(hdc, &g_tm);  //填充缓冲区
//    ReleaseDC(hWnd, hdc);
//    return TRUE;
//}
LRESULT OnClose(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    OutputDebugString(_T("Close"));
    return FALSE;
}
LRESULT OnDestroy(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    MessageBox(NULL, _T("Destroy|UnregisterHotKey OK"), _T("e1elibrary.com"), MB_OK);

    PostMessage(hWnd, WM_QUIT, 0, NULL);  //关闭消息  WM_Destory消息, 传参到 wParam  
    return TRUE;
}
//LRESULT OnSetfocus (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
//{
//    CreateCaret(hWnd, (HBITMAP)NULL, g_tm.tmHeight, 0); // 创建插入符
//    SetCaretPos(0,0); // 插入符号初始坐标
//    
//    return TRUE;
//}
//LRESULT OnKillFocus (HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
//    DestroyCaret();
//    return TRUE;
//}

LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
    LRESULT lResult = FALSE; // 初始化lResult为0，以便在switch语句中未找到匹配项时返回  
    switch (uMsg) {
    //case WM_CREATE: //创建消息
    //    lResult = OnCreate(hWnd, uMsg, wParam, lParam);
    //    break;
    //case WM_CLOSE: //关闭消息
    //    lResult = OnClose(hWnd, uMsg, wParam, lParam);
    //    break;
    case WM_DESTROY:  //销毁消息
        lResult = OnDestroy(hWnd, uMsg, wParam, lParam);
        break;
    /*case WM_CHAR:
        lResult = OnChar(hWnd, uMsg, wParam, lParam);
        break;
    case WM_SETFOCUS:
        lResult = OnSetfocus(hWnd, uMsg, wParam, lParam);
        break;
    case WM_KILLFOCUS:
        lResult = OnKillFocus(hWnd, uMsg, wParam, lParam); 
        break;*/
    }
    if (!lResult)
    {
        return DefWindowProc(hWnd, uMsg, wParam, lParam);
    }
    return lResult;
}
```

