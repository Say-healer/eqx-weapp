Page({
  data:{
    typeIndex:1,
    tabsList:[
      {
        id: '601,602',
        title: '小程序作品',
      },
      {
        id: '2,3',
        title: 'APP作品',
      },
      {
        id: '1',
        title: '电脑作品',
      },
    ]
  },
  handleTabChangeType(e){
    const {
      active,
      index,
    } = e.detail;
    this.setData({
      typeIndex:index
    })
  }

});