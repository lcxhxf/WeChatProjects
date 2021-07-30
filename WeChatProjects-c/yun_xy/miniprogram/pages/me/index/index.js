// pages/me/index/index.js
const db = wx.cloud.database();
const _ = db.command;
const userCollection = db.collection('users');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogged: false,
    userName:'',
    userImg:''
  },
  getUserInfo(e) {
    console.log(userName, '-------');
    console.log(e);
    const { nickName:userName, avatarUrl:userImg } = e.detail.userInfo;
    // console.log(e.detail.signature, '+++++++++++');
    let openId = e.detail.signature;
    console.log(userName, '+++++++++++++');
    this.setData({
      // userName,
      // userImg,
      isLogged: true
    })
    wx.setStorageSync('userName', userName);
    console.log(userName, '!!!!!!!!!!!!!!!!!');
    wx.setStorageSync('userImg', userImg);
    wx.cloud.callFunction({
      name:'getOpenIdTest',
      success:(res) => {
        console.log(res);
      }
    })
    wx.setStorageSync('openId', openId);
    console.log(userName)
    // add user 
    userCollection
      .where({
        _openid: openId
      })
      .get() // 异步写法 回调
      .then(res => {
        console.log(res);
        if (!res.data.length) {
          let userId = this.getUserId();
          userCollection
            .add({
              data: {
                userName,
                userImg,
                userId
              }
            })
            .then(res => {
              // console.log()
              wx.showToast({
                title: '用户新增成功'
              })
            })
        } else {
          console.log('已存在');
        }
      }) // 同步写法 高级
  },
  getUserId() {
    // users表的id 用户有一定的意义  vip 000
    let firstW = "yf";
    let userId = `${firstW}${Date.now() + (Math.random() * 1e5).toFixed(0)}`;
    wx.setStorageSync('userId', userId);
    return userId;
  },
  gotoMyTopic(e) {
    console.log(e);
    const userId = e.currentTarget.dataset.userid;
    console.log(userId)
    wx.navigateTo({
      url: '../myTopic?userId=' + userId
    })
  },
  gotoMyComment(e) {
    const userId = e.currentTarget.dataset.userid;
    console.log(userId)
    wx.navigateTo({
      url: '../myComment?userId=' + userId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let openId = wx.getStorageSync('openId'),
      userName = wx.getStorageSync('userName'),
      userImg = wx.getStorageSync('userImg'),
      userId = wx.getStorageSync('userId');
    if (!openId) return 
    this.setData({
      isLogged: true,
      userName,
      userImg,
      userId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
