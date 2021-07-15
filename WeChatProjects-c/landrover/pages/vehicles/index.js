// miniprogram/pagesehicles/index.js
const db = require("../../assets/db.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entry: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = parseInt(options.id); // Number(options.id) 强制类型转换
    console.log(id)
    // const id = 2;
    const vehicles = db.vehicles;
    // for (let vehicle of vehicles) {
    //   // console.log(vehicle, '------');
    //   console.log(vehicle.id, id)
    //   if (vehicle.id === id) {
    //     this.setData({
    //       entry: vehicle
    //     })
    //   }
    // }
    let vehicle = vehicles.find(item => item.id === id)
    this.setData({
      entry: vehicle
    })
    console.log(vehicle);
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
