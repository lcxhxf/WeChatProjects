// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')
const https = require('https'); // node 内置http请求库
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  // 1. 如何 拿到 传过来的isbn 
  let  { isbn } = event
  isbn = '3329540'
  let url = `https://book.douban.com/subject/${isbn}/`;
  // console.log(event, context, '---------')
  // 打开一个网页？ 
  const p = new Promise((resolve, reject) => {
    https
    .get(url, res => {
      let html = '';
      res.on('data', function(chunk) {
        html += chunk;
      })
      res.on('end', function() {
        resolve(html);
      })
    })
  });
  let html = await p;
  const $ = cheerio.load(html)
  const title = $('#wrapper h1 span').text()
  return {
    html,
    title
  }
}
