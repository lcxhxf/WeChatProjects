const topBanners = [{
  id: '1',
  picUrl: 'https://liangcang-material.alicdn.com/prod/upload/1dd0b08c628445f2a6c605d7947188d4.jpg?x-oss-process=image/resize,w_1080/format,webp/interlace,1',
  linkUrl: 'https://m.youku.com/alipay_video/id_efae42d0586844258ca4.html?spm=a2hww.12518357.drawer2.dzj1_1'
}, {
  id: '2',
  picUrl: 'https://liangcang-material.alicdn.com/prod/upload/6ce04c1056ea4ae7891f55129d1aa726.jpg?x-oss-process=image/resize,w_1080/format,webp/interlace,1',
  linkUrl: 'https://m.youku.com/alipay_video/id_ffe36e46bc6c46e795b3.html?spm=a2hww.12518357.drawer2.dzj1_4'
}]
const goodsDynamic = [{
  avatarUrl:'https://static.youku.com/user/img/avatar/50/43.jpg',
  nick: '旅梦开发团',
  goodsName: '日式陶瓷米饭碗面碗汤碗韩式家用大碗沙拉碗粥碗创意个性复古餐具'
}, {
  avatarUrl:'https://static.youku.com/lvip/img/avatar/600/11.png',
  nick: '我很六啊',
  goodsName: '办公室三角多层花架桌面工位隔板置物架阳台护栏悬挂式转角收纳架'
}]
const dataList = [
  {
    id:1,
    title:'你是个猪头'
  },
  {
    id:2,
    title:'哇呜'
  }
]

//es6 解构
const { categories } = require('../../config/index.js')
const app = getApp()

Page({
  data: {
    topBanners,
    goodsDynamic,
    categories,
    noticeList:{
      dataList
    }
  },
  gotoCategory(e) {
    //发现刚需
    let cid = e.currentTarget.dataset.id;
    wx.switchTab({
      url: `/pages/category/category?cid=${cid}`,
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
