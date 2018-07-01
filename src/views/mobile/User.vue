<template>
  <main class="user">
    <!-- <lang style='z-index:200'></lang> -->
    <section class="user-info">
      <div class="avatar">
        <img :src="avatarUrl" alt="">
      </div>
      <section class="name">
        <p>{{ nickName || userInfo.name || '加载中.. '}}</p>
        <p>{{userInfo.phone || '加载中.. '}}</p>
      </section>
    </section>
    <div class="box-menu">
      <p>{{ $t("mobile.user.message1") }}
        <span @click='MrouterJump("wechatindex-m")'>{{ $t("mobile.user.more") }}</span>
      </p>
      <p>{{ $t("mobile.user.message2") }}</p>
    </div>
    <section class="introduce">
      <p @click='MrouterJump("wechatinfo-m")'>{{ $t("mobile.user.introduce_p1") }}
        <span v-if='(userInfo.total_count - userInfo.used_count) == 0'>{{ $t("mobile.user.introduce_p1_span") }}
          <img src='../../assets/mobile/footNav/right-arrow.png'>
        </span>
        <span v-else>{{ userInfo.total_coin }}
          <img src='../../assets/mobile/footNav/right-arrow.png'>
        </span>
      </p>
      <p>{{ $t("mobile.user.introduce_p2") }}<span>{{ userInfo.total_count - userInfo.used_count}}</span> </p>
      <div class='bar'>{{ $t("mobile.user.introduce_p3") }}<span>{{ $t("mobile.user.introduce_p3_span") }}</span>
        <div class="share-img" id='main-img' style='margin-top: 0.5rem'>
            <div id='share-img' style='background-color: #0E0F27;'>
              <img style='margin-left: 0;display: block; width: 100%;height: auto;' src="../../assets/mobile/images/activity/share-img.jpg" alt="">
              <span class='show-name'>{{user_name}}</span>
              <div class="show-code" style='font-size:66px'>
                <qrcode :value="qrcode_url" type="img" class="qrcode" :size="qr_size"></qrcode>
              </div>
            </div>
            <img :src="share_img" alt="" style='position: absolute;top: 0;left: 0;width: 100%;vertical-align:middle;display:block;margin-left: 0'>
        </div>
      </div>
    </section>
    <p class='tips'>注意：您邀请的好友需为MusicLife新用户方可生效</p>
    <div class="mask" v-if='get_coin_show == 1'>

    </div>
    <foot-nav :tabIndex=0></foot-nav>
    <transition>
        <div class='get-coin' v-if='get_coin_show == 1'>
            <div class='main-box'>
                <p class='title'>成功领取</p>
                <p class='count'>30</p>
                <p class='name'>MITC</p>
                <a class='btn' type='button' @click='MrouterJump("info")'>查看</a>
            </div>
        </div>
    </transition>
    <i @click="exit" class="iconfont icon-tuichu"></i>
  </main>
</template>

