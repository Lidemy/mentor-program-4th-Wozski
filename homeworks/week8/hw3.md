## 什麼是 Ajax？
在瀏覽器上發出 Request ，所運用到的技術 Ajax 『Asynchronous JavaScript and XML』，**並不能稱做是種「技術」，而是 2005 年時由 Jesse James Garrett 所發明的術語，描述一種使用數個既有技術的「新」方法。**
因為在傳送資料時會耗費較多的時間，所以在資料傳輸回來時，我們可以先執行其他事情，使用 Ajax 最大的優點就是能在不更新整個頁面的前提下維護資料，這使得 Web 可以更加迅速的反應用戶的動作，避免了那些沒有改變的資訊拖慢了網頁的讀取，導致使用者介面回應比本機應用慢得多。

## 用 Ajax 與我們用表單送出資料的差別在哪？
傳統 Web 填寫表單，當送出表單時就向網頁伺服器傳送一個請求，伺服器收到後再回傳一個新的網頁，但是這個做法花費太多得寬頻，因為在前後兩個頁面的 Html 往往相同，因為每次溝通都需要向伺服器傳送請求，回應的時間依賴於伺服器的回應時間，導致使用者介面比本機應用慢了很多。
而 Ajax 可以只要跟伺服器傳送必須的資料，並且在客戶端的 JS 處理伺服器的回應，這樣一來因為伺服器和瀏覽器之間交換的資料大量減少，伺服器的回應速度更快，同時，很多處理工作在客戶端都能完成，因此 Web 伺服器的負擔也減少了。

## JSONP 是什麼？
JSONP（JSON with Padding），是資料格式 JSON 的使用模式之一，可以讓網頁從別的網域要資料．另一個解決辦法就是使用跨來源資源共享 (CORS)，因為同源政策下，不同網域是不能夠直接交換資料，而 Html 的 script 的元素下則沒有限制，利用了這個特點網頁可以得到其他來源的動態產生的 JSON 資料，而這種使用方法就是所謂的 JSONP，用 JSONP 抓到的資料並不是 JSON 而是 JavaScript。

## 要如何存取跨網域的 API？
可以使用 JSONP 也可以使用跨來源資源共享(Cross-origin resource sharing)，JSONP 是使用 Html 的 script 來產生動態的 JSON 資料，而 (Cross-origin resource sharing)簡稱 CORS 是使用 HTTP 的 Header 來檢測是否有資格傳輸資料，通過驗證後頁面可以自由使用不同源的圖案、樣式、指令碼等等，而有這些規範是為了保障伺服器和瀏覽器相互之間是否都安全
如果需要使用這項技術，我們需要先用瀏覽器準備一個物件 XMLHttpRequest 來存取伺服器的資料，不再需要藉由刷新整個頁面的方法而中斷操作，接著使用者這邊發出 request ，只要伺服器那邊的 CORS 會先檢查Access-Control-Allow-Origin裡面的內容，如果裡面有包含現在這個發起 Request 的 Origin 的話，就會通過，讓程式順利接收到 Response。
## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
在第四週我們是用 local 發出 request 就沒有所謂同源政策的干預，所以只要發出 request 正確就能拿到 Response，但是在這週我們是透過 Browser 發出，所以會被同源政策給阻擋，目的是為了保護網路上的資訊安全。

## P1 你知道什麼是 API
API 又稱為應用程式介面(Application Programming Interface)，他可以連接多個軟體，是讓資料可以互相交換的方法，它可以進行呼叫(call)或請求(request)，不論呼叫或是請求都需要遵循相同的資料格式，而達到資料交換的結果，另外它還能進行擴充，使用戶可以可以透過各種方式對現有的功能進行不同程度的擴充。

## P1 你知道什麼是 Ajax
在瀏覽器上發出 Request ，所運用到的技術 Ajax 『Asynchronous JavaScript and XML』，是屬於非同步的一項技術
因為在傳送資料時會耗費較多的時間，所以在資料傳輸回來時，我們可以先執行其他事情，使用 Ajax 最大的優點就是能在不更新整個頁面的前提下維護資料，這使得 Web 可以更加迅速的反應用戶的動作，避免了那些沒有改變的資訊拖慢了網頁的讀取，導致使用者介面回應比本機應用慢得多。

