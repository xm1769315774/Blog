---
title: React基础API事件
date: 2021-06-24
categories: article
tags: React
---
# 事件

react中事件绑定的方式主要语法为：`on+事件名（首字母大写）`, 在react中处理事件需要小心一些

常规事件绑定
(容易出现this指向不明)

```jsx
import React, { Component } from 'react'

export default class EventCmpt extends Component {
    doSth(){
        console.log('触发了事件')
    }
    render() {
        return (
            <>
                <button onClick={this.doSth}>点击触发事件</button>
            </>
        )
    }
}
```
事件指向

假设一个需求：

- 点击按钮触发事件
- 事件函数内修改state数据，驱动视图更新

```jsx
import React, { Component } from 'react'

export default class EventCmpt extends Component {
    state = {
        text : '默认文本'
    }
    doSth() {  //形参中传入事件对象
        this.setState({
            text: '新的文本'
        })
    }
    render() {
        return (
            <>
                <p>{this.state.text}</p>
            	{/* 重点注意此处事件函数的绑定方式 */}
                <button onClick={(e) => { this.doSth(e) }}>点击触发事件</button>
            	<button onClick={this.doSth.bind(this)}>点击触发事件</button>
            </>
        )
    }
}
```
es6的class类有一个特点：当调用class的原型方法或静态方法时没有指定this的值，那么方法内的this会被置为undefined，就算没有设置 ' use strict '，因为class内部代码都是在严格模式下执行的

所以我们一般会通过两种方式解决this丢失的问题：

```jsx
    //通过bind借用this，改变this的指向 
	<button onClick={this.doSth.bind(this)}>点击触发事件</button>
    // 通过箭头函数this指向声明当前函数的作用域实现this的改变指向
    <button onClick={(e) => { this.doSth(e) }}>点击触发事件</button>
```
事件对象的传递

在某些情况下我们的事件句柄(事件函数)方法需要传递参数和事件对象

在任何情况下，事件对象e都是作为第二参数传入的，但根据事件句柄的this绑定方法，有两种参数传递情况：

使用箭头函数绑定this的时候：需要显式传入e参数
```jsx
render(){
    return (
    	<button onClick={(e) => { this.doSth(e) }}>点击触发事件</button>
    )
}
```

使用bind的时候：无需显式传入e参数
```jsx
import React, { Component } from 'react'

export default class EventCmpt extends Component {
    state = {
        text: '默认文本'
    }
    doSth(newTxt, e) {  //形参中传入事件对象
        this.setState({
            text: newTxt
        })
        console.log(e)
        console.log(newTxt)
    }
    render() {
        return (
            <>
                <p>{this.state.text}</p>
                <button onClick={this.doSth.bind(this, 100)}>点击触发事件</button>
            </>
        )
    }
}
```