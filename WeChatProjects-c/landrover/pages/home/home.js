//  require 引入文件 输入url
const db = require('../../assets/db')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides:db.slides,
  },
  testDrive() {
    wx.showToast({
      title: '你是傻逼嘛？',
    })
  },
  readMore(event) {
    console.log(`../vehicles/index?id=${event.target.dataset.id}`)
    wx.navigateTo({
      url: `../vehicles/index?id=${event.target.dataset.id}`,
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