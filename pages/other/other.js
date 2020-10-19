// pages/other/other.js
Page({

  /**
   * 组件的初始数据
   */
  data: {
    driver:true,//是否是司机
  },
  // 跳转至其它页面
  goToViews: function(e){
    let i = e.currentTarget.dataset.id;
    if(i == 1){
      wx.navigateTo({
        url: '/pages/other/driver/driver',
      })
    }else if(i == 2){
      wx.navigateTo({
        url: '/pages/other/history/history',
      })
    }else if(i == 3){
      wx.navigateTo({
        url: '/pages/other/customer/customer',
      })
    }else{

    }
  },
})
