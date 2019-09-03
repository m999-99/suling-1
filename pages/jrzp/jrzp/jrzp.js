// pages/jrzp/jrzp.js
//引入data文件夹中的js数据

var app = getApp()
 //var newsData=require("../../data/newsdata.js");
var baseUrl=app.globalData.baseUrl;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [ "江苏省","苏州市", "工业园区"],
    currentIndex: 0,
    type:"0",
    industry:"",
    listInfo: [
      {
        title: '长期工',
        imgUrl: '../../../images/yizhi/index/小时@2x.png',
        curUrl: '/images/yizhi/job/长期工@2x.png',
      },
      {
        title: '小时工',
        imgUrl: '../../../images/yizhi/index/小时@2x.png',
        curUrl: '/images/yizhi/job/长期工@2x.png',
      },
      {
        title: '大龄工',
        imgUrl: '../../../images/yizhi/job/小时@2x.png',
        curUrl: '/images/yizhi/job/长期工@2x.png',
      },
    ],
    winWidth: 0,
    winHeight: 0,
    windowHeight:0,
    pageNo:1,
    // tab切换
    currentTab: 0,
    useData:"",
    selectArray:[]
  },
    
  goDetail: function () {
    wx.switchTab({
      url: '../../live/detail/detail',
    })
  },
  //jrzp.wxml中组件传过来的点击事件，可以拿到点击某个的下标值
  handleTabClick:function(event){
    //console.log(event)
    const index=event.detail.index;
    console.log(index)
    this.setData({
      pageNo:1,
      type: index
    });
    var industry=this.data.industry;
    this.http(this.callback, index, industry);
  },
  goGsdetail:function(event) {
    console.log(event);
    wx.navigateTo({
    url: '../../jrzp/gsdetail/gsdetail?etprzid=' + event.currentTarget.dataset.etprzid
    })
  },
  changeRegin(e) {
    this.setData({ region: e.detail.value });
  },
  goVideo: function () {
    wx.switchTab({
      url: '../../live/detail/detail',
    })
  },
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /**
   * 点击tab切换
   */
  // swichNav: function (e) {

  //   var that = this;

  //   if (this.data.currentTab === e.target.dataset.current) {
  //     return false;
  //   } else {
  //     that.setData({
  //       currentTab: e.target.dataset.current
  //     })
  //   }
  // },
  //到顶部刷新事件
  // scrollToUpper:function(e){
  //   console.log("我到顶部了")
  //   page=1
  //   var that=this
  //   wx.request({
  //     url: baseUrl + '/entprz/listentprz',
  //     data:{

  //     },
  //     method: 'GET',
  //     success(res) {
  //       console.log("resdata:" + res.data)
  //       that.setData({
  //         useData: res.data
  //       })
  //     }
  //   })

  // },
  // scrollToLower:function(){
  //   console.log("我是有底线的")
  //   ++page 
  //   var that = this
  //   wx.request({
  //     url: baseUrl + '/entprz/listentprz',
  //     data: {

  //     },
  //     method: 'GET',
  //     success(res) {
  //       console.log("resdata:" + res.data)
  //       that.setData({
  //         useData: res.data.concat(res.data)
  //       })
  //     }
  //   })

  // },
  // _getGoodsData() {
  //   const pageNo = this.data.goods[type].pageNo+1;
  //   getGoodsData(type, pageNo).then(res=>{
  //     console.log(res)
      //取出数据
      // const list=red.data.data.list;
      // const oldlist=this.data.goods[type].list;
      // oldlist.push(...list)
      // const typeKey='goods.$(type).list';
      // const pageKey = 'goods.$(type).page';
      // this.setData({
      //   [typeKey]:oldlist,
      //   [pageKey]: pageNo
      // })
  //   })
  // },
  http:function(callback,index,industry){
    var that = this;
    wx.request({
      url: baseUrl + '/entprz/pagelistentprz' + "?type=" + index + "&pageNo="+this.data.pageNo+"&pageSize=20&industry="+industry,
        data:{
          // type:type,
          // page:page
        },

      method: 'GET',
      success(res) {
      
       callback(res.data)
        // console.log("resdata:"+res.data)
        that.setData({
          useData: res.data
        })
      }
    })
  },
  callback:function(res){
    console.log(res)
  },
  handlerIndustry:function(){
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
 
    this.http(this.callback, 0,"");
    var that=this;
    var useData = app.globalData.useData;
    // that.setData({
    //   useData:newsData.initData
    // })
    //调用http函数
    that.http(that.callback);

    wx.getSystemInfo({
      success: function(res) {
        that.setData({ windowHeight:res.windowHeight})
      },
    })
    // 网络请求
    
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
    //获取长期工/小时工的数据
   
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
    
    var that=this;
    wx.request({
      url: baseUrl + '/entprz/listindustry',// + '?industryid=' + event.detail.id,
      success:function(res){
      that.setData({
        selectArray:res.data
      })
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
    wx.showNavigationBarLoading();
    var that = this;
    
    wx.request({
     
      url: baseUrl + '/entprz/pagelistentprz' + "?type=" + index + "&pageNo=" +pageNo + "&pageSize=20&industry=" + industry,

      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        // that.setData({
        //   useData: res.data
        // });
        // console.log(useData);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })

   
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    //显示加载图标
    wx.showLoading({
      title: '玩命加载中,请稍等',
    })
    
    var pageNo=this.data.pageNo+1;
    var  userdata0=this.data.useData;
    wx.request({
        url: baseUrl + '/entprz/pagelistentprz' + "?type=" + this.data.type + "&pageNo=" + pageNo+"&pageSize=20&industry=" + this.data.industry,

      method: "GET",
      // 请求头部
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("length:"+res.data.length);
        if(res.data.length!=0){
          var c =userdata0.concat(res.data);
          console.log(c);
          that.setData({
            useData: c,
            pageNo: pageNo + 1
          })
        }
        
      //  隐藏加载框
        wx.hideLoading();
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    return {
      title: '分享页面',
      path: baseUrl + ' / entprz / pagelistentprz',
    }

  },
  handlerIndustry:function(e){
    console.log(e.detail.id);
    console.log(e.detail);
    this.setData({
      industry: e.detail.id
    });
    var industry=this.data.industry;
    var type= this.data.type;
    this.http(this.callback, type, industry);
  }
})

