## 什麼是 DOM？
ANS: DOM又稱（Document Object Model, 又稱物件文件模型）是一種讓 JS 和瀏覽器互動的橋樑，定義讓程式可以存取並改變文件架構、風格和內容的方法，文件以擁有屬性與函式的節點與物件組成的結構化表示。節點也可以附加事件處理程序，一旦觸發事件就會執行處理程序。 本質上，它將網頁與腳本或程式語言連結在一起。
參考資料：[文件物件模型 (DOM)](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model), [DOM簡介](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
ANS:當我們點了一個按鈕後，事件會進入捕獲階段(CapturePhase)，然後事件會由上往下傳一直到使用的元素，之後會前往冒泡階段(Bubbling Phase)，再把事件從底層傳回去．<h3>結論就是先捕獲再冒泡</h2>
參考資料：[事件傳遞機制詳解：捕獲與冒泡](https://lidemy.com/courses/390588/lectures/9653624), [DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

## 什麼是 event delegation，為什麼我們需要它？
ANS:把監聽事件放在最上面一層，讓使用者不用手動監聽事件，事件會冒泡到父元素，所以我們只要在父元素做 eventListener 
參考資料：[欸等等幫我拿餐點：event delegation](https://lidemy.com/courses/390588/lectures/9653640)

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
ANS:**preventDefault** 阻止預設行為，可運用到表單送出或者超連結
**stopPropagation** 阻止事件繼續傳遞，只會觸發按鈕自己的事件
參考資料：[阻止預設行為：preventDefault](https://lidemy.com/courses/fe102-javascript/lectures/9653631), [別向上級回報：stopPropagation](https://lidemy.com/courses/390588/lectures/9653625)
