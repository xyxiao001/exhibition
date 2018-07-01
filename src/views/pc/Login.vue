<template>
  <main class="login">
    <header>
      <router-link to="/">
        <img :src="`${baseUrl}pc/${lang}/foot-logo.png`" alt="">
      </router-link>
    </header>
    <section class="login-box">
      <div class="login-item phone">
        <p>{{ config.phone.name }}</p>
        <el-input :placeholder="config.phone.placeholder" v-model="phone" max="11">
          <template slot="prepend">
            <p class="center" @click="changeCountry">
              {{ country.show_area_code }}
            </p>
          </template>
        </el-input>
      </div>

      <div class="login-item code">
        <p>{{ config.code.name }}</p>
        <el-input :placeholder="config.code.placeholder" v-model="code" max="10">
        </el-input>
         <el-button v-if="!startCode" size="small" class="get-code" @click="getCode" >{{ config.getCode }}</el-button>
         <el-button v-else size="small" class="get-code disabled" >{{time}} s</el-button>
      </div>

      <!-- <div class="login-item name" v-if="isRegister">
        <p>{{ config.name.name }}</p>
        <el-input :placeholder="config.name.placeholder" v-model="name" max="10">
        </el-input>
      </div> -->

      <el-button class="submit" @click="go" :loading="loading">{{ config.submit }}</el-button>

      <!-- 手机区号选择 -->
      <el-dialog :visible.sync="model" class="choose-country">
        <section class="list">
          <div
            class="item"
            :key="$index"
            :class="[country.show_area_code === item.show_area_code ? 'activity' : '']"
            v-for="(item, $index) in countryCode"
            @click="chooseCountry($index)"
            >
            <p>{{item.name}}</p>
            <p>{{item.show_area_code}}</p>
          </div>
        </section>
      </el-dialog>
    </section>
  </main>
</template>

