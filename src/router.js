import langs from './i18n/route.json'
import navConfig from './nav.config.json'

const LOAD_MAP = {
  'pc': name => {
    return r => require.ensure([], () =>
      r(require(`./views/pc/${name}.vue`)),
    'pc')
  },
  'mobile': name => {
    return r => require.ensure([], () =>
      r(require(`./views/mobile/${name}.vue`)),
    'mobile')
  }
}

const load = function (lang, path) {
  return LOAD_MAP[lang](path)
}

const registerRoute = (navConfig) => {
  let route = []
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang]
    route.push({
      path: `/${ lang }`,
      redirect: `/`,
      component: load(lang, 'Index'),
      children: []
    })
    navs.forEach(nav => {
      addRoute(nav, lang, index)
    })
  })
  
  function addRoute(page, lang, index) {
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: page.name,
      component: load(lang, page.component)
    }
    route[index].children.push(child)
  }

  return route
}

let route = registerRoute(navConfig)

// 默认路由 第一次进入 判断上次最后选择的语言  进行默认语言设置
let defaultLanguage
defaultLanguage = localStorage.getItem('MUSICLIFE_LANGUAGE')
if (!defaultLanguage) {
  // 表示用户没有进行过语言切换， 获取系统语言进行判断
  let userLanuage = (navigator.language || navigator.browserLanguage).toLowerCase()
  console.log(userLanuage)
  defaultLanguage = 'en'
  if (userLanuage.indexOf('zh') === 0) {
    defaultLanguage = 'zh'
  }

  if (userLanuage.indexOf('en') === 0) {
    defaultLanguage = 'en'
  }

  if (userLanuage.indexOf('ja') === 0) {
    defaultLanguage = 'ja'
  }
}


var detectmob = () => {
  if ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    // || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)){
    return true
  }
  else {
    return false
  }
}

window.isPhone = detectmob()

let pcIndex = detectmob() ? 1 : 0
pcIndex = 0
let default1 = {...route[pcIndex]}
default1.path = ''
let children = default1.children.map((item, index) => {
  var obj = Object.assign({}, item)
  obj.name = obj.name + 'default'
  return obj
})
default1.children = children
route.unshift(default1)

let defaultIndex = 0
langs.forEach((item, index) => {
  if (item.lang === defaultLanguage) {
    defaultIndex = index
  }
})
defaultLanguage = langs[defaultIndex].lang
localStorage.setItem('MUSICLIFE_LANGUAGE', defaultLanguage)


// 404页面
route = route.concat([
  {
    path: '/wechatinfo',
    redirect: '/user' 
  },
  {
    path: '*',
    redirect: '/' 
  }
])

export default route