// pages/receiving/receiving.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 路线与地图切换
    m:false,
    // 路线集合
    routes:[],
    // 出发日期
    goDate:'',
    success:false,
    msg:''
  },
  inputHandle:function(e){
    var p = e.target.dataset['prop'];
    var changed = {};
    changed[p] = e.detail.value;
    this.setData(changed);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 测试
    if(app.globalData.test){
      this.setData({m:true})
      // 测试地图中心在当前位置
      // this.selectComponent("#mapOrder").getPosition()
      // 测试批量地图标记
      this.selectComponent("#mapOrder").getData([{'a':0},{'a':1},{'a':2},{'a':3},{'a':4}])
    }else{
      // 加载所有路线
      this.loadingRoute()
    }
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
  // 根据路线获取所有订单
  getOrders:function(e){
    let uuid = e.target.dataset['call']
    let t = this
    let d = t.data.goDate
    if(d != ''){
      wx.navigateTo({
        url: '/pages/maporder/maporder?routeId='+uuid+"&date="+d
      })
    }else{
      // 如果没有订单
      t.setData({success:true})
      t.setData({msg:"请选择出发日期"})
    }
  }
})