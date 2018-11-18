const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //背景图片img
    backgroudImg: '../../../images/66.jpeg',
    username: null,
    password: null,
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {

  },

  /** 获取键入值 */
  usernameInput(event) {
    this.setData({ username: event.detail.value })
    // console.info(event.detail.value)
  },

  passwordInput(event) {
    this.setData({ password: event.detail.value })
    // console.info(event.detail.value)
  },

  /**
   * 登录
   */
  login() {

    var username = this.data.username;
    var password = this.data.password;

    if(username!=null && password!=null){
      wx.request({
        url: app.globalData.kim_url + 'login/login',
        data: { 
          username: username, 
          password: password
        },
        success: function(res){
          console.info(res);
          if (res.data.status==200){
            //user信息
            var user = res.data.data;
            //将用户存储至storage
            app.setKimUserInfo(user)

            //跳转至首页
            wx.switchTab({
              url: '../../index/index',
            })
          }else{
            wx.showToast({ title: res.data.msg, icon: 'loading', duration: 2000 })
          }
        }
      })

    }else{
      wx.showToast({ title: '账号密码不能为空', icon: 'loading', duration: 2000 })
    }
  },

  /**
   * 微信登录
   */
  weLogin: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)

    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.login({
        success: function (res) {
          //获取登录的临时凭证
          var code = res.code;
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          wx.request({
            url: app.globalData.kim_url + 'wxLogin/wxLogin',
            data: {
              code: code
            },
            success: function (result) {
              //保存用户信息到本地缓存，可以用作小程序端的拦截器
              app.setWxUserInfo(e.detail.userInfo);
              
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

})