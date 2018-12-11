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

    //设置url
    that.setData({
      urlInfo: app.globalData.coin_url,
    })

    //获取分类id和分类名称
    var flid = options.guid;
    var name = options.name;
    that.setData({
      flName: name,
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




})