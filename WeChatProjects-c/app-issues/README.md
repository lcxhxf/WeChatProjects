- bilibili的分类列表页
  1. 两个分类
  2. 数据响应式
  activeTabIndex tab 选中
  左右滑动的事件去改变这个值

- 云开发的项目架构
  - cloudfunctions
  云函数
  - miniprogram
  pages(页面由组件构成) + images + components(组件)
  安装的vant 放在这里
  npm i @vant/weapp -s
  npm install -> taobao registry
  node_moduless 安装的包在这里
  启动npm 构建后 miniprogram_npm 文件夹

- 搜索功能怎么做？
  1. 引入组件？ 多个页面需要用到就去app.json中配置  "usingComponents":
  2. 用户体验是：首页有多个搜索框，
  点击时，跳转到/search/index
  3. 对文章标题进行匹配
  - posts
  - e.detail.value 输入值
  - 连接数据库
  - ？ 标题， 模糊查询 %RegExp