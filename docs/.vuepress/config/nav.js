module.exports=[//导航栏
    { text: '首页', link: '/' },//text标题，link跳转的页面
    { text: '生活', link: '/life/' },
    { text: '音乐', link: '/music/' },
    { text: '代码块', link: '/countUp/' },
    { text: '留言板', link: '/message/' },
    { text: '关于', link: '/about/' },
    {
      text: '大前端',//二级菜单
      items: [
        { items: [
              {text:"JavaScript",link:"/frontEnd/JavaScript/"},//JavaScript
              {text:"HTML",link:"/frontEnd/HTML/"},//HTML
              {text:"CSS",link:"/frontEnd/CSS/"},//CSS
              {text:"Vue",link:"/frontEnd/Vue/"},//Vue
              {text:"React",link:"/frontEnd/React/"},//React
              {text:"uni-app",link:"/frontEnd/uni-app/"},//uni-app
              {text:"TypeScript",link:"/frontEnd/TypeScript/"},//TypeScript
        ] },
      ]
    },
    {
      text: '后端',//二级菜单
      items: [
        { items: [
              {text:"NodeJS",link:"/backEnd/NodeJS/"},//NodeJS
              {text:"MySQL",link:"/backEnd/MySQL/"},//MySQL
              {text:"Express",link:"/backEnd/Express/"},//Express
        ] },
      ]
    },
    {
      text: '其他',//二级菜单
      items: [
        { items: [
              {text:"Markdown",link:"/other/Markdown/"},//Markdown     
              {text:"git",link:"/other/git/"},//git     
              {text:"tool",link:"/other/tool/"},//tool     
        ] },
      ]
    },
    { text: '链接', link: 'https://github.com/xm1769315774' },
  ]