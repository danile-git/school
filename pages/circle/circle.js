//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"新闻中心",
    baseUrl: "http://localhost:8080/orange",
    headerImg:app.globalData.baseUrl + "/images/tt1.png",
    order: [{ "img": "/images/h3.jpg", "desc": "通过漫画表现不同场景的日常交际，培养儿童早期听说、阅读、想象能力。", "time": "2019年5月4日", "url": "http://www.baidu.com" }, { "img": "/images/h1.png", "desc": "通过漫画表现不同场景的日常交际，培养儿童早期听说、阅读、想象能力。", "time": "2019年5月4日", "url":"https://weibo.com/?c=spr_qdhz_bd_360jsllqcj_weibo_001" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  navurl:function(e){
    wx.navigateTo({
      url:"/pages/nav/nav?url="+e.currentTarget.dataset.url,
    })
  }
})