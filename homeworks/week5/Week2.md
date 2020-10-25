# 第二週
### P1 你能靈活運用變數、迴圈、判斷式等等基本概念來解題
1. 變數 - 在程式設計中，變數（英語：Variable，scalar）是指一個包含部分已知或未知數值或資訊（即一個值）之儲存位址，以及相對應之符號名稱（識別字），在 JS 中，我們可以使用 var、let、const。
var - 宣告一個可隨意更改其內容的變數
let - 宣告一個可隨意更改其內容的區塊區域變數
const - 宣告一個只可讀取的不可變常數
3. 迴圈 - 迴圈是計算機科學運算領域的用語，也是一種常見的控制流程。迴圈是一段在程式中只出現一次，但可能會連續執行多次的程式碼。迴圈中的程式碼會執行特定的次數，或者是執行到特定條件成立時結束迴圈，或者是針對某一集合中的所有項目都執行一次。
例如：在 JS 中寫法就是 for (let i=0; i<10; i+=1) 這樣就是一個跑十次的迴圈。
5. 判斷式 - 使元素照著設定好的特殊條件運行。例：if (a>b) {console.log(123)} else {console.log(456)}
也有另外一種寫法是稱呼為**三元運算子（Ternary）**，例如：condition ? A : B　//固定語法，如果是 ture 回傳 A ，false 回傳 B。
### P1 你能一行行的說出現在程式在做什麼
例如：
``` js
function sum(num){
  if (typeof(num) === "number"){
    let result = num;
    for (let i=0; i<=10; i+=1) {
      result += i;
    }
    return result;
  } else {
  	return "非數字，請重新輸入";
  }
}
console.log(sum(0));
```
1. 呼叫 sum 的 function 傳入數字 0 的參數，判斷傳入參數是否為數字型態，如果不是，回傳 "非數字，請重新輸入"，如果是進入下一步。
2. 設定變數 result 跟 傳入參數一樣，進入下一步。
3. 開始迴圈 設定變數 i 是 0，i 小於等於 10，i 加 1 進入下一步。
4. (i=1) result 是 0 ，0 + 1 = 1 ，進入下一圈。
5. (i=2) result 是 1 ，1 + 2 = 3 ，進入下一圈。
6. (i=3) result 是 3 ，3 + 3 = 6 ，進入下一圈。
7. (i=4) result 是 4 ，6 + 4 = 10 ，進入下一圈。
8. (i=5) result 是 10 ，10 + 5 = 15 ，進入下一圈。
9. (i=6) result 是 15 ，15 + 6 = 21 ，進入下一圈。
10. (i=7) result 是 21 ，21 + 7 = 28 ，進入下一圈。
11. (i=8) result 是 28 ，28 + 8 = 36 ，進入下一圈。
12. (i=9) result 是 36 ，36 + 9 = 45 ，進入下一圈。
13. (i=10) result 是 45，45 + 10 = 55 ，i = 11 條件不符合，結束迴圈。
14. 回傳 result 是 55 ， sum(0) = 55。
15. 列印 55 。
### P1 你知道「回傳」跟「輸出」的差異
回傳 - return 會終止函式的執行，如果在 function 中宣告 return 函式就會終止。如果指定數值，函式呼叫就會回傳給定的數值。
輸出 - console.log 可以在瀏覽器的工具中看見輸出的值，在 debug 時相當好用
關於差異可以參考下面的引用：
There is actually a very clear distinction between these calls. console.log() is a function used to print information to the console. return on the other hand is a call to pass some value back up to where the call was made. 
可以看到上面敘述是說 console.log 是一個 function 被用來印出資訊，而 return 則是把某些值傳給被呼叫的地方。
### P1 你可以把用文字寫好的演算法轉成程式碼
正在寫
參考資料：
1. [Wiki - 變數](https://zh.wikipedia.org/wiki/%E5%8F%98%E9%87%8F_(%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1))
2. [語法與型別](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types)
3. [迴圈](https://zh.wikipedia.org/wiki/%E8%BF%B4%E5%9C%88)
4. [JavaScript 基礎：判斷式](https://medium.com/@hugh_Program_learning_diary_Js/javascript-%E5%9F%BA%E7%A4%8E-%E5%88%A4%E6%96%B7%E5%BC%8F-1f3c51e9c5cd)
5. [return](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/return)
6. [前端網設必知－console.log()取代alert()讓javascript除錯更EZ](https://www.minwt.com/webdesign-dev/html/12867.html)
7. [console.log and return](https://www.codecademy.com/forum_questions/505b318b78e591000200e39d?locale=en)
