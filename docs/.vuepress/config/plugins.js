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
            owner: 'xm1769315774',
            repo: 'Blog.git',
            clientId: secretConfig.clientId,
            clientSecret: secretConfig.clientSecret,
            autoCreateIssue:true
          },
          '@vuepress/back-to-top':true,//快速返回顶部
          "vuepress-plugin-auto-sidebar":{
            sort: {
              mode: "asc",
              readmeFirst: true,
              readmeFirstForce: false
            },
            title: {
              mode: "titlecase",
              map: {}
            },
            sidebarDepth: 1,
            collapse: {
              open: false,
              collapseList: [],
              uncollapseList: []
            },
            ignore: []
          },
          'meting'://音乐插件
            {
              meting: {
                server: 'netease',//音乐平台"netease" | "tencent" | "kuwo" | "kugou" | "baidu"
                type: 'song',//MetingApi 中的 type 参数，即资源类型（播放列表、单曲、专辑等）"song" | "album" | "artist" | "playlist"
                mid: '481535277',//MetingApi 中的 id 参数，即资源 ID
              //  auto: 'http://music.163.com/#/song?id=481535277'
             }, // 不配置该项的话不会出现全局播放器
             aplayer: {
                lrcType: 3,//设置 lrc 歌词解析模式3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
             },
            },
            "vuepress-plugin-boxx":{},//博客文章自动随机添加名人名言或其他
            'vuepress-plugin-helper-live2d': {//uePress集成Live2D看板娘 Live2D,右下角卡通人物
              // 是否开启控制台日志打印(default: false)
              log: false,
              live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                // 模型预览：https://zhousiwei.gitee.io/live2d-widget.js/examples/index.html
                model: 'wanko',//卡通模型：chitose，epsilon2_1，gf，haru/01，haruto，hibiki
                display: {
                  position: "right", // 显示位置：left/right(default: 'right')
                  width: 135, // 模型的长度(default: 135)
                  height: 300, // 模型的高度(default: 300)
                  hOffset: 65, //  水平偏移(default: 65)
                  vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                  //show: false // 是否在移动设备上显示(default: false)
                  show: true , //# 是否在移动设备上显示
                  scale: 0.5  // # 移动设备上的缩放
                },
                react: {
                  opacity: 0.8 ,// 模型透明度(default: 0.8)
                  // opacityDefault: 0.7,
                  // opacityOnHover: 0.8
                }
              }
            },
            "flexsearch":{//搜索框插件
                //插件自定义选项
                maxSuggestions: 10,     //多少搜索建议，以显示在菜单上，默认是10
                searchPaths: ['path1', 'path2'],     // 要搜索的路径数组，将其保留为空以搜索所有文档。
                searchHotkeys: ['s'],      // 激活搜索输入的热键，默认为“s”，但您可以添加更多。
                searchResultLength: 60,     // 建议结果文本的字符长度，默认为 60 个字符。
                //默认 FlexSearch 选项
                //要覆盖默认选项，您可以在 https://github.com/nextapps-de/flexsearch 查看可用选项
                search_options: {
                  encode: "icase",
                  tokenize: "forward",
                  resolution: 9,
                  doc: {
                    id: "key",
                    field: ["title", "content", "headers"],
                  }
                }

            },
            "vuepress-plugin-nuggets-style-copy":{//复制弹窗插件
              copyText: "复制代码",
              tip: {
                  content: "复制成功!"
              }
            },
            "dynamic-title":{//趣味标题插件
              showIcon: "/assets/imgs/favicon.ico",
              showText: "(/≧▽≦/)咦！又好了！",
              hideIcon: "/assets/imgs/favicon.ico",
              hideText: "(●—●)喔哟，崩溃啦！",
              recoverTime: 2000
            }

        }