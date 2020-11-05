//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),//用户是否授权
    // 是否登陆成功
    canIUse:false,
    // 是否是司机
    driver: app.globalData.driver,
    // 请求失败提示
    msg:''
  },
  // 默认加载
  onLoad: function (e){
    // this.load()
    this.setData({canIUse:true})
  },
  // 选择位置信息
  // chooseLocation:function(e){
  //   wx.chooseLocation({
  //     success:function(res){
  //       console.log(res)
  //     },
  //     fail:function(err){
  //       console.log(err)
  //     }
  //   })
  // },
  // 点击重试
  load:function(e){
    // 登录
    this.login()
  },
  // 手动定位
  position:function(){
    this.selectComponent("#maps").getPosition();
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
            if("0" === e.code){
              that.setData({canIUse:true})
              let d = e.data;
              // 截取是否是司机的标识
              let d2 = d.substring(0,1);
              // 1 客户  2 司机
              app.globalData.driver = (d2 === '1' ? false : true)
              that.setData({driver:app.globalData.driver})
              // 保存token
              app.globalData.token = d.substring(1);
              // 用户id
              app.globalData.userId = e.id
              // 加载当前定位
              that.position()
            }else{
              that.setData({msg:"登录错误："+e.message})
              that.setData({canIUse:false})
            }
          },
          function(e){
            that.setData({msg:"服务器连接失败"})
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
