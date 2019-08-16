// pages/jrzp/gsdetail/gsdetail.js
//var newsData = require("../../data/newsdata.js");
var app = getApp()
var baseUrl=app.globalData.baseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    char_lt: ">",
    banner: ["http://m.qpic.cn/psb?/V13Cv6dH1DBP2N/urWqqHAaxru5d7oIcAZyHPb0iQgodIsxkWnDtBUfj1Q!/b/dE0BAAAAAAAA&bo=IAMsAQAAAAARBz4!&rf=viewer_4", "http://m.qpic.cn/psb?/V13Cv6dH1DBP2N/el7r8l11ekGE5B7cVvhYRU0XGajvACkJoDaTNWryC7U!/b/dL8AAAAAAAAA&bo=IAMsAQAAAAARFy4!&rf=viewer_4", "http://m.qpic.cn/psb?/V13Cv6dH1DBP2N/8ijR1ZEFDq7G2sVoLwOZ7qmnvTFkIAYX1VFIQG.mpJo!/b/dLgAAAAAAAAA&bo=IAMsAQAAAAARFy4!&rf=viewer_4"],
    name1: 'name1',
    
    etprz:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  handleface:function(){
    wx.navigateTo({
      url: '../../jrzp/gspeople/gspeople',
    })
  },
  makePhone:function(e){
    wx.makePhoneCall({

      phoneNumber: 'etprz.contactPhone',

    })
  },
  handlevideo:function(){
    wx.switchTab({
      url: '../../live/detail/detail',
    })
  },
  onLoad: function (options) {
    console.log(options.etprzid)
    var that=this;
   // that.setData(useData[options.etprzid])
    var useData = app.globalData;
    wx.request({

      url: baseUrl+"/entprz/getentprzbyid",
      data: { "etprzid": options.etprzid },
      method: 'GET',
      success: function (res) {
        var etprz = res.data.etprz;
        if (etprz == undefined) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            // areaName: area.areaName,
            // priority: area.priority
            etprz: etprz
          });
        }
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