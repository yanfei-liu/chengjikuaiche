//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),//用户是否授权
    driver:false,//是否是司机
  },
  // 默认加载
  onLoad: function (e){
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
        url: '/pages/other/other',
      })
    }else if(i == 3){
      wx.navigateTo({
        url: '/pages/other/other',
      })
    }else{

    }
  }
})
