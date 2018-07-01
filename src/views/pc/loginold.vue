<template>
  <main class="login">
    <header>
      <img src="../../assets/pc/m/logo.png" alt="" >
    </header>
    <section class="login-box">
      <div class="phone">
        <p
          class="c-code"
          @click="changeCountry"
          :class="[country.show_area_code.length > 3 ? 'long' : '']">
          {{country.show_area_code}}
        </p>
        <input type="tel" v-model.trim="phone" class="phone-number" placeholder="请输入手机号码">
      </div>
      <div class="code">
        <input type="tel" class="phone-code" v-model.trim="code" placeholder="短信验证码">
        <span class="get-code" v-if="!startCode" @click="getCode">获取验证码</span>
        <span class="get-code" v-else>{{time}} 秒</span>
      </div>
      <label class="invite" v-if="isRegister">
        <input type="text" v-model.trim="inviteCode" placeholder="邀请码">
      </label>
      <label class="name" v-if="isRegister">
        <input type="text" v-model.trim="name" placeholder="昵称">
      </label>
      <x-button class="go" v-if="!loading" @click.native="go" :gradients="['#1D62F0', '#19D5FD']">开启musiclife之旅</x-button>
      <x-button class="go" v-else :gradients="['#1D62F0', '#19D5FD']">加载中...</x-button>
    </section>
    <div class="model" v-if="model">
      <x-dialog :hide-on-blur="true" v-model="model">
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
      </x-dialog>
    </div>
  </main>
</template>

<script>
import CountryCode from '../../assets/js/country-code'
import { XButton, XDialog } from 'vux'
let set = ''
export default {
  name: 'login',
  data () {
    return {
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
      startCode: false,
      time: 60,
      countryCode: CountryCode,
      loading: false
    }
  },
  components: {
    XButton: XButton,
    XDialog: XDialog
  },
  methods: {
    getCode () {
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
          this.$toast('发送成功')
        } else {
          this.$toast(res.body.msg)
          this.startCode = false
        }
      }).catch((e) => {
        console.log(e)
        this.$toast('获取验证码失败')
        this.startCode = false
      })
      console.log(123123)
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
      let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
      if (!reg.test(this.phone)) {
        this.$toast('请输入正确手机号码')
        return false
      }
      return true
    },
    go () {
      if (!this.checkoutPhone()) {
        return false
      }

      if (this.code === '') {
        this.$toast('请输入短信验证码')
        return false
      }

      if (this.isRegister) {

        // if (this.inviteCode === '') {
        //   this.$toast('请输入邀请码')
        //   return false
        // }

        if (this.name === '') {
          this.$toast('请输入昵称')
          return false
        }
      }
      if (this.isRegister) {
        this.register()
      } else {
        this.login()
      }
      // this.$toast('登录成功')
      // this.$router.push('user')
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
          this.$toast('登录成功')
          this.$router.push('user')
          this.loading = false

        } else if (res.body.code == 10508) {
          this.$router.push('user')
        } else {
          this.$toast(res.body.msg)
          this.loading = false
          this.startCode = false
        }
      }).catch((e) => {
        this.$toast('登录失败')
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
        name: this.name
      }, {
        emulateJSON: true
      }).then((res) => {
        if (~~res.body.code === 0) {
          this.$toast('注册成功')
          // this.$router.push('user')
        } else {
          this.$toast(res.body.msg)
          this.startCode = false
        }
        this.loading = false
      }).catch((e) => {
        this.$toast('注册失败')
        this.loading = true
      })
    },
    changeCountry () {
      this.model = true
    },
    chooseCountry (index) {
      this.country = this.countryCode[index]
      this.model = false
    }
  },
  mounted () {
    if (this.$route.query.code) {
      this.inviteCode = this.$route.query.code
      // this.isRegister = true
    }

    let info = window.localStorage.getItem('userInfo')
    if (info) {
      // this.$router.push('user')
    }

    // $(document).ready(function () {
    //  　$('body').height($('body')[0].clientHeight);
    // });
    
  },
  destroyed () {
    clearInterval(set)
  }
}
</script>

<style lang="scss" scoped>
  body {
    height: 100vh;
    background-color: black;
  }

  .login {
    position: relative;
    margin: auto;
    max-width: 600px;
    width:100%;
    height:100vh;
    background: black;
    background: url('../../assets/pc/m/bg.png') repeat-y center;
    background-size: 100%;
    font-size: 14px;
  }

  header {
    width: 100%;
    padding-top: 50px;
    height: 200px;
    img {
      display: block;
      width: 200px;
      margin: auto;
    }
  }

  .login-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

    label {
      display: flex;
      width: 80%;
      font-size: 18px;
      line-height: 50px;
      color: white;
      margin-bottom: 20px;
    }

    input {
      border: none;
      border-bottom: 1px solid white;
      outline: none;
      background: none;
      width: 100%;
      color: white;
      font-size: 18px;
      line-height: 50px;
      border-radius: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .phone {
      display: flex;
      width: 80%;
      font-size: 18px;
      line-height: 50px;
      height: 50px;
      color: white;
      margin-bottom: 20px;
      .c-code {
        position: relative;
        width: 18%;
        border-bottom: 1px solid white;
        box-sizing: border-box;
        line-height: 50px;
        height: 50px;
        vertical-align: middle;
      }

      .c-code:after {
        position: absolute;
        top: 20%;
        right: 10%;
        width: 1px;
        height: 60%;
        background: white;
        content: '';
      }

      .long {
        width: 25%;
      }

      .phone-number {
        padding-left: 5px;
        letter-spacing: 1px;
        width: 80%;
      }
    }

    .code {
      position: relative;
      display: flex;
      width: 80%;
      font-size: 18px;
      line-height: 50px;
      color: white;
      margin-bottom: 20px;
      .phone-code {
        width: 100%;
      }

      .get-code {
        position: absolute;
        right: 0;
      }
    }

    .go {
      width: 80%;
      margin-top: 20px;
      letter-spacing: 1px;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    height: 60vh;
    overflow-y: auto;

    .item {
      display: flex;
      width: 100%;
      padding: 0 15px;
      justify-content: space-between;
      font-size: 16px;
      line-height: 40px;
      color: black;

      &.activity {
        color: rgb(25, 213, 253);
      }
    }
  }
</style>