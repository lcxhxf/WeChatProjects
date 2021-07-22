# 引导页怎么做？

1. pages/index/index
    pages/load/load

2. 图片 swipe 100vh
3. 滑动，到最后一页的时候出现按钮
    banners
    bindchange
    当前这张 是否是最后一张？
    数据 current.length - 1

当我们在做区块样式的时候
我们经常.container>.box 两层结构
内与外 container负责间距，定位
box 内部的细节

- 在小程序里如何使用框架
    1. 如果要引用的是weui？
    下载weui.wxss 全局app.wxss里 @import"./weui.wxss"
    小程序快速使用weui皮肤 类名系统
    2. 如何使用vant?
    微信生态圈 有赞，vant
        1. npm init -y 初始化项目 纯前端 -> 后端 安装依赖式项目
        2. npm i @vant/weapp 安装依赖（在node_nodules下）
        3. 使用工具构建npm包 生成miniprogram_npm
        4. 在页面的json文件中引入我们要的组件
        "van-notice-bar": "@vant/weapp/notice-bar/index"