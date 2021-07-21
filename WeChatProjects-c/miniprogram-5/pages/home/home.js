// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gotoDetail: function(event) {
      wx.navigateTo({
        url: '/pages/detail/detail'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        hiddenLoading: true,
            articles:[
              {
                id:'',
                title:'男孩',
                pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F31%2F20200531161310_nqxra.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628837771&t=2eb78cfa53fca476ae239be9d0940f85'
                
              },
              {
                id:'',
                title:'女孩',
                pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F01%2F20200601091840_ntgrh.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628837320&t=4714da7b37fdef29f30dbe6f7d76c27b'
                
              },
              {
                id:'',
                title:'Quora精选：为什么聪明人总能保持冷静',
                pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F01%2F20200601091840_ntgrh.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628837320&t=4714da7b37fdef29f30dbe6f7d76c27b'
                
              },
              {
                id:'',
                title:'Quora精选：为什么聪明人总能保持冷静',
                pic:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F01%2F20200601091840_ntgrh.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628837320&t=4714da7b37fdef29f30dbe6f7d76c27b'            
          },        
        ]
      })
    }, 2000)
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