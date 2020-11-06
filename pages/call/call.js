// pages/call/call.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 路线与叫车页面切换
    call:0,
    // 路线集合
    routes:[]
  },
  callCar: function(e){
    this.setData({
      call:1
    })
    // this.selectComponent("#callCon").setType(e.target.dataset['call'])
    this.selectComponent("#callCon").setData({
      routeId:e.target.dataset['call']
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    // 是否有未完成的订单
    app.wxRequest(
      "GET",
      app.globalData.url+'/order/getByUserId?uuid='+app.globalData.userId,
      null,
      function(e){
        if(e.success){
          // 如果没有未完成的订单，加载路线数据
          that.loadingRoute()
        }else{
          // 如果有未完成的订单，则跳转结算
          that.toSettlement()
        }
      },
      function(err){
      }
    )
  },
  // 跳转结算页面
  toSettlement:function(){
    this.setData({"call":2})
  },
   // 加载路线数据
  loadingRoute:function(){
    const that = this;
    app.wxRequest(
      "GET",
      app.globalData.url+'/route/findAll',
      null,
      function(e){
        that.setData({routes:e})
      },
      function(e){
      }
    )
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})