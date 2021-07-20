- flex 弹性布局
  1. 默认的水平方向上弹
  flex-direction：row|column
  2. 弹性布局是一个父元素和多个子元素之间的布局关系
  flex：1； 多个元素就是等比例，只给一个元素设置
  那就表现它是主元素
  次要元素把改占的占完后， 剩下的所有都归主元素
LOL
英雄 展示出来
战士 刺客 法师

1. rpx 弹性布局
2. wxml  wxss  js  data
const heros = {
    "zs": [
        {
            "id": "1"
            "name": "盖伦",
            "avatar":"https://game.gtimg.cn/images/lol/act/img/champion/Garen.png"
        }
    ],
    "ap":[
        {
            "id": "2",
            "avatar": "https://game.gtimg.cn/images/lol/act/img/champion/Morgana.png",
            "name":"莫甘娜"
        }
    ],
    "adc": [
        {
            "id": "3"
            "name": "维恩",
            "avatar":"https://game.gtimg.cn/images/lol/act/img/champion/Vayne.png"
        }, 
        {
            "id": 4,
            "name": "艾希",
            "avatar":"https://game.gtimg.cn/images/lol/act/img/champion/Ashe.png"
        }, 
    ]
}
智能物联网 
- 小程序是现在最重要的一种应用形式，
    原生的app 大型 APP的天下
    基于微信、支付宝、抖音、 wx. 内置的map
- 项目的架构极其简单，
    不断的加页面 wx.navigateTo
    /page 是架构 
- 四部分 
    1. WXML HTML w3cshool 小程序
    2. WXSS css
    3. JS data 可以在页面 MVVM 显示 {{}} 事件
    4. JSON 配置
