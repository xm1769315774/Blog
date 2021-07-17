---
title: HTML5新特性
date: 2021-06-24
categories: article
---
# 语义化标签
 如：header、footer、main、nav、aside、section、article等
 增强代码的可读性、可维护性

# 新增input的type值

选择框类型
color     颜色选择器
date      日期选择器
datetime-local   日期时间选择器
time     时间选择器
month   月份选择器
week  周选择器

限制类
number   限制输入数字
email  不能够完全正确
search  多了一个删除内容按钮
url     验证一个浏览地址
range   区间选择（有点类似 进度条）

# input 新属性 
aria-*     盲人提示信息
data-*     数据的tag      el.dataset['name']
contentEditable    可编辑的区域
tabIndex    调整tab键获取光标顺序

# form 表单新元素
datalist   可搜索下拉列表
output    输出框   【不建议使用】
keygen  私钥加密  【已废弃】

# form 新属性 
novalidate     取消验证

# 本地存储
会话级存储  sessionStorage
会话：一次交互 一次聊天 一次会面。 在交互（网页被打开）的过程中 数据有效 交互结束后数据自动清除
数据在浏览器标签页存在周期中（关闭标签页、关闭浏览器数据就没了）

永远级存储    localStorage
本地存储（永久性存储，关了浏览器也还在，除非手动删除）约能存5M

复杂数据类型的本地存储
先将数据转换为json字符串
setItem()
getItem() 
将json字符串转换为对应的复杂数据类型

cookie  浏览器暂时存储一些数据的东西，存放在你的(用户)电脑上，以各个站点为单位，不同的浏览器直接cookie不共用
需要在服务器环境下才能设置cookie(火狐浏览器除外) 默认存储时间会会话级存储，可以通过expires进行设置存储时间
一般用于保存用户的一些id账号信息，如输入密码之后30天可以不需要再输入密码登录
大小限制 4kb
每次发 HTTP 请求，都会有 Cookie 字段，带着

    设置cookie
        // 获取本地时间转换为时间戳
        let date=new Date().getTime();
        // 进行计算,时间戳加上30天再转换为日期对象
        let newDate=new Date(date + 30*24*60*60*1000)
        // 由于时区的关系需要使用toUTCString()可根据世界时 (UTC) 把 Date 对象转换为字符串,并返回结果
        document.cookie="name=姓名; expires="+newDate.toUTCString()

    获取cookie
         console.log(document.cookie);


JSON 字符串/对象
JSON.stringify()       将js 复杂数据类型 转换成 json字符串
JSON.parse()          将json字符串 转换成 对应的复杂数据类型

# 新的获取DOM API 
querySelector  获取第一个满足条件的元素
querySelectorAll 获取所有 满足条件的元素

# 多媒体标签
video属性
 autoplay      自动播放
src                 获取视频地址 （相对/绝对  完整url地址 均可）

width            宽度
height           高度
muted          静音 （如果视频进入 自动播放 必须要先静音）
loop              自动循环播放
controls       显示播放控制台
poster          封面（图片，相对/绝对  完整url地址 均可）

video方法

load ()    重新加载
play()      播放
pause()    暂停

video 事件
ended    视频播放结束时触发的事件


audio 属性
load ()    重新加载
play()      播放
pause()    暂停

# 地理定位
h5提供了Geolocation API访问地理位置，即通过window.navigator.geolocation来实现访问
这个对象有三个方法:
getCurrentPosition()、watchPosition()、clearWatch()
页面第一次使用这个api需要获得用户许可, watchPosition可以对位置变化事件进行监听

高德地图使用
进入高德地图 开放平台
登录账号
完善个人信息---个人开发者  ----填写名字

应用管理---我的应用---创建新应用
进入该应用---添加--填写对应值
获取到该应用的私钥并保存

示例中心
驾车路线规划---复制代码
替换 key   替换 中心城市点位（经纬度） 替换起点终点(经纬度)

# css3兼容性
-webkit-  以webkit做内核的浏览器（chrome，safri） -webkit-border-rauids
-ms-    IE  -ms-border-rauids
-moz-   火狐
-o-    opera（手机）
浏览器兼容HTML5评分网站：http://html5test.com/