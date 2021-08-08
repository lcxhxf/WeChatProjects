// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
const chinaCollection = db.collection('china');


// 云函数入口函数
exports.main = async (event, context) => {
  const {OPENID} = cloud.getWXContext()
  // const {data} = await chinaCollection.get()
  const result = await chinaCollection
    .add({
      data:[
        {
          city:'南昌'
        },
        {
          city:'九江'
        },
        {
          city:'上饶'
        },
        {
          city:'吉安'
        }
      ]

    })
    const {data} = await chinaCollection.get()
  return {
    event,
    china:data,
    openid:OPENID
    
  }
}