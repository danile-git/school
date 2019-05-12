//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"新闻中心",
    baseUrl: "http://orange.nat100.top",
    headerImg:app.globalData.baseUrl + "/images/tt1.png",
    order: []
  },
// { "img": "/orage/images/h3.jpg", "desc": "通过漫画表现不同场景的日常交际，培养儿童早期听说、阅读、想象能力。", "time": "2019年5月4日", "url": "http://www.baidu.com" }, { "img": "/images/h1.png", "desc": "通过漫画表现不同场景的日常交际，培养儿童早期听说、阅读、想象能力。", "time": "2019年5月4日", "url": "https://weibo.com/?c=spr_qdhz_bd_360jsllqcj_weibo_001" }
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNews(0,1);
  },
  getNews:function(index,count){
  var  $this=this;
    wx.request({
      url: this.data.baseUrl + '/news', //仅为示例，并非真实的接口地址
      data: { "i":index, "c": count },
      method: "GET",
      dataType: "json",
      header: {
        'content-type': 'application/json' // 默认值
      }, complete: function () {

      },
      success: function (res) {
        $this.setData({
          order: $this.data.order.concat(res.data)
        })
        console.log(res.data)
       // app.alert({ "msg": "succ", "code": "1" });
        //console.log(res.data)
      }, fail: function (res) {
        app.alert({ "msg": "预约失败,请检查网络", "code": "0" });
      }
    })
  },
  getNewData:function(){
    this.getNews(1,1)
  }
  ,
  navurl:function(e){
    wx.navigateTo({
      url:"/pages/nav/nav?url="+e.currentTarget.dataset.url,
    })
  }
})