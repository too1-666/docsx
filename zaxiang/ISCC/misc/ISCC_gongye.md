---
typora-root-url: public
---

# ISCC 工业互联网数据分析 WP?（复现的办法）

### 第一题的解

> 第一题很简单 由于 直接给你明牌了代表 数据包传输时候固定 大小的 是异常所以咱们看看他的IP

![ISCCgongye](/ISCCmisc/ISCCgongye_1.png)





> ip 分别为192.168.1.X (X为1，2，3，4，5，6)

```powe
ip.src == 192.168.1.x
```

通过过滤ip找到 特殊的 地方 这个需要每个都过滤一遍

过滤后发现 了 欸？ ip 为192.168.1.2 与 192.168.1.4 的IP通信之间不对劲啊 

![ISCCgongye_2](/ISCCmisc/ISCCgongye_2.png)



LEN统一的为24



>  \1.  题目一：在某些网络会话中，数据包可能保持固定大小，请给出含有此确定性特征的会话IP地址和数据包字节大小值。

 这是题目1的解，查询后发现并没有其他的异常 确定就只有这两个 ip异常

所以答案为__192.168.1.2和192.168.1.4__





### 第二题的解

> 第二题更是逆天,我不好评价 纯纯明牌

```pow
data.data
```

打出这个指令查看 data的数据包 发现 前面统一出现了 2024 好了

2024 就是这个题的解

![ISCCgongye_3](/ISCCmisc/ISCCgongye_3.png)

 

难绷



### 第三题的解

> 一些网络通信业务在时间序列上有确定性规律，请提供涉及的IP地址及时间规律数值（小数点后两位）
>
> 答案：IP地址：XX.XX.XX.XX，XX.XX.XX.XX，…，数值：XX

这是题目

对的他说有时间规律 wireshark上有时间规律特性就是流量分组 他们可以做除法 算时间间隔 

![ISCCgongye_4](/ISCCmisc/ISCCgongye_4.png)

看到左面框没 这个就是分组了 

你看看时间 是不是不一样 欸对了 这是正常的一组

因为你拿计算器算一下时间 差距 全是62--63 左右 添加小数点 就是0.06s （0.062，0.063）

所以第五组的192.168.1.3 -192.168.1.3 是正解 时间间隔为0.06s

我这个是笨办法但是好用

### 第四题的解

>一些网络通信业务存在逻辑关联性，请提供涉及的IP地址

> 答案：XX.XX.XX.XX，XX.XX.XX.XX，…

这个是查看他的关联 没有什么好的解决办法  多寻思一下吧 看看 关系 1，3，4，5，6分组都是2个ip互传

然后我也是取巧 一些所以很大概率大于2 而流量分组2刚好是三个ip互传 所以我认为

![ISCCgongye_5](/ISCCmisc/ISCCgongye_5.png)

192.168.1.2 和.3 .6有关系

### 第五题的解

>  网络数据包往往会添加数据完整性校验值，请分析出数据校验算法名称及校验值在数据包的起始位和结束位（倒数位）

> （补充说明：数据校验算法名称长度为5个字符，其中英文字母大写）

5个字符的校验算法 优先考虑CRC 算法  CRC 比较常见的算法 能够凑5位的只有32 和16

也就是CRC32 CRC16  所以结束位必定是1 首位不一定 1-10都有可能 山穷水尽 只能选择对 比赛网站flag进行传参

吧1-10 CRC 32 16 传参得到正解为

CRC16 4,1



5道题的解都出了 接下来的对他的md5加密的脚本比赛官方给你了 吧答案输进去得到flag

## 你问我比赛结束了怎么办 没有原题 ，当然我的另一个仓库专门存了 原题 仓库名字 timu 