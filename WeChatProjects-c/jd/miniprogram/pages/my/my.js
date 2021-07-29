// miniprogram/pages/my/my.js
const { my } = require('../../config/config.js');
const { collection, order, property, game, tool } = my;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collection,
    order,
    property,
    game,
    tool
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   "collection": [{
    //     "id": 1,
    //     "num": "99",
    //     "title": "商品收藏"
    //   },
    //   {
    //     "id": 2,
    //     "num": "22",
    //     "title": "店铺收藏"
    //   },
    //   {
    //     "id": 3,
    //     "num": "100+",
    //     "title": "我的足迹"
    //   }]
    // })
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