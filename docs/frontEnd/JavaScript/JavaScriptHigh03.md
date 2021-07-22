---
title: JavaScript高阶(三)
date: 2021-06-24
categories: article
tags: js
---
# 数据类型判断

typeof

```javascript
   let num = 123;
    let str = 'xxxx';
    let bool = true;
    let udf = undefined;
    let nu = null;

    let obj = {
        name: '张麻子',
        age: 20
    };
    let arr = [1, 345, 45, 4];
    let fn = function() {
        console.log('xxxx');
    }
   //typeof
    // 不能区分：null  object  array 
    console.log(typeof num);
    console.log(typeof str);
    console.log(typeof bool);
    console.log(typeof udf);
    console.log(typeof nu); //object
    console.log(typeof obj); //object
    console.log(typeof arr); //object
    console.log(typeof fn); //function
```

instanceof

```javascript

// 作用：只能用来区分 引用数据类型和 基本数据类型
    // 只能 检测 变量是否是 引用数据类型 
    console.log(obj instanceof Object);
    console.log(arr instanceof Object);
    console.log(fn instanceof Object);
    console.log(nu instanceof Object);
```

Array.isArray()

```javascript
 //数组检测专用方法 
    // Array.isArray()
    console.log(Array.isArray(obj));
    console.log(Array.isArray(arr));
```

Object.prototype.toString()

```javascript
// 借用this 
	 let toString = Object.prototype.toString
    // 借出的对象.借出的方法.call(借给谁,...)
    console.log(toString.call(num)); //[object Number]
    console.log(toString.call(str)); // [object String]
    console.log(toString.call(bool)); // [object Boolean]
    console.log(toString.call(udf)); // [object Undefined]
    console.log(toString.call(nu)); //[object Null]
    console.log(toString.call(obj)); // [object Object]
    console.log(toString.call(arr)); // [object Array]
    console.log(toString.call(fn)); // [object Function]


    //判断arr 是否是对象
    if (toString.call(arr) === '[object Object]') {
        console.log('是一个对象');
    } else {
        console.log('不是一个对象');
    }
```

```javascript
//封装函数检测数据类型

let isType=data=>Object.prototype.toString.call(data).slice(8,-1);

```

# ES5 类的继承

子类要继承父类的 属性
    父类.call(this,参数1,参数2...)

子类继承 父类的方法
    方法一
    子类.prototype.__proto__ = 父类.prototype

    方法二
    子类.prototype = Object.create(父类.prototype)
    子类.prototype.constructor = 子类

```javascript
 // 狗类
    function Dog(name, color, gender) {
        this.name = name;
        this.color = color;
        this.gender = gender;
    }
    Dog.prototype.cry = function () {
      
        return "汪汪汪";
    }

    //贵妇狗
    function Poodles(name, color, gender, rank) {
        // 1,继承父级的属性
        Dog.apply(this,[name,color,gender]);
        // 2，自己新增的属性
        this.rank=rank;
    }

    // 3,继续父级的方法
    // 写法一
    //Poodles.prototype.__proto__=Dog.prototype;//子集的隐式指向他父亲的显示原形
    // 写法二
    // Poodles.prototype=Object.create(Dog.prototype);
    // 写法三
    // Poodles.prototype._proto_=Object.create(Dog.prototype);

    //4,将自己的构造函数constructor指向自己
    Poodles.prototype.constructor=Poodles;

    // 5，给自己新增一个方法
    Poodles.prototype.cute=function(){
        return "卖萌";
    }


    let xiaohei=new Poodles("小黑","黑色","公","贵妇狗");
    console.log(xiaohei);
    console.log(xiaohei.cry());
    console.log(xiaohei.cute());

```