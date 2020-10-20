// pages/call/call.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    call:true,
    routes:[
      {route:'石家庄-石家庄',price:150},
      {route:'a-c',price:150},
      {route:'a-d',price:150},
      {route:'a-e',price:150},
      {route:'b-a',price:150},
      {route:'c-b',price:150}
    ]
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