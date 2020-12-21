// pages/conponents/withdrawal/withdrawal.js
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
    disa:false,
    jr:0.00,
    ktxje:0.00
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputHandle(e){
      let that = this;
      that.setData({
        jr: that.money(e.detail.value),
      })
    },
    // 限制金额格式
    money:function(val) {
      let num = val.toString(); //先转换成字符串类型
      if (num.indexOf('.') == 0) { //第一位就是 .
        num = '0' + num
      }
      num = num.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
      num = num.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
      num = num.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      num = num.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      if (num.indexOf(".") < 0 && num != "") {
        num = parseFloat(num);
      }
      return num
    },
    // 获取可提现金额
    getJr:function(){
      const that = this;
      app.wxRequest(
        "GET",
        app.globalData.url+'/wallet/findByUserId?userId='+app.globalData.userId,
        null,
        function(e){
          that.setData({ktxje:e.walletAmount})
        },
        function(e){
        }
      )
    },
    // 提交提现单
    txs:function(o){
      let t = this;
      t.setData({disa:true})
      let j = t.data.jr
      let j2 = t.data.ktxje
      if (j >= 0){
        if(j2 - j < 0){
          app.alter2("提现金额不能大于余额",'none')
          t.setData({disa:false})
          return
        }
        app.wxRequest(
          "POST",
          app.globalData.url+'/wallet/walletRecord/applyWalletRecord',
          {
            "passengerId":app.globalData.userId,
            "amount":j,
            "carNumber":"银行卡号"
          },
          function(e){
            t.setData({disa:false})
            console.log(e)
          },
          function(e){
            t.setData({disa:false})
          }
        )
      }else{
        app.alter2("提现金额最低10元",'none')
        t.setData({disa:false})
      }
    }
  },
  lifetimes:{
    ready(){
      this.getJr()
    }
  },
})
