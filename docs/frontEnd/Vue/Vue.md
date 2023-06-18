---
title: Vue01
date: 2021-06-24
categories: article
tags: Vue
---
# 事件
在vue中的事件处理监听方式和传统事件监听有一定区别，高度封装的vue将事件的监听方式也进行了一个封装

在使用事件的时候，同时需要知道一个组件的方法只能定义在【methods】属性内

事件监听语法有两种：
    v-on监听
         `<button v-on:click="doAlert">点击按钮，弹窗</button>`
    @监听
         `<button @click="doAlert">点击按钮，弹窗</button>`
事件监听的同时也可以传参：
         `<button @click="doAlert('点击了')">点击按钮，弹窗</button>`
关于事件对象：
    所有事件都默认有一个$event事件对象，可以获得当前事件上下文信息
    template中vue的模板语法为我们提供了一个默认的$event事件对象，在监听事件的时候可以显式传入进去

`<button @click="doAlert($event,119)">点击按钮，弹窗</button>`

```javascript
    // instance(实例)中就可以获得$event事件对象了
    methods:{
        doAlert(event, arg) {
            console.log(`这是参数${arg}`, event); 
        },
    }

```
    当事件方法没有任何参数参与的时候，定义的语句中就可以直接获取到事件对象，否则，必须显式传递$event

    ```javascript
    //模板中使用test不传递任何参数
    test(event) {
        console.log(arg,event);
    }
    ```

  	<!-- 此处有别的参数参与，所以必须显式传递$event -->
  	<button @click="test(119, $event)">测试事件对象</button>
  
         methods:{
             test(arg,event) {
                console.log(arg, event);
              }
         }
   
  
# 计算属性
计算属性顾名思义就是对属性的值进行计算，从而得到一个新的值。

计算属性设计的目的就是基于原本的数据来通过计算衍生出新的数据，而又不影响原本的数据

computed:{
	新数据名(){
		...进行计算
		return 新数据
	}
}

使用的时候，直接使用【新数据名】即可

计算属性的特点：
    必须定义在computed内
    必须以函数形态呈现
    必须有返回值
计算属性最大的作用：
    通过原本的数据衍生新的数据
    在数据衍生过程中，可以通过观察数据变化从而进行别的行为操作
计算属性的优势：
    计算属性有缓存性质，如果源数据不变，则不论使用多少次衍生数据，都只会调用一次方法
    一旦源数据发生改变，则计算属性从新计算

# v-bind
v-bind主要作用是：绑定属性

在vue中，自定义的组件可以通过属性与外界进行通信，那么我们如何为一个组件（或者原生html节点）添加属性呢？

template里面的东西，基本都可以使用v-bind来添加属性

添加常规属性

<!--
	基本语法：
		v-bind:属性名=“属性值（或变量）”
-->
<p v-bind:selfStr="str">hello world</p>
添加样式类名属性
<!--
	基本语法：
		v-bind:class="{类名：flag，类名：flag}"
	语法解析：
		通过flag来绝对多个class类名的灵活组合
-->
<p v-bind:class="{red:flag,blue:!flag}">hello world</p>
添加style行内样式
<!--
	基本语法：
		v-bind:style="{ dom样式属性名：样式值，。。。 }"
	语法解析：
		dom样式属性名需要使用小驼峰方式，且属性值为字符串的时候需要添加引号
-->
<p v-bind:style="{ color: 'red', fontWeight: 'bold' }">元宵节快乐</p>

v-bind还有一个最佳简写方案:【:属性名】
过滤器filter（新版本已经移除）
computed：
    缓存机制
    源数据生成新数据
    源数据发生改变新数据也改变
filter
    没有缓存机制，过滤几次调用几次
    源数据生成新数据
    源数据发生改变新数据也改变

    <ul>
        <li v-for="(item, index) in stus" :key="index">{{ item | newStu }}</li>
    </ul>

  data() {
    return {
      stus: ["杨洋", "赵任杰", "董家豪", "霍佳俊", "刘佳", "陶天骄"],
    };
  },
  filters: {
    newStu(stu) {
      return "0928-" + stu;
    },
  }