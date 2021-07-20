---
title: JavaScript基础(三)
date: 2021-06-24
categories: article
tags: js
---
# 对于 DOM 的理解？

概念: DOM(文档对象模型),主要用于操作HTML中的,文本内容,样式结构,标签..

分类: 共三种类型

​	核心DOM: 主要提示操作XML和HTML的核心操作接口( CRUD)

​	CRUD: 增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete)

​	XML DOM: 主要用于操作XML接口

​	HTML DOM: 主要用于操作HTML接口

节点树

把整个html文档当成树形的结构,方便后期进行DOM操作,获取相关的内容(节点)

主要内容:

​	1.整个文档---文档节点---document

​	2.所有HTML标签---标签(元素)节点---element

​	3.所有标签上的属性----属性节点----Attribute(attr/att )

​	4.标签中的文本内容---文本节点包括:空格和回车----text

​	5.一切万物皆节点(Node)

#  获取DOM节点操作

通过不同的方式获取需要进行操作的HTML节点,来进行操作

```javascript
//方式一: 通过id的值来获取元素对象
	//标准写法:
	let 元素对象=document.getElementById('id的值');

	//非标准写法: 由于ID具有唯一性,可以直接通过id的值获取到指定元素对象
	说明:
		document:  表示文档,相当于body标签 
		get: 表示获取...
        Element: 表示 标签(元素)
		By: 表示通过....的方式
        Id: ID的值
        
//方式二: 通过类名来获取元素对象
        //表示获取文档中所有指定类名的标签节点
       let 元素对象=document.getElementsByClassName('class的值');
		//表示获取指定对象中所有指定类名的标签节点
	   let 元素对象=元素对象.getElementsByClassName('class的值');

	注意:
		1.获取到的元素对象为伪数组格式,哪怕只有一个元素,也是伪数组
		2.不能直接使用,必需通过数组的方式来进行DOM操作 
		3.伪数组: 表示长得像数组,但是不能使用数组方法,可以使用属性

//方式三: 通过标签名来获取元素对象
	 //表示获取文档中所有指定标签名的标签节点
       let 元素对象=document.getElementsByTagName('标签名');
		//表示获取指定对象中所有指定标签名的标签节点
	   let 元素对象=元素对象.getElementsByTagName('标签名');

	注意:
		1.获取到的元素对象为伪数组格式,哪怕只有一个元素,也是伪数组
		2.不能直接使用,必需通过数组的方式来进行DOM操作 
		3.伪数组: 表示长得像数组,但是不能使用数组方法,可以使用属性

#----------------------------------------------------------------
#H5新增的获取元素的方式:
	表示获取整个文档中指定选择器的第一个元素----具体元素
    let 元素对象=document.querySelector('选择器');

	表示获取指定元素对象中的所有指定选择器的元素节点---伪数组
	let 元素对象=document.querySelectorAll('选择器');
    
	注意: 
		选择器:必需是CSS中的选择器,如:  id   #box   class  .test
```

# 操作属性

注意: 在js元素DOM中的属性,在标签属性中有对应的同名属性

如: 操作DOM中的id

​	元素对象.id: 获取指定元素对象上的id属性的值

​	元素对象.id=值; 设置指定元素对象上id属性的值

# 原生js中使用classList操作class

```javascript
    //实现  鼠标按下，换颜色，松开，恢复默认颜色
    document.addEventListener( "mousedown", function () {
		document.getElementById( "div01" ).classList.add( "changeColor" );
	} );
	document.addEventListener( "mouseup", function () {
		document.getElementById( "div01" ).classList.remove( "changeColor" );
	} );

```

```javascript

//语法:
元素对象.属性名=值;   设置指定对象上的属性值
元素对象.属性名	   获取指定对象上的属性值

注意: class属性,一般写成 className 

//style属性:  主要用于设置或获取行内样式
#注意: 一般css中由多个单词组成的样式属性,一般使用 驼峰命名法来写
如: background-color  ===>dom操作   backgroundColor
	font-size:20px;   ===>  fontSize='20px';

语法:
	设置样式:   元素对象.style.属性名=值;
	获取样式:   元素对象.style.属性名;
```

# 操作DOM节点

操作节点: 对节点进行CRUD操作(增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete))

## 查询节点

```javascript
#查询节点:
	原生获取节点:
		getElementById()
		getElementsByClassName()
		getElementsByTagName()

	H5:
		document.querySelector()
		document.querySelectorAll()

	HTML节点:
		document.documentElement
	body节点:
		document.body

#查询节点--属性: ---大部分东西都有BUG 
	1.子节点.parentNode   子点找父节点
    
    2.父节点.firstChild	列表中的第一个节点
	3.父节点.lastChild	    列表中的最后一个节点
    
    4.父节点.childNodes	获取当前父节点中所有子节点的列表
	5.同级兄弟节点.previousSibling	上一个兄弟节点
	6.同级兄弟节点.nextSibling	    下一个兄弟节点
	
```

## 创建节点
作用: 用于创建指定标签

```javascript
//步骤1: 创建一个元素节点(标签节点)
	let 元素节点=document.createElement('标签名');
//步骤2: 向元素节点中 添加标签属性(class==>写成 className)
	元素节点.属性名=值;
//步骤3: 向元素节点中  添加文本内容
	元素节点.innerHTML=值;
```
## 添加节点

```javascript
//方式一: 在父节点内容之后添加新节点
	父节点.appendChild(新节点)

//方式二: 在指定兄弟节点之前添加新节点
	父节点.insertBefore(新节点,同级兄弟节点)
```

##  修改节点(替换节点)
```javascript
 父节点.replaceChild(新节点,旧节点);  表示用新节点 替换 旧节点
```

## 删除节点
```javascript
父节点.removeChild(子节点);
```

# 事件

用户与计算机交互的行为

事件的四要素

- 事件源: 事件发生在谁身上,谁就是事件源
- 事件类型: 发生事件时,具体发生的哪类事件
- 事件处理函数(事件句柄): 事件发生时,所执行的那个函数
- 事件对象: 表示事件的旁观者, 事件对象中包含了所有与事件相关的信息

注册事件的三种方式

分类:

​	1.通过标签上的事件属性注册事件--(DOM0级事件)

​	2.通过元素对象来注册事件--(DOM0级事件)

​	3.通过事件监听(侦听)来注册事件---重点--(DOM2级事件)

```javascript
//1.通过标签上的事件属性注册事件--(DOM0级事件)--了解
	<标签名 事件类型="js代码">文本内容</标签名>

		如: <div onclick="js代码"></div>
	//缺点:
		1.js和html代码没有分离,不方便后期维护
		2.同类型的事件,只能注册一次  

//2.通过元素对象来注册事件--(DOM0级事件)--理解
	//方式一:
		元素对象.事件类型=function(){}

	//方式二: 
		元素对象.事件类型=函数名;
		function 函数名(){}

	//优点:
		1.js和html代码分离了
     //缺点:
        2.同类型的事件,只能注册一次 
	

//3.通过事件监听(侦听)来注册事件---==重点==--(DOM2级事件)
	注册事件:
		事件源(元素对象).addEventListener('不带on的事件类型',事件处理函数);

	注销事件:
		事件源(元素对象).removeEventListener('不带on的事件类型',事件处理函数);

	#注意: 提示低版本浏览器(ie9以下版本)中  
    	注册事件: attachEvent    事件类型:带on的事件类型
        注销事件: detachEvent    事件类型:带on的事件类型
```