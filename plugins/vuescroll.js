import Vue from 'vue';
import vuescroll from 'vuescroll';

// You can set global config here.
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'percent',
      detectResize: true,
      /** Enable locking to the main axis if user moves only slightly on one of them at start */
      locking: true,
    },
    scrollPanel: {
      initialScrollY: false,
      initialScrollX: false,
      scrollingX: true,
      scrollingY: true,
      speed: 300,
      easing: undefined,
      verticalNativeBarPos: 'right'
    },
    rail: {
      background: '#01a99a',
      opacity: 0,
      size: '6px',
      specifyBorderRadius: false,
      gutterOfEnds: null,
       gutterOfSide: '2px',
      keepShow: false
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: 0,
      size: '6px',
      disable: false
    }
  }
});
