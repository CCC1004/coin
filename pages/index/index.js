const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: 'true',
    autoplay: 'true',
    interval: '3000',
    duration: '1000',
    //图片资源访问IP
    urlInfo: null,
    //轮播图数据
    lbData: null,
    //精品推荐数据
    jptjData: null,
    
  },

  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    
    //设置url
    this.setData({
      urlInfo: app.globalData.coin_url,
    })

    //获取轮播列表
    this.getLbList(this)

    //获取精品推荐列表
    this.getJptjList(this)

  },

  //获取轮播列表
  getLbList: function(that){
    wx.request({
      url: app.globalData.coin_url + 'index/getLbList/2',
      success: function (res) {
        that.setData({
          lbData: res.data.data,  
        })
      }
    })
  },

  //获取精品推荐列表
  getJptjList: function(that){
    wx.request({
      url: app.globalData.coin_url + 'index/getJptjList/2',
      success: function (res) {
        that.setData({
          jptjData: res.data.data,
        })
      }
    })
  },

  //查看分类详情
  seaDetail: function (event){
    //精品分类id
    var guid = event.currentTarget.dataset.guid;
    //精品分类名称
    var name = event.currentTarget.dataset.name;


    wx.navigateTo({
      url: './kind/kind?guid=' + guid + '&name=' + name,
    })

  }


})