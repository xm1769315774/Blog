---
title: JavaScript高阶(六)
date: 2021-06-24
categories: article
tags: js
---
# 同步与异步

代码执行顺序和实际输出顺序居然可以不同：
    同步：代码从上往下依次执行，前面的没有执行完，后面的不会执行。（阻塞式的）
    异步：代码从上往下执行，遇到异步的代码，先在一边等待，等所有同步代码执行完再（合适的时机）执行

常见异步场景：
    定时器
    事件处理函数
    AJAX 请求
    回调函数：有人的地方就有江湖，有异步的地方就有回调。

回调函数：现在不调，回头再调。回头就是满足条件的时候再调。

# Promise

Promise 是什么？
管理异步操作。用同步的方式来编写异步逻辑。

基本语法：熟练：new Promise((resolve, reject) => {})

resolve: 改状态，进行中->已成功
reject：改状态，进行中->已失败
都可以传数据

几种状态：3种：pending、fulfilled、rejected

切换特点：
    不可逆：只能从进行中到已成功，或者从进行中到已失败
    状态只受异步操作结果的影响（resolve、reject后改状态）

额外去说：维护了一个队列，.then、.catch 的回调往队列里 push，状态改变时，依次调用

.then()：成功的回调
.catch()：失败的回调
.finally()：最终执行
Promise.all()：多个 promise 实例，如果都是 fulfilled，那么得到的 promise 实例就是 fulfilled，有1个失败，就失败
Promise.race()：多个实例，有一个状态改变了，得到的 promise 实例状态随之改变。

应用场景
	解决回调地狱
	配合async和await实现异步代码同步化

promise的核心原理其实就是发布订阅模式，通过两个队列来缓存成功的回调（onResolve）和失败的回调（onReject）。

# 设计模式：发布订阅(观察者模式)

发布订阅是一种思想，在未来某一时刻，需要去做很多事情，在那一刻来临之前，把所有需要做的事情一项一项的列举出来变成清单，等到达到那一刻的时候直接按照清单一项一项执行

DOM0级事件和DOM2级

语法区别：
```javascript
    DOM0   box.onclick=function(){}
    DOM2   box.addEventListener("click",function(){})
```
底层运行机制区别
    DOM0 就是给元素的某个属性绑定方法，有效绑定的方法只能有一个
    DOM2 是基于事件池机制完成，每增加一个绑定的方法，就往事件池存放一个...当事情触发会安装存放的先后顺序依次执行事件池中的事情
    DOM2 中可以给一些特殊的事件类型绑定方法，DOM0 不支持绑定
发布订阅就是模拟的事件池机制

DOM2事件池机制
    基于addEventListener/attachEvent(ie6-8绑定事件)向事件池中追加方法
    注销事件: removeEventListener/detachEvent 
    新版本浏览器会根据元素和事件类型对新增的方法做重复校验，但是ie6~8不可以 
    当事件行为触发，会把事件池中的方法按照增加的顺序依次执行，但是ie6~8中的执行顺序是乱序的

# Axios

定位：基于 Promise 的 HTTP 请求库。它的 API 调用后都返回 promise 实例。

```javascript
// axios 封装了 2 个东西：
// 1. 发 AJAx 请求（XHR）
// 2. 封装了 Promise，API 都会返回 promise 实例
axios.get('./data1.json')
    .then(res1 => axios.get('./data2.json', { params: { id: res1.data.id }}))
    .then(res2 => axios.get('./data3.json', { params: { code: res2.data.code } }))
    .then(res3 => {
        console.log(res3.data.str)
    })
```
# Async/Await

Async：异步，Await：等待。
async 关键字，后面紧跟一个函数，表示这个函数中有异步操作：
```javascript
// async 放在函数前，表示这个函数中有异步操作
// 函数声明式
async function fn() {

}

// 函数表达式
const fn2 = async () => {

}
```
async 与 await 必须成对出现：
await 等待异步操作的结果，往往就是等 promise 实例状态的改变，而且还能拿到状态改变后传递的数据，await 表达式的结果

async 与 await 配合发请求

```javascript
async function fetchData() {
    const res1 = await axios.get('./data1.json')
    const res2 = await axios.get('./data2.json', { params: { id: res1.data.id } })
    const res3 = await axios.get('./data3.json', { params: { code: res2.data.code } })
    console.log(res3.data.str)
}
fetchData()
```
优势：
    不需要回调
    不需要连缀语法
    异步结果当做变量去用
    编码顺序 = 执行顺序（代码可预测）