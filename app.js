//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


  },
  
  globalData: {
    kimUserInfo: null,//系统用户信息(数据库表kim_user)
    wxUserInfo: null,//微信登录用户信息
    kim_url: "http://localhost:8064/"
  },
  
  appData: {
  },

  /**
   * 将系统用户存储至storage
   */
  setKimUserInfo: function (kimUserInfo) {
    wx.setStorageSync('kimUserInfo', kimUserInfo)
  },
  getKimUserInfo: function () {
    return wx.getStorageSync("kimUserInfo");
  },

  /**
     * 将微信用户存储至storage
     */
  setWxUserInfo: function (wxUserInfo) {
    wx.setStorageSync('wxUserInfo', wxUserInfo)
  },
  getWxUserInfo: function () {
    return wx.getStorageSync("wxUserInfo");
  },


})