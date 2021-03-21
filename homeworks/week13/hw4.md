## Webpack 是做什麼用的？可以不用它嗎？
1. Webpack 是一個開源的前端打包工具。Webpack 提供了前端開發缺乏的模組化開發方式，將各種靜態資源視為模組，並從它生成最佳化過的程式碼。
簡單來說就是把 module bundler 打包在一起，把 module 轉換成瀏覽器看得懂的東西。
2. 我們的確是可以不使用它，而使用原生的語法，但是使用原生語法就會有可能遇到瀏覽器不支援的情況，或是如果想使用別人的寫好的套件，也是一件非常不容易的事情，所以使用 webpack 就可以大大增加我們開發的速度。

## gulp 跟 webpack 有什麼不一樣？
1. webpack - bandle，把所有東西都打包在一起(JS,SCSS,Iamge),有些 task 做不到，如校正時間，定時 call api，**最主要的功能就是 bandle**. 
2. gulp - 有很多 task，本身就是 task manager，**本身做不到 bandle**，需要其他插件才能使用.

## CSS Selector 權重的計算方式為何？
inline style > ID > Class > Element > *
1. inline style : 就是寫在 html 行內的 style，權重最高，權重為 1-0-0-0。
2. ID : 在 html 中寫成 id = ...，在 CSS 中帶有 #，權重為 0-1-0-0。
3. Class : 在 html 中寫成 class = ...，在 CSS 中帶有 .，權重為 0-0-1-0。
4. Element : 如 div, li, head ...，權重為 0-0-0-1。
5. * : 全站預設值，權重為 0-0-0-0。
6. !important : 高於任何權重，只要使用就可以蓋過其他權重，權重為 1-0-0-0-0。
計算方式為每使用一個就加法，如 div 就是 1 ， class = 就加 10 ，最後計算數量多的會蓋過數量少的。

參考資料：
1. [WIKI-Webpack](https://zh.wikipedia.org/wiki/Webpack)
2. [Webpack教學 (一) ：什麼是Webpack? 能吃嗎？](https://medium.com/i-am-mike/%E4%BB%80%E9%BA%BC%E6%98%AFwebpack-%E4%BD%A0%E9%9C%80%E8%A6%81webpack%E5%97%8E-2d8f9658241d)
3. [webpack 新手教學之淺談模組化與 snowpack](https://blog.huli.tw/2020/01/21/webpack-newbie-tutorial/)
4. [Day20：小事之 CSS 權重 (css specificity)](https://ithelp.ithome.com.tw/articles/10196454)

## P1 你知道 webpack 的目的以及原理
## P1 你熟悉如何使用 webpack 進行模組化開發
## P1 你知道如何使用 Promise
## P2 你知道如何使用 fetch
## P2 你知道 gulp 的目的以及原理
## P2 你知道 CSS Sprites 與 Data URI 的優缺點
## P2 你知道什麼是 uglify 與 minify
## P3 你熟悉如何使用 gulp 建構自動化工作流程
## P3 你知道 CSS 優化的一些小技巧
