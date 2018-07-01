<template>
  <section class="a-list">
    <section class="a-item begin1">
      <p>{{ this.$t("pc.activity.name.begin") }}</p>
      <router-link v-for="item in obj.begin" :key="item.img" :to="item.name">
        <img :src="`${baseUrl}activity/pc/${lang}/${item.img}?version=${version}`" alt="acitvity" class="pc">
        <img :src="`${baseUrl}activity/m/${lang}/${item.img}?version=${version}`" alt="acitvity" class="mobile">
      </router-link>
    </section>

     <section class="a-item begin2">
      <p>{{ this.$t("pc.activity.name.future") }}</p>
      <a v-for="item in obj.future" :key="item.img" :to="item.name">
        <img :src="`${baseUrl}activity/pc/${lang}/${item.img}?version=${version}`" alt="acitvity" class="pc">
        <img :src="`${baseUrl}activity/m/${lang}/${item.img}?version=${version}`" alt="acitvity" class="mobile">
      </a>
    </section>

     <section class="a-item begin0">
      <p>{{ this.$t("pc.activity.name.old") }}</p>
      <a v-for="item in obj.old" :key="item.img" :to="item.name">
        <img :src="`${baseUrl}activity/pc/${lang}/${item.img}?version=${version}`" alt="acitvity" class="pc">
        <img :src="`${baseUrl}activity/m/${lang}/${item.img}?version=${version}`" alt="acitvity" class="mobile">
      </a>
    </section>
  </section>
</template>

<script>
export default {
  data () {
    return {
      version: window.version || '0.0.1',
      baseUrl: process.env.BASE_URL,
    }
  },
  computed: {
    lang () {
      return this.$store.getters.getLanguage
    },

    obj () {
      let list = this.$t("pc.activity.list") || []
      let o = {
        begin: [],
        future: [],
        old: []
      }
      list.forEach((item, index) => {
        if (~~item.begin === 0) {
          o.old.push(item)
        } else if (~~item.begin === 1) {
          o.begin.push(item)
        } else {
          o.future.push(item)
        }
      })
      return o
    }
  }
}
</script>

<style lang="scss" scoped>
.a-list {
  position: relative;
  padding-bottom: 50px;
  .a-item {
    display: block;
    margin: auto;
    padding: 15px;
    width: 700px;
    margin-bottom: 28px;
    background-color: #3749AD;
    font-size: 15px;

    p {
      margin-left: 3px;
    }

    img {
      padding-top: 10px;
      max-width: 100%;
    }
  }

  .begin1 {
    background-color: #5281FF;
  }
}

@media screen and (max-width: 1024px) {
  .a-list {
    .a-item {
      width: 80%;
    }
  }
}

@media screen and (max-width: 600px) {
  .a-list {
    padding-bottom: 5px;
    .a-item {
      font-size: 14px;
      padding: 10px;
      width: 90%;
      margin-bottom: 20px;
    }
  }
}
</style>
