---
title: Vue03
date: 2021-06-24
categories: article
tags: Vue
---
# 组件详解

vue组件的一些基本特性：

    视图模板——template
    自身逻辑——script
    接受属性——props
    通信特征
    自定义事件
    v-model语法糖应用
# 组件视图模板

视图模板主要指的是<template></template>

# 组件自身逻辑

组件自身逻辑主要指的是<script></script>,而一个组件逻辑内部常用的一些设定都有：

## data——定义组件自身内部数据

    必须，data必须是函数
    必须，data必须返回一个对象，对象内就是定义的组件自身的数据
## props——定义组件的属性

    对象形式，数组形式
    
    // 属性名：属性类型
    props:{
        num:Number,
        words:String
    }

    // props:['cmptData','cmptName','cmptBool'],   //数组形式定义属性，不需要指定类型   非常不推荐！
    
    对象形式的完整写法：
    
    props:{
            // 最最严谨的写法
            cmptCompleteProp:{
                type:String,
                default:'默认属性值',
                validator(v){        //属性值校验
                    return v!=='草'  //自定义校验函数内，请务必返回一个布尔值
                }
            },
    }
## methods——定义组件自身的方法

## watch——监听组件内部数据的变化

## computed——计算属性，根据当前数据衍生出新的数据

## 生命周期钩子——在每一个生命周期阶段，自动执行

filter——过滤器（新版本已经废除）

## components——注册子组件

# 组件通信特征
所有UI框架的组件都具备通信特征，具体通信类型有三种：
    父传子
        属性通信props
    子传父
        $emit,$on
    兄弟传兄弟（无视层级通信）
        第三方BUS集成$emit,$on
## 父传子

    父传子直接基于属性通信即可，很基础

## 子传父

    子传父是基于Vue自定义事件系统实现的，我们需要先认识vue的自定义事件系统

    Vue构造函数原型方法中有一个$on和$emit，它俩的作用：
    $emit
        触发事件
        传递数据
        `this.$emit('事件名','要传递的数据')`
    $on
        监听事件
        接受数据
        
                this.$on('事件名',data=>{
            ...
        })
        
关于$on和$emit的配合，我们需要知道的是：

Vue是整个应用最大的上下文
$on监听的事件和执行函数，都挂载到了Vue身上
$emit触发事件，就是去Vue身上找到对应事件，从而调用事件方法
而每一个组件其实都继承自Vue，所以，基于$on和$emit我们可以随意进行数据传递（最好使用BUS，详见后文）
回到子传父，其基本思路就是：

    子组件内部通过this.$emit触发事件
    父组件通过@或者v-on在子组件标签身上监听事件

## 兄弟传兄弟（无视层级通信）

其实本质上就是上面$on和$emit的一个函数式写法。

在无视层级的书写过程中，我们往往需要一个第三方独立空间来管理监听的事件，此时非常推荐使用一个全新独立的Vue实例。

实现思路：

    创建一个BUS文件
    内部暴露一个Vue的实例
    在需要发送数据的组件内，合适的位置，使用BUS.$emit来触发自定义事件
    在需要接受数据的组件内，mounted生命周期，使用BUS.$on来监听事件

## 组件实例通信

在vue中有一个叫ref的api，他让我可以获取一个组件的实例，一旦获取到组件实例后，当前组件相关数据和方法我们都可以无障碍使用了

//标记一个ref
<组件 ref="标记名"></组件>

//获取标记的ref：
this.$refs[标记名]

注意：通过ref，可以获取子组件身上大部分信息，是通信环节中比较重要的一环。但是，仅限于父组件获取子组件信息的场景

## 插槽 
插槽，能帮助我们让组件具有容器特性。一个设置了插槽的组件就可以包含别的内容（组件）了

插槽分为三种：

    匿名插槽
    具名插槽
    作用域插槽（重难点）

匿名插槽

在组件内直接定义`<slot></slot>`，就可以接受外界被包含的内容了

//定义
<template>
  <div class="wrap">
    <p>这是一个带有插槽的组件</p>
    <slot></slot>
  </div>
</template>


//使用
<SlotCmpt>
    <h1>这是包含的内容</h1>
</SlotCmpt>

具名插槽

顾名思义，就是为每一个插槽取一个名字，然后放置内容的时候都需要声明是那个插槽的内容

//定义
<template>
  <div class="wrap">
    <p>这是一个具名插槽</p>
    <slot name="header"></slot>
    <slot name="footer"></slot>
  </div>
</template>

//使用
<NamedSlot>
    <template v-slot:header>
    	<h1>这是头部</h1>    	
    </template>
    
    <template v-slot:footer>
    	<h1>这是底部</h1>
    </template>
</NamedSlot>


作用域插槽
作用域插槽是插槽中和具名插槽使用频率不相上下的一个板块

作用域插槽在组件通信中使用频率非常高！如果你希望做一个非常智能的组件，作用域插槽一定可以帮到你！


//定义
<template>
  <div>
    <p>这是一个作用域插槽</p>
    <!-- 
        外界接收到的作用域对象长这样：
            {name1,name2,name3}
     -->
    <slot :person1="name1" :person2="name2" :person3="name3"></slot>
  </div>
</template>


//使用
<div>
    <ScopeSlot>
        <!-- 
        1.此处的persons是自己定义的名字
        2.persons代表了子组件内整个作用域插槽
        -->
        <template v-slot="persons">
			{{ persons }}
        </template>
    </ScopeSlot>
    <!-- 还可以通过解构的方式来获取子组件的数据 -->
    <ScopeSlot>
        <template v-slot="{ person1 }">
			{{ person1 }}
        </template>
    </ScopeSlot>
</div>
