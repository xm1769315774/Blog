module.exports=[//导航栏
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
  ]