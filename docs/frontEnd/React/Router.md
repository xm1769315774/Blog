---
title: router路由
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
  - 最大的路由容器，内部进行路由规则的排布,类似于vue的`<router-view></router-view>`,哪里需要切屏就在哪里引入这个容器
- Switch
  - 路由匹配分支容器，当Route匹配到对应规则的时候，Switch会阻止路由继续往后匹配。提升匹配性能，只要匹配成功一个Route，立即return(break),不会继续往后匹配，并渲染当前组件。
- Route
  - 路由规则组件，匹配路由规则，渲染对应的组件。path监听一个hash值，component加载对应的组件
  - Route默认是包含匹配(includes)，只要hash值包含了当前path字符串，就会被匹配到
  - Route提供了一个属性叫exact，增加这个属性以后，包含匹配变成精准匹配
  - 最后一个没有path的Route，会作为default路由来使用，类似于vue的，"/*"
- Redirect
  - 重定向
- exact
  - 严格模式，exact修饰的Route，url必须完全一致才能匹配成功
- Link
  - 跳转链接，在页面上会被渲染成a标签。4.0版本以后，必须套在HashRouter路由容器中使用，方便统一管理。
- NavLink
  - 对照当前url，符合要求的链接会加上active样式

# 渲染路由

渲染一级路由需要借助`HashEoute | BrowserRoute`，`Route`，`Switch`来实现：

```jsx
{/* HashRoute声明当前路由结构为HashRoute规则 */}
<HashRoute>
    {/* Switch声明当前路由规则匹配为分支单一匹配，一旦匹配成功则不会继续往下匹配 */}
	<Switch>
        {/*
        	Route组件为路由规则组件，当路由规则符合path的时候则渲染component组件
        	Route组件属性解释：
        		- path——当前路由规则
        		- component——当前需要渲染的组件
        */}
        {/*
        	exact属性规定地址栏中必须是【/】才可以匹配，要求规则匹配严格符合path规则
        */}
    	<Route path="/" component={App} exact></Route>
        {/* 当所有规则都不符合的时候则匹配404 */}
        <Route component={NotFound}/>
    </Switch>
</HashRoute>
```
路由嵌套

路由规则组件Route除了component属性来渲染目标组件以外，还可以使用render方法来渲染

```jsx
 <Route path="/FatherCmpt" render={()=>{
        return (<>
           <h1>这是自己定义的一个组件</h1>
                <Switch>
                    <Route path="/FatherCmpt/SonCmpt" render={()=>{
                        return (<>
                        <h2>这是二级组件</h2>
                        <Switch>

                          <Route  path="/FatherCmpt/SonCmpt/GrandSonCmpt" render={()=>{
                            return( <>
                              <h3>这是三级组件</h3>
                                <Switch>
                                   <Route path="/FatherCmpt/SonCmpt/GrandSonCmpt/GrandGrandSonCmpt" render={()=>{
                                     return(
                                      <>
                                     <h4>这是四级组件</h4>
                                     <Switch>
                                        <Route path="/FatherCmpt/SonCmpt/GrandSonCmpt/GrandGrandSonCmpt/GrandGrandGrandSonCmpt" render={()=>{
                                          return (
                                            <>
                                            <h5>这是五级组件</h5>
                                              
                                            </>
                                          )
                                        }}/>
                                     </Switch> 
                                      </>
                                     )
                                   }}/>
                                </Switch>
                            
                                  </>)
                          }}/>
                        </Switch>              
                        </>)

                    }}/>
                </Switch>
            </>)
      }}/>
```
# 路由跳转

实现路由跳转有两种方式：
  使用Link组件，这个组件会被编译成一个a标签
  使用this.props.history.push来实现跳转
    Route本质上是一个【高阶组件】它接受一个组件作为属性，然后返回一个组件
    被返回的组件会诸如一系列的props
    所以通过Route渲染的组件都会有一些和路由相关的props属性，这里面histor和location两个属性显得非常重要

**Link跳转**
```jsx
<Link to="/home">跳转到/home</Link>
```

**函数跳转**
```jsx
import React, { Component } from 'react'

export default class PropsCmpt extends Component {

    jumpToA(){
        this.props.history.push('/c') // 使用history实现跳转
    }

    render() {
        return (
            <div>
                <button onClick={this.jumpToA.bind(this)}>跳转到/a</button>
            </div>
        )
    }
}
```
# 路由传参

路由传参总共有两种类型三种方式：
- 通过地址栏传参
  - 刷新页面后参数存在
- 通过search传参
  - search传参其实就是地址栏传参的另一种写法
  - 刷新页面后参数存在
- 通过state传参
  - 当参数比较复杂的时候可以使用state传参
  - 刷新页面后参数消失

**地址栏传参**
```jsx
this.props.push('/c?id=100')
```

接受页通过`this.props.location.search`可以获得地址栏参数，不过需要自己手动分离参数key和value

**search传参**
```jsx
this.props.push({
    pathname:'/c',
    search:'id=100'
})
```
接受页通过`this.props.location.search`可以获得地址栏参数

**state传参**
```jsx
this.props.push({
    pathname:'/c',
    state:{
        id:100,
        name:'张三'
    }
})
```
接受页通过`this.props.location.state`获取参数
