import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 默认引入英文的包
// import axios from 'axios'
import en from './json/en'
Vue.use(VueI18n)

const messages = {
  en: en
}

const i18n = new VueI18n({
  locale: '', // set locale
  // 如果当前语言找不到翻译 默认去找中文的
  fallbackLocale: 'en',
  messages // set locale messages
})

const loadedLanguages = ['en']

function setI18nLanguage (lang) {
  // 修改语言同时做一些处理
  i18n.locale = lang
  // axios.defaults.headers.common['Accept-language'] = lang
  localStorage.setItem('EXHIBITION_LANGUAGE', lang)
  if (lang != 'zh') {
    document.querySelector('#app').className = `language-${lang} language-not-zh`
  } else {
    document.querySelector('#app').className = `language-${lang}`
  }
  document.querySelector('html').setAttribute('lang', lang)
  document.querySelector('.body-loading').style.display = 'none'
  return lang
}

function loadLanguageAsync (lang) {
  // console.log(lang, i18n.locale)
  if (i18n.locale !== lang) {
    document.querySelector('.body-loading').style.display = ''    
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `./json/${lang}.json`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

export { loadLanguageAsync, i18n }

