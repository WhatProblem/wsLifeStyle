// pages/components/buyModal/buyModal.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {
    imgUrl: [
      { imgSrc: '/assets/image/black_1.jpg' },
      { imgSrc: '/assets/image/red_2.jpg' }
    ],
  },
  methods: {
    colseModal() {
      this.triggerEvent('closeBuyModel');
    },
    colseSureModal() {
      this.triggerEvent('closeBuyModel');
    }
  }
})