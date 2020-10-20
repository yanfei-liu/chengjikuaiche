// pages/conponents/callCon/callCon.js
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
    type:0,
    numPeo:0,
    large:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputHandle(e){
      var p = e.target.dataset['prop'];
      var changed = {};
      changed[p] = e.detail.value;
      this.setData(changed);
    },
    setType(e){
      this.data.type = e
      console.log(this.data.type)
    },
    // 下单
    sub:function(e){
      // 跳转至首页
      wx.navigateTo({
        url: "/pages/index/index",
        })
    }
  }
})
