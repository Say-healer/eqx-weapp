
Component({
  externalClasses: ['eqx-class'],
  properties: {
    zIndex: {
      type: Number,
      value: 1
    },
    type: {
      type: String,
      value: 'line', // card
    },
    duration: {
      type: Number,
      value: 0.3
    },
    swipeThreshold: {
      type: Number,
      value: 5
    },
    color:  {
      type: String,
      value:'#1593ff'
    },
    tabMenu:{
      type:Array,
      value:[],
      observer:function(val) {
        this.onShow()
      }
    },
    margin:{
      type: Number,
      value: 0
    },
    active:{
      type: Number,
      value: 0
    }

  },
  data: {
    lineStyle: ''
  },
  attached: function() {
    this.onShow()
  },
  methods: {
    pxToRpx(w) {
      return  750 / w;
    },
    /**
     * 页面显示
     */
    onShow: function() {
      
      const {
        swipeThreshold,
        tabMenu,
        type
      } = this.data
      let win = wx.getSystemInfoSync().windowWidth;
      var span = win / tabMenu.length * this.pxToRpx(win);
      let itemWidth = tabMenu.length <= swipeThreshold ? span : '160'
      if (type == 'card') {
        itemWidth = 100 / tabMenu.length
      }
     
      this.setData({
        itemWidth: itemWidth
      });
      this.setLine()
    },
     /**
     * 页面显示
     */
    onTap: function(e) {
      var index = e.currentTarget.dataset.index;
      this.setData({
        active: index
      });
      this.setLine();
      this.triggerEvent('onChange', { index, active:this.data.tabMenu[index]});
    },
    setLine(skipTransition = '') {
      const {
        duration,
        active,
        itemWidth,
        type
      } = this.data;
      if (type !== 'line') return;
      let width = itemWidth / 4;
      let left = active * itemWidth + (itemWidth / 2 - width /2);
      const transition = skipTransition ?
        '' :
        `transition-duration: ${duration}s;`;

      this.setData({
        lineStyle: `
            width: ${width}rpx;
            transform: translateX(${left}rpx);
            ${transition}
          `
      })
    }
  }

})