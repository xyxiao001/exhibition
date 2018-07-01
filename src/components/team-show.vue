<template>
  <section class="team-show">
    <a class="pre control" @click="pre">
      <i class="el-icon-arrow-left"></i>
    </a>
    <section class="team-wrapper" ref="wrapper">
      <!-- <section class="team-list" :style="{'transform': `translate3d(-${(this.page - 1) * 900}px, 0, 0)`}">
        <section class="team-item" v-for="(item, $index) in list" :key="item.name">
          <img :src="`${baseUrl}avatar/avatar${item.avatar}`" alt="" class="avatar">
          <p class="name">{{ item.name }}</p>
          <p class="job">{{ item.job }}</p>
          <p class="lines"></p>
          <div class="des">
            <span>{{ item.des }}</span>
            <span v-if="item.hasMore" class="read-more" @click="show($index)">{{ $t('pc.team.more.readMore')}}<i class="el-icon-caret-right"></i></span>
          </div>
        </section>
      </section> -->

      <el-carousel :autoplay="autoplay" ref="swiper">
        <el-carousel-item v-for="(item, $index) in list" :key="$index">
          <section class="team-list">
            <section class="team-item" v-for="(child, i) in item" :key="child.name">
              <img :src="`${baseUrl}avatar/avatar${child.avatar}`" alt="" class="avatar">
              <p class="name">{{ child.name }}</p>
              <p class="job">{{ child.job }}</p>
              <p class="lines"></p>
              <div class="des">
                <span>{{ child.des }}</span>
                <span v-if="child.hasMore" class="read-more" @click="show(i)">{{ $t('pc.team.more.readMore')}}<i class="el-icon-caret-right"></i></span>
              </div>
            </section>
          </section>
        </el-carousel-item>
      </el-carousel>
    </section>
    
    <a class="next control" @click="next">
      <i class="el-icon-arrow-right"></i>
    </a>

    <!-- 查看更多 -->
    <el-dialog
      :title="moreTile"
      :visible.sync="showMore"
      class="show-more"
      top="10vh">
      <section class="more-detail">
        <img :src="`${baseUrl}avatar/avatar${moreDetail.avatar}`" alt="" class="avatar">  
        <p class="name">{{ moreDetail.name }}</p>
        <p class="job">{{ moreDetail.job }}</p>     
        <p class="lines"></p>
        <p class="des" v-for="item in moreDetail.details" :key="item">
          {{ item }}
        </p> 
      </section>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data () {
    return {
      autoplay: false,
      page: 1,
      size: 3,
      showMore: false,
      baseUrl: process.env.BASE_URL,
      moreIndex: 0
    }
  },
  computed: {
    moreTile () {
      return this.$t('pc.team.more.title')
    },
    list () {
      // 根据不同的屏幕宽度生成不同的子项
      let arr = this.$t('pc.team.list')
      let l = []
      let max = Math.ceil(arr.length / this.size)
      l = [...Array(max)].map(() => [])
      let i = 0
      arr.forEach((item, index) => {
        if (l[i].length >= this.size) {
          i = i + 1
        }
        l[i].push(item)
      })
      return l
    },
    allPage () {
      return Math.ceil(this.list.length / 3)
    },
    moreDetail () {
      return this.$t('pc.team.list')[this.moreIndex]
    }
  },

  methods: {
    next () {
     this.$refs.swiper.next()
    },

    pre () {
      this.$refs.swiper.prev()
    },

    show (index) {
      this.showMore = true
      this.moreIndex = index
    },

    checkedSize () {
      let body = document.body.clientWidth
      let wrapper = this.$refs.wrapper
      if (body >= 1024) {
        this.size = 3
      } else if (body >= 768) {
        this.size = 2
      } else {
        this.size = 1
      }
      let width = 300
      if (this.size === 1) {
        width = 260
      }
      wrapper.style.width = this.size * width + 'px'
    }
  },
  mounted () {
    this.checkedSize()
    window.onresize = () => {
      this.checkedSize()
    }
  },
  destroyed () {
    window.onresize = null
  }
}
</script>

