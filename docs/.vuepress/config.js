
// 头部设置
const headConfig=require("./config/head");
// 插件配置
const pluginsConfig=require("./config/plugins");
// 导航栏
const navConfig=require("./config/nav");
// 侧边栏
const sidebarConfig=require("./config/sidebar");
module.exports = {
  theme: "reco",
  base:"/",//配置部署站点的基础路径
  title:"小明的博客",
  description:"欢迎来到小明的博客",
  head:headConfig,
  plugins: pluginsConfig,
  themeConfig: {
    type: 'blog',
    authorAvatar: '/assets/imgs/head.jpg',
    lastUpdated: '更新时间', // string | boolean最后更新时间说明
    logo: '/assets/imgs/head.jpg',  // 左上角logo
    nav: navConfig,
    //auto全局自动生成侧边栏
    sidebar:sidebarConfig,
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',
    cyberSecurityRecord: '公安部备案文案',
    cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2020',
    author: '小明',//作者
  } 
};