<template>
  <div class="develope-route">
    <img :src="`${baseUrl}common/d-header.png`" class="mobile-header" alt="">
    <section class="d-header">
      <p class="year">
        <span class="border-left"></span>
        <span>{{ $t("pc.develope.year") }}</span>
        <span class="border-right"></span>
      </p>
      <p class="title">{{ $t("pc.develope.title") }}</p>
      <p class="title-des">{{ $t("pc.develope.titleDes") }}</p>      
    </section>
    <section class="d-box box-pc">
      <section class="d-wrapper" v-for="list in line" :key="list.name">
        <!-- 内容的展示 -->
        <div class="d-list">
          <div class="d-item" v-for="item in list.childs" :key="item.name" :style="{'min-height': item.height}">
            <p class="month">{{ item.name }}</p>
            <p
              v-for="son in item.childs"
              class="plan"
              :class="[son.finish ? 'finish' : '', son.wrap ? 'wrap' : '']"            
              :key="son.name">
              <span class="plan-name">
                {{ son.name }}
              </span>
              <span v-if="son.finish" class="gou"></span>
            </p>
          </div>
        </div>

        <div class="progress">
          <div class="progress-now" :style="{ 'width': `${list.progress}%`}">
            <div class="progress-show"></div>
          </div> 
        </div>
        <p class="name" :class="[list.begin ? 'begin' : '']">{{ list.name }}</p>
      </section>
    </section>
     <section class="d-box box-mobile">
      <section class="d-wrapper" v-for="list in line" :key="list.name">
        <p class="name" :class="[list.begin ? 'begin' : '']">{{ list.name }}</p>
        <!-- 内容的展示 -->
        <div class="d-list">
          <div class="d-item" v-for="item in list.childs" :key="item.name">
            <p class="month">{{ item.name }}</p>
            <p
              v-for="son in item.childs"
              class="plan"
              :class="[son.finish ? 'finish' : '', son.wrap ? 'wrap' : '']"            
              :key="son.name">
              <span class="plan-name">
                {{ son.name }}
              </span>
              <span v-if="son.finish" class="gou"></span>
            </p>
          </div>
        </div>
      </section>
    </section>
    <div class="de-bg">
      <img src="../assets/pc/home/de-bg.png" alt="">  
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: process.env.BASE_URL,
        nowTime: new Date()
      }
    },
    computed: {
      line () {
        let line = this.$t("pc.develope.line")
        let now = this.getTime(this.nowTime)
        // 处理数据 算出当前时间轴的渐变长度, 和是否展示
        line.map((item, index) => {
          let start = this.getTime(item.startTime)
          let end = this.getTime(item.endTime)
          if (now < start) {
            item.begin = false
            item.progress = 0
          } else {
            item.begin = true
            item.progress = (now - start) / (end - start) * 100
            item.progress = item.progress > 100 ? 100 : item.progress
          }
          // 然后去循环判断每一个子项的时间到了没， 到了就亮起来
          item.childs.forEach(child => {
            child.childs.forEach(son => {
              let sonEnd = this.getTime(son.endTime)
              son.finish = now > sonEnd
            })
          })
          return item
        })
        return line
      }
    },

    methods: {
      getTime (time) {
        time = time.toString()
        time = time.replace('年','/').replace('月','/').replace('日','')
        time = Date.parse(new Date(time))
        return time
      }
    }
  }
</script>

