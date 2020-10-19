// pages/other/driver/driver.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 申请人id
    passengerId:'',
    // 身份证号
    nameId:'',
    // 姓名
    name:'',
    // 联系电话
    phone:'',
    // 身份证正面
    nameIdA:'',
    // 身份证反面
    nameIdB:'',
    // 身份证手持正面
    holdNameIdA:'',
    // 驾驶证正本
    driversA:'',
    // 驾驶证副本
    driversB:'',
    // 车辆型号
    vehicleModel:'',
    // 车身颜色
    vehicleColor:'',
    // 车辆出厂日期
    vehicleDate:'',
    // 行驶证正本
    drivingA:'',
    // 行驶证副本
    drivingB:'',
    // 车头45°照片
    head:'',
    // 车尾正部照片
    rear:''
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    // 身份证号
    nameIdHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 姓名
    nameHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 联系电话
    phoneHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 身份证正面
    nameIdAHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 身份证反面
    nameIdBHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 身份证手持正面
    holdNameIdAHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 驾驶证正本
    driversAHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 驾驶证副本
    driversBHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 车辆型号
    vehicleModelHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 车身颜色
    vehicleColorHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 车辆出厂日期
    vehicleDateHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 行驶证正本
    drivingAHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 行驶证副本
    drivingBHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 车头45°照片
    headHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 车尾正部照片
    rearHandle:function(e){
      this.setData({
        nameId: e.detail.value
      })
    },
    // 上传图片
    uploadImg: function(e){
      var that = this;
      // wx.chooseImage({
      //     // 最多可以选择几张
      //     count: 1,
      //     // 可以指定是原图还是压缩图，默认二者都有
      //     sizeType: ['original'],
      //     // 可以指定来源是相册还是相机，默认二者都有
      //     sourceType: ['album', 'camera'],
      //     success (res) {
      //         // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      //         const tempFilePaths = res.tempFilePaths
      //         console.log(tempFilePaths)
      //     }
      // })
    },
    sub:function(e){
      console.log(e)
    }
  }
})
