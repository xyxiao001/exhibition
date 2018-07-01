<template>
  <footer>
    <section class="content pc-content">
      <section class="content-top">
        <img src="../assets/pc/home/footer.png" alt="" class="foot-img">
        <p>{{ $t("pc.home.footer.title") }}</p>
      </section>
      <section class="group">
        <img :src="`${baseUrl}pc/${lang}/foot-logo.png`" alt="" class="foot-img">
        <section class="group-list">
          <a href="https://t.me/musiclifeblockchain2" target="_blank" class="group-item">
            <img src="../assets/pc/home/icon1.png" alt="telegram">
          </a>
          <a href="http://www.app-echo.com/#/group/31503" target="_blank" class="group-item">
            <img src="../assets/pc/home/icon2.png" alt="echo">
          </a>
          <a href="https://twitter.com/musiclife_mitc" target="_blank" class="group-item">
            <img src="../assets/pc/home/icon3.png" alt="twitter">
          </a>
          <a href="https://www.facebook.com/musiclife.block" target="_blank" class="group-item">
            <img src="../assets/pc/home/icon4.png" alt="facebook">
          </a>
        </section>
      </section>
      <section class="content-bottom">
        <p>{{ $t("pc.home.footer.copyright") }}</p>
        <p>{{ $t("pc.home.footer.contact") }} <a href="mailto:EMAIL">{{ $t("pc.home.footer.email") }}</a></p>
      </section>
    </section>
    <section class="content mobile-content">
      <img :src="`${baseUrl}pc/${lang}/foot-logo.png`" alt="" class="foot-img1">
      <section class="content-top">
        <img src="../assets/pc/home/footer.png" alt="" class="foot-img2">
        <p>{{ $t("pc.home.footer.title") }}</p>
      </section>
      <p class="contact">{{ $t("pc.home.footer.contact") }} <a href="mailto:EMAIL">{{ $t("pc.home.footer.email") }}</a></p>
      <section class="group">
        <section class="group-list">
          <a href="https://t.me/musiclifeblockchain2" target="_blank" class="group-item">
            <img src="../assets/pc/home/icon1.png" alt="telegram">
          </a>
          <a href="http://www.app-echo.com/#/group/31503" target="_blank" class="group-item">
            <img src="../assets/pc/home/icon2.png" alt="echo">
          </a>
          <a href="https://twitter.com/musiclife_mitc" target="_blank" class="group-item">
            <img src="../assets/pc/home/icon3.png" alt="twitter">
          </a>
          <a href="https://www.facebook.com/musiclife.block" target="_blank" class="group-item">
            <img src="../assets/pc/home/icon4.png" alt="facebook">
          </a>
        </section>
      </section>
      <section class="content-bottom">
        <p>{{ $t("pc.home.footer.copyright") }}</p>
      </section>
    </section>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL,
    }
  },
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    },
  }
}
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 10%;
    min-height: 459px;
    background-color: #000332;

    img {
      align-self: center;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
      color: white;
      text-align: center;
      justify-content: space-between;
      align-items: center;
    }

    .pc-content {
      display: flex;
    }

    .mobile-content {
      display: none;
    }


    .content-top {
      display: flex;
      align-self: center;
      justify-content: center;
      height: 374px;

      .foot-img {
        width: 239px;
      }

      p {
        width: 222px;
        font-size: 36px;
        margin-left: 40px;
        padding-top: 150px;
      }
    }


    .group {
      display: flex;
      flex-wrap: wrap;
      width: 313px;
      height: 153px;

      .foot-img {
        width: 100%;
      }
      p {
        font-size: 12px;
      }

      .group-list {
        width: 100%;
        margin-top: 31px;
        display: flex;
        justify-content: space-between;

        .group-item {
          transition: opacity .2s ease-out;
          img {
            width: 50px;
          }

          &:hover {
            opacity: .8;
          }
        }
      }
    }

    .content-bottom {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      // border-top: 1px solid #7DB8ED;
      line-height: 80px;

      a {
        color: #58B0FF;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(to left, rgba(125, 184, 237, 0), rgba(125, 184, 237, 1) 50%, rgba(125, 184, 237, 1) 50%,rgba(125, 184, 237, 0) 100%);
      }

    }
  }

  .language-not-zh {
    footer .content-top p {
      text-align: left;
    }
  }

  .language-en {
    footer .content-top p {
      padding-top: 120px;
      width: 258px;
      font-size: 28px;
    }
  }

  // 俄罗斯语
  .language-ru-RU {
    footer .content-top p {
      padding-top: 120px;
      width: 458px;
      font-size: 34px;
    }
  }

  // 葡萄牙语
  .language-pt-PT {
    footer .content-top p {
      padding-top: 150px;
      width: 458px;
      font-size: 34px;
    }
  }

  // 德语
  .language-de-DE {
    footer .content-top p {
      padding-top: 150px;
      width: 458px;
      font-size: 34px;
    }
  }

  // 法语
  .language-fr-FR {
    footer .content-top p {
      padding-top: 120px;
      width: 458px;
      font-size: 34px;
    }
  }

  // 西班牙语
  .language-es-ES {
    footer .content-top p {
      padding-top: 150px;
      width: 458px;
      font-size: 34px;
    }
  }

  // 意大利语
  .language-it-IT {
    footer .content-top p {
      padding-top: 120px;
      width: 458px;
      font-size: 34px;
    }
  }

  // 日语
  .language-ja {
    footer .content-top p {
      width: 255px;
    }
  }

  .language-tw {
    footer .content-top p {
      text-align: center;
    }
  }



  @media screen and (max-width: 1200px) {
    footer {
      padding: 0 5%;
      .content {
        .group {
          margin-bottom: 30px;
        }
      }

      .mobile-content {
        display: none;
      }
    }
  }

  @media screen and (max-width: 968px) {
    footer {
      padding: 0;
      min-height: 0px;
      .pc-content {
        display: none;
      }

      .mobile-content {
        display: block;

        .content-top {
          padding-top: 15px;
          height: auto;

           p {
             display: flex;
             align-items: center;
             justify-content: center;
             font-size: 18px;
             width: 111px;
             padding-top: 0;
          }
        }

        .foot-img1 {
          width: 61%;
          margin-top: 40px;
        }

        .foot-img2 {
          width: 26.6%;
        }

        .contact {
          position: relative;
          padding: 15px 0;
          margin: 20px 0;
          font-size: 14px;

          a {
            color: #58B0FF;
          }

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(to left, rgba(125, 184, 237, 0), rgba(125, 184, 237, 1) 50%, rgba(125, 184, 237, 1) 50%,rgba(125, 184, 237, 0) 100%);
          }

          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(to left, rgba(125, 184, 237, 0), rgba(125, 184, 237, 1) 50%, rgba(125, 184, 237, 1) 50%,rgba(125, 184, 237, 0) 100%);
          }
        }

        .group {
          margin: auto;
          width: 282px;
          height: auto;

          .group-list {
            margin-top: 0;
          }
        }

        .content-bottom {
          color: white;
          opacity: .5;
          text-align: center;
          line-height: 60px;

          p {
            width: 100%;
          }

          &::before {
            display: none;
          }
        }
      }
    }

    .language-not-zh {
      footer .content-top p {
        font-size: 16px;
        width: 150px;
        margin-left: 10px;
      }
    }
  }
</style>
