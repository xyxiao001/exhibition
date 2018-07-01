<template>
  <main class="detail">
    <router-link to="/" class="logo-index">
      <img :src="`${baseUrl}common/logo-index.png`" alt="">
    </router-link>
    <section class="box">
      <section class="show">
        <p class="tips">{{ $t("pc.detail.tips") }}</p>
        <p class="total-coin">{{ userInfo.total_coin }}</p>
      </section>
      <section class="control">
        <p>{{ $t("pc.detail.give") }} {{ userInfo.total_coin - userInfo.freeze_coin }}</p>
        <a @click="() => showModel = true">{{ $t("pc.detail.giveBtn") }}</a>
      </section>

      <section class="d-list">
        <p class="title">{{ $t("pc.detail.title") }}</p>
        <section class="items" v-loading="loading">
          <section class="item" v-for="item in list" :key="item.id">
            <p class="info">
              <span>{{ item.msg }}</span>
              <span class="time">{{ item.time }}</span>
            </p>
            <p>
              + {{ item.amount }}
            </p>
          </section>
        </section>
      </section>
    </section>
    <foot></foot> 

    <!-- 弹窗    -->
    <el-dialog
      :visible.sync="showModel"
      width="auto"
      top="25vh"
      center>
      <section class="d-model pc">
        <img :src="`${baseUrl}common/close.png`" alt="logo" class="close" @click="() => showModel = false">
        <img :src="`${baseUrl}common/user.png`" alt="logo" class="logo">
        <p class="title">{{ $t("pc.detail.model.title")}}</p>
        <p class="des">{{ $t("pc.detail.model.des")}}</p>
        <a href="/lens" class="btn">{{ $t("pc.detail.model.btn")}}</a>
        <!-- <img :src="`${baseUrl}pc/${lang}/detail-logo.png`" alt="" class="detail-img"> -->
      </section>

      <section class="d-model mobile">
        <img :src="`${baseUrl}common/close.png`" alt="logo" class="close" @click="() => showModel = false">
        <img :src="`${baseUrl}common/user.png`" alt="logo" class="logo">
        <p class="title">{{ $t("pc.detail.model.title")}}</p>
        <p class="des">{{ $t("pc.detail.model.des")}}</p>
        <a href="/lens" class="btn">{{ $t("pc.detail.model.btn")}}</a>
      </section>
    </el-dialog>

  </main>
</template>

<script>
import Foot from '../../components/foot'
import activityList from '../../components/activity-list'
import { types } from 'util';
export default {
  data () {
    return {
      loading: false,
      list: [],
      baseUrl: process.env.BASE_URL,
      showModel: false,
      userInfo: {}
    }
  },
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    },

    infoList () {
      return this.$t("pc.detail.infoList") || []
    }
  },
  watch: {
    lang () {
      this.checkedList(this.list)
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
    },

    getList () {
      this.loading = true
      this.$http.get('/api/user/transaction').then((res) => {
        let data = res.body
        if (~~data.code === 0) {
          // 处理列表
          this.checkedList(data.data)
          // console.log(this.list)
        } else {
        }
        this.loading = false
      }).catch((e) => {
        console.log(e)
        this.loading = false
      })
    },

    checkedList (arr) {
      let list = arr.map((item, index) => {
        let type = 0
        this.infoList.forEach((child, i) => {
          if (child.type === item.business_type) {
            type = i
          }
        })
        item.msg = this.infoList[type].msg
        item.time = new Date(item.create_time * 1000)
        // console.log(item.time)
        item.time = item.time.format("yyyy-MM-dd hh:mm:ss")
        return item
      })
      this.list = list
    }
  },
  mounted () {
    let info = localStorage.getItem('MUSICLIF_USERINFO')
    if (info) {
      this.userInfo = JSON.parse(info)
    }
    this.getUserInfo()
    this.getList()
  }
}
</script>


<style lang="scss" scoped>
  main {
    min-height: 100vh;
    background: linear-gradient(to top, #000332, #050643);  
  }

  .box {
    margin: auto;
    max-width: 705px;
    width: 90%;
    padding-top: 136px;
    color: white;
    text-align: center;

    .show {
      padding-bottom: 30px;
    }

    .tips {
      font-size: 14px;
      opacity: .5;
    }

    .total-coin {
      margin-top: -10px;
      font-size: 48px;
    }


    .control {
      display: flex;
      max-width: 475px;
      width: 90%;
      margin: auto;
      line-height: 45px;
      justify-content: space-between;
      font-size: 14px;
      border: 1px solid #142059;

      p {
        padding-left: 30px;
      }

      a {
        padding: 0 10px;
        font-size: 16px;
        background: #00A8FF;
        cursor: pointer;
        transition: all .2s ease-out;

        &:hover {
          opacity: .8;
        }
      }
    }

    .d-list {
      margin-top: 42px;
      .title {
        font-size: 18px;
      }

      .items {
        position: relative;
        min-height: 300px;
        margin-top: 20px;
        padding-bottom: 50px;
      }

      .item {
        position: relative;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(to left, rgba(125, 184, 237, 0), #7db8ed 50%, #7db8ed 50%, rgba(125, 184, 237, 0) 100%);
        }

        span {
          display: block;
        }

        .info {
          text-align: left;
        }

        .time {
          opacity: .5;
          padding-top: 5px;
        }
      }

      .item:last-child {
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(to left, rgba(125, 184, 237, 0), #7db8ed 50%, #7db8ed 50%, rgba(125, 184, 237, 0) 100%);
        }
      } 
    }
  }

  .d-model {
    position: relative;
    width: 100%;
    text-align: center;
    color: #666666;
    
    .logo {
      width: 100px;
      display: block;
      margin: auto;
    }

    .title {
      font-size: 15px;
      padding-top: 22px;
      padding-bottom: 15px;
    }

    .des {
      font-size: 12px;
      line-height: 20px;
      color: #666666;
    }

    .btn {
      display: inline-block;
      background-color: #3D6CE2;
      color: white;
      padding: 10px 30px;
      font-size: 16px;
      border-radius: 40px;
      margin-top: 20px;
      cursor: pointer;
    }

    .detail-img {
      max-width: 90%;
      margin-top: 30px;
    }

    .close {
      position: absolute;
      width: 30px;
      top: -70px;
      right: -40px;
      cursor: pointer;
    }
  }

  .pc {
    display: block;
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .box {
      width: 100%;
      padding-top: 60px;
      .d-list {
        padding: 0 25px;
      }

      .show {
        padding-top: 30px;
        background: linear-gradient(to bottom, #000332, #00058A);
      }

      .total-coin {
        font-size: 36px;
        margin-top: 0;
      }

      .control {
        width: 100%;
        background-color: #0056C0;
        font-size: 12px;
        text-align: center;

        p {
          padding-left: 10px;
        }

        a {
          font-size: 12px;
        }
      }
    }

    .d-model {
      .logo {
        width: 50px;
      }

      .close {
        top: -45px;
        right: -40px;
      }
    }


    .pc {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
</style>

<style lang="scss">
  .detail {
    .el-dialog {
      max-width: 600px;
    }

    .el-dialog__close {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .detail {
      .el-dialog__body {
        padding-top: 0;
      }

      .el-dialog {
        max-width: 85%;
      }
    }
  }
</style>
