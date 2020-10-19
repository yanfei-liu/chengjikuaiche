// pages/other/other.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
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
  }
})
