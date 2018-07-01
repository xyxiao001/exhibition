<template>
   <!-- 语言切换 -->
  <section class="select-language">
    <section class="choose-language" @click="showList">
      <img src="../assets/pc/home/l-icon1.png" alt="" class="earth">
      <span>{{ language[chooseLanguage].des }}</span>
      <img src="../assets/pc/home/l-icon2.png" alt="" class="drop">
    </section>

    <section class="lang-list">
      <section class="lang-item" v-for="item in language" :key="item.id" @click="changeLanguage($event, item.lang)">
        <a>{{ item.name }}</a>
      </section>
    </section>

    <model v-model="show">
      <section class="lang-list lang-list-mobile">
        <section class="lang-item" v-for="item in language" :key="item.id" @click="changeLanguage($event, item.lang)">
          <a>{{ item.name }}</a>
        </section>
      </section>
    </model>
  </section>
</template>


<script>
import Model from './model'
export default {
  data () {
    return {
      chooseLanguage: 0,
      show: false
    }
  },
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    },

    language () {
      return this.$store.getters.getLanList
    }
  },
  watch: {
    lang (val) {
      this.checkedLanguage(val)
    } 
  },
  components: {
    Model
  },
  methods: {
    changeLanguage (e, lang) {
      e.preventDefault()
      this.$store.dispatch ({
        type: 'setLanguage',
        language: lang
      })   
    },

    showList () {
      let w = document.body.clientWidth
      if (w <= 600 || isPhone) {
        this.show = true
      }
    },

    checkedLanguage (val) {
      this.language.forEach((item, index) => {
        if (item.lang === val) {
          this.chooseLanguage = index
        }
      })
    }
  },
  mounted () {
    this.checkedLanguage(this.lang)
  }
}
</script>


<style lang="scss" scoped>
.select-language {
  position: absolute;
  right: 10vw;
  top: 53px;
  color: white;
  width: 100px;
  height: 33px;
  font-size: 12px;
  z-index: 10;

  .choose-language {
    width: 100px;
    height: 33px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    opacity: .5;
    transition: all .2s ease-out;
    border-radius: 8px;
    border: 1px solid rgba($color: #ffffff, $alpha: .35);

    .earth {
      width: 15px;
      margin-left: 10px;
    }

    .drop {
      width: 8px;
      margin-right: 10px;
      transition: all .2s ease-out;

    }
  }


  .lang-list {
    display: none;
    border: 1px solid rgba($color: #ffffff, $alpha: .8);
    border-top: 0;
    width: 100px;
    text-align: center;
    line-height: 30px;
    z-index: 100;
    background: rgba($color: #000332, $alpha: .8);

    .lang-item {
      opacity: .8;      
      border-top: 1px solid rgba($color: #ffffff, $alpha: .8);
      transform: opacity .2s ease-out;

      a {
        display: block;
        color: white;
        cursor: pointer; 
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  &:hover {
    .choose-language {
      opacity: .8;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom: 0;
      border: 1px solid rgba($color: #ffffff, $alpha: .8);

      .drop {
        transform: rotateZ(180deg);
      }
    }

    .lang-list {
      display: block;
    }
  }
}

// 移动端的适配
@media screen and (max-width: 600px) {
  .select-language {
    width: 80px;
    top: 20px;
    right: 16px;

    .choose-language {
      width: 100%;
      justify-content: center;
      border-radius: 20px;

      span {
        padding-right: 5px;
      }

      .drop {
        margin-right: 0;
      }
    }

    .earth {
      display: none;
    }

    .lang-list-mobile {
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      background-color: #509AD8;
      color: white;
      width: 100%;
      bottom: 0px;
      overflow: auto;
      border: 1px solid #509AD8;

      .lang-item {
        height: 50px;
        line-height: 50px;
        font-size: 15px;
        border: none;
        border-bottom: 1px solid rgba($color: #fff, $alpha: .2)
      }
    }

    &:hover {
      .choose-language {
        opacity: 1;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom: 1;
        border: 1px solid rgba($color: #ffffff, $alpha: .8);

        .drop {
          transform: rotateZ(0deg);
        }
      }

      .lang-list {
        display: none;
      }

      .lang-list-mobile {
        display: block;
      }
    }
  }
}
</style>
