---
title: React基础API通信
date: 2021-06-24
categories: article
tags: React
---
# 通信

react的核心开发思想是组件化开发，我们需要将项目分拆为一个个小型的组件，然后通过组件之间的功能（数据）对接来拼接成一个完整的大项目。这个过程中我们会频繁遇到组件数据交换问题——通信

react数据通信主要有以下四种：
    父传子
    子传父
    兄弟通信
    跨级通信（父组件向子组件的子组件（甚至更深）通信）

# 父传子

父传子是react组件中最常用最简单的一种通信方式，父组件通过props属性将自己的state数据传递给子组件，用于子组件的展示和数据更新

父组件
```jsx
import React, { Component } from 'react'
import SonCmpt from './SonCmpt'

export default class FatherCmpt extends Component {
    state = {
        msg: '这是父组件的数据'
    }
    render() {
        return (
            <>
                <SonCmpt msg={this.state.msg} />
            </>
        )
    }
}
```

子组件
```jsx
import React, { Component } from 'react'

export default class SonCmpt extends Component {
    render() {
        return (
            <div>
                父组件传递的数据：{this.props.msg}
            </div>
        )
    }
}
```

# 子传父

子传父，需要借助属性props的js类型特征和回调函数来完成，我们可以按照如下步骤：

1. 父组件定义一个方法，该方法接受一个参数
2. 将该方法传递给子组件的属性
3. 子组件内触发这个属性接收到的方法并传递子组件内部数据

```jsx
import React, { Component } from 'react'
import SonCmpt from './SonCmpt'

export default class FatherCmpt extends Component {
    state = {
        fromChild: '这是父组件默认内容'
    }

    // 父组件定义方法，传给子组件的属性
    getChildMsg(msg) {
        console.log(msg)
        this.setState({
            fromChild: msg
        })
    }
    render() {
        return (
            <>
                <p>这是子组件传递的数据：{this.state.fromChild}</p>
                <SonCmpt callback={this.getChildMsg.bind(this)} />
            </>
        )
    }
}
```
```jsx
import React, { Component } from 'react'

export default class SonCmpt extends Component {
    // 子组件事件句柄中调用props中的方法
    sendToFather() {
        this.props.callback('这是子组件传递的数据')
    }
    render() {
        return (
            <div>
                <button onClick={this.sendToFather.bind(this)}>点击传递数据到父组件</button>
            </div>
        )
    }
}
```
# 兄弟通信

react并没有提供兄弟组件之间的通信api，所以我们需要利用前面子传父+父传子的方式来实现兄弟通信。实现步骤为：

1. 兄弟1组件定义数据，并借助子传父将数据传递给父组件
2. 父组件接收到数据，借助父传子将数据传递给兄弟2组件

# 跨级通信

当组件嵌套比较深的时候，若想要祖先组件和后辈组件通信的话，需要层层传递props，这比较费劲。react提供了一个context对象可以让我们实现跨层级的组件通信（祖先传后辈）。

在使用context之前，你必须明白，context一定是一个独立的第三方数据代理

要实现context的中间代理功能，我们需要可以按照以下步骤：

1. 定义一个context.js文件，内部使用`React.createContext`来创建一个contextData
2. 在父组件中使用：`contextData.Provider`组件定义数据传输，value值可以覆盖默认值
3. 在需要使用的后辈组件中，引入contextData，赋值给静态属性`contextType`，然后在该组件内使用`this.context`即可获得context定义的数据

定义context.js文件
```javascript
import React from 'react'
export const testData = React.createContext('测试数据')
```

在父组件中使用`contextData.Provider组件定义数据传输`

```jsx
import React, { Component } from 'react'
import { testData } from './context'
import FatherCmpt from './FatherCmpt'
// 创建一个context，【测试数据】是默认值

export default class ContextCmpt extends Component {
    state = {
        contextCmptData: '这是contextCmpt的数据'
    }
    changeContext() {
        this.setState({
            contextCmptData: 'contextCmpt数据改变了'
        })
    }
    render() {
        return (
            <testData.Provider value={this.state.contextCmptData}>
                <FatherCmpt />
                <button onClick={this.changeContext.bind(this)}>改变contextCmpt的数据</button>
            </testData.Provider>
        )
    }
}
```

后辈组件引入contextData，赋值给静态属性`contextType`，然后在该组件内使用`this.context`即可获得context定义的数据

```jsx
import React, { Component } from 'react'
import { testData } from './context'
export default class SonCmpt extends Component {
    static contextType = testData
    render() {
        return (
            <>
                <p>这是context传递来的数据：{this.context}</p>
            </>
        )
    }
}
```