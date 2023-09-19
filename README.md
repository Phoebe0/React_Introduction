> 写在前面：
> 这里是初学者对于React的一些探索，包括学习语法、错误汇总。希望自己能够持续更新下去。💨
# 介绍

React 是一个用于构建用户界面（UI，对咱们前端来说，简单理解为：HTML 页面）的 **JavaScript 库**

# 特点

1. **声明式UI**
2. **组件化**
3. **一次学习，跨平台编写**
    
    使用react/rect-dom可以开发Web应用
    
    使用react/react-native(RN)可以开发移动端原生应用（react-native）
    
    使用react可以开发VR（虚拟现实）应用（react360）
    

# React脚手架

`create-react-app`是react官方提供一个脚手架工具，用于创建react项目

**命令：**

```bash
npx create-react-app 项目名称
```

**启动项目：**

```bash
yarn start
#
npm start
```

# ****react 的基本使用****

## 创建元素

src目录：

index.js: 入口文件

创建元素在页面中渲染：

1. 导包
2. 创建虚拟DOM
3. 挂载渲染虚拟DOM

```js
// 1. 导包
import React from 'react'
import  ReactDOM  from 'react-dom/client'
// 2. 创建虚拟DOM 
// 参数1：创建元素的标签
// 参数2：一个配置对象
// 参数3：元素的内容
const VNode = React.createElement('h1',{},'hello world')
// 3. 挂载渲染虚拟DOM
ReactDOM.createRoot(document.querySelector('#root')).render(VNode)
```

## 添加属性绑定事件

在参数2中

```js
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2. 创建 
// 参数1：创建元素的标签
// 参数2：一个配置对象,加一些标签属性或事件处理
// 参数3：元素的内容
const Vnode = React.createElement(
  'strong',
{
  className: 'box',
  id: 'title',
  onClick: () => {
    alert(111)
  }
},
'我是标签内容'
)
// 3. 挂载 
ReactDom.createRoot(document.querySelector('#root')).render(Vnode)
```

