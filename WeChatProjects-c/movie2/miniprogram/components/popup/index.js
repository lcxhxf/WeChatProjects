// components/popup/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    content: String,
    btn_no: String,
    btn_ok: String
  },    

  /**
   * 组件的初始数据
   */
  data: {
    own: 1,
    flag: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPopup() {
      this.setData({
        flag: false
      })
    },
    _error() {
      console.log('-----');
      // 向外发送消息
      this.triggerEvent("error", {msg: '111'})
    },
    _success() {
      console.log('----....');
    }
  }
})
