Component({
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {
    navItems: [{
      src: '/assets/image/new.png',
      title: '秋季新品',
      url: '/pages/homeDetail/homeDetail?title=navigate'
    },
    {
      src: '/assets/image/boot.png',
      title: '初冬鞋靴',
      url: '/pages/homeDetail/homeDetail'
    },
    {
      src: '/assets/image/shop_bag.png',
      title: '潮流榜单',
      url: '/pages/homeDetail/homeDetail'
    },
    {
      src: '/assets/image/high_heel.png',
      title: '大&小码',
      url: '/pages/homeDetail/homeDetail'
    }
    ]
  },
  methods: {
    
  }
})