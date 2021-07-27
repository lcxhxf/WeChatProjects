const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 'main',
    mainHeaderMaxHeight: '80rpx',
    groupArray: ["关注动态", "所有动态"],
    groupArrayIndex: 0,
    userId: ''
  },
  onSearchTap(e) {
    wx.navigateTo({
      url: '/pages/search-user/search-user',
    })
  },
  onAddPosterTap() {
    wx.navigateTo({
      url: '/pages/add-poster/add-poster',
    })
  },
  bindGroupPickerChange(e) {
    console.log(e);
    const index = e.detail.value
    this.setData({
      groupArrayIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload-----');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady-----');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('show......');
    // wx.showLoading({
    //   title: '加载中',
    //   mask: true
    // })
    this.getuserId();
  },
  //用户身份
  getuserId() {
    let that = this;
    let val = this.data.userId || wx.getStorageInfoSync('userId');
    console.log(val, '=====');
    if(val) {
      return(val)
    }
    wx.getSetting({
      success(res)  {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            withCredentials: true,
            success(userData){
              //  console.log(userData);
              wx.setStorageSync('userId', userData.signature)

              db.collection('users')
              .where({
                userId: userData.signature
              })
              .get()
              .then(searchResult => {
                if(searchResult.data.length == 0){
                  db.collection("users")
                  .add({
                    data:{
                      userId:userData.signature,
                      date:db.serverDate(),
                      name:userData.userInfo.nickName,
                      gender:userData.userInfo.gender
                    }
                  })
                  .then(res => {
                    console.log(res);
                    wx.showToast({
                      title: '创建用户成功',
                    })
                  })
                }
              })

              that.setData({
                userId: userData.signature
              })
              wx.hideLoading({
                success: (res) => { },
              })
            }
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide......');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload......');
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