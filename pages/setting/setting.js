//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"设置",
    baseUrl: app.globalData.baseUrl,
    userInfo:{},
    gender:[],
    headerImg:app.globalData.baseUrl + "/images/tt1.png",
    order: [{ "img": "/images/books/starter1.png", "title": "EEC Starter①", "desc": "通过漫画表现不同场景的日常交际，培养儿童早期听说、阅读、想象能力。", "time": "2019年5月4日" }, { "img": "/images/books/starter1.png", "title": "EEC Starter①", "desc": "通过漫画表现不同场景的日常交际，培养儿童早期听说、阅读、想象能力。", "time": "2019年5月4日" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      userInfo: app.globalData.userInfo
    })
    var flg=this.data.userInfo.gender==1?true:false;
    var _gender = [{ 'name': '男', 'value': '1', 'checked': flg }, { 'name': '女', 'value': '0', 'checked': !flg },];
    this.setData({
      gender: _gender
    })
  }
})