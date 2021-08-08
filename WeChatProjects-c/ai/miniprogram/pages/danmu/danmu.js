// miniprogram/pages/danmu/danmu.js
// const { getRandomColor } = require('../../utils/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    controls: true,
    loop: false,
    showprogress: true,
    autoplay: false,
    muted: false,
    // time: 0,
    video: {
      poster: 'https://tcb-1251009918.cos.ap-guangzhou.myqcloud.com/demo/video.png',
      src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      danmuList: [
        {
          text: '~~~',
          color: '#ff0000',
          time: 3
        },
        {
          text: 'dedededededede',
          color: '#00ffff',
          time: 3
        }
      ]
    }
  },
  sendDanmu(e) {
    // console.log(e);
    const danmu = e.detail.value.danmu;
    const time = this.currentTime;
    this.videoCtx.sendDanmu({
      text: danmu,
      color: getRandomColor(),
      time: Math.ceil(time)
    })
  },
  gotoIndex() {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  playVideo() {
    // console.log(this.storageCurrentTime);
    if(this.storageCurrentTime) {
      this.videoCtx.seek(this.storageCurrentTime)
    }
    this.videoCtx.play()
  },
  pauseVideo() {
    this.videoCtx.pause()
  },
  stopVideo() {
    this.videoCtx.stop()
  },
  seekVideo() {
    this.videoCtx.seek(this.currentTime)
  },
  playRate() {
    this.videoCtx.playbackRate(2.0)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindtime(e) {
    // console.log(e.detail);
    // this.setData({
    //   time: e.detail.currentTime
    // })
    this.currentTime = e.detail.currentTime
  },
  onLoad: function (options) {
    this.getPlayedTimeByStorage()
    this.videoCtx = wx.createVideoContext('myVideo')
    console.log(options,this.videoCtx);
  },
  getPlayedTimeByStorage() {
    this.storageCurrentTime = wx.getStorageSync('playtime')?wx.getStorageSync('playtime'):0
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
    // console.log(this.currentTime);
    wx.setStorageSync('playtime', this.currentTime)
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
