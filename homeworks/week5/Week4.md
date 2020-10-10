## 第四週
### P1 你知道網路背後大概的運作模式
1. 瀏覽器（客戶端）發出 request 給 D.N.S Server。
2. Server 回傳 IP 位置給瀏覽器。
3. 瀏覽器發出 request 給 IP 位置的 Server。
4. Server 驗證後回傳封包。
5. 瀏覽器下載封包裡面會有 Html CSS JS 程式碼等等。
6. 最後在瀏覽器中顯示。
### P1 你知道什麼是 Request 跟 Response
Request - 由客戶端發出請求後傳給伺服器端，希望能得到回覆。
Response - 收到請求通知後，處理完資料後由伺服器端發出。
### P1 你知道什麼是 DNS 以及運作原理
DNS（Domain Name System），也稱呼為網域名稱系統。
運作原理是一個把 IP 位置轉換成人類可讀的網域名稱或是把網域名稱轉換成電腦可讀的 IP 位置的系統。
### P1 你知道 HTTP 與 HTTPS 的差異
HTTP - 全文為HyperText Transfer Protocol，中文翻為『超文本傳輸協定』，是一種用於分佈式、協作式和超媒體訊息系統的應用層協定，是全球資訊網的數據通信的基礎。
HTTPS - 又稱『超文字安全傳輸通訊協定』是一種網際網路通訊協定，可確保資料在使用者的電腦和網站之間傳輸時，保有完整性和機密性。使用者造訪任何網站時，都希望能享有安全而私密的線上體驗。
HTTPS 會透過「傳輸層安全標準」通訊協定 (TLS) 提供以下三道重要的資安防護網：
1. 加密：對交換的資料進行加密，防止資料遭到竊取。也就是說，當使用者在瀏覽網站時，任何人都無法「竊聽」其對話、追蹤他們在多個網頁之間轉換的活動，或竊取其資訊。
2. 資料完整性：系統會偵測出資料在傳輸過程中是否遭到有意或無意的修改或破壞。
3. 驗證：驗證您的使用者是否與預期的網站進行通訊。這能預防中間人攻擊並建立使用者的信任感，進而促進其他商業利益。
**兩者差異：HTTP 沒有辦法保障使用者安全，HTTPS 卻可以，是因為 HTTPS 經過加密，但 HTTP 並沒有。**
### P1 你知道 localhost 跟 127.0.0.1 是什麼
127.0.0.1 和 localhost 都能稱呼為本地端，意思是指個人電腦的網路接口。
### P1 你知道 GET 與 POST 的差別
GET - 像是明信片，只能把內容寫在  http-header 中，檔案較小。
POST - 像是正常信封，可以寫信封（http-header）也可以寫在信中 （message-body），檔案較大。
**原文出處**：『如果 HTTP 代表現在我們現實生活中寄信的機制，那麼信封的撰寫格式就是 HTTP。我們姑且將信封外的內容稱為 http-header，信封內的書信稱為 message-body，那麼 HTTP Method 就是你要告訴郵差的寄信規則。

假設 GET 表示信封內不得裝信件的寄送方式，如同是明信片一樣（感謝網友 Kevin 的建議，採用明信片來詮釋 GET），你可以把要傳遞的資訊寫在信封(http-header)上，寫滿為止，價格比較便宜。然而 POST 就是信封內有裝信件的寄送方式（信封有內容物），不但信封可以寫東西，信封內 (message-body) 還可以置入你想要寄送的資料或檔案，價格較貴。

