---
typora-root-url: ..\..\..\public
---

#                 RE 迷失之门题解

> 第一步查
>
> 发现是64位的
>
> 打开ida 64

先打开发现两个东西

![mishizhimen_2](/re/mishizhimen_2.png)

先点击check查看源码后发现导向check2

发现了下面这一堆



![mishizhimen_1](/re/mishizhimen_1.png)

由于check 导入check2的字符串是a1

以a1[x]的方式遍历 确定了 数字代表每一位的ASCII码 一个26 位 每一位都是

字符串为

> FSBBhKfIDirfZlEfVbaShZyKom

回头查看a1 

```PY
answer ='FSBBhKHfEIeEUhUPqV0Moqbmfp6' #a1 
v16='ABCDEFGHIJKLMNOPQRSTUVWXYZ'  
v10='abcdefghijklmnopqrstuvwxyz'  
v4='0123456789+/-=!#&*()?;*:^%'  
v3='DABBZXQESVFRWNGTHYJUMKIOLPC'  
  
for i in range(len(answer)):  
    for j in range(32, 127):  
        if j - ord(v3[i]) <= 0:  
            pass  
        else:  
            v22 = j - ord(v3[i])  
            if v22 > 25:  
                if v22 > 51:   
                    v1 = v4[v22 - 52]   
                else:  
                    v1 = v10[v22 - 26]  
                if v1 == answer[i]:  
                    print(chr(j), end='')  
                 
            else:  
                if v16[v22] == answer[i]:  
                    print(chr(j), end='')  
    #通过暴力破解来进行 解密 ，原理就是遍历ascii 表 那几个字符串代表 大写小写 狮子特殊符号 和已知密钥 加密结果 通过反向 操作获取答案 减 字符范围的方法v22的差值
```

你要的逆向的地方我给你标了 就是这个 那个 wrong 直接pass  或者continue 根据你写脚本的语言不同用不同的模式

![mishizhimen_3](/re/mishizhimen_3.png)







答案自己跑 



2024 ISCC 的 迷失之门的解 就是这样

