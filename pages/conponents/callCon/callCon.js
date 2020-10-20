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
    type:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setType(e){
      this.data.type = e
      console.log(this.data.type)
    }
  }
})
