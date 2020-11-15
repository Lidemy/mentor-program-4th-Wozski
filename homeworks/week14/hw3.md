## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
1. DNS - Domain Name System
又稱為網域名稱系統，它可以將 IP Adress 轉換成可閱讀的網域名稱，因為在交換資訊時電腦都是用 IP 來進行查詢位置，而當我們需要閱讀時，這些 IP 往往是難以閱讀以及記憶，所以才有了 DNS，經過 DNS 轉換後網址讓人可閱讀、容易記憶外且較短小和美觀。
2. Google Public DNS
Google Public DNS 是Google於2009年12月5日起提供的一個免費域名解析服務。
Google Public DNS 是Google面對大眾推出的一個公共免費域名解析服務。而 Google 表示推出免費 DNS 服務的主要目的就是為了改進網路瀏覽速度、改善網路用戶的瀏覽體驗，為此 Google 並不使用 BIND 等廣為使用的 DNS 程式，而是以自行開發的軟體對 DNS 伺服器技術進行了改進，在兩層計算機叢集上，快取 DNS 伺服器平衡負載以提升效能，同時保證了 DNS 服務的安全性和準確性。
對大眾的好處如下:
1. 加速瀏覽體驗 ( Speed up your browsing experience )
2. 提升網路安全 ( Improve your security )
3. 直接取得 DNS 查詢結果 ( Get the results you expect with absolutely no redirection )
至於對於 Google 的好處，我暫時沒有找到在網路上查詢到相關資料，但是我推測對於 GOOGLE 自身的好處是
1. 讓大眾可以直接連線到 Google 自己的搜尋引擎，引導大眾流量。
2. 可以更加適合 Chrome。
這是我目前想到的兩點，但也許是我關鍵字搜尋錯誤，並沒有找到想要的答案。

## 什麼是資料庫的 lock？為什麼我們需要 lock？
1. 在我們作業中，資料庫的建立通常是只有我們單一做使用，但是如果在多人開發的專案裡，資料庫是共用，這樣就會延伸出，如果 A 在存取覆寫資料的同時，B 也在對同一筆資料進行一樣的動作，這樣會導致資料出問題外，也可能導致資料庫的錯誤。
為了避免這種狀況而有了 lock。
鎖定法(Locking)：它是利用廣被使用的一種並行控制的技術，
當 A 執行讀取（Read）或寫入（Write）資料庫單元操作時，會先將資料鎖定（Lock），此時，若 B 同時存取相同資料，因為資料已經被鎖定，所以 B 需要等待，直到 A 解除資料鎖定（Unlock）。
為了確保交易和資料的邏輯完整性。
在SQL Server資料庫管理系統中，使用「鎖定」物件來防止多個使用者同時對資料庫作修改，並防止使用者讀取被其他使用者變更的資料。鎖定有助於確保交易與資料的邏輯完整性，這就是為什麼我們需要 lock。

## NoSQL 跟 SQL 的差別在哪裡？
先了解什麼是 SQL 和 NoSQL:
SQL (Structured Query Language 結構化查詢語言) 是一種專門用來管理與查詢關聯式資料庫(Relational database)的程式語言。
NoSQL資料庫的意思是 "Not Only SQL"，也就是不限定為「關聯式資料庫」的資料庫管理系統的統稱。
什麼是關聯式資料庫（Relational Database Menagement System, RDBMS）？
1. 資料是以一個或是多個資料表 (table) 的方式存放。
2. 資料之間有明確的關聯。
3. 關聯式資料庫以 SQL 語言操作。

NoSQL 非關聯式資料庫:
隨著電腦、行動裝置、與互聯網的普及，網路應用程式的流量大幅地增長，同時 互聯網也進入「使用者生產內容 (user generated content)」為主流的時代。對於 Youtube、Facebook 這些社交網站來說，每分每秒需要處理的資料量是過去一般網站的非常多倍。
而從使用者的角度來看，他們在這些平台上對於資料的需求也跟過去不太一樣。資料庫的主要功能，從過去的「能夠無錯誤地同步處理結構清楚的資料」，到現在慢慢有新需求誕生：「處理高速且大量產生的資料，但不需要即時同步，也不需絕對地零錯誤。」為了呼應這個需求，NoSQL 資料庫就隨之興起了。
NoSQL = Not Only SQL 也就是不限定為「關聯式資料庫」的資料庫管理系統的統稱，在操作上，NoSQL 並不支持 SQL 語法 與 SQL 的邏輯。
NoSQL 將聚集後的資料，作為儲存的最小單位，透過縝密豐富的資料結構，有利於將資料分散到多個節點；比起資料的關聯，NoSQL 更關注資料所代表的人（例如使用者）與物（例如一篇分享在社交平台上的文章）的「狀態」變動，例如文章被分享、按讚等。
**此外，NoSQL 還有一個特點是，不講求資料同步，只求最後結果一致。**

所以兩者的最大的差異是在於，**一個講求即時同步、一個講求相同結果但不要求即時速度。**


