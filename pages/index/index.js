//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    // 当前用户id
    user:null,
    hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),//用户是否授权
    canIUse:false,
    // 是否是司机
    driver: app.globalData.driver,
    // 请求失败提示
    msg:''
  },
  // 默认加载
  onLoad: function (e){
    this.load()
  },
  // 点击重试
  load:function(e){
    // 登录
    this.login()
  },
  // 手动定位
  position:function(){
    this.selectComponent("#maps").getPositionAuto()
  },
  // 登录
  login:function(){
    var that = this;
    // 登录
    wx.login({
      success: res => {
        // var appId = 'wx9616cb5f7cfbe837';
        // var secret = '2797b46b7d86f643b6235b2a53312663';
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        app.wxRequest(
          "POST",
          app.globalData.url+'/login/Init',
          {"code":res.code},
          function(e){
            console.log(e)
            if("1" === e.data){
              // 是否是司机
              app.globalData.driver = true
              that.setData({driver:app.globalData.driver})
              // 登陆人uuid
              app.globalData.user = e.uuid
              // 加载当前定位
              that.selectComponent("#maps").getPosition()
            }else{
              that.setData({msg:"登录错误："+e.message})
              app.globalData.driver = false
              that.setData({driver:false})
              
              app.globalData.user = null
              that.setData({canIUse:false})
            }
          },
          function(e){
            that.setData({canIUse:false})
          })
        }
      })
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
