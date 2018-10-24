// pages/components/listTop/listTop.js
Component({
  options: {
    "multipleSlots": {},
  },
  properties: {
    imgUrl: String,
    sortList: Array,
    fixTop: Boolean,
    listQueryParam: String
  },
  data: {
    currentIndex: 0,
    menuTop: null,
    menuScrollTop: null,
    sortPic: [{
      picSrc: '/assets/image/boysBoot.png',
      ids: '1'
    },
    {
      picSrc: '/assets/image/girlsBoot.png',
      ids: '2'
    },
    {
      picSrc: '/assets/image/girls.png',
      ids: '3'
    },
    {
      picSrc: '/assets/image/boys.png',
      ids: '4'
    }
    ],
    sortTrendListPic: [{
      picSrc: '/assets/image/boyShoes.png',
      ids: '1'
    },
    {
      picSrc: '/assets/image/girlShoes.png',
      ids: '2'
    },
    {
      picSrc: '/assets/image/girlDress.png',
      ids: '3'
    },
    {
      picSrc: '/assets/image/boyDress.png',
      ids: '4'
    }
    ],
    sortSizeList: [{
      title: '女士',
      type: 'girl',
      ids: '1',
      selected: true
    },
    {
      title: '男士',
      type: 'boy',
      ids: '2',
      selected: false
    }
    ],
    sortWinterList: [{
      title: '女靴',
      type: 'newFall',
      ids: '1',
      selected: true
    },
    {
      title: '男靴',
      type: 'newFall',
      ids: '2',
      selected: false
    },
    {
      title: '女装',
      type: 'newFall',
      ids: '3',
      selected: false
    },
    {
      title: '男装',
      type: 'newFall',
      ids: '4',
      selected: false
    }
    ],
    sortTrendList: [{
      title: '女鞋',
      type: 'newFall',
      ids: '1',
      selected: true
    },
    {
      title: '男鞋',
      type: 'newFall',
      ids: '2',
      selected: false
    },
    {
      title: '女装',
      type: 'newFall',
      ids: '3',
      selected: false
    },
    {
      title: '男装',
      type: 'newFall',
      ids: '4',
      selected: false
    }
    ]
  },

  onPageScroll(e) {
    console.log(e.scrollTop);
    if (e.scrollTop > this.data.menuTop) {
      that.setData({
        menuFixed: true
      })
    } else {
      that.setData({
        menuFixed: false
      })
    }
  },

  methods: {
    changeList(e) {
      this.setData({
        currentIndex: e.target.dataset.id
      });
      this.triggerEvent("selectSort", {
        currentIndex: e.target.dataset.id
      });
    },

  }
})