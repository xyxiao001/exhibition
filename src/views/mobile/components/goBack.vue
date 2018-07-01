<template>
  <div class="go-back" @click="go">
    <i class="iconfont icon-fanhui"></i>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: '/'
    }
  },
  methods: {
    go () {
      this.$router.push(this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .go-back {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;

    i {
      font-size: 20px;
    }
  }
</style>
