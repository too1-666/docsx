# 逆向

### 遵循规范

* C规范_cdecl函数参数按照又到作顺序入栈 调用者负责清除栈  函数声明加上_cdecl手动指定 

* pascal从左到右顺序压入参数入栈

* stdcall 是Win32 API约定方式函数从右到左入栈 返回前清理内存栈