## P1 你知道從網頁前端呼叫 API 與在自己電腦上寫程式呼叫的差異
在本地端不需要通過同源政策就可以得到交換資料，node.js 發出 request 給 server 後，server 回傳 response 這中間不會有任何限制、內容也不會有所更改。
在網頁呼叫則需要經過瀏覽器，瀏覽器上的 JS 經由瀏覽器發出 request 後，server 回傳，但是因為瀏覽器有所謂的同源政策加以限制，避免一些資料外洩或是惡意攻擊，或是增加一些資料如瀏覽器的版本等等。
所以差別在於是否有所限制，使用本地端沒有限制，而使用瀏覽器則有。

## P1 你知道什麼是同源政策（Same-origin policy）
同源政策是指，只有屬於同源的情況下才可以獲取到資料，如果不是同源的情況下就只能使用跨來源的方式獲取資料，但是跨來源必須在某些特定條件下才能順利完成，這樣的方式可以阻擋很多惡意的駭客攻擊。

## P1 你知道如何存取跨網域的資源（CORS）
CORS，全名為 Cross-Origin Resource Sharing，跨來源資源共享。
如果想要存取跨網域的資源，Server 需要在 Response 的 header 中帶上 Access-Control-Allow-Origin ，而當本地端的瀏覽器收到 Server Response 後，它會先檢查 Access-Control-Allow-Origin 的內容，如果裡面有發起 Request 的 Access-Control-Allow-Origin，就可以順利通過並且得到資料，所以如果需要存取跨網域的資源的話需要確認 Server 端中有加上 Access-Control-Allow-Origin，並且本地端的也符合 Origin 這樣才能順利取得資料。

## P1 你知道什麼是 JSON
JSON（JavaScript Object Notation），該語言以易於讓人閱讀的文字為基礎，用來傳輸由屬性值或者序列性的值組成的資料物件。儘管JSON是JavaScript的一個子集，但JSON是獨立於語言的文字格式，並且採用了類似於C語言家族的一些習慣。
簡而言之 JSON 就是一個使用純文字去做儲存和傳輸簡單的資料結構的方式，可以透過特定的格式去儲存資料也可以使用陣列和物件去傳輸較為複雜的資料。

## P2 你知道什麼是 JSONP 及其原理
JSONP（JSON with Padding）是資料格式JSON的一種「使用模式」，可以讓網頁從別的網域中要到資料，由於同源政策我們無法在非同源的情況下獲取資料，而 HTML 裡的 Script 是例外，因為 Script 是屬於開放的，所以我們可以使用 Script 從網頁中得到其他來源的動態產生的 JSON 資料來取得想要的資料，而這種使用方式就是所謂的 JSONP。 
參考資料：
1. [輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)
2. [維基百科- Ajax](https://zh.wikipedia.org/wiki/AJAX)
10. [Ajax](https://developer.mozilla.org/zh-TW/docs/Web/Guide/AJAX)
3. [維基百科- JSONP](http://xn--zh-ur4a.wikipedia.org/wiki/JSONP)
4. [跨來源資源共享](https://zh.wikipedia.org/wiki/%E8%B7%A8%E4%BE%86%E6%BA%90%E8%B3%87%E6%BA%90%E5%85%B1%E4%BA%AB)
5. [XMLHttpRequest](https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest)
6. [API](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%8F%A3)
7. [前端基礎 JavaScript篇：網頁與伺服器的溝通](https://hugh-program-learning-diary-js.medium.com/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A4%8E-javascript%E7%AF%87-%E7%B6%B2%E9%A0%81%E8%88%87%E4%BC%BA%E6%9C%8D%E5%99%A8%E7%9A%84%E6%BA%9D%E9%80%9A-eb921b02e836)
8. [Same Origin Policy 同源政策 ! 一切安全的基礎](https://medium.com/%E7%A8%8B%E5%BC%8F%E7%8C%BF%E5%90%83%E9%A6%99%E8%95%89/same-origin-policy-%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-%E4%B8%80%E5%88%87%E5%AE%89%E5%85%A8%E7%9A%84%E5%9F%BA%E7%A4%8E-36432565a226)
9. [你不可不知的 JSON 基本介紹](https://blog.wu-boy.com/2011/04/%E4%BD%A0%E4%B8%8D%E5%8F%AF%E4%B8%8D%E7%9F%A5%E7%9A%84-json-%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%B4%B9/comment-page-1/)
