const BASE_URL = 'http://localhost:3000';
const request = (url, data = {}) => { // 地址  data 数据
    let _url = BASE_URL + url;
    return new Promise((resolve, reject) => {
        wx.request({
          url: _url,
          method: 'get',
          data: data,
        //   请求头 + 请求体  data 
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          success(res) {
              resolve(res.data)
          }
        })
    })
}

export default {
    getBanners() {
        return request('/banner');
    },
    getNewSong() {
      return request('/personalized/newsong')
    },
    getsongsheet(data) {
      return request('/top/playlist', data)
    },
    getRecommendMV() {
      return request('/personalized/mv');
    },
    getSonger() {
      return request('/toplist/artist');
    },
    getDjList() {
      return request('/dj/catelist');
    }
}
