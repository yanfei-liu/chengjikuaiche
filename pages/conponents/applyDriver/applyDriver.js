// pages/conponents/applyDriver/applyDriver.js
const app = getApp()
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
    rear:'',
    msg:'',
    v:false
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
    // 加载判断有无正在申请的记录
    getData:function(e){
      let t = this;
      app.wxRequest(
        "POST",
        app.globalData.url+'/apply/findByPassengerId',
        {"passengerId":app.globalData.userId},
        function(e){
          if(!e.success){
            t.setData({v:true})
          }else{
            t.setData({msg:"您当前有未审核的申请记录"})
          }
        },
        function(e){
        })
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
              wx.uploadFile({
                url: app.globalData.url+'/file/upload',
                filePath: tempFilePaths[0],
                name: "multipartFile",
                // formData: {
                //   'user': 'test'
                // },
                success (res){
                  let d = JSON.parse(res.data);
                  if(d.uploaded == 1){
                    changed[p] = app.globalData.url+"/"+d.url;
                    t.setData(changed);
                  }
                }
              })
          }
      });
    },
    sub(e){
      let t = this
      // 申请为司机
      app.wxRequest2(
        "POST",
        app.globalData.url+'/apply/save',
        {
          "passengerId":app.globalData.userId,
          "carFortyFivePhoto": t.data.head,
          "driverLicenseCopy": t.data.driversB,
          "driverLicenseOriginal": t.data.driversA,
          "driverName": t.data.name,
          "driverPhone": t.data.phone,
          "drivingLicenseCopy": t.data.drivingB,
          "drivingLicenseOriginal": t.data.drivingA,
          "holdIdCarFacePhoto": t.data.holdNameIdA,
          "idCarBackPhoto": t.data.nameIdB,
          "idCarFacePhoto": t.data.nameIdA,
          "idCardId": t.data.nameId,
          "vehicleModel": t.data.vehicleModel,
          "vehicleRearPhoto": t.data.rear
        },
        function(e){
          if(e.success){
            t.setData({v:false})
            t.setData({msg:"提交成功，请等待后台审核（1-3工作日）"})
          }else{
            t.setData({msg:e.message})
          }
        },
        function(e){
        })
    }
  }
})
