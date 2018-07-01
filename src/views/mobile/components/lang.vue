<template>
    <div class="lang">
      <p @click="showChooseLang" class="language-choose">
        <span>{{choose_lang | langChoose}}
          <img src="../../../assets/mobile/footNav/down-angle.png" alt="">
        </span>
      </p>
      <div v-if="lang_show" @click="lang_show = 0" class="mask"></div>
      <transition name="up-in">
        <div v-if="lang_show" class="lang-bar">
          <p v-for="x in lang_list" :class="{active:choose_lang == x.s_name}" @click="chooseLang(x)">{{x.name}}</p>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
    name: 'lang',
    components: {
    },
    computed: {
    },
    methods: {
        closeSider() {
            this.$emit('closeSider')
        },
        showChooseLang() {
            this.lang_show = 1
            console.log(123)
        },
        chooseLang(x) {
            this.choose_lang = x.s_name
            localStorage.lang = x.s_name
            this.lang_show = 0
        }
    },
    filters: {
      langChoose(x) {
        console.log(x)
        switch (x) {
          case 'zh':
            return '中文'
            break;
          case 'en':
            return '英文'
            break;
          case 'ja':
            return '日文'
            break;
          default:
            return '中文'
        }
      }
    },
    data() {
        return {
            choose_lang: localStorage.lang || 'zh',
            lang_show: 0,
            lang_list: [
              {name: '中文', index: 0, s_name: 'zh'},
              {name: 'English', index: 1, s_name: 'en'},
              {name: '日本語', index: 2, s_name: 'ja'},
            ],
        }
    },

    created() {

    },
    mounted() {

    }

}
</script>
<style lang="sass" scoped>
  .mask
      position: fixed
      width: 100%
      height: 100%
      top: 0
      left: 0
      background-color: rgba(0,0,0,0.3)
      z-index: 1
  .lang
      position: fixed
      top: 0rem
      width: 2rem
      right: 0rem
  .language-choose
      text-align: center
      position: absolute
      top: 0.5rem
      right: 0.5rem
  .language-choose span
      min-width: 1.8rem
      color: rgba(255, 255, 255, 0.5)
      border: 1px solid rgba(255, 255, 255, 0.5)
      display: inline-block
      text-align: center
      border-radius: 0.5rem
      margin: 0 auto
      font-size: 0.35rem
      height: 0.8rem
      line-height: 0.8rem
      img
          width: 0.25rem
          vertical-align: middle
  .lang-bar
      position: fixed
      width: 100%
      z-index: 1002
      bottom: 0
      left: 0
      background-color: #000
      color: #fff
  .lang-bar p
      text-align: center
      font-size: 0.375rem
      line-height: 1.4rem
      color: rgba(255, 255, 255, 0.7)
      border-bottom: 1px solid rgba(255, 255, 255, 0.3)
  .lang-bar p:last-child
      border-bottom: none
  .lang-bar .active
      color: #1DDB96
  .left-in-enter-active, .left-in-leave-active
    transition: all 0.5s

  .left-in-enter, .left-in-leave-active
      opacity: 0
      transform: translate(80%, 0)

  .up-in-enter-active, .up-in-leave-active
      transition: all 0.5s

  .up-in-enter, .up-in-leave-active
      opacity: 0
      transform: translate(0, 50%)
</style>
