// pages/heros/heros.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heros:[
      {
        "id": "2",
        "avatar": "https://game.gtimg.cn/images/lol/act/img/champion/Morgana.png",
        "name":"莫甘娜"
      },
      {
        "id": "3",
        "name": "维恩",
        "avatar":"https://game.gtimg.cn/images/lol/act/img/champion/Vayne.png"
      }, 
      {
        "id": 4,
        "name": "艾希",
        "avatar":"https://game.gtimg.cn/images/lol/act/img/champion/Ashe.png"
      },
      {
        "id": "1",
        "name": "盖伦",
        "avatar":"https://game.gtimg.cn/images/lol/act/img/champion/Garen.png"
      } 
    ]
  },
  gotoDetail(ev) {
    // console.log('---------')
    // console.log(ev);
    let id = ev.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

