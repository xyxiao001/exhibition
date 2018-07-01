<template>
  <main class="wechat-share" id='wechat-share'>
    <div class="body-loading" v-if='loading'>
      <div class="loading-box">
       
          <img src="../../assets/mobile/footNav/wxlogo.png" alt="">
        <p class="triangle-loading">LOADING</p>
      </div>
    </div>
    <div v-if='!success'>
      <div class="logo" @click='logout'>
           <router-link to="/"><img src="../../assets/mobile/footNav/share_logo.png" alt=""></router-link>
      </div>
      <!-- <div class="coop">
          <img src="../../assets/mobile/images/activity/coop.png" alt="">
          <img style='position: absolute;width: 3rem;top: 1rem;right: 0.6rem;' src="../../assets/mobile/images/activity/r-box.png" alt="">
      </div> -->
      <div class="input-form">
          <div class="main-form">
              <p class='title'>{{user_name}}送你</p>
              <p class='title'>
                  <span style='vertical-align:middle;margin-top:-0.09rem;display:inline-block;width: 1rem;height: 1px;background-color: #bababa'> </span>
                  
                30枚MITC数字货币
                 
                  <span style='vertical-align:middle;margin-top:-0.09rem;display:inline-block;width: 1rem;height: 1px;background-color: #bababa'> </span>
              </p>
              <p class='mes'>MITC是区块链音乐系统MusicLife发行的数字货币可以用于购买音乐的股权并得到分红</p>

              <p style='height: 1px;border: 1px dashed #e8e8e8;position:relative;margin-top:0.2rem;'>
                  <span style='position: absolute;left: -0.25rem;top:-0.25rem;border-radius:50%;width: 0.5rem;height: 0.5rem;background-color: #3B62DD'></span>
                  <span style='position: absolute;right: -0.25rem;top:-0.25rem;border-radius:50%;width: 0.5rem;height: 0.5rem;background-color: #519AD9'></span>
              </p>
              <p class='input'>
                  <span @click="changeCountry">{{country.show_area_code}}</span>
                  <input type="text" name="" value="" placeholder="请填写手机号" v-model='phone'>
              </p>
              <p class='input verify'>
                  <input type="text" name="" value="" placeholder="请输入验证码" v-model='code'>
                  <span v-if="!startCode" @click='getCode'>发送验证码</span>
                  <span v-else>{{time}} 秒</span>
              </p>
              <a class='btn' type='button' @click='go'>立即领取</a>
          </div>
      </div>
      <p style='text-align: center;color: #4782D7;font-size: 0.35rem;margin-top: 0.5rem'>MusicLife音乐生活</p>
      <p style='text-align: center;color: #ffff;font-size: 0.4rem;'>免费放送3000万MITC数字货币</p>
      <p style='text-align: center;color: #4782D7;font-size: 0.35rem;'>送完即止</p>

      <div class="wx-model">
        <x-dialog :hide-on-blur="true" v-model="model">
          <section class="list">
            <div
              class="item"
              :class="[country.show_area_code === item.show_area_code ? 'activity' : '']"
              v-for="(item, $index) in countryCode"
              :key="$index"
              @click="chooseCountry($index)"
              >
              <p>{{item.name}}</p>
              <p>{{item.show_area_code}}</p>
            </div>
          </section>
        </x-dialog>
      </div>
    </div>
    <div class="short-bar">
        <img src="../../assets/mobile/images/activity/shor-bar.png" alt="">
    </div>
    <p style='text-align: center;font-weight: 200;font-size: 0.3rem;color: rgba(255,255,255,0.5);'>MITC由新加坡非营利基金会MusicLife Foundation发行</p>
    <p style='text-align: center;font-weight: 200;font-size: 0.3rem;color: rgba(255,255,255,0.5);padding-bottom: 1rem;'>可在在接入软件中购买音乐、在指定交易所购买或出售等</p>

  </main>
</template>

