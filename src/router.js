import langs from './i18n/route.json'
import navConfig from './nav.config.json'

const LOAD_MAP = {
  'page': name => {
    return r => require.ensure([], () =>
      r(require(`./views/pc/${name}.vue`)),
    'page')
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
defaultLanguage = localStorage.getItem('EXHIBITION_LANGUAGE')
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
}

localStorage.setItem('EXHIBITION_LANGUAGE', defaultLanguage)



// 404页面
route = route.concat([,
  {
    path: '*',
    redirect: '/' 
  }
])

export default route