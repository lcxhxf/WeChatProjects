- 项目是分模块的
 大模块， 子模块
 /pages/模块名/page页面

 - 全局数据用法
  在做大型应用，夜间模式
  如果放在storage 不利于随时存取，它的存取有一定的开销 优秀是持久化
  onLanch 应用启动 把storage ->
  app.globalData 可以扩页面访问

- 用户登录功能
  1. bindgetuserinfo -> storage + user
  2. getuserinfo signature与_openid不一致
    启用云函数getOpenIdTest 解决openid问题
  3. canIUse && hasuserInfo
    更加优质 global

button[getUserInfo]->hasUserInfo(button消失)
+ globalData(getApp()全局共享).userInfo
-> setStorageSync(长期存储) -> onLanch -> storage
-> globalData