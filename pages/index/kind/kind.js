const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //图片资源访问IP
    urlInfo: null,
    //分类名称
    flName: null,
     //所属分类的品种列表数据 
    kindData: null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    //获取分类id和分类名称
    var flid = options.guid;
    var name = options.name;
    that.setData({
      flName: name,
    })

    //设置url
    this.setData({
      urlInfo: app.globalData.coin_url,
    })

    //获取所属分类的品种列表
    this.getKindList(this, flid)

  },

  getKindList: function (that, flid) {
    wx.request({
      url: app.globalData.coin_url + 'index/searchKindListByflid',
      data: { 'flid': flid },
      success: function (res) {
        that.setData({
          kindData: res.data.data,
        })
      }
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