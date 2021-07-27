const db = wx.cloud.database();
const posterCollection = db.collection("poster")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'',
    remainLen:'0',
    filedId:'',
    picUrl:''
  },
  doSubmit() {

  },
  onImageTap() {
    wx.chooseImage({
      count: 1,
      success:(res) => {
        // console.log(res);
        const tempFilePath = res.tempFilePaths[0]
        // 云端
        wx.cloud.uploadFile({
          cloudPath:tempFilePath.replace('//', '/').replace(':', ""),
          filePath:tempFilePath
        })
        .then(res => {
          this.setData({
            picUrl:res.fileId
          })
          console.log(res);
          this.setData({
           
            fileId: res.fileId
          })
        })
      }
    })
  },
  onSendTap() {
    const posterData ={
      authorId: this.data.userId,
      msg: this.data.text,
      photoId: this.data.filedId,
      date: db.serverDate()
    }
    posterCollection.add({
      data:{
        posterData
      }
    })
    .then(res => {
      console.log(res);
      wx.showToast({
        title: '发送成功',
      })
    })
  },
  bindTextInput(e) {
    // console.log(e);
    const t = e.detail.value;
    this.setData({
      text: t,
      remainLen: t.length
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
    this.setData({
      userId: wx.getStorageInfoSync('userId')
    })
    // console.log(wx.getStorageInfoSync('userId')); 
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