// pages/call/call.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    call:true,
    routes:[]
  },
  callCar: function(e){
    this.setData({
      call:false
    })
    this.selectComponent("#callCon").setType(e.target.dataset['call'])
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    // 加载路线数据
    app.wxRequest(
      "GET",
      app.globalData.url+'/route/findAll',
      null,
      function(e){
        that.setData({routes:e})
      },
      function(e){
        console.log(e)
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