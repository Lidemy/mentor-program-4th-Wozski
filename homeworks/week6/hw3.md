## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. <section></section>section應用的典型場景有文章的章節、標籤對話框中的標籤頁、或者論文中有編號的部分。一般來說，當元素內容明確地出現在文檔大綱中時，section就是適用的。
參考原文網址：https://kknews.cc/tech/293jn2g.html
2. <bgsound /> src：播放音樂路徑 loop：重播次數，可以播放音源的標籤，但是這幾年似乎越來越少網頁會用背景音樂了
3. <textarea></textarea> 文字區域，這邊是可以直接輸入文字的區域，並且可以直接設定文字的長、寬、高、甚至文字距離等等

## 請問什麼是盒模型（box modal）name：名稱(可重複)，id：名稱(不可重複)，cols：行數，rows：列數
在 Chorme 控制台右下方的類似盒子的模型，每一個 HTML 都可以想成一個 box modal, 組成為 長、寬、Padding、border、margin等等，CSS內最重要的東西之一

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
block - 預設 div、h1、p 都是預設 block，調什麼都可以，並且會佔滿一整行，
inline - 預設 span、a，調寬高沒用，上下邊距也沒用，如果動上下和寬高都很奇怪，padding 上下會撐開，但不會影響其他元素
inline-block - button、input、select，對外像 inline 可以併排，對內像 block 可以調各種屬性 

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
static - 網頁預設的定位方式
relative - 相對定位，為預設的原本位置，可以調上下左右，不會影響其他元素，只會改變自己
fixed - 固定定位，相對於 viewport 做定位，不管如何捲動網頁都不會變位置
absolute - 絕對定位，針對某個參考點，然後進行定位，某一個參考點的定義是，往上找不是static（預設）的元素，如果用了後，就代表被從原本排版抽掉，下個元素就會被遞補上來，會針對某個元素 position 設定為 relative 進行定位
