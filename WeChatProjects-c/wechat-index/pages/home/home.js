// pages/home/home.js
const db = require('../../assets/db/db.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: db.List,
    inputShowed: false,
    inputValue: ''
  },
  doSearch() {
    wx.showToast({
      title: this.data.inputValue
    })
  },
  inputTyping(event) {
    this.setData({
      inputValue: event.detail.value
    })
  },
  clearInput() {
    this.setData({
      inputValue: ''
    })
  },
  showInput() {
    this.setData({
      inputShowed: true
    })
  },
  hideInput() {
    this.setData({
      inputShowed: false
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
