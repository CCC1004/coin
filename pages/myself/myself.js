const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxUserInfo: null,
    kimUserInfo: null,
    orgname: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toPage: function(e) {
    var url = e.currentTarget.dataset.url;//获取data-url数据
    wx.navigateTo({
      url: url,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    //获取微信用户信息
    var wxUserInfo = app.getWxUserInfo();
    console.info("微信用户名称为：" + wxUserInfo)

    //获取系统用户信息
    var kimUserInfo = app.getKimUserInfo();
    console.info("系统用户名称为：" + kimUserInfo)

    //用户已经授权过
    if ((wxUserInfo != null && wxUserInfo != '') || (kimUserInfo != null && kimUserInfo != '')) {
      //微信用户
      if (wxUserInfo != null && wxUserInfo != '') {
        //设置url
        this.setData({
          wxUserInfo: wxUserInfo,
        })
      }
      //系统用户
      if (kimUserInfo != null && kimUserInfo != '') {
        //设置url
        this.setData({
          kimUserInfo: kimUserInfo,
        })
      }
    } else {
      wx.navigateTo({
        url: '../loginPages/login2/login2',
      })
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})