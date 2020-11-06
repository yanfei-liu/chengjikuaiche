// pages/maporder/maporder.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 路线id
    routeId:null,
    // 查询时间
    date:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({routeId:options.routeId})
    this.setData({date:options.date})
    this.toMap()
  },
  // 获取订单数据并标注于地图
  toMap:function(){
    let t = this
    // 获取订单数据
    app.wxRequest(
      "POST",
      app.globalData.url+'/order/findByDriverFindOrder',
      {
        "routeId":t.data.routeId,
        "date":t.data.date
      },
      function(e){
        if(e.success){
          // 地图描点
          t.selectComponent("#mapOrder").toInit(e.data)
        }else{
          // 如果没有订单
          t.setData({success:true})
          t.setData({msg:"当前所选线路暂时没有订单"})
        }
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