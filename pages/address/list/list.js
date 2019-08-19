// pages/address/list/list.js

var that;
var timer;
var items = require('../../data/index.js');
var rightheight = 0;
var touchEndy = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letters: ['定位', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    citys: [],
    toView: '',//用来做定位联动
    zhen: "斜塘",
    city: "苏州",
    county: "工业园区",
    hotarea: [{ id: "1", name: "湖东" }, { id: "2", name: "独墅湖" },
    { id: "3", name: "斜塘" }, { id: "4", name: "车坊" }, { id: "5", name: "胜浦" }],
    isShow: false,
  },
  onLoad: function (options) {
    that = this,
      that.setData({
        citys: items.citys
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //创建节点选择器
    var query = wx.createSelectorQuery();
    query.select('#right').boundingClientRect()
    query.exec(function (res) {
      //res就是 所有标签为mjltest的元素的信息 的数组
      console.log(res);
      //取高度
      console.log("height : " + res[0].height);
      rightheight = res[0].height;
    })
  },
  //右侧索引表点击事件
  letterclick: function (e) {
    var letter = e.currentTarget.dataset.letter;
    var isShow = that.dialog.getDialogState();
    if ('定位' == letter) {//点击定位滚动到顶部
      that.setData({
        toView: 'dw',
      })
    } else {
      this.showOrHideLetterDialog(isShow, letter, true);
      that.setData({//定位到字母所在城市item
        toView: letter,
      })
    }
    console.log('letterclick letter : ' + letter);
  },
  startTime: function (autodimiss) {
    if (autodimiss) {
      timer = setTimeout(function () {
        that.dialog.hideDialog();
      }, 1500)
    }
  },  //touch 事件有bug
  touchStart: function (e) {
    console.log('touchStart start ');
    touchEndy = e.touches[0].pageY;
    console.log('touchStart end ');
  },
  touchMove: function (e) {
    touchEndy = e.touches[0].pageY;
    var lindex = parseInt(touchEndy / rightheight * 27);
    var value = this.data.letters[lindex];
    var isShow = that.dialog.getDialogState();
    if ('定位' != value) {
      this.showOrHideLetterDialog(isShow, value, false);
    }
    console.log(" touchMove touchEndy : " + touchEndy + " lindex : " + lindex + " value : " + value);
  },
  touchEnd: function (e) {
    var lindex = parseInt(touchEndy / rightheight * 27);
    var value = this.data.letters[lindex];
    var isShow = that.dialog.getDialogState();
    if ('定位' == value) {
      that.setData({
        toView: 'dw',
      })
    } else {
      this.showOrHideLetterDialog(isShow, value, true);
      that.setData({
        toView: value,
      })
    }
    console.log("touchEnd touchEndy : " + touchEndy + " lindex : " + lindex + " value : " + value);
  },
  showOrHideLetterDialog: function (isShow, letter, autodimss) {
    if (!isShow) {
      that.dialog.setLetter(letter);
      that.dialog.showDialog();
      this.startTime(autodimss);
    } else {
      clearTimeout(timer);
      this.startTime(autodimss);
      that.dialog.setLetter(letter);
    }
  },
  selectcity: function (e) {
    var orgid = e.currentTarget.dataset.orgid
    var orgname = e.currentTarget.dataset.orgname
    wx.showToast({
      title: 'orgid : ' + orgid + ' orgname : ' + orgname,
      icon: 'none'
    })
  }
})

