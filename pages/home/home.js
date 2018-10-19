// pages/home/home.js
const app = getApp();

Page({

  /**
  * 页面的初始数据
  */
  data: {
    showLoading: true,
    scrollHeight: 0,
    showTips: '加载更多',
    showLoadMore: true,
    loadNum: 0,
    goodList: [{
      logoSrc: '/assets/image/logo_r.png',
      goodSrc: '/assets/image/list1.jpg',
      goodDesc: '这是描述',
      newPrice: '￥99.00',
      oldPrice: '￥149.00'
    }, {
      logoSrc: '/assets/image/logo_r.png',
      goodSrc: '/assets/image/list2.jpg',
      goodDesc: '这是描述',
      newPrice: '￥169.00',
      oldPrice: '￥229.00'
    }, {
      logoSrc: '/assets/image/logo_r.png',
      goodSrc: '/assets/image/list3.jpg',
      goodDesc: '这是描述',
      newPrice: '￥99.00',
      oldPrice: '￥149.00'
    }, {
      logoSrc: '/assets/image/logo_r.png',
      goodSrc: '/assets/image/list4.jpg',
      goodDesc: '这是描述',
      newPrice: '￥99.00',
      oldPrice: '￥149.00'
    }]
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.hideLoading();
  },

  /**
  * 加载更多--分页
  */
  loadMore() {
    this.setData({
      showLoading: true
    });
    let loadList = [{
      logoSrc: '/assets/image/logo_r.png',
      goodSrc: '/assets/image/list1.jpg',
      goodDesc: '这是描述',
      newPrice: '￥99.00',
      oldPrice: '￥149.00'
    }, {
      logoSrc: '/assets/image/logo_r.png',
      goodSrc: '/assets/image/list2.jpg',
      goodDesc: '这是描述',
      newPrice: '￥169.00',
      oldPrice: '￥229.00'
    }, {
      logoSrc: '/assets/image/logo_r.png',
      goodSrc: '/assets/image/list3.jpg',
      goodDesc: '这是描述',
      newPrice: '￥99.00',
      oldPrice: '￥149.00'
    }, {
      logoSrc: '/assets/image/logo_r.png',
      goodSrc: '/assets/image/list4.jpg',
      goodDesc: '这是描述',
      newPrice: '￥99.00',
      oldPrice: '￥149.00'
    }];
    if (this.data.loadNum <= 3) {
      this.data.loadNum = this.data.loadNum + 1;
      setTimeout(() => {
        this.setData({
          loadNum: this.data.loadNum,
          goodList: this.data.goodList.concat(loadList),
          showLoadMore: false,
          showLoading: false
        });
      }, 1000);
    } else {
      this.setData({
        showLoadMore: false,
        showTips: '我也是有底线的',
        showLoading: false
      })
    }
  },
  clickModel() {

  },

  /**
  * 处理加载圈
  */
  hideLoading() {
    setTimeout(() => {
      this.setData({
        showLoading: false
      })
    }, 1000);
  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog");
  },

  showDialog() {
    this.dialog.showDialog();
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    let high = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: high
    })
  },
  //取消事件
  _cancelEvent() {
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    this.dialog.hideDialog();
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