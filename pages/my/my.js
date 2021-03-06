// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否是司机
    driver: false,
    //是否显示菜单
    men:true,
    // 是否显示申请为司机-注意此值要与deriver相反
    application: false,
    // 是否显示未结算订单
    unsettled:false,
    unsettledB:false,
    // 是否显示历史订单页面
    history:false,
    historyB:false,
    // 是否显示客服页面
    customer:false
    // 是否显示体现页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断是否是司机
    this.setData({driver:app.globalData.driver})
  },

  // 跳转至其它页面
  goToViews: function(e){
    let t = this;
    let i = e.currentTarget.dataset.prop;
    let arr = {
      application:false,
      men:false,
      history:false,
      customer:false,
      unsettled:false,
      unsettledB:false,
      historyB:false
    }
    t.setData(arr)
    if(i == 11){
      t.setData({application:true})
      t.selectComponent("#applyDriver").getData()
    }else if(i == 12){
      t.setData({unsettled:true})
      t.selectComponent("#unsettled").getData()
    }else if(i == 13){
      t.setData({history:true})
      t.selectComponent("#history").getData()
    }else if(i == 14){
      t.setData({customer:true})
    }else if(i == 21){
      t.setData({withdrawal:true})
      // t.selectComponent("#withdrawal").getData()
    }else if(i == 22){
      t.setData({unsettledB:true})
      t.selectComponent("#unsettledB").getData()
    }else if(i == 23){
      t.setData({historyB:true})
      t.selectComponent("#historyB").getData()
    }
    
    else{
      t.setData({men:true})
    }
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