使用 GET 的時候我們直接將要傳送的資料以 Query String（一種Key/Vaule的編碼方式）加在我們要寄送的地址(URL)後面，然後交給郵差傳送。使用 POST 的時候則是將寄送地址(URL)寫在信封上，另外將要傳送的資料寫在另一張信紙後，將信紙放到信封裡面，交給郵差傳送。』
[淺談 HTTP Method：表單中的 GET 與 POST 有什麼差別？](https://blog.toright.com/posts/1203/%E6%B7%BA%E8%AB%87-http-method%EF%BC%9A%E8%A1%A8%E5%96%AE%E4%B8%AD%E7%9A%84-get-%E8%88%87-post-%E6%9C%89%E4%BB%80%E9%BA%BC%E5%B7%AE%E5%88%A5%EF%BC%9F.html)
### P1 你知道常用的 HTTP Header
1. General header: Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.
一般的 header : headers 提交了 request 和 responses 但是和已傳送的資料沒有關連。
2. Request header: Headers containing more information about the resource to be fetched or about the client itself.
發出 header ： header 包含了更多關於被取得的資訊或是客戶端的資訊。
3. Response header: Headers with additional information about the response, like its location or about the server itself (name and version etc.).
回覆 header ： Headers 有更多關於回覆的資訊，像是位置或是伺服器的資料（名字或是版本等等）。
4. Entity header: Headers containing more information about the body of the entity, like its content length or its MIME-type.
實體 header ： Header 包含更多關於主體內容的資訊，像是內容長度
或是網際網路媒體型式。

### P1 你知道什麼是 API
API，全名叫做 Application Programming Interface，說白了 API 最終目的就是交換資料，讓別人可以拿到你的資料外，你也可以拿到別人的資料，資料則是純粹的資料而不是畫面，API 就是拿來交換資料的東西，更好的說法是可以使用對方『有開放』的功能，而對方也是如此。
### P1 你會使用 node.js 寫出串接 API 的程式
詳情請參閱 Week4-hw2。
### P1 你知道 HTTP method 有哪些
GET - 方法請求展示指定資源。使用 GET 只能請求資料。
HEAD - 與 GET 使用方法相同，但他沒有 response body。
POST - 提交指定資源，通常會改變伺服器的狀態或副作用（side effect）。
PUT -  會取代指定資源的所有 request payload（http request 的 payload body）
DELETE - 會刪除指定資源。
OPTIONS - 描述指定資源的溝通方法（communication option）。
TRACE - 與指定資源標明伺服器之間，執行迴路返回測試（loop-back test）。
CONNECT - 指定資源標明的伺服器之間，建立隧道（tunnel）。
### P1 你知道基本的 HTTP statud code，像是 200、301、400、404、500
### 成功回應
200 - 請求成功。依照成功的狀況定義。
如GET：資源成功獲取並於訊息主體中發送。
HEAD：entity 標頭已於訊息主體中。
POST：已傳送訊息主體中的 resource describing the result of the action。
TRACE：伺服器已接收到訊息主體內含的請求訊息。
### 重定向訊息
301 （Moved Permanently） - 此回應碼的意思是，請求資源的 URI 已被改變。有時候，會在回應內給予新的 URI。
### 用戶端錯誤回應
400 Bad Request - 此回應意味伺服器因為收到無效語法，而無法理解請求。
404 Not Found - 伺服器找不到請求的資源。因為在網路上它很常出現，這回應碼也許最為人所悉。
### 伺服器端錯誤回應
500 Internal Server Error - 伺服器端發生未知或無法處理的錯誤。

參考資料：
1. [什麼是網路(Internet)？](https://kopu.chat/2017/01/18/internet/)
2. [[第四周]網路基礎-HTTP，Request，Response - Yakim shu](https://yakimhsu.com/project/project_w4_Network_http.html)
3. [什麼是 DNS？](https://aws.amazon.com/tw/route53/what-is-dns/)
4. [使用 HTTPS 確保網站安全無虞](https://support.google.com/webmasters/answer/6073543?hl=zh-Hant)
5. [你知道http 跟 https有何不同嗎?](https://www.piece2ec.com.tw/News.asp?Up_ID=1040&ID=1045&Class_ID=2)
6. [網際網路名詞介紹 - 127.0.0.1](https://sites.google.com/site/wangjiwanglumingcijieshao/home/127-0-0-1)
7. [從拉麵店的販賣機理解什麼是 API](https://medium.com/@hulitw/ramen-and-api-6238437dc544)
8. [HTTP 請求方法](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods)
9. [HTTP 狀態碼](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)
10. [Week4 JS 實作串接 API（二）](https://www.coderbridge.com/@v61265/c25ef83b1cf1425eabff8edbd0aefa00)