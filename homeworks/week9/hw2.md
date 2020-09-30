## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
TEXT：不設定長度，如果不知道屬性最大長度時，適合用 text。
VARCHAR：可以變更長度，可以設定最大長度，適合用在長度可以變化的屬性。
P.S. VARCHAR 實際範圍是 65532 或 65533 ，如果是 utf8 編碼最多則儲存 65532/3 = 21844 個字符。


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
1. Cookie 是存在客戶端的小型文字資料檔案，瀏覽器發出 Request 給 Server ，Server 要求瀏覽器設置 Cookie，瀏覽器便把資料存入 Cookie 中。
2. 使用 set-Cookie 可以設定 Cookie 或者直接使用 Cookie
3. 瀏覽器發送 Request 給 Server，Server 要求瀏覽器設定 Cookie

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
資安問題，如果只是用 Cookie 來設定資料，只要在瀏覽器上面更改 Cookie 就能輕易地入侵別人的帳號，最好的解決方法是把 Cookie 加密後放入 Session 中，這種方式就稱之為 Cookie-based session，意思就是你把所有的 Session 狀態都存在 Cookie 裡面，這樣可以有效的增加資安防護等級，缺點是存太多東西會導致資料太多而緩慢。
第二種方法是透過 ID 來辨識身份，這個 ID 又稱為 SessionIdentifier，簡稱 Session ID，
Server 只在 Cookie 裡面存一個 Session ID，其餘都在 Server 那邊，而 Server 那邊的資料稱為 Session Data，這需要把 Data 存在 Server 中。
第二個問題是資料庫存取的密碼是屬於沒有加密的密碼，如果資料庫被成功攻擊後，所有會員的密碼都會被偷走。

## P1 你知道 PHP 是什麼
PHP（全稱：PHP：Hypertext Preprocessor，即「PHP：超文字預處理器」），是一種開源的通用電腦手稿語言（手稿語言（英語：Scripting language）是為了縮短傳統的「編寫、編譯、連結、執行」（edit-compile-link-run 過程而建立的電腦編程語言），尤其適合網路開發並可嵌入 HTML 中做使用。
PHP 語法借鑒吸收 C 語言、JAVA 和 Perl 等流行電腦語言特點，易於一般程式設計師學習，PHP 的主要目標是允許網路開發人員快速編寫動態頁面。

## P1 你知道前端與後端的差別
前端-如網頁互動、美工和視覺等等，一切能夠讓使用者看見的的元素，都可以簡稱為前端。
後端-如資料庫運行，裡面的會員資料、留言時間等等，都會紀錄在後端的 Data-Base 裡，使前端客戶在操作網頁時能夠即時得到他們想要的資料和服務。

## P1 你知道什麼是資料庫
資料庫是後端存取電子檔案的地方，舉凡會員帳號、會員資料等等，有權限的使用者可以在資料庫中對檔案進行新增、讀取、修改和刪除等操作。

## P1 你了解基本的 SQL 語法，包括 Select、Insert Into、Delete 與 Update
1. Select - SELECT "欄位" FROM "表格名";
2. Insert into - Insert into users VALUES (
    'Jack', 20, 'Male'
);
3. Delete - DELETE FROM users
WHERE username = 'Tony';
4. Update - UPDATE users
    SET age = 20
WHERE username = 'Tony';

## P1 你能夠寫出基本的 CRUD 應用
CRUD(增刪查改)
C - Create 建立，使用語法 insert into
R - Read 讀取，使用語法 select from
U - Update 更新，使用語法 update
D - Delete 刪除，使用語法 delete

## P1 你知道什麼是 Session
Session 是讓 Request 變的安全的一種機制，跟 Cookie 一起使用可以大大增加資安的防護等級，可以使用網址列來實作 Session 或是依靠 Cookie，並不是一定只能使用 Cookie 來實作 Session。
1. Cookie-based session：是把狀態加密後存到 Cookie 中。
2. 另一種方法就是把狀態存到 Server 中，靠 Session ID 來辨識，可以存成檔案、存在記憶體中、也可以存在資料庫，只是操作方法不同

## P1 你知道什麼是 Cookie
Cookie 是您造訪過的網站所建立的檔案，可儲存您的瀏覽資訊，而這些內容在瀏覽器發出 Request 時會一起附上，瀏覽器發送一個 Request 給 Server，Server 叫瀏覽器設置 Cookie，瀏覽器便把這些資料存在 Cookie 裡面，瀏覽器帶著 Cookie 一起發 Request 給 Server，Server 會依照 Cookie 產生不同的狀況。
因為 Cookie 是儲存在客戶端的資訊，所以容易被竄改而引發資訊安全的問題，解決方法是加密 Cookie 並且把加密過後的資訊放進 session 中 。

## P1 你知道 Session 與 Cookie 的差別
Session 是讓 Request 變的安全的一種機制，可以使用網址列來實作，也可以依靠 Cookie 來保存，保存地方為 Server，因為是保存在伺服器中，所以比起 Cookie 較為安全。
Cookie 則是讓檔案存在客戶端的瀏覽器，因為是在客戶端，所以檔案容易被竄改或是攻擊，安全係數較低。

參考資料：
1. [白話 Session 與 Cookie：從經營雜貨店開始](https://medium.com/@hulitw/session-and-cookie-15e47ed838bc)
2. [MySQL性能优化之char、varchar、text的区别](https://blog.csdn.net/brycegao321/article/details/78038272)
3. [在 Chrome 中清除、啟用與管理 Cookie](https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=zh-Hant)
4. [Wiki-PHP](https://zh.wikipedia.org/wiki/PHP)
5. [Wiki-手稿語言](https://zh.wikipedia.org/wiki/%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80)
6. [Wiki-資料庫](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%BA%93)
7. [Wiki-增刪查改](https://zh.wikipedia.org/wiki/%E5%A2%9E%E5%88%AA%E6%9F%A5%E6%94%B9)
8. [簡明 SQL 資料庫語法入門教學](https://blog.techbridge.cc/2020/02/09/sql-basic-tutorial/)
