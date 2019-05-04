//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [{ "text": "已预约", "img": "/images/pview.png", "url": "/pages/prview/prview" }, { "text": "朋友圈", "img": "/images/circle.png", "url": "/pages/prview/prview" }, { "text": "新闻", "img": "/images/news.png", "url": "/pages/news/news" }, { "text": "设置", "img": "/images/set.png", "url": "/pages/prview/prview" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  mitemClick:function(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  }
})