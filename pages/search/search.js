// pages/search/search.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    usesData30:[
      {
      "etprzid":0,
        "name": " 研0科技企业招聘信息"
      },
      {
        "etprzid": 1,
        "name": " 研1电子"
      },
      {
        "etprzid": 2,
        "name": " 研2电子"
      },
      {
         "etprzid":3,
        "name": " 研3电子"
      },
      {
        "etprzid": 4,
        "name": " 研4科技企业招聘信息"
      },
      {
        "etprzid": 5,
        "name": " 研5科技企业招聘信息"
      },
      {
        "etprzid": 6,
        "name": " 研6科技企业招聘信息"
      },
      {
        "etprzid":7,
        "name": " 研7科技企业招聘信息"
      }
    ],
    usesData31: [
      {
        "etprzid": 0,
        "name": " 研0科技企业招聘信息"
      },
      {
        "etprzid": 1,
        "name": " 研1科技企业招聘信息"
      },
      {
        "etprzid": 2,
        "name": " 研2科技企业招聘信息"
      },
      {
        "etprzid": 3,
        "name": " 研3科技企业招聘信息"
      }
     
    ],
    
  },
  goSearchContainer:function(event){
    console.log(event)

    wx.navigateTo({
      url: '../jrzp/gsdetail/gsdetail?etprzid=' + event.currentTarget.dataset.etprzid
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