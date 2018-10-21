// pages/components/banner/banner.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },

  /**
  * 页面的初始数据
  */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    interval: 5000,
    duration: 500
  },

  /**
  * 自定义方法
  */
  methods: {
    /**
   * 跳转到homeDetail
   */
    toHomeDetail() {
      wx.navigateTo({
        url: '/pages/homeDetail/homeDetail?title=456',
      });
    },
  }
})