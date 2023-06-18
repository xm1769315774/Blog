---
title: Vue02
date: 2021-06-24
categories: article
tags: Vue
---
# 侦听器watch
在某些项目中，我们需要在数据发生改变后立即执行某些行为（而不是得到新数据），那么针对这样的情况，我们使用watch侦听器比较合适。
实际项目中，我们有时候会对诸如异步数据进行监听，此时我们需要watch来协助

基本语法：
watch:
    - 监听数据变化，执行对应操作
        
    语法：
    // 第一种写法
        - watch:{
            数据名(新值，旧值){

            }
        }
    // 第二种写法
        - watch:{
            数据名：{
                handler(新值,旧值){

                },

                immediate:true | false, // 当前数据初始化的时候，立即执行handler,因为watch默认不监听数据的初始化过程
                deep:true | false //当监听的数据为复杂对象解构的时候，true可以递归监听内部所有属性值
            }
        }

# vue生命周期
诸如vue和react一类的框架，大部分都有生命周期钩子方法这么一个说法，为什么需要生命周期呢？

因为我们需要建立一个组件从开始到销毁的整个节点把控系统。

比如，组件刚开始渲染的时候，数据是异步的，怎么办？那就在初始化生命周期（比如create）的时候，发送ajax请求
vue有四大生命阶段，8大生命周期：

    创建——将data数据初始化，绑定到组件身上
        beforeCreate
            创建前
        created
            创建后
    渲染——将template模板加载到dom视图中
        beforeMount
            渲染前
        mounted（操作dom的话，从这个生命周期后，就可以了）
            渲染后
    更新——拿到新数据，更新dom视图
        beforeUpdate
            更新前
        updated
            更新后
    销毁——将当前组件从视图上移除
        beforeDestroy
            销毁前
        destroyed
            销毁后
# vue-router基本语法使用
vue-router是vue路由的首选插件（也是官方插件）
基本使用方法：

引入——引入Vue和VueRouter
    
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    
注册
    
        Vue.use(VueRouter) //很多基于vue的插件和组件库都是使用vue.use来注册的
    
结构——创建路由数据结构
    
        const routes = [
            {
                path:'',
                component:()=>import('../../MyDemo')
            }
            ]
    
实例——通过VueRouter生成实例化路由
    
            const router = new VueRouter({
            routes
        })
    
挂载——将路由实例导出，在main.js中引入并挂载
    
            new Vue({
        router,
        render: h => h(App),
        }).$mount('#app')
    
还需要一个路由出口组件：`<router-view>`，所有路有规则匹配到的组件都会在`<router-view>`，（这也是实现路由嵌套的核心组件）
`router-view`是`vue-router`提供的一个路由入口组件，其主要作用为：根据路由规则来切换渲染对应的组件

虽然概念简单，但实际项目应用中router-view往往和App.vue牵扯不清。
首先你需要知道一个概念：App.vue是整个vue项目中唯一保持生命活性的组件，这就是为什么App.vue被称为入口组件的原因

那么结合App.vue我们可以得到一个结论，router-view在进行一级页面切换的时候最好就是直接让router-view代替App.vue内部的所有内容

router-view和vue-router又有什么关系呢？
    vue-router最主要的作用是给vue配置路由逻辑，让vue项目内部可以跳转路由和使用路由相关api
    router-view最主要的功能是渲染视图，当vue-router监听到浏览器规则时，将对应组件交给router-view来呈现渲染

vue路由跳转
vue路由跳转有三种方式：
组件跳转

基于vue-router提供的组件标签跳转
    `<router-link to="/hello-world">跳转到hello-world（组件跳转）</router-link>`

函数跳转
 使用$router路由实例来进行跳转`this.$router.push()`
    当你在vue项目中成功配置了一个vue-router路由之后，你的项目全局范围内就会挂载一个$router大对象

    $router是项目全局路由大对象，可以得到所有跟路由【处理】相关的属性和方法

    在任何组件内，通过this.$router即可访问到

    通过this.$router.push(path)就可以进行跳转了
    
        jumpTo() {
        this.$router.push("/hello-world");
    }
    
a标签跳转 设置href为哈希路由规则
使用a标签结合锚点路径来进行跳转
    `<a href="#/hello-world">跳转到hello-world</a>`

vue路由传参

路由可以跳转，也可以传参，常用传参手段，往往是借助路由函数跳转方式进行传参。
在了解传参之前，我们还需要知道一个东西：【当前路由对象—$route】（请注意和$router全局路由对象区分开）

$route和$router的区别
	$route是当前路由对象（可处理参数，地址等）,主要帮助我们获得当前路由对象上的相关信息
	$router是VueRouter的实例对象, 主要帮助我们进行路由的相关操作，跳转，获得路由规则等等

当前路由对象$route带有当前路由全部相关信息，通过console打印可以知道，当前路由对象$route身上带有一个params和query两个属性，这两个属性其实就可以帮助我们得到前一个路由传递来的参数了
使用params传参，路由必须具备name，且只能基于name跳转
params传递的参数不持久，参数不在地址栏体现，刷新页面后，就消失了

    this.$router.push({
                    name:'cmpt-a',
                    params:{
                        id:100
                    }
                })

query既能基于path跳转，也能基于name跳转
使用query传参，参数在地址栏上体现，且持久

  jumpToA(){
                // this.$router.push('/a') //直接跳转
                /* this.$router.push({
                    path:'/a',
                    query:{
                        id:100
                    }
                }) */

实际项目中，我们在大型参数（大对象，大数组）传递时，更多使用的是本地存储

路由嵌套
从写法上分析，路由嵌套，最重要的地方就是路由数据结构中的【children】属性

{
        path: '/hello-world',
        name: 'hello-world',
        component: () => import('@/components/HelloWorld'),
        children: [		//当前路由下书写children子路由数据结构
            {
                path: 'hello-1',
                component: () => import('@/components/Hello1')
            }
        ]
    }

从逻辑上分析，既然有二级路由，那就说明【当前路由对应的组件内还会继续进行路由规则匹配和路由组件渲染】，

基于上面的描述，代表，那个组件内有子路由，那么那个组件内一定要有一个`<router-view></router-view>`