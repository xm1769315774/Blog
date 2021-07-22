---
title: JavaScript高阶(四)
date: 2021-06-24
categories: article
tags: js
---
# 变量的解构赋值-ES6语法糖

数组的解构赋值
```javascript
 //数组解构赋值：按照元素的位置（索引）一一对应
    let [a, b] = [100, 200];
    console.log(a);
    console.log(b);


    let [, c] = [1000, 2000];
    console.log(c);

    //如果参数超出 数组元素个数，可以赋值默认值
    let [m, n, x = 0, y = 0] = [1000, 2000];
    console.log(m, n, x, y);

```

```javascript
 //数组解构赋值：按照元素的位置（索引）一一对应
    let [a, b] = [100, 200];
    console.log(a);
    console.log(b);


    let [, c] = [1000, 2000];
    console.log(c);

    //如果参数超出 数组元素个数，可以赋值默认值
    let [m, n, x = 0, y = 0] = [1000, 2000];
    console.log(m, n, x, y);

```
对象解构赋值

```javascript
 let user = {name:'张三',age:20,sex:'男'};
  // 根据对象中的属性名 进行匹配
  //ES6参数默认值
  let {age,name,sex,x='12312'} = user;
    console.log(name);
    console.log(age);
    console.log(x);
```
函数解构赋值
```javascript
// 求和
    // function sum([a, b, c, d = 0]) {
    //     return a + b + c + d;
    // }


    // console.log(sum([100, 200, 300]));



    function fn({
        name,
        age,
        sex,
        x = 'xx'  //ES6默认值设置
    }) {
        console.log(name);
        console.log(age);
        console.log(x);
    }


    let user = {
        name: '张麻子',
        age: 20,
        sex: '男'
    }
    console.log(fn(user));
```
# 展开运算法 ...

字符串展开 字符
```javascript
let str = 'xxxxasdasdasdsad';
console.log(...str)
```

数组展开 元素
```javascript
let arr =[1,23,545,64];
console.log(...arr);
```

```javascript
// 合并多数组
    let arr2 = [1, 2, 154, 54, 54, 5];
    let arr3 = [1111, 54, 54, 5, 45, 45, 45];

    let arr4 = [...arr2, ...arr3];
    console.log(arr4);
```

```javascript
 // 将类数组 转换为 真数组
    function sum() {
        // console.log(...arguments);
        console.log(Array.isArray([...arguments]));

        let arr = [...arguments];
        arr.forEach(item => {
            console.log(item);
        })
    }
    sum(1, 2, 3, 564, 45, 456);
```

```javascript
// arr =[1,2,3,4,5,6,4,854,878,748,48,4]
    // [4,5,6,4,854,878,748,48,4]
    //去掉前几个元素
    let arr5 = [1, 2, 3, 4, 5, 6, 4, 854, 878, 748, 48, 4];
    let [, , , ...arr6] = [...arr5];
    console.log(arr6);
```
对象展开
```javascript
 //对象展开
    let user = {
        name: '张麻子',
        age: 40
    }
    let userInfo = {
            sex: '男',
            likes = ['打架', '做官']
        }
        // name: '张麻子'     age: 40
        //单对象的合并---浅拷贝
    let user1 = {...user};
    user1.name = '黄四郎'
    console.log(user1);
    console.log(user);
```

```javascript
    //多对象合并---浅拷贝
    // let user2 = Object.assgin({},user,userInfo);
    let user2 = {...user,...userInfo};
    console.log(user2);

```