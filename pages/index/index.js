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
    driver: false
  },
  // 默认加载
  onLoad: function (e){
    // 加载当前定位
    this.selectComponent("#maps").getPosition()
    // 判断是否是司机
    this.setData({driver:app.globalData.driver})
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
