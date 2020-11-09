//app.js
App({
  /**
  * 封装wx.request请求
  * method： 请求方式
  * url: 请求地址
  * data： 要传递的参数
  * callback： 请求成功回调函数
  * errFun： 请求失败回调函数
  **/
 wxRequest:function(method, url, data, callback, errFun) {
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': method == 'GET'?'application/json':'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'LTokenD':this.globalData.token
      },
      dataType: 'json',
      success: res => {
        wx.hideLoading()
        if(res.statusCode == 200){
          callback(res.data);
        }else{
          console.log(res)
          this.alter2("服务器连接失败",'none')
        }
      },
      fail: err =>{
        wx.hideLoading()
        this.alter2("服务器连接失败",'none')
        console.log(err)
        errFun(err);
      }
    })
  },
  wxRequest2:function(method, url, data, callback, errFun) {
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'LTokenD':this.globalData.token
      },
      dataType: 'json',
      success: res => {
        wx.hideLoading()
        if(res.statusCode == 200){
          callback(res.data);
        }else{
          console.log(res)
          this.alter2("服务器连接失败",'none')
        }
      },
      fail: err =>{
        wx.hideLoading()
        this.alter2("服务器连接失败",'none')
        console.log(err)
        errFun(err);
      }
    })
  },
  // 消息提示
  alter2:function(title,icon){
    wx.showToast({
      title: title,
      icon: icon,//'success','loading','none'
      duration: 2000,//停留时间
      mask:true//是否显示透明蒙层，防止触摸穿透
    })
  },
  // 消息提示，带有处理函数,注意：fun回调需等待定时时间
  alter3:function(title,icon,fun){
    wx.showToast({
      title: title,
      icon: icon,//'success','loading','none'
      duration: 2000,//停留时间
      mask:true,//是否显示透明蒙层，防止触摸穿透
      success:function(){
        setTimeout(function () {
          fun()
        }, 2000)
      }
    })
  },
  onLaunch: function () {
    const that = this;
    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     var appId = 'wx9616cb5f7cfbe837';
    //     var secret = '2797b46b7d86f643b6235b2a53312663';
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     that.wxRequest(
    //       "POST",
    //       that.globalData.url+'/login/Init',
    //       // {"code":res.code},
    //       {"code":"1"},
    //       function(e){
    //         if("1" === e.data){
    //           that.globalData.driver = true
    //           that.globalData.userInfo = e.openId
    //         }else{
    //           that.globalData.driver = false
    //           that.globalData.userInfo = null
    //         }
    //       },
    //       function(e){
    //         console.log(e)
    //       })
    //     // wx.request({
    //     //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid='
    //     //   +appId+'&secret='
    //     //   +secret+'&js_code='
    //     //   +res.code+'&grant_type=authorization_code',
    //     //   // data: {
    //     //   //   code: res.code
    //     //   // },
    //     //   success (res){
    //     //     console.log(res)
    //     //   },
    //     //   fail (err){

    //     //   }
    //     // })
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    // 是否模拟登陆成功，以便于测试时不连服务器也可以进入主页面
    test:false,
    // 用户id
    userId:null,
    // tokn
    token:null,
    // 是否是司机
    driver:false,
    // 全局请求地址
    url:'http://localhost:9000'
    // url:'http://3h517648u8.wicp.vip'
  }
})