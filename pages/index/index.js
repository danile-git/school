//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: app.globalData.appName,
    userInfo: {},
    baseUrl: app.globalData.baseUrl,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    headerImg: [app.globalData.baseUrl + "/images/tt1.png", app.globalData.baseUrl+"/images/tt2.png"],
      header: [{
        "name": "Starter", "id": "starter", "books": [{
          "id": "starter1",
          "img": "images/books/starter1.png",
          "title": "EEC Starter①",
          "desc": "通过漫画表现不同场景的日常交际，培养儿童早期听说、阅读、想象能力。"
        }]
      }, { "name": "初级", "id": "e1st", "books": [] }, { "name": "中级", "id": "e2nd", "books": [] }, { "name": "高考", "id": "e4th", "books": [] }, { "name": "高级", "id": "e3rd", "books": [] }, { "name": "雅思/托福", "id": "e5th", "books": [] }],
     books: [{
      "id":"starter",
      "books":[ {
      "id": "starter1",
      "img": "images/books/starter1.png",
      "title": "EEC Starter①",
      "desc": "通过漫画表现不同场景的日常交际，培养儿童早期听说、阅读、想象能力。"
    },
    {
      "id": "starter2",
      "img": "images/books/starter2.png",
      "title": "EEC Starter②",
      "desc": "字母认知及课后习题、童话剧，多方面训练学生句型输出及展示能力。"
    }
    ]}
    ],
    tabScroll: 0,
    currentTab: 0,
    windowHeight: '',
    windowWidth: ''

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },onLoad: function () {
    // for (var idx in this.data.headerImg) {
    //   var img = this.data.headerImg[idx];
    //   this.data.headerImg[idx] = this.data.baseUrl + img;
    //   console.log(this.data.headerImg[idx]);
    // }
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        windowHeight: res.windowHeight,
        windowWidth: res.windowWidth
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({ //修改标题文字
      title:app.globalData.appName
    })
  },
  clickMenu: function (e) {
    var current = e.currentTarget.dataset.current; //获取当前tab的index
    var tabWidth = this.data.windowWidth;  // 导航tab共5个，获取一个的宽度
    this.setData({
      tabScroll: (current - 2) * tabWidth //使点击的tab始终在居中位置
    })
    if (this.data.currentTab == current) {
      return false
    } else {
      this.setData({ currentTab: current});
    }
  },
  changeContent: function (e) {
    var current = e.detail.current // 获取当前内容所在index,文档有
    var tabWidth = this.data.windowWidth / 5;
    console.log(current);
    this.setData({
      currentTab: current,
      tabScroll: (current - 2) * tabWidth
    })
  }
})
