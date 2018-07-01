<template>
  <main class="user">
    <router-link to="/" class="logo-index">
      <img :src="`${baseUrl}common/logo-index.png`" alt="">
    </router-link>
    <section class="user-content">
      <img :src="userInfo.avatar" alt="" class="avatar">
      <p class="name">{{ userInfo.name }}</p>
      <p class="phone">{{ userInfo.phone }}</p>
    </section>

    <section class="life">
      <p class="title">
        <span>{{ $t("pc.user.title ") }}</span>
        <router-link to="/" class="read-more">{{ $t("pc.user.readMore ") }}</router-link>
      </p>
      <p class="des">
        {{ $t("pc.user.des") }}
      </p>
    </section>

    <router-link class="my-coin pc-coin" to="detail">
      <p class="coin">{{ userInfo.total_coin }}</p>
      <p class="coin-des">{{ $t("pc.user.coin ") }}</p>
      <p class="coin-tips" v-if="userInfo.total_count === 0">{{ $t("pc.user.coinTips ") }}</p>
    </router-link>

    <router-link class="my-coin mobile-coin" to="detail">
      <p class="coin-des">{{ $t("pc.user.coin ") }}</p>
      <p class="coin">
        {{ ~~userInfo.total_coin }}
        <span class="coin-tips" v-if="userInfo.total_count === 0">{{ $t("pc.user.coinTips ") }}</span>
        <i class="el-icon-arrow-right"></i>
      </p>
    </router-link>

    <section class="activity">
      <activityList></activityList>
    </section>
    <foot></foot>    
  </main>
</template>

<script>
import Foot from '../../components/foot'
import activityList from '../../components/activity-list'
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
    activityList,
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
  .user {
    color: white;
    background: linear-gradient(to bottom, #000332, #050643);    
  }

  .user-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 130px;
    font-size: 16px;

    p {
      width: 100%;
      text-align: center;
    }

    .avatar {
      width: 100px;
      height: auto;
      align-self: center;
      margin-bottom: 10px;
    }

    .phone {
      padding-top: 5px;
      font-size: 15px;
      opacity: .5;
    }
  }

  .activity {
    padding-bottom: 50px;
  }

  .life {
    width: 700px;
    margin: auto;
    font-size: 14px;
    color: white;
    text-align: center;
    margin-top: 20px;

    .title {
      border: 1px solid #142059;
      border-radius: 3px;
      padding: 20px 15px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    .read-more {
      color: #7FD3FF;
    }

    .des {
      padding: 20px 15px;
      background-color: #6CB0FF;
      border-radius: 3px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      color: #000E5F;
    }
  }

  .my-coin {
    display: block;
    width: 700px;
    height: 120px;
    margin: 20px auto;
    background-color: rgba($color: #3749AD, $alpha: 0.2);
    color: white;

    p {
      width: 100%;
      text-align: center;
    }

    .coin {
      font-size: 24px;
      padding-top: 37px;
    }

    .coin-des {
      color: #7FD3FF;
      font-size: 14px;
      opacity: .8;
    }

    .coin-tips {
      color: #4781D6;
      opacity: .5;
      font-size: 12px;
      padding-top: 5px;
    }
  }

  .mobile-coin {
    display: none;
  }

@media screen and (max-width: 1024px) {
  .life, .my-coin {
    width: 80%;
  }
}

@media screen and (max-width: 600px) {
  .activity {
    padding-bottom: 0px;
  }

  .user-content {
    padding-top: 70px;
  }

  .life, .my-coin {
    width: 90%;
  }

  .a-list {
    padding-bottom: 0;
  }

  .mobile-coin {
    display: flex;
    background-color: #3749AD;
    height: 40px;
    line-height: 40px;

    .coin {
      padding-top: 0px;
      text-align: right;
      font-size: 12px;
    }

    .coin-des {
      color: white;
      font-size: 14px;
    }

    .coin-tips {
      color: white;
      opacity: 1;
      padding-right: 5px;
    }

    i {
      padding-right: 5px;
      font-size: 14px;
      color: white;
    }
  }

  .pc-coin {
    display: none;
  }
}

</style>
