---
title: React
date: 2021-06-24
categories: article
tags: React
---
# 为什么要学习react？

原生js操作DOM繁琐、效率低(DOM-API操作UI)
使用js直接操作DOM，浏览器会进行大量的重绘和重排
原生js没有组件化编码方案，代码复用率低

什么是组件和模块？

模块：
	可以理解为一个一个的js文件
	就像是独立的功能和项目（如淘宝：注册、登录、购物、直播...），可以调用组件来组成模块，多个模块可以组合成业务框架。

组件：
	把重复的代码提取出来合并成为一个个组件，组件最重要的就是重用（复用），位于框架最底层，其他功能都依赖于组件，可供不同功能使用，独立性强。组件就是包含了代码和资源的集合(html/css/js/imgs/video等等)

	多个组件可以组合成组件库，方便调用和复用，组件间也可以嵌套，小组件组合成大组件。

为什么要使用组件化和模块化？

	开发和调试效率高：随着功能越来越多，代码结构会越发复杂，要修改某一个小功能，可能要重新翻阅整个项目的代码，把所有相同的地方都修改一遍，重复劳动浪费时间和人力，效率低；使用组件化，每个相同的功能结构都调用同一个组件，只需要修改这个组件，即可全局修改。
	
	可维护性强：便于后期代码查找和维护。
	
	避免阻断：模块化是可以独立运行的，如果一个模块产生了bug，不会影响其他模块的调用。
	
	版本管理更容易：如果由多人协作开发，可以避免代码覆盖和冲突。
	
	组件化和模块化一般情况是一起出现的，他们就像好兄弟，虽然可以分离但最好一起有个照应。

# React的特点

采用组件化模式、声明式编码，提高开发效率和组件复用率
在React Native中可以使用React语法进行移动端开发
使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互

声明式编码和命令式编码？
	命令式编码：就是按照命令一步一步执行达到一个生硬的效果，发什么指令就执行什么，僵硬死板
	声明式编码：描述一个行为，代码就知道你的意思了，然后自己主动去实现你想要的结果，心有灵犀
# 学习React需要掌握的基础知识

	this指向
	class类
	ES6语法规范
	npm包管理器
	原型、原型链
	数组的常用方法
	模块化

babel的作用

	ES6==>ES5
	
	JSX==>JS

React三大js库

	核心库
	dom拓展库	用于帮助React操作DOM
	babel		用于将JSX转为JS

# JSX是什么?

	全称：javascript XML
	react定义的一种XML的js扩展语法JS + XML

语法规则：

	1. html片段在整个jsx文件内任何位置都有效，可参与结构，可作为变量
		数组组成的html片段会自动渲染成列表（必须加key）
	2. 可以使用mustache语法渲染数据
	3. 只能拥有一个根标签，不能有多个
	4. 提供了<></>虚拟容器，如vue的<template></template>
	5. 样式的指定使用className不能使用class，为了跟ES6的class类区分
	6. 内联样式要使用style={ {key:value} }的形式来进行书写，复合属性需要小驼峰格式如fontSize
	7. 标签必须闭合
	8. jsx内属性可以使用拓展运算符展开
	9. 标签首字母：
	  若是小写字母开头，则将该标签转化为HTML中同名元素；若HTML中无该标签对应的同名元素则报错
	  若是大写字母开头，React就去渲染对应的组件，若组件未定义，则报错

# 创建新的 React 应用

电脑环境需要安装Node 版本大于 8.10 和 npm 版本大于 5.6

```cmd
npx creat-react-app 项目名称
	或
npm creat react-app 项目名称
```

# React和Vue的区别

react和vue一样都是UI框架，专注于负责前端UI界面渲染。

react是单向数据流，vue是双向数据流

+ react基于MVC模式

+ react本身会监听数据变化从而渲染视图，但不会监听视图改变来修改数据

# 组件书写方式

以往使用最多的是class类式组件，class类式功能完善；函数式出来之后，就是混写，同一个项目中有函数也有class，这是因为函数式组件功能不够完善
就目前而言，新项目使用函数式稍微多一点，代码量优化，没有this的指向的烦恼，对于直接上手react来说学习的门槛降低了


类式组件
class组件：具备所有组件能力 状态state props 视图 生命周期等等
```jsx
import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <>
                hello world
            </>
        )
    }
}

```

函数式组件
function组件：只具备构建视图 + props(缺状态，缺生命周期)
```jsx
// 只需要定义一个function 然后取个组件的名字，把组件的视图给return出去就可以了
	export default function Layou(){
		return  <div>
					我是函数式组件
				</div>
	}
```
## stateHook
useState就是状态hook
引入useState，让函数拥有了state状态和改变状态的能力，作用等效于state+setState

```jsx
// 引入useState
import React,{useState} from 'react'

export default function NumStep() {
    // 定义一个状态，写法类似于数组的解构，第一个参数为变量名(state)，第二个参数为修改变量的方法，类似于this.setState,右边是定义的变量的默认值
    let [num,setNum]=useState(0);

    // 点击让这个数+1
    let add=()=>{
        setNum(num + 1)
    }
    return (
        <>
            <button>-</button>
            <label>{num}</label>
            <button onClick={add}>+</button>
        </>
    )
}

```
## EffectHook
经典的useEffect
引入useEffect，让函数式组件有了最常用的三个生命周期(componentDidMount组件挂载、componentDidUpdate更新、componentDidWillUnmount即将卸载)

```jsx
import React,{useState,useEffect} from 'react'

export default function DidUpdateCmpt() {
    let [name,setName]=useState("张三");

    let changeName=()=>{
        setName("张三疯")
    }
    // 生命周期，DidUpdate
    useEffect(()=>{
        console.log("组件初始化加载完成/name的值更新了");
        let timeId =setInterval(()=>{console.log("定时器");},1000)
        return ()=>{
            console.log("组件即将被卸载...在此处进行定时器的移除");
            clearInterval(timeId)
        }
    },[name])
    return (
        <>
            <h1>{name}</h1>
            <button onClick={changeName}>点击改变name</button>
        </>
    )
}
```