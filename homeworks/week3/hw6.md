## hw1：好多星星
這題在 ALG101有解過一樣的題目，並且在 CodeWar 中我也解過一次，算上這次已經是第三次.
想法很簡單，寫一個 repeat 的 function 後，看清楚規律後，直接輸出就得出解答，這種題型的延伸還有金字塔或是一行只印出一個星星，只要稍加修改就可以順利 output .

## hw2：水仙花數
這題已經看過三次，知道使用餘數的方式去解題，但是真正在解題時沒辦法順利解出，最後想了幾天後決定回去翻之前寫的筆記，就能順利解出.
後來反省後發現，之前對於這題的理解還沒到非常透撤，所以只知道大概如何解卻無法寫出程式碼，這次寫完後又更加清楚明白這題的解法.
1. 先分成兩個部分 一個判斷是否為水仙花數，一個是判斷是幾位數
2. 先把數字傳到位數，判斷幾位數後回傳判斷水仙花數的函式
3. 判斷是否為水仙花數 是，放入答案 否，繼續下一圈迴圈
4. 執行完畢，回傳答案

## hw3：判斷質數
這題我在之前 ALG101 有碰過類似的題目，直覺就是用百分比(%)的符號來做解題，
經過我的查詢 % 符號在大多數編程語言，又稱 模除、模數、 modulus，是用於查找一個數字除以另一個數字後的餘數的操作用法。
題目是判斷質數，意思是只要能被不是自己的整數整除，就不算質數。
我的想法是我需要寫出三種狀況，一種是質數的狀況，一種不是質數的狀況，還有最後一種就是數字 1，
因為數字 1並不是質數，但是 數字2、數字3 卻是質數。
一開始我使用提供的input[5,1,2,3,4,5]去測試，不管怎麼測試Output就是跟答案相同，但是丟進去測試系統時不斷顯示 Wrong Answer ，讓我煩躁了一陣子，後來大概休息 10 分鐘後，忽然靈機一動，想到如果使用範圍更大的 Input，也許能找到問題，
果然使用[10,1,2,3,4,5,6,7,8,9,10]　這組數字就順利找到問題，使用 Browser 的 debugger 一行一行跑，最後發現數字 9的時候居然是顯示 Prime，但是　9 明顯就不是質數，仔細看後發現它使用 9 % 2　發現不能整除後就直接判定它是質數，
並沒有繼續用其他數字進行測試，經過半個小時的不斷測試，終於發現，會導致這種狀況是因為我把　return 的位置擺放錯誤，

一開始我是這樣寫：　
`function Prime(n) {
  while (n === 1 ){
    return 'Composite';
 }
 for (let i = 2; i <= n; i += 1) {
  if (n % i === 0 && n !== i) {
    return 'Composite';
  } else{
     return 'Prime';
    }
  }
}`
 會導致它測試的時候 i 並不會增加，只會使用　i= 一直不斷測試，只要不能被　2 整除就判斷是屬於質數，但是這並不是我要的答案，經過修改後，我的答案如下：
 `function Prime(n) {
  while (n === 1) {
    return 'Composite';
  }
  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0 && n !== i) {
      return 'Composite';
    }
  }
  return 'Prime';
}`

 這樣它的 i 就會不斷增加，直到 i = n 如果沒有任何數可以整除，才會判斷是質數，最後成功AC。

## hw4：判斷迴文
這題是我第三次遇到這個題目，第一次遇到是在 ALG101，其實知道怎麼解後，只要把想法轉成程式碼就行了，以下是我的解法和想法。
 首先題目要求，正讀或反讀都要一樣，才能回傳 'True'，反之沒有符合就回傳 'False'，那我只需要把正讀和反讀的結果比較，就能知道是不是我要的答案。
 所以我寫出：
 `function reverse(arr) {
  let newarr = arr[0].split('');
  let result = [];
  let result2 = [];
  for (let i = newarr.length - 1; i >= 0; i -= 1) {
    result += newarr[i];
  }
  for (let j = 0; j <= newarr.length - 1; j += 1) {
    result2 += newarr[j];
  }
  if (result === result2) {
    return 'True';
  }
  return 'False';
} 
`
最後回傳答案， console.log 答案出來，就能 AC。

## hw5：聯誼順序比大小
這題一開始都能順利寫出來，但是在丟進系統檢測的時候卻發現不管如何都顯示錯誤，後來重新看題目後，發現題目有特別標注**要特別注意的是 A 與 B 可能是很大的數字，但保證長度為 512 個位數以內**，後來我實際去測試發現 JS 到 300多位數就會顯示無限大，所以合理的推測測試資料內有一組是超過的位數導致最後答案出錯，發現問題後接下來就要解決問題，一開始的想法就是思考如何讓超過的數字在 JS 是可以正確被執行的，後來查到資料使用 BigInt 把數字帶入就可以正確 AC.
參考資料:[Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)



