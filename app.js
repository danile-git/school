//app.js
App({
  data:{
data:{
    "openid":"osnCH5P9GZ0S3wXDC_h0lFksEy6c",
    "session_key":"x631eq7v6fTj9gAC7DIgRw=="
}
  },
  onShow:function(){
    console.log("show");
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        //http://orange.nat100.top
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // wx.request({
        //   url: 'http://orange.nat100.top/getopenid', //接口地址
        //   data: { code: res.code },
        //   header: {
        //     'content-type': 'application/json' //默认值
        //   },
        //   success: function (res) {
        //     console.log(res)
        //     wx.setStorageSync('openid', res.openid)
        //     console.log(res.data)
        //   }
        // });
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    baseUrl: "http://orange.nat100.top/orange",
    appName: "橘子树英语"
  }, alert: function (e) {
    var toast = {
      title: e.msg,
      image: '/images/error.png',
      duration: 2000,
      mask: true
    };
    switch (e.code) {
      case "1":
        toast.image = '';
        toast.icon = 'success';
        break;
    }
    wx.showToast(toast);
  }
})