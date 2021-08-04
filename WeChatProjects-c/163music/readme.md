1. 小程序是科目二
  仿完一个小程序的主要功能
2. 云开发，成为官方的awesome项目案例
3. 写文章收star 100 star +
4. 10月商业项目小程序开发

- git clone了20k star 的网易云sdk项目 
- 命令行进入了项目
  npm i 安装项目package.json需要的依赖包
  npm run dev 启动项目
  http://localhost:3000/ API地址
  hhttp://localhost:3000/search?keyword=
  http://localhost:3000/personalized

- 数据来自第三方
  之前我们做的都是前端，后端都是别人做的
  这个就叫做前后端分离
  使用wx.request 调用后端 API
  拿到数据后 该做什么
  wx.request({
    url: 接口地址
    success 回调
  })

## 600+star 原因
  1. 使用了第三方开源API
  2. 封装了所有的数据请求
    /api 目录
    不能sdk关了 server端 放到服务器上
    小程序是前端
    前端如何到->后端：
    通信的方式wx.request({
      url: 'http://localhost:3000/personalized'
    })   
      url: 'http://localhost:3000/search'(两个接口personalized、search)
      return new Promise()
      api是架构的一部分

      一个项目里所有的数据请求应该集中起来
      1.导入获取数据
      module.exports = {
        getSearchResult(keyword) {
          return new Promise(() => {

          })
        }
      }
      2.引入数据（在page上）
      const{getSearchResult} = require('../../api/api.js')
      3.调用方法
      getSearchResult('周杰伦')
      .then(res => {
        console.log(res);
      })