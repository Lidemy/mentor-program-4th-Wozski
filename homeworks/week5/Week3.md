# 第三週
### P1 你理解常用內建函式如何使用
Array.map() - 會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
Array.join - 將陣列以任何東西連接，再變成一個字串，回傳的是字串。
filter()主要用於過濾不符條件的陣列中的值，寫法與map()相似，也會回傳一個新的陣列
P.S. 要注意的部分是：filter()也可以像map()一樣一直連接功能，因為他們都是回傳一個新陣列，但join()就不行，因為join()是回傳一個字串。
String.repeat - 返回一個新字符串，該字符串包含指定數量的字符串，並串聯在一起。
String toLowerCase - 函式會回傳把字串全部轉換為英文字母小寫的結果。
String slice - 切割字串的一部分，並當作新字串回傳，而不會對原字串更動。
### P1 你熟悉程式語法並知道如何解決基礎問題
需要更多練習和使用才能讓語法更加熟悉，但是在遇到問題時，即便一時想不出語法如何寫，只要知道想要的效果後用關鍵字查詢 Google 在查詢的過程中增加印象，久而久之就自然而然的會使用。 
### P2 你知道為什麼我們需要 unit test
寫測試的目的就是要確保程式碼的品質，因為開發中可能會影響到以前寫的 Code ，跑測試就能提前預防並且降低之後的維護成本。
### P2 你知道什麼是 unit test
在電腦編程中，單元測試（英語：Unit Testing）又稱為模組測試，是針對程式模組（軟體設計的最小單位）來進行正確性檢驗的測試工作。程式單元是應用的最小可測試部件。在程序化編程中，一個單元就是單個程式、函式、過程等；對於物件導向程式設計，最小單元就是方法，包括基礎類別（超類）、抽象類、或者衍生類別（子類）中的方法。

通常來說，程式設計師每修改一次程式就會進行最少一次單元測試，在編寫程式的過程中前後很可能要進行多次單元測試，以證實程式達到軟體規格書要求的工作目標，沒有程式錯誤；雖然單元測試不是必須的，但也不壞，這牽涉到專案管理的政策決定。

每個理想的測試案例獨立於其它案例；為測試時隔離模組，經常使用stubs、mock[1]或fake等測試馬甲程式。單元測試通常由軟體開發人員編寫，用於確保他們所寫的代碼符合軟體需求和遵循開發目標。它的實施方式可以是非常手動的（透過紙筆），或者是做成構建自動化的一部分。『Wiki-單元測試』
### P2 你知道如何寫 unit test
不是很確定。
### P2 你知道如何測試一個 function
呼叫 function 後把參數丟入，回傳的值用 console.log 顯示，看是否和預期相同。
參考資料：
1. [JavaScript：常用的內建函式（三）](https://medium.com/@tina2793778/javascript-%E5%B8%B8%E7%94%A8%E7%9A%84%E5%85%A7%E5%BB%BA%E5%87%BD%E5%BC%8F-%E4%B8%89-785da874d4fb)
2. [Array.prototype.map()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [String.prototype.repeat（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
4. [String.prototype.toLowerCase()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
5. [String.prototype.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
6. [單元測試](https://zh.wikipedia.org/wiki/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)
7. [Unit Test 教學：核心觀念](https://medium.com/@ji3g4kami/unit-test-%E6%95%99%E5%AD%B8-ba39e54fcbc5)