//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    appId:'wx9616cb5f7cfbe837',
    secret:'2797b46b7d86f643b6235b2a53312663',

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    authSetting: false,//用户是否授权
    driver:true,//是否是司机
  },
  // 默认加载
  onLoad: function (){
    var t = this;
    // 打开后就申请授权登录
    //查看是否授权
    wx.getSetting({
        success: function(res) {
          if (res.authSetting['scope.userInfo']) {
            // 用户授权了
            t.setData({authSetting:res.authSetting['scope.userInfo']});
            // 获取当前定位
            t.selectComponent("#maps").getPosition()
          } else {
            //用户没有授权
            t.setData({authSetting:false});
          }
        }
      });
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
  },
  // 用户授权登陆
  grant:function(e){
    var t = this
    // 获取临时code
    wx.login({
      success (res) {
        if (res.code) {
          // 获取openId等敏感信息
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid='
            +t.data.appId+'&secret='
            +t.data.secret+'&js_code='
            +res.code+'&grant_type=authorization_code',
            // data: {
            //   code: res.code
            // },
            success (res){
              console.log(res)
            },
            fail (err){

            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
})
