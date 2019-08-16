// pages/jrzp/gspeople/gspeople.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolList: ['博士', '研究生', '本科', '大专', '中专', '高中', '初中','小学'],
    baseInfo: {
      id: '', // the id of a piece data
      userName: '',
      userGender: 2,
      birthData: '',
      eMail: '',
      phoneNumber: '',
      homeNow: '',
      school: '',
      address: '',
      phonePeople:''
    },
  },
  resumeSubmitStyle: function (e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this;
    var formData = e.detail.value;
    if (e.detail.value.userName == '' || e.detail.value.userGender == '' || e.detail.value.phoneNumber == '' || e.detail.value.birthData == '' || e.detail.value.hignSchool == '' || e.detail.value.homeNow == '' || e.detail.value.address == '' || e.detail.value.peopleNumber == '' ) {
      wx.showToast({
        title: '请填写完整···',
        icon: 'loading',
      })
    } else {
      wx.request({
        url: 'https:***/submit',//实际接口     
        data: formData,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          wx.showtoast({
            title: '提交成功'
          })
          
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  success:function(){
    wx.navigateTo({
      url: '../../jrzp/success/success',
    })
  },
  bindleDateChange:function(e) {
    // console.log(e.detail.value)
    this.setData({
      'baseInfo.birthData': e.detail.value
    })
  },
  bindSchoolChange: function (e) {
    console.log(e)
    this.setData({
      'baseInfo.school': e.detail.value
    })
  },
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