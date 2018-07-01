<template>
  <div class="music-life">
    <change-language></change-language>
    <!-- <transition name="fade" mode="out-in">
    </transition> -->
    <router-view></router-view>
  </div>
</template>

<script>
import changeLanguage from '../../components/change-language'
export default {
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    }
  },
  watch: {
    lang () {
      document.title = this.$t('pc.meta')
    }
  },
  components: {
    changeLanguage
  },
  created () {
  },
  mounted () {
    if (isPhone) {
      document.querySelector('.music-life').className = 'music-life  moblie'
    }
    document.title = this.$t('pc.meta')
  }
}
</script>

<style scoped>
  @import '../../assets/pc/scss/common.scss';
</style>