<style lang="scss" scoped>
.team-show {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .team-wrapper {
    width: 900px;
    overflow: hidden;
  }
  .team-list {
    margin: auto;
    display: flex;
    justify-content: space-around;
    transition: all .5s ease-out;
    height: 100%;
    overflow-y: auto;

    .team-item {
      width: 246px;
    }
  }
}

.avatar {
  height: 124px;
  margin-top: 13px;
}

.name {
  font-size: 20px;
  line-height: 28px;
}

.job {
  font-size: 14px;
  line-height: 25px;
  color: #666666;
}

.des {
  font-size: 12px;
  color: #666666;
  text-align: justify;

  span {
    width: 100%;
    white-space: normal;
  }

  .read-more {
    position: relative;
    color: #5281FF;
    cursor: pointer;
    i {
      position: absolute;
      font-size: 16px;
      top: 0px;
    }
  }
}

.lines {
  margin: 15px auto;
  width: 80px;
  height: 5px;
  background: linear-gradient(to right, #5281FF, #7BFFE0);
  border-radius: 10px;
}


a.control{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #6666;
  border-radius: 50%;
  font-size: 35px;
  cursor: pointer;
  user-select: none;

  &.disabled {
    cursor: not-allowed;
  }

  i {
    opacity: .8;
  }
}

.show-more .des {
  width: 90%;
  max-width: 700px;
  margin: auto;
  padding-bottom: 25px;
  height: auto;
}

//  不是中文
.language-not-zh {
  .team-show {
    .team-list {
      .team-item {
        width: 260px;
      }
    }
  }
  
  .des {
    font-size: 12px;
    // text-align: justify;
    .read-more {
    }
  }

  .show-more .des {
    height: auto;
    text-align: left;
    line-height: 1.5;
  }
}

// 俄语
.language-ru-RU {
  .des {
    span {
      display: inline-block;
      word-break:break-all;
      white-space: normal;
    }
    .read-more {
      padding-left: 0;
      font-size: 14px;

      i {
        top: 3px;
      }
    }
  }

  .show-more .des {
    word-break: break-all;
  }
}

.language-kr {
  .des {
    span {
      display: inline-block;
    }
    .read-more {
      padding-left: 0;
    }
  }
}

.language-ja {
  .des {
    span {
      display: inline-block;
    }
    .read-more {
      padding-left: 0;
    }
  }
}

.language-tw {
  .des {
    .read-more {
      font-size: 12px;
    }
  }
}

@media screen and (max-width: 600px) {
  .team-show {
    margin-top: 20px;
  }

  a.control {
    width: 40px;
    height: 40px;
    font-size: 25px;
  }

  .language-not-zh {
    .team-show {
      .team-list {
        .team-item {
          width: 230px;
        }
      }
    }

    .des .read-more {
      display: inline-block;
      padding-left: 0;
    }
  }

  .language-tw {
    .des .read-more {
      display: inline-block;
      width: auto;
      padding-left: 10px;
    }
  }
}

</style>


<style lang="scss">
  .show-more {
    .el-dialog__header {
      background: #f7f7f7;
      text-align: left;

      .el-dialog__title {
        color: #999999;
      }
    }

    .more-detail {
      max-height: 60vh;
      overflow: auto;
    }
  }

  .el-carousel__arrow {
    display: none!important;
  }

  .el-carousel__button {
    display: none!important;
  }

  .el-carousel__container {
    height: 400px;
  }

  .language-not-zh {
    .el-carousel__container {
      height: 550px;
    }
  }

  .language-tw {
    .el-carousel__container {
      height: 500px;
    }
  }

  @media screen  and (max-width: 600px){
    .el-carousel__container {
      height: 400px;
    }

    .language-not-zh {
      .el-carousel__container {
        height: 550px;
      }
    }

    .language-tw {
      .el-carousel__container {
        height: 400px;
      }
    }

    .show-more {
      .el-dialog {
        width: 90%;
      }
    }
  }
</style>