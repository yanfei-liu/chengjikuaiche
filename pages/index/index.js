//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),//用户是否授权
    // 是否是司机
    driver: app.globalData.driver
  },
  // 默认加载
  onLoad: function (e){
    // 加载当前定位
    this.selectComponent("#maps").getPosition()
    this.login()
  },
  // 登录
  login:function(){
    var that = this;
    // 登录
    wx.login({
      success: res => {
        var appId = 'wx9616cb5f7cfbe837';
        var secret = '2797b46b7d86f643b6235b2a53312663';
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        app.wxRequest(
          "POST",
          app.globalData.url+'/login/Init',
          // {"code":res.code},
          {"code":"2"},
          function(e){
            if("1" === e.data){
              app.globalData.driver = true
              app.globalData.userInfo = e.openId
              that.setData({driver:app.globalData.driver})
            }else{
              app.globalData.driver = false
              app.globalData.userInfo = null
              that.setData({driver:false})
            }
          },
          function(e){
            console.log(e)
          })
        }
      })
  },
  // 手动定位
  position:function(e){
    // 加载当前定位
    this.selectComponent("#maps").getPosition()
  },
  // 跳转至其它页面
  goToViews: function(e){
    let i = e.currentTarget.dataset.id;
    if(i == 1){
      wx.navigateTo({
        url: '/pages/call/call',
      })
    }else if(i == 2){
      wx.navigateTo({
        url: '/pages/my/my',
      })
    }else if(i == 3){
      wx.navigateTo({
        url: '/pages/other/other',
      })
    }else{

    }
  }
})
