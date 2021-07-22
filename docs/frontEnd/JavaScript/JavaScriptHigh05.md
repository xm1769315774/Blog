---
title: JavaScript高阶(五)
date: 2021-06-24
categories: article
tags: js
---
# 模板字符串

作用：字符拼接

常用：拼接页面的html节点代码

```javascript
 let user = {
        name: '张麻子',
        age: 40,
        sex: '男'
    }

    let str = '我是' + user.name + '，我的性别：' + user.sex + ',我的年龄：' + user.age;
    let str = `我是：${user.name},我的性别：${user.sex},我的年龄:${user.age}`
    console.log(str);
```

# ES6 class类

```javascript
// 动物类 ES5写法
    function Animal(leg, mouse, head) {
        this.leg = leg;
        this.mouse = mouse;
        this.head = head;
    }
    Animal.prototype.eat = function() {
        console.log('吃东西....');
    }
```

```javascript
//动物类 ES6写法
class Animal{
    //构造器
   constructor(leg, mouse, head){
       	this.leg = leg;
        this.mouse = mouse;
        this.head = head;
   }
    //方法
    eat(){
         console.log('吃东西....');
    }
}
```
ES6 新增 类的属性
作用：相当于 实例化对象中的常量

ES6 新增 类的 静态方法
static

```javascript
class Animal {
        //类的属性--实例常量
        life = '一条命';

        // 构造器
        constructor(leg, mouse, head) {
                this.leg = leg;
                this.mouse = mouse;
                this.head = head;
            }
        //实例公共方法
        eat() {
                console.log('吃东西....');
            }
        //类的静态方法---类的私有
        static sleep() {
            console.log('睡觉....');
        }
    }
```
ES6 类的继承
作用：直接 继承 父类的所有属性 以及 父类的方法

```javascript
//子类的写法

class 子类名  extends 父类名{
    	
    constructor(参数1,参数2){
        super(参数1,参数2)
    }
}
```
# 模块化

高内聚：每个模块尽可能 做专一的事情
低耦合：尽可能模块之前不产生干扰（两个模块有一个已经挂了，另一个模块照常运行）

ES6模块导入导出

语法一：
```javascript
//单个导出
export let a = 'xxxxx';
export let b='xxczxcxc';
export let obj={name:'张麻子'};
```

```javascript
//引入
import {a,b,obj} from '文件的路径';
console.log(a);
```

语法二：
```javascript
//以对象的形式导出
let obj = {name:'黄四郎',age:40};
let num =1100
//导出
export default{
   	num,
    obj
}
```

```javascript
import data from '文件路径'
console.log(data.num)
console.log(data.obj)
//对象解构
let {obj,num} = data;
```
注意：语法一与语法二 不能够混用，必须严格按照规则使用