![](https://img-blog.csdnimg.cn/581c2c82108a4ef59cb1018f25414ad7.png)


## 添加子元素

```js
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2. 创建 
// 参数1：创建元素的标签
// 参数2：一个配置对象,加一些标签属性或事件处理
// 参数3：元素的内容,是一个字符串，也可以是数组
const VNode = React.createElement('ul',{className: 'list'},[
  React.createElement('li',{},'vue'),
  React.createElement('li',{},'react'),
  React.createElement(
    'li',
    {},
    React.createElement('a', {href: 'http://www.baidu.com'}, '百度一下')
  ),
])
// 3. 挂载 
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/4527168be57343658331651a9a09cdaa.png)

# JSX

嵌套方式太复杂，所以选择一种更简单的方式

`JSX`是`JavaScript XML`的简写，表示了在Javascript代码中写XML(HTML)格式的代码

**优势：语法更加直观，与HTML结构相同，降低学习成本，提高开发效率。**

> *JSX 不是标准的 JS 语法，是 JS 的语法扩展。脚手架中内置的 [babel](https://www.babeljs.cn/)，用来解析该语法。*
> 

## 步骤

1. 导入reactDOM包
2. 使用jsx创建react元素
3. 将react元素渲染到页面中

```js
// 1. 导包
// import React from 'react'  // 17.x 以后的版本不需要引入react
import ReactDom from 'react-dom/client'
// 2. 创建
const VNode = (
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

## **注意事项：**

1. 标签名和属性名是**区分大小写**的 `<Abc title> <abc TITLE>`
2. 必须有**一个根元素**，可使用空节点 `<></>` *幽灵节点*（ `<React.Fragment></React.Fragment>` 的简写）
3. 标签**必须闭合**（如：`<a></a>`、`<div />`）
4. 属性名要用驼峰命名法（myTitle="..."）
5. 属性名**与 js 关键字不能同名**（内置的与 js 关键字同名的属性，都已改为了其他名字）
    - `class` => `className`
    - `for` => `htmlFor`
6. 推荐将 JSX 代码放在`()`中（美观、且能防止被格式化插件自动插入分号产生 Bug）
7. 可以编写注释 `{/* 这是jsx中的注释 */}`
8. 不能写for循环和if分支

## 添加prettier的配置

```js
// 保存到额时候用使用prettier进行格式化
"editor.formatOnSave": true,
// 默认使用prittier作为格式化工具
"editor.defaultFormatter": "esbenp.prettier-vscode",
    
// 不要有分号
"prettier.semi": false,
// 使用单引号
"prettier.singleQuote": true,
```

## ****JSX-配置tab键补全****

```js
// 当按tab键的时候，会自动提示
"emmet.triggerExpansionOnTab": true,
// jsx的提示
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
}
```

## ****JSX-使用表达式****

**表达式：**

不包含 JS 关键字，且能产生**一个值**的代码

- `字符串`、`数值`、`布尔值`、`null`、`undefined`、`object（ [] / {} ）`
- `1 + 2`、`'abc'.split('')`、`['a', 'b'].join('-')`、`fn()`
- 数学运算（+ - * /）
- 逻辑运算 (>、<、===)
- 三元运算 `(条件 ？'xxx' : "yyy")`
- 路径运算`（arr[0], obj.name）`
- 函数
- JSX 也是表达式 `{<div>123</div>}`

```js
// 1. 导包
// import React from 'react'  // 17.x 以后的版本不需要引入react
import ReactDom from 'react-dom/client'
// 2. 创建
const a = 100
const str = '哈哈😄'
const flag = true
const arr = [1, 2, 3]
const obj = {
  name: '小花',
  age: 18,
}
function sayHi() {
  return '你好'
}
const VNode = (
  <div>
    {/* 数字和算术运算 */}
    {a + 1 - 33}
    <hr />
    {/* 字符串 */}
    {str}
    <hr />
    {/* 布尔值 */}
    ♥♥♥♥♥ {flag + ''} ♥♥♥♥♥♥
    <hr />
    {/* 数组的使用和方法调用 */}
    {arr} ----- {arr.reverse()}
    <hr />
    {/* 对象 */}
    {obj.name}
    <hr />
    {/* 三元表达式 */}
    {obj.age >= 18 ? '欢迎~光临' : '未成年人谢绝入内'}
    <hr />
    {/* 函数调用 */}
    {sayHi()}
  </div>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/fd79790acb6e422bb69d257752625908.png)


## ****JSX-条件渲染****

可以使用`if/else`或`三元运算符`或`逻辑与(&&)运算符`

不要在 **jsx** 中直接写 if/else   需要抽到**单独的函数**中

```js
// 1. 导包
import ReactDom from 'react-dom/client'
// 2. 创建
const age = 18
// 不要在jsx中直接写 if/else   需要抽到单独的函数中
const fn = () => {
  if (age >= 18) {
    return <h1>您好，请进！</h1>
  } else {
    return <h1>未成年人谢绝入内</h1>
  }
}
const VNode = <div>{fn()}</div>
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

## JSX-列表渲染

可以使用数组遍历方法来实现

- for  while循环
- 数组forEach、**map**方法

> **要为遍历生成的元素添加唯一性的 `key` 属性，一般是id**
> 

```js
// 1. 导包
import ReactDom from 'react-dom/client'
// 2. 创建
const list = [
  { id: 1, name: 'sh', age: 22 },
  { id: 2, name: 'zs', age: 18 },
  { id: 3, name: 'vf', age: 14 },
]

const VNode = (
  <div>
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <h3>姓名：{item.name}</h3>
            <h4>年龄：{item.age}</h4>
          </li>
        )
      })}
    </ul>
  </div>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

## ****JSX-样式处理****

1. 行内样式 - style
    - 像 width/height 等属性，可以省略 px，直接使用 数值 即可
    - 如果是需要使用百分比的单位，此时，继续使用字符串的值即可（比如，"50%"）
2. 类名 - **className**

```js
// 1. 导包
import ReactDom from 'react-dom/client'
// 2. 创建
// 控制类名
import './index.css'
const VNode = (
  <>
  {/* 行内样式 */}
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'pink',
      }}
    ></div>
    {/* 类名 */}
    <div className="box title"></div>
  </>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```
# React(二)

# 创建组件

## 函数组件

函数组件：使用JS的函数或者箭头函数创建的组件

- 使用 JS 的函数(或箭头函数)创建的组件，叫做`函数组件`
- 约定1：**函数名称必须以大写字母开头**，React 据此区分`组件`和`普通的 HTML`
- 约定2：函数组件必须有返回值，表示该组件的 UI 结构

```js
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2. 创建 函数式组件
// 普通函数或者箭头函数创建组件，首字母大写
// 组件必须要有返回值
function Music() {
  return (
    <div>
      <h1>haha</h1>
    </div>
  )
}
const VNode = (
  <div>
    <Music></Music>
  </div>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

## 类组件

类组件：使用 ES6 的 class 创建的组件，叫做类（class）组件

- 约定1：**类名称也必须以大写字母开头**
- 约定2：类组件应该**继承 `React.Component` 父类**，从而使用父类中提供的方法或属性
- 约定3：类组件必须提供 `render` 方法
- 约定4：render 方法必须有返回值，表示该组件的 UI 结构

```js
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2.
class Hello extends React.Component {
  render() {
    return <h1>哈哈</h1>
  }
}
const VNode = (
  <>
    <Hello></Hello>
  </>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

## 组件提取到单独的文件中

1. 在`components`文件夹下，创建函数组件`hello.js`，类组件`home.js`,
    - hello.js
    
    ```js
    const Hello = () => <h1>我是hello组件</h1>
    export default Hello
    ```
    
    - home.js
    
    ```js
    import React from 'react'
    
    class Home extends React.Component {
      render() {
        return <h2>home</h2>
      }
    }
    export default Home
    ```
    
2. 在`index.js`中导入

```js
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 导入组件
import Hello from './components/hello'
import Home from './components/home'
// 2. 创建虚拟DOM
const App = (
  <>
    <Hello></Hello>
    <Home></Home>
  </>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(App)
```

# 有状态组件 无状态组件

状态即数据。

- 函数组件又叫做`无状态组件` 函数组件是不能自己提供数据 【前提：基于hooks之前说的 16.8之前】
- 类组件又叫做`有状态组件`类组件可以自己提供数据，数据如果发生了改变，内容会自动的更新
- 组件的私有数据也称为*状态* ，当组件的状态发生了改变，页面结构也就发生了改变。【数据驱动视图】
- 函数组件是没有状态的，只负责页面的展示（静态，不会发生变化）性能比较高
- 类组件有自己的状态，负责*更新UI*，只要类组件的数据发生了改变，UI就会发生更新（动态）。
- 在复杂的项目中，一般都是由函数组件和类组件共同配合来完成的。

```js
// 1. 导包
import React from "react"
import ReactDom from 'react-dom/client'
// 函数组件  没有状态  仅仅做一些数据展示的工作，可以使用函数组件
// function App() {
//   return (
//     <div>我是组件</div>
//   )
// }

// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  render() {
    return (
      <h1>我是类组件</h1>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

# 类组件的状态

- 状态`state`即数据，是组件内部的*私有数据*,只有在组件内部可以使用
- state的值是一个对象,表示一个组件中可以有多个数据
- 通过 `this.state.xxx` 来获取状态

```js
// 1. 导包
import React from "react"
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  // state节点中提供状态
  // 通过 this.state.xxx 来获取状态
  state = {
    name: 'Tt',
    age: 17
  }
  render() {
    return (
      <h1>{this.state.name} ----- {this.state.age}</h1>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

# 事件处理

## 注册事件

**语法：**`on+事件名=｛事件处理程序｝` 比如`onClick={this.handleClick}`
```js
// 1. 导包
import React from "react"
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  // state节点中提供状态    通过 this.state.xxx 来获取状态
  state = {
    name: 'Tt',
    age: 17
  }
  // 提供一些方法
  handleClick() {
    console.log('点击');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```
## 阻止默认事件
```js
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新
class App extends React.Component {
  // state节点中提供状态
  // 通过 this.state.xxx 来获取状态
  state = {
    name: 'Tt',
    age: 17,
  }
  // 提供方法
  handleClick(e) {
    console.log('点击qqq')
    console.log(e) // e是react合成的事件对象
    e.preventDefault() // 阻止默认行为
  }
  render() {
    return (
      <div>
        {/* 方法后面不加小括号，因为加了小括号表示函数就执行啦 */}
        <button onClick={this.handleClick}>按钮</button>
        <a href="www.baidu.com">百度一下</a>
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```
# this指向

`render`里面的this指向`app`组件
`render`外面的指向`undefined`

```js
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  // 提供一些方法
  handleClick() {
    console.log(this) // undefined
  }
  render() {
    **console.log(this) //App组件**
    return (
      <div>
        {/* this指向的是App组件 */}
        {/* 这并不是函数的调用，仅仅是做了一个赋值 onClick = this.handleClick */}
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e27fbd3a2db64eaeb5dbb4e4c4c547b3.png)



## 解决this指向问题

通过上面的this指向我们可以看到，点击按钮时this会指向`undefined`。解决这个问题方法如下：

1. 写成箭头函数
    
    ```js
    <button onClick={(e) => this.handleClick(e)}>按钮</button>
    ```
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/468b0f6d73664e698dd60bea78d126f2.png)
  

    
2. 使用bind将this修改 `onClick={this.handleClick.bind(this)}`
    
    ```js
    <button onClick={this.handleClick.bind(this)}>按钮</button>
    ```
    
3. 直接修改handleClick函数，将其改为**箭头函数**
    1. 但是，这种方式**不能传参**
    
    ```js
    handleClick = (e) => {
        console.log('handleClick: ', this, e)
      }
    ```
# React(三)
# 修改状态 【数据驱动视图思想】

通过setState修改状态

**作用：**

1. 修改state
2. 更新ui

语法：`this.setState({要修改的部分数据})`


💡 注意：不能直接修改state中的数据，而是要**设置新值去覆盖。**


```js

// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  state = {
    name: 'Tt',
    age: 18,
  }
  handleClick = () => {
    // 修改state中的数据，用this.setState({修改的数据})
    // 注意：不能直接改state中的数据
    this.setState({
      // 这里用 ++ 是无效的
      age: this.state.age + 1,
    })
  }
  render() {
    console.log(this) //App组件
    return (
      <div>
        <button onClick={this.handleClick}>年纪++</button>
        <p>{this.state.age}</p>
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2671b2ff15394ce1b9575d57a698b6ab.gif#pic_center)


## React状态不可变

所谓状态不可变，指的就是**不能直接修改state中的数据，而是要设置新值去覆盖。**

例如

```js

// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  state = {
    name: 'Tt',
    age: 18,
    boyfriend: [14, 17, 13, 16],
    like: {
      play: 10,
      study: 4,
    },
  }
  handleClick = () => {
    // 修改state中的数据，用this.setState({修改的数据})
    // 注意：不能直接改state中的数据
    this.setState({
      // 这里用 ++ 是无效的
      name: 'Tricia',
      age: this.state.age + 1,
      boyfriend: [...this.state.boyfriend, 21],
      like: { ...this.state.like, read: 8 },
    })
  }
  render() {
    console.log(this) //App组件
    return (
      <div>
        <button onClick={this.handleClick}>年纪++</button>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.boyfriend}</p>
        <p>{this.state.like.play}</p>
        <p>{this.state.like.study}</p>
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

不能直接修改state中的数据，而是要**设置新值去覆盖。**
![在这里插入图片描述](https://img-blog.csdnimg.cn/cbf65e4ab2354a9fbe8f2300821b1b1d.gif#pic_center)


# 表单处理

## 受控组件

**实现方式：**

1. input上绑定一个OnChange事件
2. 绑定的事件改变state状态


💡 类似于VUE中的双向数据绑定。实现就是：**表单项的数据和state中的状态相互关联**。


```js

// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'

// 表单元素，受控组件就是将状态和输入框的值绑定
// 输入框中的值修改之后，反向绑定到状态中。
class App extends React.Component {
  state = {
    name: 'Tricia',
    isAgree: true,
  }
  changeHandle = (e) => {
    // 将输入的值同步给state中的name
    // 1. 得到输入的值
    console.log(e.target.value)
    // 2. 修改state中的值
    this.setState({
      name: e.target.value,
    })
  }
  changeChecked = () => {
    this.setState({
      isAgree: !this.state.isAgree,
    })
  }
  render() {
    console.log(this) //App组件
    return (
      <div>
        <input value={this.state.name} onChange={this.changeHandle} />
        <input
          type="checkbox"
          checked={this.state.isAgree}
          onChange={this.changeChecked}
        />
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/3051dd6bfc544b5a9580bd9ee8214f5c.gif#pic_center)


## 非受控组件 - ref

通过手动操作DOM的方法来控制

**实现方式：**

1. 导入creatRef，并创建一个ref对象。
2. 和结构绑定
 3. 获取值

```js

// 1. 导包
import { Component, createRef } from 'react'
import ReactDom from 'react-dom/client'

// 非受控组件是通过ref配合获取到表单元素的值

/* 
  步骤：
    1. 导入creatRef，并创建一个ref对象。
    2. 和结构绑定
    3. 获取值

*/
class App extends Component {
  // 1.
  iptRef = createRef()
  state = {
    name: 'Tricia',
  }
  handleClick = () => {
    console.log(this.iptRef.current.value)
  }
  render() {
    console.log(this) //App组件
    return (
      <div>
        {/* 2. */}
        <input type="text" ref={this.iptRef} />
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20437ceb04cc4818a3bffb28d13742a6.gif#pic_center)

 # React(四)
>🌟组件化：把一个项目拆成一个一个的组件，为了便与开发与维护
组件之间**互相独立且封闭**，一般而言，每个组件只能使用自己的数据（组件状态私有）。
如果组件之间相互传参怎么办？        那么就要考虑组件之间的通讯。

# props基本使用

props能够实现**传递数据和接受数据**。

作用：接收其他组件传递的数据

传递：给组件标签添加属性，就表示给组件传递数据

接收：分为函数组件和类组件

- 函数组件：通过参数`props`
- 类组件：通过`this.props`

## 函数式组件使用props

```js
// 函数组件通过props获取
function Hi(props) {
  return <div>{props.name}</div>
}

...
...
const VNode = (
  <div>
  
    <Hi name={'Tricia'}></Hi>
  </div>
)
```

## 类组件使用this.props

```js
// class 组件需要通过 this.props 来获取
class Hello extends Component {
  render() {
    return <div>接收到的数据:{this.props.age}</div>
  }
}
...
...
const VNode = (
  <div>
    <Hello name="jack" age={19} />
  </div>
)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/60e2f656e63848a096933451ada5daea.png)
## 注意点：

1. props**只能读取**对象中的属性，但是无法修改。
2. **单向数据流：** 数据从父组件流向子组件，即父组件的数据修改时，子组件也跟着修改
3. 子组件的数据不能传递给父组件
4. 🌟传递字符串时可以直接传递，传递其他数据类型时需要加 `{}`

# 组件通讯

## 父传子

将父组件的数据传递给子组件,数据是单向流，子组件中是只读的！

### 步骤：

1. 父组件提供要传递的state数据
2. 给子组件****标签添加属性，值为state中的数据****
3. 子组件中通过props接收父组件传递过来的数据

<aside>
💡 注意：子组件不能直接修改父组件传递过来的数据
</aside>

- 父组件

```js
// 定义一个父组件
class Father extends React.Component {
  // 父组件在state中提供数据
  state = {
    fName: '朗道',
  }
  render() {
    return (
      <>
        <div>
          <p>father</p>
          {/* 父组件数据通过子组件标签传递给子组件 */}
          <Son fName={this.state.fName}></Son>
        </div>
      </>
    )
  }
}
```

- 子组件中通过 `this.props.属性名` 接收父组件中传递的数据
    
    ```js
    import { Component } from 'react'
    class Son extends Component {
      render() {
        return (
          <>
            {/* 子组件通过this.props接收父组件传过来的数据并渲染 */}
            <p>Son ： {this.props.fName}</p>
          </>
        )
      }
    }
    export default Son
    ```
    
    ![](https://img-blog.csdnimg.cn/d802425030c7498386053dafd34dbac2.png)

    

### 注意：

父传子也可以在内容里面传，用JSX。子组件接受时使用 **this.props.children**

```js
import React, { Component } from 'react'
import ReactDom from 'react-dom'

class AppSon extends Component {
  render() {
    console.log(this.props)
    return (
      <>
        <h2>我是App的儿子</h2>
        <div>
          {this.props.name}
          {this.props.age}
          {/* 用children来接受 */}
          {this.props.children}
        </div>
      </>
    )
  }
}
class App extends Component {
  render() {
    return (
      <>
        <h1>我是App</h1>
        <AppSon name={'停云'} age={18098}>
          {/* 父传子也可以在此处传递 */}
          {<p>hi,我是内容</p>}
        </AppSon>
      </>
    )
  }
}
ReactDom.createRoot(document.querySelector('#root')).render(<App></App>)
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/d431599bce234e4cb99175f9810a8cd9.png)

## 子传父

### 步骤

1. 父组件提供一个**回调函数**，将该函数作为属性的值，传递给子组件。
2. 子组件通过props调用回调函数
3. 将子组件的数据作为参数传递给回调函数。

```js
import React, { Component } from 'react'
import ReactDom from 'react-dom/client'

// 子传父本质是父组件传递给子组件一个方法，子组件通过调这个方法来向父组件传参。
class AppSon extends Component {
  render() {
    return (
      <>
        <h2>我是App的儿子</h2>
        <span>{this.props.name}</span>
        <button onClick={() => this.props.editName(this.props.name)}>
          点击执行父组件的方法
        </button>
      </>
    )
  }
}
class App extends Component {
  state = {
    name: '冷面小青龙',
  }
  editName = (val) => {
    console.log(val)
    this.setState({
      name: val === '丹恒' ? '冷面小青龙' : '丹恒',
    })
  }
  render() {
    return (
      <>
        <h1>我是App</h1>
        <AppSon name={this.state.name} editName={this.editName}></AppSon>
      </>
    )
  }
}
ReactDom.createRoot(document.querySelector('#root')).render(<App></App>)
```

### 注意

**回调函数**不能用普通函数，因为this指向的问题，如果是普通函数那么谁调用this就指向谁。这个函数是被this.props调用的，所以this指向的是父组件传递过去的参数

```js
class App extends Component {
  state = {
    name: '冷面小青龙',
  }
   editName() {
    // 错误写法
    // 注意⚠️：这里不能用普通函数，因为this指向的问题，如果是普通函数那么谁调用this就指向谁。这个函数是被this.props调用的，所以this指向的是父组件传递过去的参数
    console.log(this)
  } 
  render() {
    return (
      <>
        <h1>我是App</h1>
        <AppSon name={this.state.name} editName={this.editName}></AppSon>
      </>
    )
  }
}
```

## 兄弟组件通讯(状态提升)

**核心思想：状态提升**

公共父组件职责：

1. 提供共享状态
2. 提供操作共享状态的方法

要互相通讯的两个子组件只需通过props接受或者操作状态。说白了就是。父传子 + 子传父

### 步骤：

![在这里插入图片描述](https://img-blog.csdnimg.cn/57ef7c6def06458a899a9586029b2c59.png)


1. Son1通过子传父，将自己要传递的state给公共父组件
2. Son2通过父传子得到这个state

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Son1 from './Son1'
import Son2 from './Son2'
export default class App extends Component {
  state = {
    num: '123',
  }
  editNum = (n) => {
    this.setState({
      num: +this.state.num + n,
    })
  }
  render() {
    return (
      <>
        <div>App</div>
        {/* 通过子传父改变num值 */}
        <Son1 editNum={this.editNum}></Son1>
        {/* 父传子得到Son1的num 值 */}
        <Son2 num={this.state.num}></Son2>
      </>
    )
  }
}
ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
```

## 跨级组件通讯 - context

context: 上下文，可以理解为是一个范围，在这个范围内的所有组件都可以跨级通讯。

### 步骤

1. 引入createContext方法，拿到Provider和Consumer
2. 将createContext方法提出来，提供Provider, Consumer这两个组件并导出
3. 使用Provider组件**包裹整个应用**，通过value属性提供要共享的数据。
4. 通过Consumer组件接收共享的数据

![在这里插入图片描述](https://img-blog.csdnimg.cn/90975284e31f4669835607029a417199.png)


- context.jsx
    
    ```js
    // 公共组件：提供Provider, Consumer这两个组件
    
    // 1. 导入createcontext方法
    import { createContext } from 'react'
    // 2. 调用方法得到两个组件 Provider, Consumer
    const Context = createContext()
    export default Context
    ```
    
- index.js
    - 提供共享的数据和方法
    - 如果要修改状态，也是将方法写在value中，最后由需要组件去调用。
    
    ```js
    import React, { Component } from 'react'
    import ReactDOM from 'react-dom/client'
    import GrandPa from './GrandPa'
    
    import Context from './Context/context'
    const { Provider } = Context
    
    export default class App extends Component {
      state = {
        num: '云浮将军景元元',
        age: 109776,
      }
      render() {
        return (
          // 使用Provider组件包裹根组件，并要提供value
          // 若要提供多个属性，可以写成对象格式
          <Provider value={{ name: this.state.num, age: this.state.age }}>
            <div>
              <h1>App</h1>
              <GrandPa></GrandPa>
            </div>
          </Provider>
        )
      }
    }
    
    ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
    ```
    
- 在任意一个组件中均可使用共享的数据，例如Father.jsx
    
    ```js
    import React, { Component } from 'react'
    import Son from './Son'
    import Context from './Context/context'
    const { Consumer } = Context
    export default class Father extends Component {
      render() {
        return (
          <Consumer>
            {/* 接收state  需要将DOM放入插值中，并用箭头函数返回 */}
            {(obj) => (
              <div style={{ border: '2px solid #333', margin: '10px' }}>
                Father -- {obj.name}
                <Son></Son>
              </div>
            )}
          </Consumer>
        )
      }
    }
    ```
    
- 在Son.jsx组件中去修改状态

```js
import React, { Component } from 'react'
import Context from './Context/context'
const { Consumer } = Context
export default class Son extends Component {
  render() {
    return (
      <Consumer>
        {(obj) => (
          <div style={{ border: '2px solid #333', margin: '10px' }}>
            Son -- {obj.age}岁
            <button onClick={() => obj.editAge(5)}>增加➕</button>
          </div>
        )}
      </Consumer>
    )
  }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/6f41d6f3fcfa46aa9bd48220647aa1f9.png)
# 概念

组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程。

只有**类组件**才有生命周期。

分为三个阶段：

1. 挂载阶段
2. 更新阶段
3. 销毁阶段

![在这里插入图片描述](https://img-blog.csdnimg.cn/d48afa3cda654080b025fd0d1e8ebedd.png)

# 三个阶段

## 挂载阶段

### 钩子函数 - constructor

> 创建阶段触发
> 

> 作用：创建数据
> 
- 之前定义状态是简写，完整写法是写在constructor函数中
- 包括props之前也是简写，完整写法是写在constructor函数中
- 包括ref【获取真实DOM元素/获取类组件实例】的创建，也要写在constructor函数中

```js
class Son extends Component {
  constructor(props) {
    // 【创建阶段，目的是创建数据】最先执行
    super()
    this.state = {
      b: props.a,
    }
    this.iptRef = createRef()
  }
  // iptRef = createRef()  // 建立ref的简写
}
```

### 钩子函数 - render

> 渲染阶段触发 （每次组建渲染都会触发）
> 

> 作用：渲染UI
> 

<aside>
⚠️ 注意 ：不能调用setState()                                                                           <br/>              原因是render是每次组件渲染时触发的，如果在里面凋setState()，则组件数据发生变化，肯定要重新渲染，但是重新渲染又会触发render。就会形成死循环！！！

</aside>

```js
  render() {
    return (
      <>
        hi :{this.state.b}
        <input type="text" ref={this.iptRef} />
      </>
    )
    // return <>hi :{this.props.a}</>  // props的简写
  }
```

### 钩子函数 - componentDidMount

> 完成DOM渲染后触发
> 

> 作用：发送请求；DOM操作
> 

```js
componentDidMount() {
    // 【组建挂载完毕,目的是：发送请求；DOM操作】完成DOM渲染后触发
    console.log('componentDidMount')
  }
```

### 执行顺序
![在这里插入图片描述](https://img-blog.csdnimg.cn/48ed7104d192434381a0b8ca42adc0a0.png)

```js
class App extends Component {
  // 挂载阶段，会经过三个钩子：constructor render componentDidMount
  constructor() {
    // 【创建阶段，目的是创建数据】最先执行
    super()
    console.log('constructor')
  }
  render() {
    // 【渲染阶段，目的是渲染UI】每次组建渲染都会触发，（注意⚠️ ：不能调用setState()原因是render是每次组件渲染时触发的，如果在里面凋setState()，则组件数据发生变化，肯定要重新渲染，但是重新渲染又会触发render。就会形成死循环！！！)
    console.log('render')
    return (
      <>
      </>
    )
  }
  componentDidMount() {
    // 【组建挂载完毕,目的是：发送请求；DOM操作】完成DOM渲染后触发
    console.log('componentDidMount')
  }
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/434703625ebd44a7af79fdeb215df6c5.png)

## 更新阶段

> 更新含义：数据发生变化就会引起组件的更新
> 

### 钩子函数 - render()

每次组件重新渲染（数据发生变化）执行

1. 默认挂载阶段会执行一次
2. 更新阶段执行
    1. 调用了setState方法
    2. forceUpdate（强制更新）
    3. props传递的数据更新了

### 钩子函数 - componentDidUpdate()

1. 更新阶段执行
    1. 调用了setState方法
    2. forceUpdate（强制更新）
    3. props传递的数据更新了
<aside>
⚠️ 注意 ：不能调用setState()      <br / >理由同render

</aside>

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
export default class App extends Component {
  // 挂载阶段，会经过三个钩子：constructor render componentDidMount
  constructor() {
    // 【创建阶段，目的是创建数据】最先执行
    super()
    this.state = {
      a: 100,
      b: 50,
    }
    console.log('constructor')
  }
  handelChange = () => {
    this.setState({
      a: this.state.a + 1,
    })
    this.state.b += 1
    this.forceUpdate() // 强更新(强制DOM更新) 如果不调用这个方法，b的数据会变化，但是，DOM无法更新
    console.log(this.state.b)
  }
  render() {
    console.log('render')
    return (
      <>
        <div>
          {this.state.a} --- {this.state.b}
        </div>
        <button onClick={this.handelChange}>修改</button>
      </>
    )
  }
  componentDidMount() {
    // 【组件挂载完毕,目的是：发送请求；DOM操作】完成DOM渲染后触发
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    // 【组件更新完毕】
    console.log('componentDidUpdate')
  }
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
```

## 卸载阶段

### 钩子函数 - componentWillUnmount()

```js
import React, { Component } from 'react'
let timer = -1
export default class Son extends Component {
  constructor() {
    super()
    console.log(' Son子组件的constructor')

    timer = setInterval(() => {
      console.log('定时器执行')
    }, 1000)
  }
  render() {
    console.log('Son子组件的render')
    return <div>Son</div>
  }
  componentDidMount() {
    console.log('Son子组件的componentDidMount')
  }
  componentDidUpdate() {
    console.log('Son子组件的componentDidUpdate')
  }
  // 【组件卸载，执行一些清理工作】组件即将销毁的时候，要将全局的定时任务，全局变量，全局...等等销毁
  componentWillUnmount() {
    clearInterval(timer)
    console.log('Son子组件销毁了componentWillUnmount')
  }
}
```

## 父子组件的钩子函数执行顺序

父组件constructor → 父组件的render → 子组件的constructor → 子组件的render → 子组件的componentDidMount → 父组件的componentDidMount
![在这里插入图片描述](https://img-blog.csdnimg.cn/b9689ae185d34cfc9b79987d574f262c.png)
