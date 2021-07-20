---
title: 路由
date: 2021-06-24
categories: article
tags: React
---

# 基本概念

react路由唯一解决方案是react-router,react-router有三大板块：

* react-router
  - 路由核心基础库
* react-router-dom
  - web界面路由库
* react-router-native
  - react native 混合开发app路由库

react中使用路由的话推荐直接使用react-router-dom，它是react-router核心包之上创建的针对web页面路由的包。

# 具体搭建
在router中的index文件中引入路由的组件，导出一个对象数组；
在App.jsx文件中引入路由基本配置

```react
// 引入路由基本配置
import {HashRouter,Switch,Route, Redirect} from "react-router-dom";
```

- HashRouter | BrowserRouter
  - 最大的路由容器，内部进行路由规则的排布
- Switch
  - 路由匹配分支容器，当Route匹配到对应规则的时候，Switch会阻止路由继续往后匹配
- Route
  - 路由规则组件，匹配路由规则，渲染对应的组件
- Redirect
  - 重定向
- exact
  - 严格模式，exact修饰的Route，url必须完全一致才能匹配成功
- Link
  - 跳转链接，在页面上会被渲染成a标签
- NavLink
  - 对照当前url，符合要求的链接会加上active样式