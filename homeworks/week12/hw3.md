## 請簡單解釋什麼是 Single Page Application
單頁應用（英語：single-page application，縮寫SPA）是一種網路應用程式或網站的模型，它通過動態重寫當前頁面來與用戶互動，而非傳統的從伺服器重新載入整個新頁面。
這種方法避免了頁面重新整理，打斷客戶體驗。所有代碼都是通過單個頁面載入，單頁應用（英語：single-page application，縮寫SPA）是一種網路應用程式或網站的模型，它通過動態重寫當前頁面來與用戶互動，而非傳統的從伺服器重新載入整個新頁面。

## SPA 的優缺點為何
優點：除了降低伺服器的運算效能消耗及資料吞吐量，還讓網站使用者使用網站有如使用獨立的應用程式一樣流暢。
缺點：由於需要仰賴前端下載大量 JavaScript 檔案，隨後才計算、渲染畫面，造成第一畫面需要較長的反應時間，在性能較差的行動裝置上更是如此。
總結：為何需要使用 SPA :通常有兩點，一點是一定要使用，如音樂網站，使用者並不會希望在聽歌時，想看歌手資料需要重新載入畫面，另一點是希望能給使用者更好的使用體驗，因為使用 SPA 可以不用重新載入就能得到資料，所以在使用上比起傳統網頁更加流暢，但是由於在使用時需要下載大量的檔案，所以在一些性能較差的裝置中會需要更長的使用時間。 
## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？
PHP 直接輸出是發出一次 request 然後得到 response 拿到資料，如果需要新的資料，如留言板的新留言就一定要重新整理，不然是沒辦法得到新的資料。
使用 API 再使用 Ajax 的話，就屬於 SPA 的方式，屬於非同步的方式得到動態資料，這種好處就是，一切資料都是動態，讓使用者如果需要看其他的資料時可以不需要一直重新載入，而達到流暢使用的體驗。
## P1 你知道什麼是 SPA
<h3>單頁應用（英語：single-page application，縮寫SPA）是一種網路應用程式或網站的模型，它通過動態重寫當前頁面來與用戶互動，而非傳統的從伺服器重新載入整個新頁面。</h3>
種方法避免了頁面重新整理，打斷客戶體驗。所有代碼都是通過單個頁面載入，單頁應用（英語：single-page application，縮寫SPA）是一種網路應用程式或網站的模型，它通過動態重寫當前頁面來與用戶互動，而非傳統的從伺服器重新載入整個新頁面。

## P1 你知道怎麼樣用 PHP 自己寫出 API

## P1 你知道如何在前端與自己開的 API 串接

## P1 你知道在 server 與在 client render 的差別
Server-side-render:在伺服器做宣染，傳送資料是宣染後的 Html 格式。
Client-side-render:在瀏覽器上做宣染，傳送資料是 Json 格式。
## P1 你知道 jQuery 是做什麼的
<h3>jQuery是一套跨瀏覽器的 JavaScript 函式庫，簡化 HTML 與 JavaScript 之間的操作。</h3>
jQuery 的語法設計使得許多操作變得容易，如操作文件（document）、選擇文件物件模型（DOM）元素、建立動畫效果、處理事件、以及開發 Ajax 程式。
jQuery 也提供了給開發人員在其上建立外掛程式的能力。這使開發人員可以對底層互動與動畫、進階效果和進階主題化的組件進行抽象化。模組化的方式使 jQuery 函式庫能夠建立功能強大的動態網頁以及網路應用程式。

## P1 你知道 jQuery 與 vanilla js 的差別
<h3>vanilla js 就是 《HTML/CSS/JavaScript》</h3>
我們前幾週學習的 querySelector 原生的 JS 指令，其實根本就沒有 vanilla js 這個框架，這只是笑話，是作者做了一個網站嘲諷那些沒有框架和程式庫(jQuery)就寫不出東西來的開發者，所以 vanilla js 就是原生的 JS。
<h3>jQuery 是一個以 Javascript 來編寫的函式庫，簡單來說就是先幫你實作了很多 Javascript 的函數功能，用途是讓開發者可以更輕鬆方便的製作網站功能</h3>
它讓我們使用許多指令時都可以比起原生指令簡單很多，不管是 DOM 或是 Ajax，開發網站不一定需要 jQuery 但是有使用 jQuery 會方便很多。

## P1 你知道什麼是 Bootstrap
<h3>Bootstrap是一組用於網站和網路應用程式開發的開源前端（所謂「前端」，指的是展現給終端使用者的介面。</h3>
與之對應的「後端」是在伺服器上面執行的代碼）框架，包括HTML、CSS及 JavaScript的框架，提供字體排印、表單、按鈕、導航及其他各種元件及Javascript 擴充套件，旨在使動態網頁和 Web 應用的開發更加容易。

## P2 你知道 Bootstrap 原理及如何應用
<h3>Bootstrap 是為了讓開發者可以快速的使用 CSS 來達成想要的目的</h3>，如 form、card 等，如果可以使用他人提供的程式碼生成好看工整又快速，這就成為很多開發者的希望，有需求就會有市場，因此有了 CSS 的框架將程式碼進行封裝，這就是 Bootstrap ，在 Bootstrap 中有大量好看又美麗的 CSS 格式，讓開發者可以從中選取，並套用在自己網頁中，提高了工作效率，讓開發人員更快更好完成工作，降低工作難度。
應用方式：只需要將檔案通過 link 的方式連結到自己的 html 頁面當中，就可以去 Bootstrap 官網中挑選自己喜歡的樣式，複製到程式碼中即可，簡單、快速、好用，這讓 Bootstrap 在 CSS 框架中仍然是其中的佼佼者。

參考資料：
1. [單頁應用](https://zh.wikipedia.org/wiki/%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8)
2. [前端三十｜18. [FE] 為什麼網站要做成 SPA？SSR 的優點是什麼？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-18-fe-%E7%82%BA%E4%BB%80%E9%BA%BC%E7%B6%B2%E7%AB%99%E8%A6%81%E5%81%9A%E6%88%90-spa-ssr-%E7%9A%84%E5%84%AA%E9%BB%9E%E6%98%AF%E4%BB%80%E9%BA%BC-c926145078a4)
3. [跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://hulitw.medium.com/introduction-mvc-spa-and-ssr-545c941669e9)
4. [前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)
5. [jQuery](https://zh.wikipedia.org/wiki/JQuery)
6. [Bootstrap](https://zh.wikipedia.org/wiki/Bootstrap)
7. [Client-side Render 和 SSR 的差別](https://noob.tw/client-server-side-render/)
8. [原生的 JavaScript 用法 -- Vanilla.js](https://medium.com/%E7%A8%8B%E5%BC%8F%E4%BA%BA%E6%9C%88%E5%88%8A/%E5%8E%9F%E7%94%9F%E7%9A%84-javascript-%E7%94%A8%E6%B3%95-vanilla-js-e53d3cdb5e8)
9. [精通VanillaJS](https://www.ithome.com.tw/voice/106182)
10. [Vanilla JS——世界上最轻量的JavaScript框架（没有之一）](https://segmentfault.com/a/1190000000355277)
11. [jQuery是什麼，它跟JavaScript有什麼關係？它又有什麼能耐呢？](https://progressbar.tw/posts/6)
12. [讓小白都能懂的bootstrap原理與實踐解析](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/423720/)