// pages/gauge/gauge.js
// es6时代的模块化
import * as echarts from '../../ec-canvas/echarts';
const initChart = async (canvas, width, height, dpr) => {
  const chart = echarts.init(canvas, null, {
    width, 
    height,
    dpr
  })
  canvas.setChart(chart);
  let option = {
    backgroundColor: '#123123',
    color:['#37A2DA', '#32C5E9', '#67E0E3'],
    series:[{
      name: '业务指标',
      type: 'gauge',
      detail: {
        format: '{value}%'
      },
      axisLine:{
        show: true,
        lineStyle: {
          width: 30,
          shadowBlur: 0,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      data: [{
        value: 40,
        name: '完成率'
      }]
    }]
  }
  chart.setOption(option, true);
  return chart
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
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
