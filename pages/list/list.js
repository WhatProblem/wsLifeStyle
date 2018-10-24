// pages/list/list.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    listNav: '',
    fixedTop: false,
    sortListTop: null,
    showLoading: true,
    scrollHeight: '',
    showLoadMore: true,
    loadNum: 0,
    imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    sortList: [{
      title: '新品女鞋',
      type: 'newFall',
      ids: '1',
      selected: true
    },
    {
      title: '新品男鞋',
      type: 'newFall',
      ids: '2',
      selected: false
    },
    {
      title: '新品女装',
      type: 'newFall',
      ids: '3',
      selected: false
    },
    {
      title: '新品男装',
      type: 'newFall',
      ids: '4',
      selected: false
    }
    ],
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
    let navTitle = null;
    if (options.title === 'newFall') {
      navTitle = '秋季新品';
    } else if (options.title === 'newWinter') {
      navTitle = '2018冬上新';
    } else if (options.title === 'trendList') {
      navTitle = '2018潮流榜单';
    } else if (options.title === 'specialSize') {
      navTitle = '特殊尺码';
    }
    wx.setNavigationBarTitle({
      title: navTitle
    });
    this.setData({
      listNav: options.title
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
  onShow() {
    let high = wx.getSystemInfoSync().windowHeight;
    let query = wx.createSelectorQuery();
    let self = this;
    this.setData({
      scrollHeight: high
    });
    query.select('#listTop').boundingClientRect();
    query.exec((res) => {
      self.setData({
        sortListTop: res[0].height
      });
    });
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
        // showTips: '我也是有底线的',
        showLoading: false
      })
    }
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
  * 切换分类
  */
  changeLists(obj) {
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
    this.setData({
      goodList: [],
      loadNum: 0
    });
    setTimeout(() => {
      this.setData({
        goodList: loadList
      })
    }, 500);
  },

  /**
  * 监听分类导航位置
  */
  fixSortNav() {
    console.log(213123);
  },

  /**
  * 滚动监听
  */
  scrollTop(e) {
    console.log(e.detail.scrollTop)
    if (e.detail.scrollTop >= this.data.sortListTop) {
      this.setData({
        fixedTop: true
      })
    } else {
      this.setData({
        fixedTop: false
      })
    }
  }
})