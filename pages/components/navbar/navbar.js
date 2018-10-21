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
      url: '/pages/newFall/newFall?title=123456'
    },
    {
      src: '/assets/image/boot.png',
      title: '初冬鞋靴',
      url: '/pages/newWinter/newWinter'
    },
    {
      src: '/assets/image/shop_bag.png',
      title: '潮流榜单',
      url: '/pages/trendList/trendList'
    },
    {
      src: '/assets/image/high_heel.png',
      title: '大&小码',
      url: '/pages/specialSize/specialSize'
    }
    ]
  },
  methods: {
    
  }
})