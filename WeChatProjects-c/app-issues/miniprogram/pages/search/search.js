// pages/search/search.js
const db = wx.cloud.database();
const posterCollection = db.collection("poster")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    results: []
  },
  onSearch(e) {
    wx.showToast({
      title: '查询中',
      icon: 'loading'
    })
    let keyword = e.detail;
    // console.log(keyword);
    if (!keyword.trim()) {
      wx.showToast({
        title: '请输入要搜索的关键字',
        icon: 'error'
      })
      return ;
    }

    posterCollection
      .where({
        title: db.RegExp({
          regexp: keyword,
          options: 'i'
        })
      })
      .orderBy('ts', 'asc')
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          results: res.data
        })
      })

  },
  onCancel() {
    this.setData({
      value: '',
      results: []
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
