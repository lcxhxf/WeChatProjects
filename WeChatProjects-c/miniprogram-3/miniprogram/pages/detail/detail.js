// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    hiddenLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let id = options.id;
    setTimeout(() => {
      this.setData({
        hiddenLoading: true,
        article: {
          id: 1,
          title: '你是猪嘛？',
          author:'猪头头头头头头头头头头头头头头头头头头头头头头头头头头头头头头头头头头',
          date:'124565432',
          content: '近数十年来，精准手术逐渐成为手术操作的方向及未来。借助医疗成像及人工智能技术进步，围术期管理（从临床评估、术前规划到手术操作及术后评估）成为更准确及可量化的过程，能够以最小的手术创伤实现最大的病变移除。在精准手术的解决方案中，手术机器人及精准手术规划解决方案为两大范畴，包括手术机器人、精准手术规划解决方案。'
        }
      })
      // console.log(this.data.article.title, '-------');
      wx.setNavigationBarTitle({
        // this 指向？ 
        title: this.data.article.title
      })
    }, 2000);
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
