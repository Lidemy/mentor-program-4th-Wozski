# 第一週
### P1 你說得出程式如何執行
在我們點擊程式後，發出執行程式的訊號後，依照程式所寫的內容而達到不同的效果，如訂購車票、電玩遊戲、社群交友等等...。
### P1 你理解寫程式的本質只是一行行的指令
『程式是照著你寫的跑，而不是照著你想的跑』- Huli
### P1 你了解前端與後端的區別
前端-只要是能夠用視覺看到的東西，可以簡稱為前端，如視覺特效、網頁內容、網頁互動等等。
後端-網頁背後的運行，都可以稱為後端，如資料庫，是發生在網頁背後，使用者無法一瞬間就看到的地方。
### P1 你能說出從發出一個 request 到接收 response 中間發生的事
1. 瀏覽器（客戶端）發出 Request 給 DNS Server
2. DNS Server 回傳 IP
3. 透過協定發到 Server 去
4. Server 收到後傳回 Response 給瀏覽器
5. 瀏覽器解析 HTML 的檔案，如果有 CSS、JS或圖像，瀏覽器會再個別傳出檔案的 Request  
6. 瀏覽器 Request 全部發送完畢
7. 開始下載檔案並套用在網頁中
### P1 你了解不同載具的差異在哪（Desktop、Mobile、Web）
Desktop - 是我們俗稱的桌面電腦，可以進行許多複雜的操作和計算，在開發程式中也佔有很重要的成分。
Mobile - 在現代幾乎人人一隻手機，手機軟體的需求也越來越大，除了原先可以遠距離溝通的功能，也延伸了許許多多額外的功能，如訂購餐廳及餐點、線上影音、電玩遊戲、出租汽機車...等等，越來越多功能，相信這還不是手機極限，未來也會有越來越多的新科技運用在上面。
Web，中文叫做全球廣域網，也叫全球資訊網。它是一種建立在網際網路上的網絡服務，提供網路服務的網站都可以稱作 Web，而組成網站的關鍵是網頁，網頁通常包含（圖像、音樂、文字）通過網頁達成服務。


### P1 你了解基本的 command line 指令
我最常使用的 command line指令如下：
1. ＄cd - 可以前往目錄或是想回到原先的目錄可以使用 ＄cd..
2. ＄pwd - 顯示你目前的所在位置
3. ＄ls - 顯示目錄下所有檔案名稱
4. ＄mkdir - 在所在目錄下建立資料夾
5. ＄touch - 可以更新檔案修改時間，如果沒有找到檔案會建立一個同名稱的檔案
6. ＄rm - 刪除檔案，＄rm -rf 刪除資料夾。
### P1 你知道 Git 在做什麼，以及為何我們需要 Git
Git 是一種分散式版本的版本控制系統，簡單來說就是可以把檔案分成很多個版本，無論新增、刪除、修改...等等，都可以設定一個新版本，如果未來需要找到某個版本時候的檔案，可以直接去做讀取而不用開非常多一樣名稱的檔案導致混亂以及備份的效果。
### P1 你知道 add、commit、push、pull 等基本 Git 指令
**add** - 把還沒追蹤的檔案加入追蹤，可以使用 ＄git add . 來加入所有未追蹤的檔案，也可以只選擇一種檔案做追蹤 ＄git add 檔案名。 
**commit** - 把檔案提交成一個版本，需要時可以倒退回當初提交時的狀態 
**push** - 把檔案和版本傳上 Github
**pull** - 把 GitHub 的版本或檔案拉下來
### P1 你知道怎麼使用 branch 並送出 Pull Request
1. 使用 ＄git branch 分支名稱可以開啟分支
2. 開啟後使用 ＄git checkout 分支名稱，可以切換到該分支
3. 使用 ＄git pull 網址 把檔案從 GitHub 拉下
### P2 你熟悉 Git Workflow（其實就是交作業的流程）
1. 使用 ＄git branch 分支名稱可以開啟分支
2. 開啟後使用 ＄git checkout 分支名稱，可以切換到該分支(不使用 master，避免檔案衝突) 
4. 使用 ＄git add 把檔案加入追蹤
5. 使用 ＄git commit -am 建立版本名稱
6. 使用 ＄git push origin 分支名稱 

參考資料：
1. [Mac 終端機常用指令](https://zhung.com.tw/article/mac-terminal-often-used-commands/)
2. [什麼是 Git？為什麼要學習它？](https://gitbook.tw/chapters/introduction/what-is-git.html)
3. [網路基礎 - HTTP，Request，Response](https://medium.com/@miahsuwork/%E7%AC%AC%E5%85%AD%E9%80%B1-%E7%B6%B2%E8%B7%AF%E5%9F%BA%E7%A4%8E-http-request-response-7d7e0cb88ed8)
4. [Web是什麼？開發Web應用需要哪些技術？](https://kknews.cc/code/6oe8aqm.html)