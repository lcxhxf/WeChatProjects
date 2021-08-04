module.exports = {
  getRecommendList() {
    console.log('-------');
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'http://localhost:3000/personalized',
        success:(res) => {
          resolve(res)
          // console.log(res);
          // this.setData({
          //   recommendList: res.data.result
          // })
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  getSearchResult(keyword) {
   return new Promise((resolve, reject) => {
     wx.request({
       url: 'http://localhost:3000/search?keywords='+keyword,
       success:(res) => {
        resolve(res)
       },
       fail:(err) => {
         reject(err)
       }

     })
   })
  }
}