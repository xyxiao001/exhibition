<template>
  <main class="home">
    <header>
      <section class="content">
        <img src="../../assets/pc/home/logo.png" alt="" class="logo">
        <div class="des">
          <p class="title">{{ $t("pc.home.title") }}</p>
          <p class="title">{{ $t("pc.home.title2") }}</p>
        </div>
        <div class="user-content">
          <p class="total">{{ totalUser ? totalUser : $t("pc.home.loadingText") }}</p>
          <p class="coin-name">{{ $t("pc.home.coinName")}}</p>
        </div>
        <!-- <div class="des">
          <p>{{ $t("pc.home.des") }}</p>
          <p>{{ $t("pc.home.des2") }}</p>
        </div> -->
        <router-link class="btn" to="/login" v-if="!isLogin">{{ $t("pc.home.btn") }}</router-link>
        <section v-else class="user">
          <img :src="userInfo.avatar">
          <p class="name">{{ userInfo.name }}</p>
          <p class="msg">{{ $t("pc.home.user.msg", { register: userInfo.register_num, rank: ~~userInfo.coin_rank })}}</p>
          <router-link class="btn" to="/user">{{ $t("pc.home.user.btn") }}</router-link>
        </section>
        <img :src="`${baseUrl}common/h-box.png`" class="h-box" alt="h-box" v-if="!isLogin">
      </section>
    </header>
    <img :src="`${baseUrl}common/h-bg-t.png`" class="h-t" alt="h-f">

    <section class="block-list">
      <section class="block-item block1">
        <img src="../../assets/pc/home/block1.png" class="block-img" alt="">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>{{ $t("pc.home.blockList[0].title1") }}</span>
            <span class="border-right"></span>
          </p>
          <p class="title">{{ $t("pc.home.blockList[0].title2") }}</p>
          <img src="../../assets/pc/home/block1.png" class="block-img-mobile" alt="">
          <p class="des">
            {{ $t("pc.home.blockList[0].des") }}
          </p>
          <p class="more">
            <a class="btn" target="_blank" @click="readPDF">
              <img src="../../assets/pc/home/btn-icon1.png" alt="">
              <span>{{ $t("pc.home.blockList[0].btn1") }}</span>
            </a>
          </p>
        </section>
      </section>

      <section class="block-item block2">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>{{ $t("pc.home.blockList[1].title1") }}</span>
            <span class="border-right"></span>
          </p>
          <p class="title">{{ $t("pc.home.blockList[1].title2") }}</p>
          <img src="../../assets/pc/home/block2.png" class="block-img-mobile" alt="">
          <p class="des">
            {{ $t("pc.home.blockList[1].des") }}
          </p>
          <p class="more">
            <a class="btn" href="https://zh.wikipedia.org/wiki/Blockchain" target="_blank">
              <img src="../../assets/pc/home/btn-icon2.png" alt="" class="btn-icon2">
              <span>{{ $t("pc.home.blockList[1].btn1") }}</span>
            </a>
            <!-- <a class="btn" href="https://www.ethereum.org/" target="_blank">
              <img src="../../assets/pc/home/btn-icon3.png" alt="" class="btn-icon3">
              <span>{{ $t("pc.home.blockList[1].btn2") }}</span>
            </a> -->
          </p>
        </section>
        <img src="../../assets/pc/home/block2.png" class="block-img" alt="">
      </section>

      <section class="block-item block3">
        <img src="../../assets/pc/home/block3.png" class="block-img" alt="">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>{{ $t("pc.home.blockList[2].title1") }}</span>
            <span class="border-right"></span>
          </p>
          <p class="title">{{ $t("pc.home.blockList[2].title2") }}</p>
          <img src="../../assets/pc/home/block2.png" class="block-img-mobile" alt="">
          <p class="des">
            {{ $t("pc.home.blockList[2].des") }}
          </p>
        </section>
      </section>

      <section class="block-item block4">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>{{ $t("pc.home.blockList[3].title1") }}</span>
            <span class="border-right"></span>
          </p>
          <p class="title">{{ $t("pc.home.blockList[3].title2") }}</p>
          <img src="../../assets/pc/home/block4.png" class="block-img-mobile" alt="">
          <p class="des">
            {{ $t("pc.home.blockList[3].des") }}
          </p>
          <p class="more">
            <a class="btn" href="http://www.music-lens.com/" target="_blank">
              <img src="../../assets/pc/home/btn-icon8.png" alt="" class="btn-icon2">
              <span>{{ $t("pc.home.blockList[3].btn1") }}</span>
            </a>
            <a class="btn" @click="goWrite" target="_blank">
              <img src="../../assets/pc/home/btn-icon4.png" alt="" class="btn-icon4">
              <span>{{ $t("pc.home.blockList[3].btn2") }}</span>
            </a>
          </p>
        </section>
        <img src="../../assets/pc/home/block4.png" class="block-img" alt="">
      </section>


      <section class="block-item block5">
        <img :src="`${baseUrl}pc/${lang}/block5.png`" class="block-img" alt="">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>{{ $t("pc.home.blockList[4].title1") }}</span>
            <span class="border-right"></span>
          </p>
          <p class="title">{{ $t("pc.home.blockList[4].title2") }}</p>
          <p class="des">
            {{ $t("pc.home.blockList[4].des") }}
          </p>
          <div class="other">
            <img :src="`${baseUrl}pc/${lang}/block5.png`" class="block-img-mobile" alt="">
            <div>
              <img :src="`${baseUrl}pc/${lang}/block5-logo.png`" alt="logo" class="logo">
              <p>
                <span>
                {{ $t("pc.home.blockList[4].echoDes1") }}
              </span>
              <span>
                <!-- {{ $t("pc.home.blockList[4].echoDes2") }} -->
              </span>
             </p>
            </div>
          </div>
          <p class="more">
            <a class="btn" href="http://www.app-echo.com/index/download" target="_blank">
              <img src="../../assets/pc/home/btn-icon5.png" alt="" class="btn-icon5">
              <span>{{ $t("pc.home.blockList[4].btn1") }}</span>
            </a>
            <a class="btn" @click="goWrite" target="_blank">
              <img src="../../assets/pc/home/btn-icon6.png" alt="" class="btn-icon6">
              <span>{{ $t("pc.home.blockList[4].btn2") }}</span>
            </a>
          </p>
        </section>
      </section>

      <section class="block-item block6">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>{{ $t("pc.home.blockList[5].title1") }} </span>
            <span class="border-right"></span>
          </p>
          <p class="title">{{ $t("pc.home.blockList[5].title2") }}</p>
          <img src="../../assets/pc/home/block6.png" class="block-img-mobile" alt="">
          <p class="des">
            {{ $t("pc.home.blockList[5].des") }}
          </p>
          <!-- 提交按钮先隐藏 -->
          <!-- <p class="more">
            <a class="btn" href="http://www.music-lens.com/" target="_blank">
              <img src="../../assets/pc/home/btn-icon7.png" alt="" class="btn-icon7">
              <span>{{ $t("pc.home.blockList[5].btn1") }}</span>
            </a>
          </p> -->
        </section>
        <img src="../../assets/pc/home/block6.png" class="block-img" alt="">
      </section>

      <section class="block-item block7">
        <img src="../../assets/pc/home/block7.png" class="block-img" alt="">
        <section class="block-text">
          <p class="tips">
            <span class="border-left"></span>
            <span>{{ $t("pc.home.blockList[6].title1") }} </span>
            <span class="border-right"></span>
          </p>
          <p class="title">{{ $t("pc.home.blockList[6].title2") }}</p>
          <img src="../../assets/pc/home/block7.png" class="block-img-mobile" alt="">
          <p class="des">
            {{ $t("pc.home.blockList[6].des") }}
          </p>
        </section>
      </section>
    </section>

    <!-- 发展路线 -->
    <develope-route></develope-route>

    <section class="show-logo team">
      <p class="title">
        <span>{{ $t("pc.team.title") }}</span>
        <img src="../../assets/pc/home/team.png" alt="">
      </p>
      <p class="des">
        {{ $t("pc.team.des") }}
      </p>
      <team-show></team-show>
    </section>


    <section class="show-logo investor">
      <p class="title">
        <span>{{ $t("pc.investor.title") }}</span>
        <img src="../../assets/pc/home/investor.png" alt="">
      </p>
      <div class="logo-list">
        <a href="https://spectragroup.io/" target="_blank">
          <img :src="`${baseUrl}pc/${lang}/partner/logo1.png`" alt="spectar">
        </a>
      </div>
    </section>

    <section class="show-logo investor">
      <p class="title">
        <span>{{ $t("pc.partner.title") }}</span>
        <img src="../../assets/pc/home/partner.png" alt="">
      </p>
      <div class="logo-list">
        <a href="http://www.app-echo.com/index/download" target="_blank">
          <img :src="`${baseUrl}pc/${lang}/block5-logo.png`" alt="echo">
        </a>
        <a href="http://music-lens.com/" target="_blank">
          <img :src="`${baseUrl}pc/${lang}/partner/logo3.png`" alt="musiclens">
        </a>
      </div>
    </section>


    <section class="show-logo partner-investor">
      <p class="title">
        <span>{{ $t("pc.partnerInvestor.title") }}</span>
        <img src="../../assets/pc/home/partner-investor.png" alt="">
      </p>
      <div class="logo-list">
        <a href="https://www.brv.com/" target="_blank">
          <img :src="`${baseUrl}pc/${lang}/partner/logo4.png`" alt="bluerun">
        </a>
        <a href="https://corp.meitu.com/" target="_blank">
          <img :src="`${baseUrl}pc/${lang}/partner/logo5.png`" style="height: 40px" alt="美图">
        </a>
        <a href="http://www.ewang.com/" target="_blank">
          <img :src="`${baseUrl}pc/${lang}/partner/logo6.png`" alt="光线传媒">
        </a>
      </div>
    </section>

    <!-- 活动 -->
    <section class="activity">
      <img :src="`${baseUrl}common/a-bg.png`" class="a-bg">
      <section class="a-content">
        <p class="title">{{ this.$t("pc.activity.title") }}</p>
        <img :src="`${baseUrl}common/tips.png`" class="tips">
        <activity-list></activity-list>
      </section>
    </section>
    
    <foot></foot>

    <!-- 填写信息 -->
    <transition name="fase">
      <section class="model" v-if="model">
        <span class="close">
          <img src="../../assets/pc/home/close.png" alt="" @click="closeWrite">
        </span>
        <section class="model-content write" v-if="write">
          <section v-if="!writeSuccess" class="write-box">
            <section class="loading-img" v-show="writeLoading">
              <img :src="`${baseUrl}pc/${lang}/s-loading.png`" alt=""  >
            </section>
            <p class="title">{{ $t('pc.home.submitInfo.title') }}</p>
            <label class="input-item">
              <p>{{ $t('pc.home.submitInfo.name.value') }}</p>
              <input type="text" v-model.trim="user.name" :placeholder="$t('pc.home.submitInfo.name.placeholder')">
            </label>
            <label class="input-item">
              <p>{{ $t('pc.home.submitInfo.email.value') }}</p>
              <input type="text" v-model.trim="user.email" :placeholder="$t('pc.home.submitInfo.email.placeholder')">
            </label>
            <label class="input-item pc-select">
              <p>{{ $t('pc.home.submitInfo.need.value') }}</p>
              <el-select v-model="user.title" :placeholder="$t('pc.home.submitInfo.need.placeholder')" value-key="id">
                <el-option
                  v-for="item in titles"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </label>
            <label class="input-item mobile-select">
              <select v-model="user.title" :placeholder="$t('pc.home.submitInfo.need.placeholder')" :class="[user.title ? '' : 'no-choose']">
                <option disabled value="">{{ $t('pc.home.submitInfo.need.value') }}</option>
                <option v-for="item in titles" :key="item.value" :value="item.value">{{ item.value }}</option>
              </select>
              <i class="icon-r el-icon-arrow-right"></i>
            </label>
            <label class="input-item">
              <p>{{ $t('pc.home.submitInfo.content.value') }}</p>
              <textarea v-model="user.content" :placeholder="$t('pc.home.submitInfo.content.placeholder')"></textarea>
            </label>
            <el-button :loading="writeLoading" type="primary" class="submit" @click="checkoutSubmit">{{ $t('pc.home.submitInfo.btn.value') }}</el-button>
          </section>

          <section v-else class="success-box">
            <section class="row">
              <img src="../../assets/pc/home/success.png" class="success-img" alt="">
            </section>
            <section class="row">
              <p class="title">{{ $t('pc.home.submitInfo.success.title') }}</p>
            </section>
            <section class="row">
              <p>{{ $t('pc.home.submitInfo.success.des') }}</p>
              <p>{{ $t('pc.home.submitInfo.success.des2') }}</p>
            </section>
            <section class="group-list">
              <a href="https://t.me/musiclifeblockchain2" target="_blank" class="group-item">
                <img src="../../assets/pc/home/icon1.png" alt="telegram">
              </a>
              <a href="http://www.app-echo.com/#/group/31503" target="_blank" class="group-item">
                <img src="../../assets/pc/home/icon2.png" alt="echo">
              </a>
              <a href="https://twitter.com/musiclife_mitc" target="_blank" class="group-item">
                <img src="../../assets/pc/home/icon3.png" alt="twitter">
              </a>
              <a href="https://www.facebook.com/musiclife.block" target="_blank" class="group-item">
                <img src="../../assets/pc/home/icon4.png" alt="facebook">
              </a>
            </section>
          </section>
        </section>

      </section>
    </transition>
  </main>
