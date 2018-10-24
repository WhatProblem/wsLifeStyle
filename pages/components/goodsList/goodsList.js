/*goodsList部分 */
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    goodList: Array
  },
  data: {

  },
  methods: {
    routeToDetail() {
      wx.navigateTo({
        url: '/pages/goodDetail/goodDetail?title=123',
      })
    }
  }
})