<style lang="scss" scoped>
.develope-route {
  position: relative;
  color: white;
  overflow: hidden;

  .mobile-header {
    display: none;
  }

  .de-bg {
    position: absolute;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    img {
      display: block;
      width: 100%;
      margin: auto;
    }
  }

  .d-header {
    position: relative;
    padding-top: 124px;
    text-align: center;
    font-size: 32px;
    z-index: 10;

    .year {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      font-size: 16px;
      margin-bottom: 12px;
    }

    .border-left {
      width: 32px;
      height: 1px;
      background-color: white;
      margin-right: 15px;
    }

    .border-right {
      width: 32px;
      height: 1px;
      background-color: white;
      margin-left: 15px;        
    }
  }

  .d-box {
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    margin-top: 74px;
    padding-bottom: 50px;      
    background-color: #002A9C;

    &.box-mobile {
      display: none;
    }

    .d-wrapper {
      position: relative;
      width: 80%;
      max-width: 1300px;
      margin: auto;
      margin-top: 10px;
      z-index: 10;

      .name {
        opacity: .3;
        font-size: 20px;
        

        &.begin {
          opacity: 1;
          color: #27CCAF;
        }
      }

      .progress {
        display: block;
        width: 100%;
        height: 7.14px;
        background-color:rgba($color: #ffffff, $alpha: .3);
        margin-bottom: 5px;
        border-radius: 4px;

        .progress-now {
          position: relative;            
          width: 10%;
          height: 100%;
          border-radius: 4px;            
          overflow: hidden;   
        }

        .progress-show {
          position: absolute;
          width: 100%;
          height: 100%;  
          background: linear-gradient(to right, #5281FF, #7BFFE0);
          transition: all .5s ease-out;
        }
      }

      .d-list {
        margin-top: 20px;
        display: flex;
        align-items: flex-end;
        padding: 0 5px;

        .d-item {
          position: relative;
          width: 16.6%;
          padding-left: 10px;
          border-left: 1.5px solid rgba($color: #fff, $alpha: .25);

          &::before {
            content: "";
            position: absolute;
            top: 0px;
            left: -4px;
            width: 6px;
            height: 6px;
            background-color: #27CCAF;
            border-radius: 50%;
          }

          &::after {
            content: "";
            position: absolute;
            top: -3px;
            left: -7px;
            width: 12px;
            height: 12px;
            background-color: #27CCAF;
            border-radius: 50%;
            opacity: .4;
          }

          .month {
            margin-top: -10px;
            font-size: 16px;
            opacity: .5;
          }

          .plan {
            position: relative;
            display: block;
            font-size: 16px;
            line-height: 25px;  
            white-space: nowrap;    
            opacity: .5;
            padding-top: 2px;

            &.wrap {
              white-space: normal;
            }
            
            &.finish {
              opacity: 1;
              
              .plan-name {
                border-bottom: 1px solid #50E3C2;
              }
            }

            .gou {
              position: relative;
              margin-left: 0px;
              width: 0;
              height: 12px;
              display: inline-block;
              transform:rotate(230deg);

              &::before {
                position: absolute;
                top: 10px;
                left: -10px;
                content: "";
                width: 8px;
                height: 3px;
                background-color: #50E3C2;
              }

              &::after {
                position: absolute;
                top: 10px;
                left: -10px;
                content: "";
                width: 3px;
                height: 12px;
                background-color: #50E3C2;
              }
            }
          }
        }
      }
    }
  }
}

.language-not-zh {
  .develope-route {
    .d-box {
      .d-wrapper {
        .d-list {
          .d-item {
            padding:  0 10px;
            .plan {
              white-space: normal;
              font-size: 14px;

              .gou {
                &::before {
                  top: 10px;
                }

                &::after {
                  top: 10px;                  
                }
              }
            }
          }
        }

        .progress {
          position: relative;
          margin-top: 10px;

          .progress-show{
            width: 1200px;
          }
        }
      }
    }
  }
}

.language-tw {
  .develope-route {
    .d-box {
      .d-wrapper {
        .d-list {
          .d-item {
            padding:  0 10px;
            .plan {
              display: block;
              white-space: normal;
              font-size: 16px;

              .gou {
                width: 0;
                &::before {
                  top: 10px;
                }

                &::after {
                  top: 10px;                  
                }
              }
            }
          }
        }

        .progress {
          margin-top: 10px;
        }
      }
    }
  }
}

// 小屏幕兼容
@media screen and (max-width: 1200px) {
  .develope-route {
    .d-box .d-wrapper {
      width: 90%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .develope-route {
    background-color: #00058A;
    .mobile-header {
      display: block;
      width: 100%;
    }

    .de-bg {
      display: none;
    }

    .d-header {
      padding-top: 0;
    }

    .d-box {
      background-color: #00058A;

      &.box-pc {
        display: none;
      }

      &.box-mobile {
        display: flex;
        justify-content: space-around;
      }

      .d-wrapper {
        width: 40%;

        .d-list {
          display: block;
          .d-item {
            width: 100%;
            padding-bottom: 50px;

            .plan {
              display: block;
              width: 100%;
              white-space: normal;
            }
          }
        }
      }

    }
  }

  .language-not-zh .develope-route .d-box .d-wrapper .d-list {
    .d-item {
      width: 100%;
      padding-bottom: 50px;
    }
  }
}

@media screen and (max-width: 500px) {
  
  .develope-route {
    .d-box {
      background-color: #00058A;
      &.mobile-box {
        flex-wrap: wrap;
      }
      .d-wrapper {
        width: 80%;
        .d-list {
          display: block;
          .d-item {
            padding-bottom: 50px;
          }
        }
      }

    }
  }
}
</style>
