// 引入时间处理的插件moment
const moment = require('moment');
// 引入私密信息文件
const secretConfig=require("./secret");
module.exports={//插件
    '@vuepress/last-updated':{
          transformer: (timestamp, lang) => {
            moment.locale("zh-cn")//lang表示多语言模式
            return moment(timestamp).format("LLLL")//格式化时间为本地格式
          }
        },
      '@vuepress/pwa':{
            serviceWorker: true,
            updatePopup: {
              message: "发现新内容可用",
              buttonText: "刷新"
             }
          },
      '@vssue/vuepress-plugin-vssue': {//vssue评论插件
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'xm1769315774.github.io',
            repo: '/',
            clientId: secretConfig.clientId,
            clientSecret: secretConfig.clientSecret,
            autoCreateIssue:true
          },
          '@vuepress/back-to-top':true,//快速返回顶部
        }