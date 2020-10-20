// pages/conponents/applyDriver/applyDriver.js
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
    inputHandle(e){
      var p = e.target.dataset['prop'];
      var changed = {};
      changed[p] = e.detail.value;
      this.setData(changed);
    },
    // 上传图片
    chooseImg(e){
      var t = this;
      wx.chooseImage({
          // 最多可以选择几张
          count: 1,
          // 可以指定是原图还是压缩图，默认二者都有
          sizeType: ['original'],
          // 可以指定来源是相册还是相机，默认二者都有
          sourceType: ['album', 'camera'],
          success (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              const tempFilePaths = res.tempFilePaths
              var p = e.target.dataset['prop'];
              var changed = {};
              changed[p] = tempFilePaths;
              t.setData(changed);
  
              // wx.uploadFile({
              //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
              //   filePath: tempFilePaths,
              //   name: 'file',
              //   formData: {
              //     'user': 'test'
              //   },
              //   success (res){
              //     const data = res.data
              //     //do something
              //   }
              // })
          }
      });
  
    },
    sub(e){
      console.log(this.data)
      wx.request({
        url: 'test.php',
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)
        }
      })
    }
  }
})
