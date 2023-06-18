---
title: Vue
date: 2021-06-24
categories: article
tags: Vue
---
# 认识项目结构

vue中我们常用项目结构如下（部分目录是后续自己创建的）：
    public
        静态文件目录
        主要包含index.html文件，和ico图标
        public中的index.html就是单页面应用内的唯一那个html文件
    src
        项目开发主目录
        所有vue开发相关内容都在src中
    下文会仔细解析
    .gitignore
        git忽略文件配置
    babel.config.js
        babel是一个js的编译器，可以将浏览器不支持的预编译语言编译成浏览器能支持的结果
        babel.config.js主要的作用是配置vue项目内的编译
        package.json
    依赖管理
        yarn.lock
        这个文件的作用是记录yarn安装的所有依赖地址
        以后使用yarn安装会首选.lock中的地址
        有时候npm服务资源不稳定，就导致原本lock中的地址失效，从而多次yarn也会失败
        此时，我们应该，删除.lock文件，再重新yarn一次
    vue.config.js
        vue脚手架配置工具
        默认安装的项目并没有这个文件，需要手动创建
        主要作用是——
                    设置代理
                    设置编译
                    配置多页面
                    配置本地服务

在vue中我们更多接触的目录是——src

src是vue里面最重要的开发目录，我们需要在src中规划我们的开发资源，那么常用的src目录如下：

    assets
        静态文件——css，js，img，font（字体）
    components
        组件
    api
        业务接口,ajax请求
             推荐大家开发规范是：
            一个页面的接口就是一个目录
            目录内当前接口文件命名xxx.api.js
    utils
        工具类
    router
        路由
    store
        数据仓库
    plugins
        插件

# 组件

vue组件使用步骤：
    引入
        import引入自己定义的组件
    注册
        使用components属性注册你的组件
    使用
        将组件标签放到template中使用

上面三步必须严格执行，否则eslint会报错
在react中，只需要引入、使用，省去了注册

# 定义数据

vue定义数据在data中定义，data中的数据可以在组件内部的script中参与计算，也可以在template模板中使用
data为什么是一个方法（函数）
vue的组件都是VueComponent的实例对象，内部数据如果直接使用对象来定义的话，基于引用类型特性，会发生多个组件实例公用一份数据地址的情况。使用函数返回的方式，可以保证每一个组件的数据独立

data中的数据后续手动添加为什么不再与视图双向绑定了？
vue框架原理中，一旦data数据返回对象之后，vue内部会遍历这个对象，对每一个属性进行监听，一旦组件初始化完成，这个监听过程也就结束了。所以后续添加的数据不会被监听了

vue官方提供了一个api——$set，它可以帮助我们手动监听新增的数据。
```javascript
  data() {
    return {
      words: "这是定义的数据",
    };
  }
```
# Mustach模板编译语法

Mustach语法让我们可以将组件内部定义的数据渲染到视图template模板上

```javascript
  <div>{{ words }}</div>

  data() {
    return {
      words: "这是我自己创建的组件",
    };
  }
```
# 指令
ue的指令非常强大，能帮助我们减少极其多的复杂工作。
vue指令是专门用于dom处理的，所有指令都只能用在dom身上
常用的vue指令：
    内容
        v-text——渲染文本
        v-html——渲染html（包括文本）
    显隐
        v-show——基于css控制
            频繁操作中，使用show更合理
        v-if——基于渲染控制
            不频繁操作的时候，使用if更安全,卸载组件的就是使用的v-if直接将视图卸载
    分支
        v-if
            if判断
        v-else-if
            else if分支
        v-else
            else分支
        if，else if，else如果要凑成一个分支，那相关dom一定要紧挨着书写
    列表
        v-for
  永远不要把 v-if 和 v-for 同时用在同一个元素上。v-for 具有比 v-if 更高的优先级,所以v-for会先执行，也就导致每一次循环v-if都会判断一次，极其损耗性能。


    数据绑定
    vue中使用v-model进行数据和视图的绑定，在表单应用中使用尤其多
    input——收集input输入内容
    radio
        收集radio本身的value
    checkbox
        收集checkbox本身的value
            当v-model绑定的数据是数组时，收集value
        收集true和false
            当v-model绑定的数据是非数组时，收集true和false
    textarea——收集文本域的value
    select——收集option的value