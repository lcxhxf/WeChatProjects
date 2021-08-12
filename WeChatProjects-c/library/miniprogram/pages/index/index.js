const { getBookList } = require('../../api/index'); //分层
const app = getApp();
Page({
  data:{
    books:[]
  },
  async onLoad() {
    let books = await getBookList();
    this.setData({
      books
    })
  },
  viewItem(event) {
    console.log(event);
    var { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  }
})