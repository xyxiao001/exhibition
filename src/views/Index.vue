<template>
  <div class="music-life">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    }
  },
  watch: {
    lang () {
      document.title = this.$t('meta')
    }
  },
  created () {
  },
  mounted () {
    document.title = this.$t('meta')
  }
}
</script>

<style scoped>
  @import '../assets/scss/common.scss';
</style>