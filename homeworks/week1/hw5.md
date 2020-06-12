## 請解釋後端與前端的差異。
#前端(Front-End-Developer)
是我們現在隨處可見的網站，小到網站按鈕大至網頁建設都可以屬於前端的工作範圍，網頁基礎語法使用 HTML，網頁排版 UI/UX使用CSS和網頁進行互動使用Javascript。
#後端(Back-End-Developer)
是網頁完成後，背後需要讓網頁存取資料庫，資料庫的維護和開發就屬於後端的工作內容。

## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

Browser request server 存取資料 Database
		response

1. Browser request DNS Sever：如何去 google.com 
2. DNS回復：你去10.1.1.1
3. Browser send request to 10.1.1.1
4. 位於 10.1.1.1 的 server 收到 request
5. Server 去詢問 Database，查詢要找的關鍵字，搜尋引擎會使用，爬行網站 (crawling)與建立網站索引 (index)，使用網頁相關性去排序 / 排名 (ranking)，去尋找要的結果
6. Database找到答案，response data toserver，提供我們符合條件的網站透過相關性排序/ 排名，標題、內容描述、網址呈現到查詢結果中
7. Server response to broswer
8. Browser 分析 data並顯示出來。


參考資料：
[CS101]-初心者的計概與 Coding 火球術- 4-1：為什麼我連不上這個網頁－－網路基礎概論
[三分鐘快速了解搜尋引擎原理！提升網站排名的必備知識](https://inboundmarketing.com.tw/seo/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E5%8E%9F%E7%90%86-%E8%AE%93%E7%B6%B2%E7%AB%99%E6%8E%92%E5%90%8D%E5%8A%A0%E5%88%86.html)


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. diff - 比較兩種檔案之間的不同 (file1 file2)
2. echo - 寫入檔案或是控制是某列印出指令列 (echo on/off or echo > filename)
3. type/cat 將檔案依照順序讀取並把內容送到標準輸出(螢幕)



參考資料：
1. [diff 及 patch 指令 – 產生, 寫入 Patch 檔](https://www.opencli.com/linux/diff-patch-command)
2. [BAT批次次指令： ECHO 的功能介紹](http://forum.twbts.com/viewthread.php?tid=10177)
3. [初階操作 - 如何對資料做基本的處理](http://boson4.phys.tku.edu.tw/UNIX/Unix%20Command/index_basic.htm)