## 資料庫的 ACID 是什麼？
ACID，是指資料庫管理系統（DBMS）在寫入或更新資料的過程中，為保證事務（transaction）是正確可靠的，所必須具備的四個特性：原子性（atomicity，或稱不可分割性）、一致性（consistency）、隔離性（isolation，又稱獨立性）、持久性（durability）。
1. Atomicity（原子性）：一個事務（transaction）中的所有操作，或者全部完成，或者全部不完成，不會結束在中間某個環節。事務在執行過程中發生錯誤，會被回滾（Rollback）到事務開始前的狀態，就像這個事務從來沒有執行過一樣。即，事務不可分割、不可約簡。 
2. Consistency（一致性）：在事務開始之前和事務結束以後，資料庫的完整性沒有被破壞。這表示寫入的資料必須完全符合所有的預設約束、觸發器、級聯回滾等。
3. Isolation（隔離性）：資料庫允許多個並發事務同時對其數據進行讀寫和修改的能力，隔離性可以防止多個事務並發執行時由於交叉執行而導致數據的不一致。事務隔離分為不同級別，包括未提交讀（Read uncommitted）、提交讀（read committed）、可重複讀（repeatable read）和串行化（Serializable）。
4. Durability（持久性）：事務處理結束後，對數據的修改就是永久的，即便系統故障也不會丟失。
(補充) Transaction：交易（Transaction）是一個單元工作（unit of work），包括一個起始點，標註交易開始，這個單元工作包括了數個步驟來完成，交易結束時的動作有兩個，數個步驟全部執行成功，交易才算成功並提交變 更，只有當中有一個失敗，則整個交易宣告失敗並回復所有變更。

## P1 你知道虛擬空間、虛擬主機以及實體主機的差別
虛擬主機（virtual hosting），或稱 共享主機（shared web hosting），又稱虛擬伺服器，是一種在單一主機或主機群上，實現多網域服務的方法。
虛擬主機之間是完全獨立，可以由客戶自行管理，虛擬並不是不存在，而是指空間是由實體的伺服器延伸而來，而其硬體可以專門服務單個伺服器或是伺服器群。
實體主機(Dedicated Server)，實體主是獨享電腦硬體，就像我們的桌上型電腦或是筆記型電腦那樣，專門給單一使用者服務，所以我認為兩者最大的差異在於，是否單一為使用者服務。
## P1 你知道什麼是網域（Domain）
網域名稱（英語：Domain Name，簡稱：Domain），簡稱域名、網域，是由一串用點分隔的字元組成的網際網路上某一台電腦或電腦組的名稱，用於在資料傳輸時標識電腦的電子方位。
域名可以說是 IP 的代稱，我們可以使用設定的域名，把 IP 位置做對應，這樣只要輸入設定的域名，就可以順利導入到相對應的 IP 位置上。

## P1 你知道如何設定網域（A、CNAME）
先把設定主機的 IPV4 的 IP 位置做複製，之後前往購買網域，購買完成後，在購賣網域的網站進行設定，把設定好的網域和主機 IPV4 綁定在一起後，就能在網址列輸入網域導向想要呈現的網頁。
## P1 你知道如何用 SSH 遠端連線到自己的主機
輸入指令 ```ssh 金鑰位置 虛擬主機帳號名稱@虛擬主機 IPV4```（如果無金鑰位置需要輸入帳號密碼）。
## P1 你知道如何部署應用程式
以 phpmyadmin 為例子在虛擬主機 ubuntu 為例子：
1. ``` $ sudo apt install phpmyadmin ```
2. 記得連接 apache2
3. 設定 dbconfig-common、設定密碼
4. 更改 phpmyadmin 登入設定，改為密碼登入
5. 設定 root 的密碼
6. 成功後，在瀏覽器上輸入 IPV4/phpmyadmin 就能看見登入畫面了。
----------------------------------------------------------------------------------------------------------
以下等複習週後補完。

## P2 你知道什麼是 No SQL
## P2 你知道什麼是 Transaction 與 lock
## P2 你知道資料庫的 ACID 是什麼
## P3 你知道什麼是資料庫的 View 以及使用時機
## P3 你知道什麼是 Stored procedure 以及如何使用
## P3 你知道資料庫的 Trigger 以及使用時機

參考資料：
1. [WIKI-Google Public DNS](https://zh.wikipedia.org/wiki/Google_Public_DNS)
2. [使用 Google Public DNS 服務，上網速度不一定會變快！](https://blog.miniasp.com/post/2009/12/08/Use-Google-Public-DNS-may-not-surfing-faster-as-you-expected)
3. [什麼是 DNS？](https://aws.amazon.com/tw/route53/what-is-dns/)
4. [資料庫的交易鎖定Locks – 軟體品管的專業思維](www.qa-knowhow.com)
5. [WIKI-NoSQL](https://zh.wikipedia.org/wiki/NoSQL)
5. [WIKI-ACID](https://zh.wikipedia.org/wiki/ACID)
6. [簡介交易](https://openhome.cc/Gossip/EJB3Gossip/TransactionABC.html)
7. [SQL/NoSQL是什麼？認識資料庫管理系統DBMS](https://tw.alphacamp.co/blog/sql-nosql-database-dbms-introduction)
8. [虛擬主機](https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA)
9. [域名](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D)
10. [Linux 的 SSH 安全加密連線指令使用教學、設定檔配置範例](https://blog.gtwang.org/linux/ssh-command-tutorial-and-script-examples/)
11. [部署 AWS EC2 遠端主機 + Ubuntu LAMP 環境 + phpmyadmin](https://github.com/Lidemy/mentor-program-2nd-yuchun33/issues/15)