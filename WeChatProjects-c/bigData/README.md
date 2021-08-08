- JS 语言不像 java php同步的语言，在做文件操作、数据库操作会停在那里
  JS是异步语言 因为它诞生的时候是用于解决网页的交互问题

  不会停在那里，继续往下执行
  导致代码编写顺序和执行顺序有差异

  当JS有了node，小程序云开发之后
  如何解决异步问题
  es5(callback)->es6(promise)->es7(async + await)->es8

- promise then 返回 一个promise实例 可以继续then
- async用来修饰函数 + await(停下来) 

1. 小程序做复杂查询，多些数据
  333条 每页20 分页

2. limit + skip() 完成翻页
3. where + db.command
  lt gt in eq
  多条件联合