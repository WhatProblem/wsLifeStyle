// pages/components/detailNav/detailNav.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {

  },

  methods: {
    addCart() {
      this.triggerEvent("addCart");
    }
  }
})