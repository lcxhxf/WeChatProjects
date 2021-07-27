// miniprogram/pages/add/add.js
// 数据库在云端
// 微信云数据库 远程文件 
const db = wx.cloud.database() //连接数据库
// mongdb数据库（文档型的数据库）     collection=table
const productsCollection = db.collection('products');
const companiesCollection = db.collection('products');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addData() {
    productsCollection.add({
      data: {
        title: "Product" + (Math.random() * 100).toString(),
        image: "",
        tags: ["tag123", "tag23"],
        price: Math.random() * 100,
        color: 'pink',
        view: Math.floor(Math.random() * 10)
      }
    })
    // let huawei = {
    //   name: '华为',
    //   logo: 'https://img2.baidu.com/it/u=1694646572,1530297597&fm=26&fmt=auto&gp=0.jpg',
    //   adress: '深圳龙岗区'
    // }
    // companiesCollection
    // .add({
    //   data: huawei
    // })
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