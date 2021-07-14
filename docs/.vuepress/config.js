// 引入时间处理的插件moment
const moment = require('moment');

module.exports = {
  base:"/",//配置部署站点的基础路径
  title:"小明的博客",
  description:"欢迎来到小明的博客",
  head: [
    ['link', { rel: 'icon', href: '/assets/imgs/favicon.ico' }],//网站的logo
    ['meta', { name: 'author', content: '小明' }],
    ['meta', { name: 'keywords', content: '小明的博客' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/01.jpg' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/02.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [//插件
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale("zh-cn")//lang表示多语言模式
          return moment(timestamp).format("LLLL")//格式化时间为本地格式
        }
      }
    ],
    ['@vuepress/pwa',{
          serviceWorker: true,
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
           }
        }],
  ],
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean最后更新时间说明
    logo: '/assets/imgs/head.jpg',  // 左上角logo
    nav: [//导航栏
      { text: '首页', link: '/' },//text标题，link跳转的页面
      { text: '关于', link: '/about/' },
      { text: '生活', link: '/life/' },
      { text: '音乐', link: '/music/' },
      {
        text: 'web前端',//二级菜单
        items: [
          { text: 'web前端', items: [
                {text:"JavaScript",link:"/webDevelopment/JavaScript/"},//分组里边的东西
                {text:"HTML",link:"/webDevelopment/HTML/"},//分组里边的东西
          ] },
        ]
      },
      { text: '链接', link: 'https://github.com/xm1769315774' },
    ],
    //auto全局自动生成侧边栏
    sidebar:{
      "/life/":[
        "day01",
        "day02"
      ],

      "/music/":[
        "music01"
      ],
      "/":[
        "",
        "about",
        "life",
        "music",
      ]
    }

  } 
};