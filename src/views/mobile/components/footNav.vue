<template>
  <div class="foot-nav">
    <div class="img-box" v-for='(x, index) in img_list'>
      <img :src="x.img" alt="" :class='{active: index == tabIndex}' @click='MrouterJump(x.router)'>
    </div>
  </div>
</template>

<script>


export default {
  computed: {
  },
  components: {
  },
  created () {
  },
  props: {
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      img_list: [
        {img: require('../../../assets/mobile/footNav/mine.png'), router: 'wechatuser-m'},
        {img: require('../../../assets/mobile/footNav/coin.png'), router: 'wechatinfo-m'},
        {img: require('../../../assets/mobile/footNav/home.png'), router: 'wechatindex-m'}
      ]
    }
  },
  mounted () {
  }
}
</script>

<style lang='scss' scoped>
  .foot-nav {
    height: 1.25rem;
    width: 100%;
    position: fixed;
    background-color: red;
    bottom: 0rem;
    background-color: #455AD0;
  }
  .img-box {
    width: 33.33%;
    float: left;
    height: 100%;
    text-align: center;
    line-height: 1.25rem;
    img {
      width: 0.5rem;
      vertical-align: middle;
      opacity: 0.5;
    }
    img.active {
      opacity: 1;
    }
  }
</style>
