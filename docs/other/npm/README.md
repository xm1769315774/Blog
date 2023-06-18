---
title: npm
date: 2023-06-18
categories: npm
tags: npm
---

# npm命令
    npm install（i）包名 安装npm包
    
    全局安装：
        全局安装后，主要就是给命令行提供命令
        比如在本地cmd窗口执行对应的npm的快捷命令

    项目依赖：
        给当前项目使用的
        npm i -S/ -D xxx
        -S  是 --save-dev 的简写，作用是dev开发阶段和上线阶段都需要使用的模块
        -D  是 --save 的简写，只在dev开发阶段使用的模块，显示不需要
        如果npm i 后边不写则默认值就是 -S

    如果安装指定版本，模块名需要加版本号
        npm install 模块名@1.0.0

    删除全局依赖包
        npm uninstall --global 包名 简写 npm un -g 包名
    
    删除 项目/开发依赖包
        npm uninstall 包名 简写 npm un 包名