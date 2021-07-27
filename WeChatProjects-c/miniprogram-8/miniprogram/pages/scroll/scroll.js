// pages/scroll/scroll.js
let arr = new Array(20).fill(1); // 只返回 20条 
console.log(arr.length, '-----------')
// tolower
arr = arr.map((item, index) => {
  // console.log(item, index)
  return index + 1;
})


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: arr,
    scrollTop:100
  },
  onPullDownRefresh(){
    this.setData({
      items: arr,
      scrollTop:0
    })
  },
  // refresh() {
  //   this.setData({
  //     items: arr
  //   })
  // },
  loadMore() {
    // console.log('再来点数据')
    let lastIndex = this.data.items[this.data.items.length - 1];
    console.log(lastIndex);
    let newArr = new Array(20).fill(1);
    newArr = newArr.map((item, index) => lastIndex + index + 1)
    this.setData({
      items: this.data.items.concat(newArr)
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
