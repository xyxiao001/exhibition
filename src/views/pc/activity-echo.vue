<template>
  <main class="activity">
    <router-link to="/" class="logo-index">
      <img :src="`${baseUrl}common/logo-index.png`" alt="">
    </router-link>
    <foot></foot>    
  </main>
</template>

<script>
import Foot from '../../components/foot'
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      userInfo: {}
    }
  },
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    }
  },
  components: {
    Foot
  },
  methods: {
    getUserInfo () {
      // localStorage.removeItem('MUSICLIF_USERINFO')
      this.$http.get('/api/user/info').then((res) => {
        let data = res.body
        if (~~data.code === 0) {
          this.isLogin = true
          let obj  = data.data
          let s = obj.phone.slice(3, 7)
          obj.phone = obj.phone.replace(s, '****')
          obj.avatar = `${this.baseUrl}common/user.png`
          if (obj.wx_info){
            obj.avatar = obj.wx_info.avatar || `${this.baseUrl}common/user.png`
          }
          this.userInfo = obj
          localStorage.setItem('MUSICLIF_USERINFO', JSON.stringify(obj))
        } else {
          this.$router.push('home')
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  },
  mounted () {
    let info = localStorage.getItem('MUSICLIF_USERINFO')
    if (info) {
      this.userInfo = JSON.parse(info)
    }
    this.getUserInfo()
  }
}
</script>


<style lang="scss" scoped>
.activity {
  color: white;
  background: linear-gradient(to bottom, #000332, #050643);    
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 600px) {

}

</style>
