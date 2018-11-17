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
    //轮播图
    imgUrls: null,
    //集合图片
    selectsImgs: [
      '../../images/9.jpg',
      '../../images/10.jpg',
      '../../images/13.jpg',
      '../../images/14.jpg'
    ],
    //列表图片
    listsImgs: [
      '../../images/4.jpg',
      '../../images/21.jpg',
      '../../images/5.jpg',
      '../../images/5.jpg'
    ],
    // 头像图片
    headImg: '../../images/timg.jpg'

  },

  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    
    console.info(options)
    //获取用户信息
    var userInfo = app.getGlobalUserInfo();
    console.info("微信用户名称---" + userInfo)

    if (userInfo!=null && userInfo!='') {
        //用户已经授权过
    }else{
      wx.navigateTo({
        url: '../loginPages/login2/login2',
      })
    }

    //设置url
    this.setData({
      urlInfo: app.globalData.kim_url,
    })

    //获取轮播列表
    this.getLbList(this)

  },

  //获取轮播列表
  getLbList: function(that){
    wx.request({
      url: app.globalData.kim_url + 'index/getLbList',
      success: function (res) {
        that.setData({
          imgUrls: res.data.data,  
        })
      }
    })
  },

})