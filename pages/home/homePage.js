Page({

  /**
   * 页面的初始数据
   */
  data: {

    headImg: '../../images/0.jpg',
    
    isPlayingMusic: false,//设置音乐播放状态，默认是false（暂停）
    musicStopImg: '../../images/music/music-stop.jpg',
    musicStartImg: '../../images/music/music-start.jpg',
    musicName: '第一次开始爱情',
    musicAuthor: '金所炫',

  },

  /**
   * 音乐播放/暂停
   */
  onMusicTap: function(event){
    var flag = this.data.isPlayingMusic;
    const backAudio = wx.getBackgroundAudioManager();
    if(flag){
      //暂停
      backAudio.pause();
      // 设置setData值，前端界面才能读取到isPlayingMusic是值，以下同理
      console.log("pause");
      this.setData({
        isPlayingMusic: false
      })
    }else{
      backAudio.src = "../../resource/music/1.mp3";
      backAudio.title = "kim";
      //播放
      backAudio.play(); 
      console.log("play");
      this.setData({
        isPlayingMusic: true
      })
    }
    backAudio.onPlay(() => {
      console.log("音乐播放开始");
    })
    backAudio.onPause(() => {
      console.log("音乐播放暂停");
    })
    backAudio.onEnded(() => {
      console.log("音乐播放结束");
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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