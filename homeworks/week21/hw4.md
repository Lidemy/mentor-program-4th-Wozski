## 為什麼我們需要 React？可以不用嗎？
<h3>使用 React 優點以下：</h3>

1. 用純 JS 在前端產生 HTML 
2. 自定義 Component，方便開發
3. 因為完全是 JS 操作 UI 的關係，使得它可以跟後端分離，達到即時互動、自動更新的效果
4. 只是一個 JS 函式庫，所以容量小易移植
5. 使用 Virtual DOM，重繪時效率高（註：Virtual DOM 是以 JavaScript 物件模擬特定 DOM 結構而產生的樹狀結構。用途是不直接操作 DOM，而改操作這些物件。待一個段落後，再將這些變更更新回真實的 DOM 上，以期提升效能。）
6. 父子 Component 可透過 props 通訊
7. 只負責 MVC 的 View 部份，所以不算框架，彈性高（註：MVC模式（Model–view–controller）是軟體工程中的一種軟體架構模式，把軟體系統分為三個基本部分：模型（Model）、視圖（View）和控制器（Controller）。）
<h3>為何要使用 React<h3>
以下摘錄(为什么要使用react-知乎)[https://zhuanlan.zhihu.com/p/27515987] 其中一段：『
很多人都是 react 的虚拟 DOM，diff 算法能提升页面渲染速度，增加用户体验什么的。实际开发中，并没啥软用。你要懂，要熟悉用它，规避一些页面渲染 bug，页面性能自然就上去了。

我用 react 更看重一下几点：
1. 组件化的开发构思
使用 react，那页面实现基本就是组件嵌套组件来实现页面的开发了。相同业务逻辑、展示一样的东西都抽离出来，拼装实现，让你的页面更有模块化感。
一般来说，只要项目的 UI 设计风格大体类似，用 react 组件化开发思路，项目开发效率会非常高效、快捷。
2. 组件开发，展示基于状态控制，避免 DOM 操作
首先要认识到一点，开发过程中，操作 DOM 来控制渲染，是很麻烦的，也挺耗性能的。
react 组件，对于页面不同展示：定义个参数，来控制组件的展示状态，来实现复杂的页面交互的。你不需要再根据 id、class 去获取 dom 节点，在用 js 操作展示，最吐血的是你还要用字符串拼接的形式来展示东西。从开发模式的对比来说，略麻烦！
3. 单项数据流，更容易排查问题
react 是数据传参，是由父组件向子组件，从上往下层层传递的。亦或使用 redux，组件组件从 redux 所建立的代码仓库获取。
组件的页面更新都是基于数据变化，即更改代码仓库的数据，进而触发组件的更新。
基于这个逻辑，出现任何问题，只要监测各个点的数据变化，就能确定出问题所在。
使用 react 了，项目更便于维护。
4. react 组件有生命周期，其中可以使用 shouldComponentUpdate 函数，来控制组件是否渲染，让开发这可以清楚的了解、控制组件的渲染。
總結：
1. 組件化開發，把基礎組件(component)，只需要更改一小點即可
2. 把頁面變成模組化，並且分的很清楚，對於新增、修改、刪除等功能來說增添功能較便利，每個模組都是獨立的，所以有功能出錯時，不會影響到其他模組。
3. react 是透過 state 控制頁面，之後的維護和修改，通過追蹤和查看程式碼，就可以知道大體設計從而新增功能，頁面設計和邏輯更加清楚。
總結：使用 react 組件化開發，可以更方便去更改 DOM，並且不用擔心像傳統 JS 修改程式碼會去影響到其他 DOM，因為 react 已經把網頁的每一部分，都切成一個又一個的 component，所以即便修改單一組件，而去影響其他地方，如果出現 bug ，可以有效的縮小出問題的範圍，從而快速解決問題。
**React 是透過 state 宣染網頁，所以和傳統 JS 思考模式有一定的差異**

## React 的思考模式跟以前的思考模式有什麼不一樣？
目前學習到現在對於 React 的想法，是把 UI 切成非常小的單位(Component)，這樣方便去做修改和調整，每個組件都是獨立，所以在對某個 Component 進行修改時，並不會動到其他的地方而導致一連串的 Bugs ，加上使用 DOM 也比原生的 JS 來的更簡單方便，所以在製作類似 UI 時，可以非常快速的架設成功。
原生的 JS 在使用 DOM 時需要大量的程式碼，並且在抓取 id 或是渲染上，常常會需要字串拼接，就容易導致語法錯誤導致無法顯示，程式碼也較多。

所以我認為 React 和以前的思考模式最大的差異就是模組化，以前在寫程式碼時，常常會因為一個地方沒有寫好而導致後面一連串的錯誤，依賴性較高，但是 React 則是把每個部分都切成 Component 所以獨立性較強，依賴性較低，這點是我認為最大的差異性。

## state 跟 props 的差別在哪裡？
<h3>state</h3>
states 是元件內部狀態。動態（可用 setState 改值）。
與一般變數不同的是，它無法直接修改（初始化例外），只能用 this.setState() 修改。
每次使用 this.setState() 修改 state 都會造成元件重繪。
總結：state	無法被修改，除非使用 setState。
<h3>props</h3>
Component 使你可以將 UI 拆分成獨立且可複用的程式碼，component 就像是 JavaScript 的 function，它接收任意的參數（稱之為「props」）並且回傳描述畫面的 React element。
props 是 React 父子元件間溝通的橋樑。靜態（唯讀）。
父元件用屬性賦值的方式傳給子元件，子元件用 this.props 讀取。但不應於子元件內變動 （唯讀）。
父元件傳入的 props 改變將造成子元件重繪。
總結：類似 function 參數的東西，是可以變動的。

## P1 我知道 React 的目的以及原理
<h3>React 是一個陳述式、高效且具有彈性的 JavaScript 函式庫，用以建立使用者介面。它讓你使用小巧而獨立的「component」，來建立複雜的 UI。</h3>

以下摘錄 (一文掌握React 渲染原理及性能优化)[https://cloud.tencent.com/developer/article/1520009] 
『将 html 语法直接加入到 javascript 代码中，再通过翻译器转换到纯 javascript 后由浏览器执行。
这里调用了 React 和 createElement 方法，这个方法就是用于创建虚拟元素 Virtual Dom 的。React 把真实的 DOM 树转换成 Javascript 对象树，也就是 Virtual Dom。
每次数据更新后，重新计算 Virtual Dom ，并和上一次生成的 virtual dom 做对比，对发生变化的部分做批量更新。
而 React 是通过创建与更新虚拟元素 Virtual Element 来管理整个Virtual Dom 的。
虚拟元素可以理解为真实元素的对应，它的构建与更新都是在内存中完成的，并不会真正渲染到 dom 中去。』

## P1 我知道我們為什麼需要 React
React 不同以往傳統 Web 頁面開發模式，他更強調組件化，使用組件聚焦於視覺圖層，用 react 開發對於相似度高的頁面，開發起來會更加快速有效。
以上是摘錄(为什么要使用react)[https://zhuanlan.zhihu.com/p/27515987] 『React主要用于构建UI。从 MVC 模式中，只作为 V 层（视图层）。说白了，就是用 react 写 html+css。

React 不同于传统的 html+css+js 的 web 页面开发模式，它更强调组件化，使用组件的方式聚焦于视图层，借助 jsx 来写高内聚 UI 组件，单向数据流模式使得 UI 组件状态的维护管理更加清晰。

用 react 开发，组件化抽离页面元素，页面实现是相当于是拼装模式，对于页面相似度大的业务，会显得特高效、快捷。

』
## P1 我知道使用 React 跟之前使用 jQuery 的區別
jQuery - 會將 JS 和 HTML 分開管理，如果只是一個功能的程式碼還好，但是如果功能一多，程式碼就會變成非常複雜且難以維護。
React - 組件化抽離傳統頁面模式，讓後續維護和開發更加清楚方便。

## P1 我理解 state 跟 props 的不同
同 state 跟 props 的差別在哪裡？。
參考資料：
1. (Ract 官方文件)[https://zh-hant.reactjs.org/tutorial/tutorial.html#what-is-react]
2. (猴子也能看懂的 React 教學 - 1 - React 概念)[https://j6qup3.github.io/2016/08/06/%E7%8C%B4%E5%AD%90%E4%B9%9F%E8%83%BD%E7%9C%8B%E6%87%82%E7%9A%84-React-%E6%95%99%E5%AD%B8-1/#%E4%B8%8B%E8%BC%89-React]
3. (Virtual DOM 概述)[https://cythilya.github.io/2017/03/31/virtual-dom/]
4. (一文掌握React 渲染原理及性能优化)[https://cloud.tencent.com/developer/article/1520009] 
5. (为什么要使用react)[https://zhuanlan.zhihu.com/p/27515987]
6. (前端心得：從 jQuery 到 React hook)[https://medium.com/traveling-light-taipei/%E5%89%8D%E7%AB%AF%E5%BF%83%E5%BE%97-%E5%BE%9E-jquery-%E5%88%B0-react-hook-89d7c8e8d58]