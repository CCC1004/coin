const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    password: null,
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              //用户已经授权过
            }
          })
        }
      }
    })
  },
  
  /** 获取键入值 */
  usernameInput(event) {
    this.setData({ username: event.detail.value })
    console.info(event.detail.value)
  },

  passwordInput(event) {
    this.setData({ password: event.detail.value })
    console.info(event.detail.value)
  },

  /**
   * 登录
   */
  login() {
    // wx.navigateTo({
    //   url: '../index/index',
    // })

    // wx.redirectTo({
    //   url: '../../index/index',
    // })

    wx.switchTab({
      url: '../../index/index',
      
    })
  },

  /**
   * 注册
   */
  regsiter(){
    wx.navigateTo({
      url: '../regsiter/regsiter',
    })
  },

  /**
   * 忘记密码
   */
  forgetPW(){
    wx.navigateTo({
      url: '../forgetPW/forgetPW',
    })
  },

  /**
   * 微信登录
   */
  weLogin: function(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)

    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.login({
        success: function (res) {
          console.log(res)
          //获取登录的临时凭证
          var code = res.code;
          //调用后端，获取微信的session_key，secret
          wx.request({
            url: app.globalData.kim_url + 'wxLogin/wxLogin?code=' + code,
            method: "POST",
            success: function (result) {
              console.log("123::::::::::::;" + result)
              //保存用户信息到本地缓存，可以用作小程序端的拦截器
              // app.setGlobalUserInfo(e.detail.userInfo);
              //跳转至首页（注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面）
              wx.switchTab({
                url: '../../index/index',
              })

            }
          })
        }
      })
    } else {
      //用户按了拒绝按钮
      
    }

  },

})