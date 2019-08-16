// pages/me/me.js
var list1 = { "userid": "1122", "name": "11旭", "gender": "1", "height": "175", "birthyear": 1989, "birthmonth": 11, "education": "1", "habitation": "苏州", "household": "四川", "emergencyContactName": "张三", "emergencyContactPhone": "1.2345678901E10", "phone": "1.3885555555E10", "employmentLength": "4" }

Page({

  /**
   * 页面的初始数据
   */
   list:{},
   
  data: {
   
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
  submit:function(){
    console.log(list1)
    wx.request({
      url: 'https://192.168.1.107:8443/easyjob/addcv',
      data:list1,
      method:"POST",
      success:function(res){
       console.info("aaa:"+res.data)
      }
    })
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