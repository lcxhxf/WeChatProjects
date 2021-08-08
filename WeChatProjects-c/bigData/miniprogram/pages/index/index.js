const db = wx.cloud.database();
const chinaCollection = db.collection('china');
const app = getApp()
const { envList } = require('../../envList.js')
const limit = 20;
Page({
  data: {
    cities:[],
    total:0,
    page:1,
    showUploadTip: false,
    powerList: [{
      title: '云函数',
      tip: '安全、免鉴权运行业务代码',
      showItem: false,
      item: [{
        title: '获取OpenId',
        page: 'getOpenId'
      },
      //  {
      //   title: '微信支付'
      // },
       {
        title: '生成小程序码',
        page: 'getMiniProgramCode'
      },
      // {
      //   title: '发送订阅消息',
      // }
    ]
    }, {
      title: '数据库',
      tip: '安全稳定的文档型数据库',
      showItem: false,
      item: [{
        title: '创建集合',
        page: 'createCollection'
      }, {
        title: '更新记录',
        page: 'updateRecord'
      }, {
        title: '查询记录',
        page: 'selectRecord'
      }, {
        title: '聚合操作',
        page: 'sumRecord'
      }]
    }, {
      title: '云存储',
      tip: '自带CDN加速文件存储',
      showItem: false,
      item: [{
        title: '上传文件',
        page: 'uploadFile'
      }]
    }, {
      title: '云托管',
      tip: '不限语言的全托管容器服务',
      showItem: false,
      item: [{
        title: '部署服务',
        page: 'deployService'
      }]
    }],
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },
  async onLoad() {
    // await 会等着右侧的promise执行完成
    let {data} = await chinaCollection
    .where({
      // gdp: db.command.gt(3000)
      // city: db.command.eq('南昌')
      city:db.command.in(['南昌','北京'])
      // province:db.command.eq("广东"),
      // gdp:db.command.gt(3000).and()
    })
    .orderBy('gdp', 'asc')
    .get()
    let {total} = await chinaCollection.count();
    console.log(data);
    console.log(total);
    this.setData({
      cities:data,
      total:total
    })
  },
  async addMore() {
    if(this.data.cities.length >= this.data.total) {
      wx.showToast({
        title: '已经没有更多数据了',
      })
      return
    }
    wx.showLoading({
      title: '正在加载中...',
    })
    let {data} = await chinaCollection
    .skip(this.data.page * limit)
    .limit(limit)
    .get()
    wx.hideLoading()
    
    this.setData({
      cities:[...this.data.cities, ...data],
      page: ++this.data.page
    })
     
    console.log(data, '------');
  },
  async onPullDownRefresh() {
    this.setData({
      page:1
    },async () => {
      let {data} = await chinaCollection.get();
    console.log(data);
    this.setData({
      cities:data,
    })
    }
    )
  },
  // async onLoad() {
  //   let {data:arr} = await chinaCollection.get();
  //   let {total} = await chinaCollection.count();
  //   console.log(arr);
  //   console.log('猪');
    // chinaCollection
    // .get()
    // .then(res =>{
    //   arr = res.data;
    //   console.log(arr);
    //   return chinaCollection.count()
    // })
    // .then(res => {
    //   console.log(res);
    //   total = res.total;
    //   console.log(res.total);
    // })
    //异步写法
    // .get({
    //   success: function(res) {  
    //     console.log(res);
    //   }
    // }) 
    //一个promise的实例  同步写法
    // .then(res =>{
    //   console.log(res);
    // })
  // },
  onClickPowerInfo(e) {
    const index = e.currentTarget.dataset.index
    const powerList = this.data.powerList
    powerList[index].showItem = !powerList[index].showItem
    if (powerList[index].title === '数据库' && !this.data.haveCreateCollection) {
      this.onClickDatabase(powerList)
    } else {
      this.setData({
        powerList
      })
    }
  },

  onChangeShowEnvChoose() {
    wx.showActionSheet({
      itemList: this.data.envList.map(i => i.alias),
      success: (res) => {
        this.onChangeSelectedEnv(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },

  onChangeSelectedEnv(index) {
    if (this.data.selectedEnv.envId === this.data.envList[index].envId) {
      return
    }
    const powerList = this.data.powerList
    powerList.forEach(i => {
      i.showItem = false
    })
    this.setData({
      selectedEnv: this.data.envList[index],
      powerList,
      haveCreateCollection: false
    })
  },

  jumpPage(e) {
    wx.navigateTo({
      url: `/pages/${e.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
    })
  },

  onClickDatabase(powerList) {
    wx.showLoading({
      title: '',
    })
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.selectedEnv.envId
      },
      data: {
        type: 'createCollection'
      }
    }).then((resp) => {
      if (resp.result.success) {
        this.setData({
          haveCreateCollection: true
        })
      }
      this.setData({
        powerList
      })
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      this.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    })
  }
})
