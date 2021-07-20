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
              {text:"JavaScript",link:"/frontEnd/JavaScript/"},//分组里边的东西
              {text:"HTML",link:"/frontEnd/HTML/"},//分组里边的东西
              {text:"CSS",link:"/frontEnd/CSS/"},//分组里边的东西
              {text:"Vue",link:"/frontEnd/Vue/"},//分组里边的东西
              {text:"React",link:"/frontEnd/React/"},//分组里边的东西
              {text:"uni-app",link:"/frontEnd/uni-app/"},//分组里边的东西
              {text:"TypeScript",link:"/frontEnd/TypeScript/"},//分组里边的东西
        ] },
      ]
    },
    {
      text: '后端',//二级菜单
      items: [
        { items: [
              {text:"NodeJS",link:"/backEnd/NodeJS/"},//分组里边的东西
              {text:"MySQL",link:"/backEnd/MySQL/"},//分组里边的东西
              {text:"Express",link:"/backEnd/Express/"},//分组里边的东西
        ] },
      ]
    },
    {
      text: '其他',//二级菜单
      items: [
        { items: [
              {text:"Markdown",link:"/other/Markdown/"},//分组里边的东西     
        ] },
      ]
    },
    { text: '链接', link: 'https://github.com/xm1769315774' },
  ]