<script>
import CountryCode from '../../assets/js/country-code'
let set = ''
export default {
  name: 'login',
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      // 当前用户是否从来没登陆过
      isRegister: false,
      model: false,
      country: {
        "inter_code": "CN",
        "name": "中国大陆",
        "show_area_code": "+86",
        "area_code": "0086"
      },
      phone: '',
      code: '',
      inviteCode: '',
      name: '',
      origin: '',
      startCode: false,
      time: 60,
      countryCode: CountryCode,
      loading: false
    }
  },
  computed: {
    config () {
      return this.$t('pc.login')
    },
    lang () {
      return this.$store.getters.getLanguage
    }
  },
  watch: {
    lang (val) {
      this.initCountry()
    }
  },
  methods: {
    getCode () {
      clearInterval(set)
      if (!this.checkoutPhone()) {
        return false
      }
      this.time = 60
      this.startCode = true
      set = setInterval(() => {
        if (this.time >= 1) {
          this.time -= 1
        } else {
          this.startCode = false
        }
      }, 1000)
      this.$http.post('/api/index/verify-code', {
        phone: this.phone,
        area_code: this.country.area_code
      }, {
        emulateJSON: true
      }).then((res) => {
        if (~~res.body.code === 0) {
          this.msg(this.config.sendCode.success, 'success')
        } else {
          this.msg(res.body.msg)
          this.startCode = false
        }
      }).catch((e) => {
        console.log(e)
        this.msg(this.config.sendCode.error)
        this.startCode = false
      })
      this.getRegister()
    },
    // 判断用户是否注册
    getRegister () {
      this.$http.post('/api/user/is-register', {
        phone: this.phone,
        area_code: this.country.area_code
      }, {
        emulateJSON: true
      }).then((res) => {
        if (~~res.body.code === 0) {
          this.isRegister = ~~res.body.data === 0
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    
    checkoutPhone () {
      if (this.phone.length <= 0) {
        this.msg(this.config.phone.rule2)
        return false;
      }
      // let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
      // if (!reg.test(this.phone)) {
      //   this.msg(this.config.phone.rule2)
      //   return false
      // }
      return true
    },

    go () {
      if (!this.checkoutPhone()) {
        return false
      }

      if (this.code === '') {
        this.msg(this.config.code.rule1)
        return false
      }

      // if (this.isRegister) {
      //   if (this.name === '') {
      //     this.msg(this.config.name.rule1)
      //     return false
      //   }
      // }
      if (this.isRegister) {
        this.register()
      } else {
        this.login()
      }
    },
    login () {
      if (this.loading) {
        return false
      }
      this.loading = true
      this.$http.post('/api/user/login', {
        phone: this.phone,
        area_code: this.country.area_code,
        verify_code: this.code
      }, {
        emulateJSON: true
      }).then((res) => {
        if (~~res.body.code === 0) {
          this.msg(this.config.login.success, 'success')
          this.$router.push('user')
          this.loading = false

        } else if (res.body.code == 10508) {
          this.$router.push('user')
        } else {
          this.msg(res.body.msg)
          this.loading = false
          this.startCode = false
        }
      }).catch((e) => {
        this.msg(this.config.login.error)
        this.loading = false
      })
    },
    register () {
      if (this.loading) {
        return false
      }
      this.loading = true
      this.$http.post('/api/user/register', {
        phone: this.phone,
        area_code: this.country.area_code,
        verify_code: this.code,
        used_invite_code: this.inviteCode,
        name: this.name,
        origin: this.origin
      }, {
        emulateJSON: true
      }).then((res) => {
        if (~~res.body.code === 0) {
          this.msg(this.config.register.success, 'success')
          this.$router.push('user')
        } else {
          this.msg(res.body.msg)
          this.startCode = false
        }
        this.loading = false
      }).catch((e) => {
        this.msg(this.config.login.error)
        this.loading = false
      })
    },
    changeCountry () {
      this.model = true
    },
    chooseCountry (index) {
      this.country = this.countryCode[index]
      this.model = false
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
    initCountry () {
      let phone = this.$t("pc.phone")
      this.countryCode.forEach((item, index) => {
        if (item.show_area_code === phone) {
          this.country = item
        }
      })
    }
  },
  mounted () { 
    let query = this.$route.query
    if (query.invite_code) {
      this.inviteCode = query.invite_code
    }

    if (query.origin) {
      this.origin = query.origin
    }

    setTimeout(() => {
      this.initCountry()
    }, 500)
  },
  destroyed () {
    clearInterval(set)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/pc/scss/login.scss';
</style>

<style lang="scss">
  .login-item {
    position: relative;
    width: 100%;
    margin-top: 10px;
    color: white;
    

    .el-input-group__append, .el-input-group__prepend {
      position: absolute;
      height: 100%;
      width: 70px;
      line-height: 40px;
      background: none;
      border: 1px solid rgba($color: #ffffff, $alpha: .2);
      border: none;
      cursor: pointer;
    }

    .el-input__inner {
      color: white;
      opacity: 1;
      background: none;
      border: 1px solid rgba($color: #ffffff, $alpha: .2);
      border-radius: 4px;

      &::-webkit-input-placeholder {
        color: white;
        opacity: .5;
      }

      &:focus {
        border-color: rgba($color: #ffffff, $alpha: .8);
      }
    }
  }

  .phone {
    .el-input-group__prepend {
      padding: 0;
      &:after {
        position: absolute;
        content: "";
        height: 20px;
        width: 1px;
        background: white;
        right: 5px;
        top: 10px;
        opacity: .5;
      }
    }

    .el-input__inner {
      padding-left: 80px;
    }
  }

  .code {
    .el-input__inner {
      padding-right: 80px;
    }
  }

  .login-box {
    button {
      &:hover {
        opacity: .8;
      }
    }
    .submit {
      margin-top: 50px;
      width: 300px;
      color: white;
      background: #3D6CE2;
      border-color: #3D6CE2;
      border-radius: 30px;
    }

    .get-code {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 7px 20px;
      color: white;
      background: #3D6CE2;
      border-color: #3D6CE2;

      &.disabled {
        background: rgba($color: #3D6CE2, $alpha: .9);
        cursor: not-allowed;
      }
    }
  }

  .choose-country {
    .el-dialog {
      width: 400px;
      max-width: 80%;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        max-height: 60vh;
        overflow-y: auto;

        .item {
          display: flex;
          width: 100%;
          padding: 0 15px;
          justify-content: space-between;
          font-size: 16px;
          line-height: 40px;
          cursor: pointer;

          &.activity {
            color: rgb(25, 213, 253);
          }
        }
      }
  }

  @media screen and (max-width: 600px) {
    .login-item {
      .el-input__inner {
        border-left: none;
        border-right: none;
        border-top: none;
        border-radius: 0;
      }

      & > p {
        display: none;
      }
    }
  }
</style>