
// 头部设置
const headConfig=require("./config/head");
// 插件配置
const pluginsConfig=require("./config/plugins");
// 导航栏
const navConfig=require("./config/nav");
// 侧边栏
const sidebarConfig=require("./config/sidebar");
module.exports = {
  base:"/",//配置部署站点的基础路径
  title:"小明的博客",
  description:"欢迎来到小明的博客",
  head:headConfig,
  plugins: pluginsConfig,
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean最后更新时间说明
    logo: '/assets/imgs/head.jpg',  // 左上角logo
    nav: navConfig,
    //auto全局自动生成侧边栏
    sidebar:sidebarConfig

  } 
};