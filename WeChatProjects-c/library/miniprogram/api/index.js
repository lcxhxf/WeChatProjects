const BASE_URL = 'http://localhost:1314';

let request = {
  get(url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        success: (res) => {
          resolve(res.data)
        }
      })
    })
  }
}

const getBookList = () => {
  let url = BASE_URL + '/books';
  return request.get(url);
}

const getBookById =(id) => {
  let url = BASE_URL + '/books/' + id;
  return request.get(url);
}

module.exports = {
  getBookList,
  getBookById
}