</template>

<script>
import developeRoute from '../../components/develope-route'
import Foot from '../../components/foot'
import activityList from '../../components/activity-list'
import teamShow from '../../components/team-show'

import { create } from 'domain';

export default {
  name: 'home',
  data () {
    return {
      isLogin: false,
      userInfo: {},
      isPhone: window.isPhone,
      baseUrl: process.env.BASE_URL,
      model: false,
      write: false,
      writeLoading: false,
      writeSuccess: false,
      totalUser: 0,
      user: {
        name: '',
        email: '',
        content: '',
        title: ''
      },
    }
  },
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    },

    titles () {
      return this.$t('pc.home.submitInfo.titles')
    }
  },
  watch: {
    write (val) {
      if (!val) {
        this.user = {
          name: '',
          email: '',
          content: '',
          title: ''
        }
        this.writeLoading = false
        this.writeSuccess = false
      }
      this.model = val
    },

    model (val) {
      this.isScroll(val)    
    }
  },
  components: {
    developeRoute,
    teamShow,
    Foot,
    activityList
  },
  methods: {
    goWrite () {
      this.write = true
    },
    closeWrite () {
      this.write = false
    },

    isScroll (val) {
      // 同时需要存入当前滚动条的高度 然后关闭的时候滚动回来
      if (val) {
        this.top = window.scrollY
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        if (this.top > 0) {
          this.$nextTick(() => {
            window.scrollTo(0, this.top)
          })
        }
      }
    },

    checkoutSubmit () {
      if (this.user.name.length === 0) {
        this.msg(this.$t('pc.home.submitInfo.name.rule'))
        return false
      }

      let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.user.email.length === 0) {
        this.msg(this.$t('pc.home.submitInfo.email.rule'))
        return false
      }

      if (!emailReg.test(this.user.email)) {
        this.msg(this.$t('pc.home.submitInfo.email.rule2'))
        return false
      }

      if (this.user.title === '') {
        this.msg(this.$t('pc.home.submitInfo.need.rule'))
        return false
      }

      if (this.user.content === 0) {
        this.msg(this.$t('pc.home.submitInfo.content.rule'))
        return false
      }

      this.submit()
    },

    submit () {
      this.writeLoading = true
      var d = {
        name: this.user.name,
        email: this.user.email,
        title: this.user.title,
        content: this.user.content
      }
      this.$http.post('api/index/visitor-new', d, {
        emulateJSON: true
      }).then((res) => {
        var data = res.body
        this.writeLoading = false
        if (~~data.code !== 0) {
          this.msg(data.msg)
        } else {
          this.msg(this.$t('pc.home.submitInfo.alert.success'), 'success')
          this.writeSuccess = true
        }
        this.writeLoading = false
      }).catch((e) => {
        console.log(e)
        this.msg(this.$t('pc.home.submitInfo.alert.error'))
        this.writeLoading = false
      })
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
      this.$http.get('/echo/other/upload-token').then((res) => {
        console.log(res)
      }).catch((e) => {
        console.log(e)
      })
    },

    readPDF () {
      var url = this.$t("pc.home.pdf")
      window.open(url)
    },


    getTotal () {
      this.$http.get('/api/user/total-user-num').then((res) => {
        this.totalUser = res.body.data.num
      }).catch((e) => {
        console.log(e)
      })
    },

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
          this.isLogin = false
          localStorage.removeItem('MUSICLIF_USERINFO')          
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  },
  mounted () {
    let info = localStorage.getItem('MUSICLIF_USERINFO')
    if (info) {
      this.isLogin = true
      this.userInfo = JSON.parse(info)
    }

    this.getTotal()
    this.getUserInfo()
  },
  destroyed () {
    this.isScroll(false)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/pc/scss/home.scss';
</style>

<style lang="scss">
  .input-item .el-select {
    width: 100%;
    margin-top: 10px;
    color: white;

    .el-input__inner {
      color: white;
      opacity: 1;
      background: none;
      border: 1px solid rgba($color: #ffffff, $alpha: .2);

      &::-webkit-input-placeholder {
        color: white;
        opacity: .5;
      }

      &:focus {
        border: 1px solid rgba($color: #ffffff, $alpha: .8);
      }
    }
  }
</style>
