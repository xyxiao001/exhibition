<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    document.querySelector('.body-loading').style.display = 'none'
    let list = this.$store.getters.getLanList
    let lang = localStorage.getItem('EXHIBITION_LANGUAGE')
    this.$store.dispatch ({
      type: 'setLanguage',
      language: lang
    })
    setTimeout(() => {
      // 修改跳转的默认路径, 还有当前语言图片路径
      let path = this.$route.path.split('/')[1]
      if (list.indexOf(path) === -1) {
        path = ''
      } else {
        path = `/${lang}`
      }
      this.$store.dispatch ({
        type: 'setPath',
        path: path
      })
    }, 300) 
  }
}
</script>