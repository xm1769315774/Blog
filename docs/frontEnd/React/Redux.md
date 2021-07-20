---
title: 仓库
date: 2021-06-24
categories: article
tags: React
---

# redux快速入门

## react中数据管理的插件有很多，比较流行的有：

- redux
  - 单向数据流
- mobX
  - 响应式数据流
- RxJS
  - steam

## 概念：

- store——仓库
  - 仓库是所有数据的载体，组件都从仓库中获取数据来渲染
  - 仓库中的数据发生改变，组件内需要及时得到新的数据来渲染更新视图
- state——状态
  - 状态是仓库内的数据
  - 状态数据最大的作用是更新视图，且状态是集中在仓库中管理，所有组件都引用仓库的state数据
- action——行为描述
  - action行为用于告知store仓库如何更新数据
  - store通过`store.dispatch(action)`来修改state，store在初始化的时候就订阅了reducer，所以分发action的时候会自动去匹配action行为
- reducer——具体过程
  - reducer用于递归匹配action行为，当action行为被匹配到的时候，reducer会执行指定的流程，得到一个**全新的state**
  - reducer是一个**函数**，接受的参数是【state】和【action】
  - 注意，reducer不会修改原本的state（这是绝对不允许的！），而是会返回一个全新的state