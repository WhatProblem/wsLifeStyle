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
        url: '/pages/homeDetail/homeDetail?title=123',
      })
    }
  }
})