<script>
import { XButton, XDialog, Group, Cell, CellBox,Qrcode} from 'vux'
import lang from './components/lang'
import footNav from './components/footNav'
import html2canvas from 'html2canvas'
export default {
  name: 'user',
  data () {
    return {
      userInfo: {},
      get_coin_show: 0,
      qr_size: 60,
      share_img: '',
      nickName: '',
      user_name: '',
      avatarUrl: require('../../assets/mobile/footNav/wxlogo.png')
    }
  },
  computed: {
    qrcode_url () {
      return 'https://musiclife.app-echo.com/mobile/wechatshare?invite_code=' + this.userInfo.my_invite_code
    }
  },
  components: {
    XButton,
    XDialog,
    Cell,
    CellBox,
    Group,
    footNav,
    lang,
    Qrcode
  },
  methods: {
    getCoin() {
        this.get_coin_show = this.MgetQueryString('isnew')
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
    go (name) {
      this.$router.push(name)
    },
    getWxtoken() {
      this.$http.get(`/api/user/wx-token`, {
      }).then((res) => {
        console.log(res)
        this.getWxqrcode(res.body.data.token)
      }).catch((e) => {
        console.log(e)
      })
    },
    getWxqrcode(token) {
      console.log(token)
      // this.$http.get(`https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token?${token}`, {
      // }).then((res) => {
      //   console.log(res)
      // }).catch((e) => {
      //   console.log(e)
      // })
    },
    getInfo () {
      this.$http.get(`/api/user/info`, {
      }).then((res) => {
        if (res.body.code === 0) {
          this.userInfo = res.body.data
          this.user_name = this.userInfo.name
          if (res.body.data.wx_info.avatarUrl) {
            this.avatarUrl = res.body.data.wx_info.avatarUrl
            this.nickName = res.body.data.wx_info.nickName
            this.user_name = this.nickName
          }
          setTimeout(this.beImg, 1000)
          window.localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        }
        if (res.body.code == 10401) {
          this.is_login = false
          alert('请先登陆')
          this.MrouterJump('login-m')
        } else {
          this.is_login = true
        }
        setTimeout(this.beImg, 1000)
      }).catch((e) => {
        console.log(e)
      })
    },

    exit () {
      this.$http.get('/api/user/logout', {
      }).then((res) => {
        if (res.body.code === 0) {
          this.$vux.toast.text('退出登录', 'middle')
          this.$router.push('login')
          window.localStorage.removeItem('userInfo')
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  },
  mounted () {
    this.getWxtoken()
    document.title = 'MusicLife音乐生活'
    this.getInfo()
    this.getCoin()
    let info = window.localStorage.getItem('userInfo')
    if (info) {
      this.userInfo = JSON.parse(info)
    } else {
      this.userInfo = {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
  }
  .share-img {
    width: 100%;
    position: relative;
    background-color: #0E0F27;
    img {
      vertical-align: middle;
      display: block;
    }
    .show-name {
      position: absolute;
      width: 100%;
      bottom: 4.7rem;
      padding: 0.1rem;
      border-radius: 5px;
      font-size: 0.3rem;
      text-align: center;
      color: #4782D7;
    }
    .show-code {
      position: absolute;

      bottom: 1.9rem;
      padding: 0.1rem;
      border-radius: 5px;
      left: 50%;
      margin-left: -30px;
      background: #fff;
      margin-left: -0.8rem;
    }
    .qr-code {
      img {
        width: 1rem;
      }

    }
    img {
      width: 100%;
      display: block;
    }
  }
  .get-coin {
    position: absolute;
    background-color: green;
    background-size: cover;
    width: 80%;
    height: 50%;
    border-radius: 0.2rem;
    top: 15%;
    left: 10%;
    box-shadow: 0 22px 44px rgba(0,0,0,0.5);
    .title {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
    .count {
      color: #fff;
      font-size: 1.4rem;
      text-align: center;
      margin-top: 1rem;
    }
    .name {
      color: #fff;
    }
    a.btn {
      display: block;
      width: 80%;
      text-align: center;
      height: 1.2rem;
      margin: 1rem auto 0;
      border-radius: 0.6rem;
      color: #000;
      font-size: 0.45rem;
      line-height: 1.2rem;
      background-color: #90F4FF;
    }
  }
  .user {
    position: relative;
    margin: auto;
    max-width: 600px;
    height: 100%;
    font-size: 14px;
    color: #34495e;
    background-color: #010335;
    min-height: 95vh;

    .title {
      font-size: 18px;
      text-align: center;
      color: white;
      line-height: 40px;
      padding-top: 10px;
    }

    header {
      position: absolute;
      top: -25%;
      left: 0;
      width: 100%;
      height: 60%;
      border-radius: 10%;
      z-index: -1;
    }

    .user-info {
      position: relative;
      margin: 0 auto;
      width: 90%;
      border-radius: 10px;
      padding-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: #fff;
      align-items: flex-start;
    }

    .avatar {
      width: 1.875rem;
      height: 1.875rem;
      margin-top: 0.2rem;

      img {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #f7f7f7;
        border-radius: 50%;
      }
    }

    .name {
      width: 100%;
      text-align: center;

      p {
        line-height: 25px;
      }

      .tag {
        font-size: 12px;
        line-height: 20px;
        width: 60px;
        text-align: center;
        padding: 0 2px;
      }
    }

    .box-menu {
      width: 90%;
      margin: 0 auto;
      border-radius: 5px;
      border: 1px solid #6CB0FF;
      p {
        padding: 0.25rem 8%;
        color: #fff;
        text-align: center;
        font-size: 0.35rem;
        color: #fff;
        span {
          color: #7FD3FF;
        }
      }
      p:last-child {
        padding: 0.25rem 3%;
        background-color: #6CB0FF;
        color: #0D2273;
      }
    }

    .introduce {
      position: relative;
      margin: 5% auto 0 auto;
      min-height: 150px;
      width: 90%;
      overflow-x: hidden;
      img {
        width: 0.12rem;
        vertical-align: middle;
        margin-left: 0.2rem;
      }
      .bar {
        padding: 0 15px;
        box-sizing: border-box;
        width: 100%;
        background-color: #3749AD;
        color: #fff;
        font-size: 0.35rem;
        margin: 0.5rem 0;
        border-radius: 2px;
        line-height: 1rem;
        padding-bottom: 0.4rem;
        span {
          font-size: 0.3rem;
          float: right;
        }
        .share-img-content {
          img.share-bg {
            width: 100%;
          }
        }
      }
      p {
        padding: 0 15px;
        width: 100%;
        background-color: #3749AD;
        color: #fff;
        font-size: 0.35rem;
        margin: 0.5rem 0;
        border-radius: 2px;
        line-height: 1rem;
        span {
          font-size: 0.3rem;
          float: right;
          margin-right: 0.6rem;
        }
      }

      .nav {
        width: 100%;
      }
    }

    .tips {
      color: rgba(255,255,255,0.2);
      text-align: center;
      font-size: 0.3rem;
      padding-bottom: 2rem;
    }
  }

  .icon-tuichu {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 20px;
  }
</style>


<style>
  .nav .weui-cells {
    margin-top: 0;
    border-top: 0;
  }
</style>
