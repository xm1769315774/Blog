---
title: React基础API
date: 2021-06-24
categories: article
tags: React
---
# state状态

react组件中，state状态好比vue中的data数据，react组件可以使用state来渲染视图；并且，更改state后会导致视图重新渲染

注意：react是单项数据流，数据流转只能从数据到视图一个方向，所以只能通过修改state来达到更新视图的目的

定义state渲染页面：
```jsx
import React,{Component} from "react";

export default class App extends Component {
    state = {
        str: "hello world"
    }
}
    render(){
        return(
            <>
                <h1>{ this.state.str }</h1>
            </>
        )
    }
```
修改state实现视图的更新：

```jsx
    import React, { Component } from 'react'

export default class Account extends Component {
    state={
        str:"hello world"
    }
    changeStr(){
        this.setState({
            str:"你好世界"
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.str}</h1>
                <button onClick={this.changeStr.bind(this)}>点击修改str的值</button>
            </>
        )
    }
}

```
注意：onClick可以理解为一个中间变量，点击事件发生后相当于调用了onClick(),而onClick是由右边直接赋值的，所以相当于直接调用了这个函数，而不是通过实例对象去调用的，由于changeStr是class类的方法，class类中的方法默认开启了局部的严格模式"use strict"，所以此时的this就是undefined，就会导致this丢失，所以需要使用bind去借用this(改变this指向)，bind会返回一个新的函数

# props属性

react的Component类默认含有state和props构造属性，所有继承自Component的组件都可以直接使用state和props，所以直接使用this.props.xxx既可拿到自定义属性

使用 `PropTypes`进行类型检查，详细可见react官网 文档 高级指引

子组件
```jsx
import React, { Component } from 'react'
//引入PropTypes 进行类型检查
import PropTypes from 'prop-types';

export default class PropsCmpt extends Component {
    // 静态属性限制props属性
     static propTypes = {
        title:PropTypes.string
    }
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}
```
父组件
```jsx
import React, { Component } from 'react'
import PropsCmpt from './components/PropsCmpt'

export default class App extends Component {
    state = {
        title: 'hello world'
    }
    render() {
        const { title } = this.state
        return (
            <PropsCmpt title={title} />
        )
    }
}
```
state和props的特点
state：
    内部数据
    可以修改
    state是唯一可以驱动视图发生改变的数据(无论是当前组件还是子组件)

props：
    外部数据
    当前组件不可改变

# 生命周期

react也具备生命周期，生命周期的作用主要是为了让我们能在组件从初始化到渲染再到更新的每一个阶段都能准确决定应该做的事情。

react**最常用**的生命周期方法有：

componentDidMount()--组件挂载完成
    这个生命周期表示组件已经渲染完成，dom节点已经生成完毕
    在这个生命周期中我们可以操作dom节点
    在这个生命周期中可以发送ajax请求

```jsx
import React, { Component } from 'react'

export default class LiftimeCmpt extends Component {
    componentDidMount() {
        console.log('组件已经挂载完成')
        console.log(document.querySelector('#wrap'))
    }
    render() {
        return (
            <div id="wrap">
                componentDidMount——组件已经挂载（渲染）
            </div>
        )
    }
}
```
componentDidUpdate（prevProps,prevState,snapshot）--组件更新完成

    参数说明：
        prevProps——更新前的props
        prevState——更新前的state
        snapshot——componentWillReceiveProps生命周期返回的快照
这个生命周期中，我们可以操作更新后的dom、对比前后props和state的变化、发送ajax等

```jsx
import React, { Component } from 'react'

export default class LiftimeCmpt extends Component {
    state = {
        str: 'componentDidMount——组件已经挂载（渲染）'
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
    }

    changeStr() {
        this.setState({
            str: 'componentDidUpdate——组件已经更新完成'
        })
    }

    render() {
        return (
            <div id="wrap">
                <p>{this.state.str}</p>
                <button onClick={this.changeStr.bind(this)}>更改文字</button>
            </div>
        )
    }
}
```
componentWillUnmount——即将卸载

    我们可以在这个生命周期中取消事件监听、定时器、ajax等等
    react和vue卸载组件，其本质就是卸载视图渲染

当前组件：
```jsx
import React, { Component } from 'react'

export default class LiftimeCmpt extends Component {

    componentWillUnmount() {
        console.log('组件即将卸载')
    }

    render() {
        return (
            <div id="wrap">
                <p>componentWillUnmount——组件即将卸载</p>
            </div>
        )
    }
}
```
父组件：
```jsx
import React, { Component } from 'react'
import LifeTimeCmpt from './components/LifeTimeCmpt'

export default class App extends Component {
    state = {
        title: 'hello world',
        showFlag: true
    }
    unMountCmpt() {
        this.setState({
            showFlag: false
        })
    }
    render() {
        return (
            <>
                {
                    this.state.showFlag ? <LifeTimeCmpt /> : ""
                }
                <button onClick={this.unMountCmpt.bind(this)}>卸载LifeTimeCmpt</button>
            </>
        )
    }
}
```