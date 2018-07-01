<template>
  <main class="user">
    <div class='mask' v-if='withdraw_show'></div>
    <section class="user-info">
      <div class="avatar">
        <p>{{ $t("mobile.info.title1") }}</p>
        <p>{{userInfo.total_coin}}</p>
      </div>
      <p class='status-bar'>
        <span>{{ $t("mobile.info.mes1") }} {{+userInfo.total_coin - userInfo.freeze_coin}}</span>
        <span @click='withdraw'>{{ $t("mobile.info.withdraw") }}</span>
      </p>
    </section>
    <section>
      <h4 class='record'>{{ $t("mobile.info.record") }}</h4>
      <div class="mtc-list">
        <div class="mtc-item" v-for="(item,index) in list" :key='index'>
          <div class="item-left">
            <p class='title'>{{item.new_msg}}</p>
            <p class="time">{{item.create_time | formatTime}}</p>
          </div>
          <div v-if='item.business_type == 3 || item.business_type == 5' class="item-right">
            <p>-{{item.amount}}</p>
          </div>
          <div v-else class="item-right">
            <p>+{{item.amount}}</p>
          </div>
        </div>
      </div>
    </section>

    <transition>
    </transition>
    <transition name='scarl-in'>
      <div class="withdraw-alert" v-if='withdraw_show'>
       <img @click='withdraw_show = 0' class='close' src='../../assets/mobile/footNav/close.png'>
       <img src='../../assets/mobile/footNav/wxlogo.png' alt="">
       <p class='title'>{{ $t("mobile.info.withdrawTitle") }}</p>
       <p>{{ $t("mobile.info.withdrawDes1") }}</p>
       <p>{{ $t("mobile.info.withdrawDes2") }}</p>
    </div>
    </transition>

    <foot-nav :tabIndex='1' ></foot-nav>
  </main>
</template>

<style lang="scss" scoped>
  .scarl-in-enter-active, .scarl-in-leave-active {
    transition: all 0.5s;
    transform: scale(1,1);
  }

  .scarl-in-enter, .scarl-in-leave-active {
    transform: scale(0,0);
  }

  .withdraw-alert {
    position: fixed;
    top: 4.5rem;
    width: 70%;
    left: 15%;
    min-height: 4rem;
    z-index: 10;
    background: #fff;
    border-radius: 5px;
    img {
      display: block;
      width: 20%;
      margin: 0.5rem auto;
    }
    .close {
      position: absolute;
      width: 0.8rem;
      right: -0.25rem;
      top: -0.8rem;
    }
    p {
      text-align: center;
      width: 80%;
      margin: 0 auto;
      font-size: 0.3rem;
      font-weight: 400;
      margin-bottom: 0.3rem;
    }
    p:last-child {
      color: #3749AD;
      font-size: 0.3rem;
      font-weight: 400;
      margin-top: 0.5rem;
      padding-bottom: 0.2rem;
    }
    p.title {
      font-size: 0.34rem;
      font-weight: bold;
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
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

    .user-info {

    }

    .avatar {
      text-align: center;
      color: #fff;
      background: linear-gradient(#000332, #00058A);
      min-height: 25vh;

      p {
        color: rgba(255,255,255,0.5);
        padding-top: 1.2rem;
      }
      p:last-child {
        font-size: 1rem;
        padding-top: 0rem;
        color: #fff;
      }
    }

    .status-bar {
      height: 1.125rem;
      width: 100%;
      span {
        width: 70%;
        display: inline-block;
        height: 100%;
        background-color: rgba(0,168,255,0.5);
        color: rgba(255,255,255,0.8);
        text-align: center;
        line-height: 1.125rem;

      }
      span:last-child {
        width: 30%;
        background-color: #00A8FF;
        color: #fff;
        text-align: center;
      }
    }


  }
  .record {
    text-align: center;
    padding-top: 0.3rem;
    color: #fff;
    background: url('../../assets/mobile/footNav/border-line.png') no-repeat bottom;
    background-size: 100% auto;
    padding: 0.5rem 0
  }
  .mtc-list {
    padding: 0;
    padding-bottom: 1.5rem;
  }

  .mtc-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.25rem;
    line-height: 0.85rem;
    background: url('../../assets/mobile/footNav/border-line.png') no-repeat bottom;
    background-size: 100% auto;
    .title {
      color: #fff;
    }
    &:last-child {
      border: none;
    }

    .time {
      color: rgba(255,255,255,0.5);
    }
    .item-right {
      color: #fff;
    }
  }
</style>

<script>
import footNav from './components/footNav'
export default {
  name: 'user',
  data () {
    return {
      userInfo: {},
      get_coin_show: 0,
      list: [],
      withdraw_show: 0,
    }
  },
  computed: {
    mobileInfo() {
      return this.$t('mobile.info')
    }
  },
  components: {
    footNav
  },
  methods: {
    withdraw() {
      console.log(this.mobileInfo.business_type1)
      this.withdraw_show = 1

    },
    go (name) {
      this.$router.push(name)
    },
    getInfo () {
      this.$http.get('/api/user/info', {
      }).then((res) => {
        console.log(res)
        if (res.body.code === 0) {
          this.userInfo = res.body.data
          window.localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    getList () {
      this.$http.get('/api/user/transaction', {
      }).then((res) => {
        console.log(res)
        if (~~res.body.code === 0) {
          let list = res.body.data
          list.map((item, index) => {

            switch (item.business_type) {
              case 1:
                item.new_msg = this.mobileInfo.business_type1
                break;
              case 2:
                item.new_msg = this.mobileInfo.business_type2
                break;
              case 3:
                item.new_msg = this.mobileInfo.business_type3
                break;
              case 4:
                item.new_msg = this.mobileInfo.business_type4
                break;
              case 5:
                item.new_msg = this.mobileInfo.business_type5
                break;
              case 6:
                item.new_msg = this.mobileInfo.business_type6
                break;
              default:
                item.new_msg = this.mobileInfo.business_type1
            }
            let time = new Date(item.create_time * 1000)
          })
          console.log(list)
          this.list = list
        }
      }).catch((e) => {
        console.log(e)
        this.loading = false
      })
    }
  },
  filters: {
    formatTime(stamp) {
      const b = stamp
      const c = parseInt(b) * 1000
      const stamp_time = new Date(c)
      const year = stamp_time.getFullYear()

      let month = stamp_time.getMonth() + 1,
          date = stamp_time.getDate(),
          hour = stamp_time.getHours(),
          minute = stamp_time.getMinutes(),
          second = stamp_time.getSeconds()

      month = month < 10 ? `0${month}` : month
      date = date < 10 ? `0${date}` : date

      hour = hour < 10 ? `0${hour}` : hour

      minute = minute < 10 ? `0${minute}` : minute

      second = second < 10 ? `0${second}` : second
      const a = `${year}-${month}-${date}  ${hour}:${minute}:${second}`
      return a
    }
  },
  mounted () {
    document.title = 'MusicLife音乐生活'
    this.getList()
    this.getInfo()
  }
}
</script>