<script>
import { XButton, XDialog, Qrcode } from 'vux'
import Clipboard from 'clipboard'
import GoBack from '../mobile/components/goBack'
import html2canvas from 'html2canvas'
import CountryCode from '../../assets/js/country-code'
export default {
  name: 'share',
  data () {
    return {
      userInfo: {},
      name: '',
      code: '',
      phone: '',
      num: 10,
      AllNum: 10,
      success: 0,
      share_img: '',
      startCode: false,
      time: 60,
      countryCode: CountryCode,
      loading: true,
      isRegister: false,
      model: false,
      qr_size: 60,
      is_new: 0,
      openid: '',
      avatarurl: '',
      nickName: '',
      inviteCode: '6NP3F38A',
      user_name: '',
      country: {
        "inter_code": "CN",
        "name": "中国大陆",
        "show_area_code": "+86",
        "area_code": "0086"
      },
    }
  },
  computed: {
    copy () {
     return `我是${this.userInfo.name}，邀请您加入MusicLife社区。邀请码：${this.userInfo.my_invite_code}，
     我的邀请次数有限，赶快加入哦～ https://musiclife.io/login?code=${this.userInfo.my_invite_code} 更有神秘硬件在等你!`
    }
  },
  components: {
    XButton,
    XDialog,
    Qrcode,
    GoBack
  },
  methods: {
    changeCountry () {
      this.model = true
    },
    savePic() {
    // 通过选择器获取img元素，
    // 将图片的src属性作为URL地址
      var url = this.share_img
      console.log(url)
      var a = document.createElement('a')
      var event = new MouseEvent('click')

      a.download = 'mitc_share'
      a.href = url

      a.dispatchEvent(event)

    },
    chooseCountry (index) {
      this.country = this.countryCode[index]
      this.model = false
    },
    copyed () {
      this.$toast('复制成功')
    },
    checkoutPhone () {
      let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
      if (!reg.test(this.phone)) {
        this.$toast('请输入正确手机号码')
        return false
      }
      return true
    },
    getCode () {
      if (!this.checkoutPhone()) {
        return false
      }
      this.time = 60
      this.startCode = true
      var set = setInterval(() => {
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
        console.log(res)
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
      this.getRegister()
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
        this.register()
      } else {
        this.login()
      }
      // this.$toast('登录成功')
      // this.$router.push('user')
    },
    getRegister() {
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
    wxBind() {
      const code = encodeURIComponent(this.MgetQueryString('wxcode'))
      const encry = encodeURIComponent(this.MgetQueryString('wxencry'))
      const iv = encodeURIComponent(this.MgetQueryString('wxiv'))

      const url = `/api/user/wx-app-bind?open_id=${this.openid}&avatar_url=${this.avatarurl}&nick_name=${this.nickName}`
      this.$http.get(url).then(res => {
        this.MrouterJump('wechatuser-m')
      }).catch(e => {
        console.log(e)
      })
    },
    wxLogin() {
      const code = encodeURIComponent(this.MgetQueryString('wxcode'))
      const encry = encodeURIComponent(this.MgetQueryString('wxencry'))
      const iv = encodeURIComponent(this.MgetQueryString('wxiv'))

      const url = `/api/user/wx-app-login?code=${code}&encry=${encry}&iv=${iv}`
      this.$http.get(url).then(res => {
        if (res.body.code == 0) {
          this.MrouterJump('wechatuser-m')
          if (res.body.data.wx_info.openId) {
            this.openid = res.body.data.wx_info.openId
            this.avatarurl = res.body.data.wx_info.avatarUrl
            this.nickName = res.body.data.wx_info.nickName
          }

        } else if (res.body.code == 1){
          if (res.body.data.wx_info.openId) {
            this.openid = res.body.data.wx_info.openId
            this.avatarurl = res.body.data.wx_info.avatarUrl
            this.nickName = res.body.data.wx_info.nickName
          }
        } else {

        }
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.loading = false
      })
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
          this.$toast('登陆成功')
          // this.$router.push('user')
          this.wxBind()
        } else if (res.body.code == 10508) {
          this.$toast('已登陆')
          this.wxBind()
        } else {
          this.$toast(res.body.msg)
          this.wxBind()
          this.startCode = false
        }

        this.loading = false
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
        name: this.name,
        ref: 1
      }, {
        emulateJSON: true
      }).then((res) => {
        if (~~res.body.code === 0) {
          this.$toast('注册成功')
          // this.$router.push('user')
          this.wxBind() // 获取用户信息
        } else if (~~res.body.code === 10508){
          this.$toast(res.body.msg)
          this.wxBind()
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
    logout () {
      // this.$http.get('/api/user/logout', {
      // }).then((res) => {
      //   if (res.body.code === 0) {
      //     this.toast('退出登录', 'middle')
      //   }
      // }).catch((e) => {
      //   console.log(e)
      // })
    },
    getInfo () {
      this.$http.get('/api/user/info', {
      }).then((res) => {
        console.log(res)
        if (res.body.code === 0) {
          this.userInfo = res.body.data
          this.success = 1
          setTimeout(this.beImg, 1000)
          window.localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        } else {
          this.success = 0
        }
        this.getNicoName()
      }).catch((e) => {
        console.log(e)
      })
    },
    beImg() {
      // console.log(html2canvas)
      var _ = this
      const share = document.getElementById('share-img')
      console.log(share)
      html2canvas(share, {
        allowTaint: true,
        taintTeset: true
      }).then((canvas) => {

        const dataUrl = canvas.toDataURL();
        this.share_img = dataUrl
      })
    },
    getNicoName() {
      const url = `/api/user/name-by-code?code=${this.$route.query.invite_code}`
      console.log(this.userInfo)
      this.$http.get(url).then((res) => {
        console.log(res)
        if (res.body.data.name) {
          this.user_name = res.body.data.name
        } else {
          this.user_name = this.userInfo.name
        }

      }).catch((e) => {
        console.log(e)
      })
    }
  },
  mounted () {
    this.wxLogin()
    new Clipboard('.copy')

    if (this.$route.query.invite_code) {
      this.inviteCode = this.$route.query.invite_code
      this.getNicoName()
      // 如果是分享链接，有分享id，则调用昵称
    } else {
      // 如果没有id，则调用获取信息，有信息则会进入分享页，没信息重定向至登录页
      this.user_name = 'musiclife'
    }
    let info = window.localStorage.getItem('userInfo')
    if (info) {
      this.userInfo = JSON.parse(info)
    } else {
      this.userInfo = {}
      // this.$router.push('login')
    }
  }
}
</script>
<style lang="scss">
     .body-loading {
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       z-index: 100;
       display: flex;
       align-items: center;
       justify-content: center;
       background: #000332;
       transition: all .3s ease-out;
       opacity: 1;
       z-index: 9999;
       color: white;
       flex-wrap: wrap;
     }

     .body-loading img {
       width: 150px;
     }

     .body-loading p {
       font-size: 16px;
       width: 100%;
       text-align: center;
       padding-top: 30px;
       letter-spacing: 5px;
       animation: fade-in 2s linear infinite;
     }
    .share-icon-link {
      position: absolute;
      width: 100%;
      bottom: .5rem;
      min-height: 1rem;
      text-align: center;
      img {
        width: 1.125rem;
        display: inline-block;
        margin: 0 0.2rem;
      }
    }
    .share-btn {
      position: absolute;
      font-size: 0.4rem;
      text-align: center;
      line-height: 1rem;
      text-decoration: none;
      width: 36%;
      left: 50%;
      margin-left: -18%;
      bottom: 1rem;
      border-radius: 2rem;
      color: #fff;
      background-color: #0074FF;
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

        &.activity {
          color: rgb(25, 213, 253);
        }
      }
    }
    .test-img {
        // position: absolute;
        // top: 0;
        // display: block;
        // right: 1rem;

    }
    .wechat-share {
      background-color: #0E0F27;
      height: 100vh;
      width: 100%;
      overflow: auto;
    }
    .logo {
      text-align: center;
      padding: 0.5rem 0;
      img {
        width: 50%;
      }
    }

    .coop {
      text-align: center;
      position: relative;
      img {
        width: 15%;
      }
    }
    .short-bar {
      text-align: center;
      position: relative;
      img {
        width: 30%;
      }
    }
    .long-bar {
      text-align: center;
      position: relative;
      img {
        width: 65%;
      }
    }
    .token {
      text-align: center;
      position: relative;
      img {
        width: 7%;
      }
    }
    .input-form {
      width: 90%;
      margin: 0 auto;
      background: linear-gradient(to right, #3A61DD, #519BD9);
      border-radius: 0.1rem;
      padding: 0.3rem;
      .main-form {
        border-radius: 0.1rem;
        width: 100%;
        height: 100%;
        background-color: #fff;
        // min-height: 6.7rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        a.btn {
          display: block;
          width: 80%;
          margin: 0 auto;
          color: #fff;
          background-color: #0074FF;
          text-align: center;
          border-radius: 0.5rem;
          height: 1rem;
          line-height: 1rem;
          font-size: 0.4rem;
          margin-top: 0.4rem;
        }

        .title {
          font-size: 0.4rem;
          text-align: center;
          color: #333333;
        }
        .mes {
          font-size: 0.3rem;
          color: #4782D7;
          width: 80%;
          margin: 0 auto;
          text-align: center;
          margin-top: 0.2rem;
        }
        p.input {
          width: 80%;
          border: 1px solid #E8E8E8;
          margin: 0 auto;
          background-color: #F4F4F4;
          border-radius: 1px;
          font-size: 0.325rem;
          // height: 1rem;
          line-height: 0.55rem;
          padding: 0.2rem;
          margin-top: 0.4rem;
          span {
            display: inline-block;
            padding: 0 0.4rem 0 0.2rem;
            border-right: 1px solid #e8e8e8
          }
          input {
            border: none;
            outline: none;
            background-color: #F4F4F4;
            width: 70%;
            font-size: 0.35rem;
            padding-left: 0.1rem;
          }
        }
        p.verify {
          width: 80%;
          border: 1px solid #E8E8E8;
          margin: 0 auto;
          background-color: #F4F4F4;
          border-radius: 1px;
          font-size: 0.325rem;
          // height: 1rem;
          line-height: 0.55rem;
          padding: 0.2rem;
          margin-top: 0.2rem;
          span {
            display: inline-block;
            padding: 0.05rem 0.2rem;
            background-color: #92C1F8;
            border-right: none;
            color: #fff;
            border-radius: 0.05rem;
            line-height: 0.55rem;
            vertical-align: top;
            float: right;
            margin-top: -2px;
            font-size: 0.3rem;
          }
          input {
            border: none;
            outline: none;
            background-color: #F4F4F4;
            width: 50%;
          }
        }
      }
    }
</style>
