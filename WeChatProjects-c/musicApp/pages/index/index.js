// index.js
// 获取应用实例
// common.js
// const { getBanners } = require('../../api/api');
import API from '../../api/api'
// console.log(API.getBanners)
const app = getApp()
let half = 0,
  quarter = 0;
Page({
  data: {
    slideOffset: 0,
    banners:[],
    newsong: [],
    newsong_index: [],
    activeIndex: 0,
    recommend_MV: []
  },
  changeline(e) {
    let current = e.detail.current;
    // console.log(current);
    if (current == 0) {
      this.setData({
        slideOffset: quarter - 14
      })
    } else {
      this.setData({
        slideOffset: quarter - 14 + half
      })
    }

  },
  go_search() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  onLoad() {
    this.resetSlider();
    this.loadBanners();
    this.getNewSong();
    this.songsheet();
    this.getRecommendMV();
    // this.getDjRadios();
    // this.getNewEst();
    // this.getProgramRecommend();
  },
  async getRecommendMV() {
    const res = await API.getRecommendMV();
    if (res.code == 200) {
      this.setData({
        recommend_MV: res.result.slice(0, 4)
      })
    }
  },
  async songsheet() {
    let res = await API.getsongsheet({
      order: 'hot'
    });
    if (res.code == 200) {
      this.setData({
        songsheet: res.playlists,
        songsheet_index: res.playlists.slice(0, 6)
      })
    }
  },
  async getNewSong() {
    let res = await API.getNewSong();
    // console.log(song);
    if (res.code == 200) { // 请求成功
      this.setData({
        newsong: res.result,
        newsong_index: res.result.slice(0, 6)
      })
    }
  },
  resetSlider() {
    wx.getSystemInfo({
      success:(res) => {
        half = res.windowWidth / 2;
        // console.log(half);
        quarter = half / 2;
        // console.log(half, quarter);
        this.setData({
          slideOffset: quarter - 14
        })
      }
    })
  },
  async loadBanners() {
    let res = await API.getBanners();
    console.log(res, '------');
    if (res.code == 200) {
      this.setData({
        banners: res.banners
      })
    }
    // this.setData({
    //   banners:
    // })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
