<template>
  <div class="model" v-if="show" @click="close">
    <span class="close" v-if="showClose">
      <img src="../assets/pc/home/close.png" alt="" @click="close">
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  model: {
    prop: 'visiable',
    event: 'change'
  },
  props: {
    visiable: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visiable (val) {
      this.show = val
    },
    show (val) {
      this.isScroll(val)
      this.$emit('change', val)
    }
  },
  methods: {
    isScroll (val) {
      // 同时需要存入当前滚动条的高度 然后关闭的时候滚动回来
      if (val) {
        this.top = window.scrollY
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        if (this.top > 0) {
          this.$nextTick(() => {
            window.scrollTo(0, this.top)
          })
        }
      }
    },
    close () {
      this.show = false
    }
  },
  mounted () {
    this.show = this.visiable
  },
  destroyed () {
    this.isScroll(false)
  }
}
</script>


<style lang="scss" scoped>
  .model {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba($color: #000332, $alpha: .5);
    z-index: 100;

  .close img {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 50px;
    opacity: .6;
    cursor: pointer;
    transition: opacity .2s ease-out;
    z-index: 10;

    &:hover {
      opacity: 1;
    }
  }
}
</style>