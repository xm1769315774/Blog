---
title: JavaScript高阶(二)
date: 2021-06-24
categories: article
tags: js
---
# 构造函数

作用：批量构造 对象

特点：
    函数名必须 大驼峰

    没有 return

    函数中的属性 方法 挂载到this上

    对象都是通过 关键字 new 出来的

```javascript
//最简构造函数
function Cat(name,sex,likes){
    this.name = name;
    this.sex = sex;
    this.likes = likes;
    this.sleep = function(){
        console.log('睡觉....')
    }
}
//实例化对象 
let tomCat = new Cat('tom','公',['白色母猫', '抓Jerry']); 

//构造函数 这样写 会导致 方法过载（实例对象足够多的时候 栈内存存储非常多的方法fn）

```
# new 关键字作用

    创建一个空对象 {}
    this指向这个空对象
    空对象指向this的属性和方法
    将创建的对象返回 出 实例对象

# 原型与原型链

原型：用于所有实例共享属性和方法

原型相关的属性有哪些？
  new 构造函数 得到实例
  每一个构造函数 都有一个 显示原型（prototype），值是一个对象
  每一个实例对象 都有一个 隐式原型 （ __proto__），指向构造函数的prototype
  构造函数中的prototype 中的 constructor （构造器） 指向构造函数自己

原型链的形成？

    实例有 __proto__ 属性，指向它所对应的原型，它的原型又可以是其他构造函数创建的实例，它也有它所对应的原型。这种关系层层递进，组成的链式结构，就是原型链。

原型链的作用？

    找属性和方法时，先在对象自己身上找，找不到就沿着原型链往上级找，直到找到 Object.prototype。

# this指向
    一般函数的this —— 谁调用指向谁
    构造函数的this —— 构造函数 实例化的 对象
    全局下的this —— 全局指向 window
    定时器的this —— window
    对象方法中的this —— 谁调用指向谁
    ES6箭头函数的this —— 当前函数声明作用域
    事件方法中的this —— 事件源
    call/apply改变this —— 传入的对象
    bind绑定 —— 传入的对象

# call和apply，bind的区别与作用

call()
    借用的对象.借用的方法.call(借给谁,参数1,参数2...)

	改变this指向
		立即调用： fn.call(thisObj,argument1,argument2.....)
		参数离散（独立）传入

apply()
    借用的对象.借用的方法.apply(借给谁,[参数1,参数2...])
	改变this指向
		立即调用：fn.apply(thisObj,[argumen1,argument2....])
		参数以数组传入

bind()   
    借用的对象.借用的方法.bind(借给谁,参数1,参数2...)
    将借用的函数赋值出来，可以反复调用

# 深拷贝和浅拷贝

浅拷贝
	只拷贝一层，遇到引用类型属性，拷贝地址
	for in
		程度比赋值更深一点，但引用类型的属性不适用

    数组的浅拷贝： concat 方法用于连接两个或多个数组
                  [...]   展开运算符
    对象的浅拷贝：Object.assgin() 合并多个对象 到一个目标对象中

深拷贝
    无限层级拷贝，拷贝的都是值，新旧对象互不影响

	JSON.stringify + JSON.parse
	JSON 方法这种方式虽然是深拷贝，但是没有办法拷贝方法。

	工作中最常用，lodash 这个库（工具库，处理不同的数据类型，提供了很多方法），深拷贝：_.cloneDeep()

	递归 在自己函数体的内部 调用 自己


    