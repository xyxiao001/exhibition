<template>
  <main class="activity">
    <router-link to="/" class="logo-index">
      <img :src="`${baseUrl}common/logo-index.png`" alt="">
    </router-link>

    <section class="a-content">
      <section class="a-img">
        <img :src="`${baseUrl}activity/pc/${lang}/lens.png`" alt="acitvity" class="pc">
        <img :src="`${baseUrl}activity/m/${lang}/lens.png`" alt="acitvity" class="mobile">
      </section>

      <el-button class="go">
        <a :href="href" target="_blank" v-loading="tkLoading">{{ $t("pc.activityLens.go") }}</a>
      </el-button>

      <section class="rule-box">
        <section class="rule-content">
          <section class="rule-item" v-for="item in list" :key="item.name">
            <p class="title">{{ item.name }}</p>
            <img :src="`${baseUrl}common/tips.png`" class="tips">
            <p class="des copy" @click="copyInvite" :data-clipboard-text="inviteUrl">
              {{ item.des }}
              <a v-if="item.type === 1">{{ item.btn }}</a>
            </p>
          </section>
        </section>
      </section>


      <section class="invite-box">
        <section class="coin">
          <p class="total">￥{{ ~~amount }} <span v-if="amount > 0">/ {{ percent }}</span></p>
          <p class="des">{{ $t("pc.activityLens.r-amount")}}</p>
        </section>

        <section class="people">
          <p class="total">{{ ~~people }}</p>
          <p class="des">{{ $t("pc.activityLens.r-num")}}</p>
        </section>
      </section>

      <section class="a-line">
        <p>{{$t("pc.activityLens.r-date") }}</p>
        <p v-if="dateMoney > 0" class="send-m">{{$t("pc.activityLens.r-money", {money: dateMoney, date: date}) }}</p>
        <p v-else>{{ $t("pc.activityLens.r-none")}}</p>
      </section>

      <section class="a-line" @click="copyInvite">
        <p>{{$t("pc.activityLens.r-invite") }}</p>
        <p>
          <a class="copy" :data-clipboard-text="inviteUrl">{{$t("pc.activityLens.r-copy")}}</a>
        </p>
      </section>

      <p class="a-tips">{{ $t("pc.activityLens.r-tips")}}</p>
    </section>

    <foot></foot>    
  </main>
</template>

<script>
import Foot from '../../components/foot'
import Clipboard from 'clipboard'
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      url: 'http://music-lens.com/wxindex',
      token: '',
      userInfo: {},
      amount: 0,
      people: 0,
      dateMoney: 0,
      percent: '100%',
      date: '',
      tkLoading: true
    }
  },
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    },

    list () {
      return this.$t('pc.activityLens.list') || []
    },
    
    href () {
      return `${this.url}?tk=${this.token}`
    },

    inviteUrl () {
      return `https://www.musiclife.io/lens?invite_code=${this.userInfo.my_invite_code}`
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
          this.$router.push('login')
        }
      }).catch((e) => {
        console.log(e)
      })
    },

    copyInvite () {
      this.msg(this.$t("pc.activityLens.r-copy-msg"), 'success')
    },

    msg (value, type, duration) {
      let w = document.body.clientWidth
      if (w <= 600 || isPhone) {
        this.$toast(value)
      } else {
        this.$message({
          message: value || '',
          type: type || 'error',
          duration: duration || 1500
        })
      }
    },

    getToken () {
      this.$http.get('/api/user/sso-token').then((res) => {
        let data = res.body
        if (~~data.code === 0) {
          this.token = data.data.token
        }
        this.tkLoading = false
      }).catch((e) => {
        this.tkLoading = false
        console.log(e)
      })
    },

    getLens () {
      this.$http.get('/api/user/len-activity-info').then((res) => {
        let data = res.body
        if (~~data.code === 0) {
          if (data.data) {
            this.amount = data.data.baseMoney
            this.people = data.data.inviteNum
            this.date = data.data.cashBackDate 
            this.dateMoney = data.data.cashBackMoney 
            this.percent = data.data.percent
          }
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
    this.getToken()
    this.getLens()
    new Clipboard('.copy')
  }
}
</script>


<style lang="scss" scoped>
.activity {
  color: white;
  background: linear-gradient(to bottom, #000332, #050643);    
}

.a-content {
  max-width: 700px;
  margin: auto;

  .a-img {
    img {
      padding-top: 137px;
      width: 100%;
    }
  }

  .go {
    display: block;
    padding: 0;
    border: none;
    margin: 26px auto;

    a {
      display: inline-block;
      color: #000000;
      font-size: 14px;
      line-height: 35px;
      padding: 0 20px;
      border-radius: 5px;
      background: linear-gradient(to left, #A3FF5F, #00E0FF);
      transition: all .2s ease-out;
      
      &:hover {
        opacity: .8;
      }
    }
  }

  .rule-box {
    border: 8px solid #5281FF;
    border-radius: 5px;
    background: #5281FF;
    margin-bottom: 20px;

    .rule-content {
      display: block;
      width: 100%;
      min-height: 100px;
      background: white;
      border: 1px solid white;
      border-radius: 5px;
    }

    .rule-item {
      padding: 30px 27px;
      .title {
        color: #3749AD;
        font-size: 14px;
        text-align: center;
      }

      .tips {
        display: block;
        width: 150px;
        margin: 10px auto;
      }

      .des {
        color: #333333;
        font-size: 12px;
        text-align: center;

        a {
          color: #3D6CE2;
          cursor: pointer;
        }
      }
    }
  }

  .invite-box {
    display: flex;
    justify-content: space-between;

    section {
      display: flex;
      width: 45%;
      text-align: center;
      flex-wrap: wrap;
      background-color: rgba($color: #3749AD, $alpha: .2);

      p {
        width: 100%;
        line-height: 30px;
      }

      .total {
        font-size: 15px;
        margin-top: 35px;
      }

      .des {
        font-size: 14px;
        color: #7FD3FF;
        opacity: .8;
        margin-bottom: 25px;
      }
    }
  }

  .a-line {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 20px;
    line-height: 45px;
    background-color: rgba($color: #3749AD, $alpha: .2);
    margin: 20px 0px;

    a {
      cursor: pointer;
      border:  1px solid white;
      padding:  5px 10px;
      border-radius: 20px;
      font-size: 12px;
    }

  }

  .a-tips {
    font-size: 12px;
    text-align: center;
    margin: 10px auto 100px auto;
    opacity: .5;
  }
}

@media screen and (max-width: 1024px) {
  .a-content {
    width: 90%;
  }
}

@media screen and (max-width: 600px) {
  .a-content {
    .rule-box {
      .rule-item {
        padding: 10px 27px;
      }
    }
    .invite-box {
      flex-wrap: wrap;
      section {
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        padding: 0 20px 0 10px;
        background-color: #3749AD;
        

        .total {
          width: auto;
          margin: 0;
          line-height: 45px;
          color: white;
        }

        .des {
          width: auto;
          margin: 0;
          color: white;
          opacity: 1;
          line-height: 45px;
        }
      }
    }

    .a-line {
      padding: 0 15px 0 10px;
      border-radius: 5px;
      background-color: #3749AD;

      a {
        border: none;
        color: #A9FBFF;
        text-align: left;
      }

      .send-m {
        font-size: 13px;
      }
    }

    .a-tips {
      margin-bottom: 20px;
    }
  }
}

</style>
