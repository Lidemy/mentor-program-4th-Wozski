## 為何我們需要短網址

因為有些原生的網址太長，不容易傳播，把網址縮短後，美觀、簡潔、易傳播等好處。

## 短網址背後的原理

首先 輸入短網址到瀏覽器時，DNS 會先獲得短網址的 IP，當 DNS 獲得 IP 後會發出 HTTP GET 請求查詢特殊短碼，短碼服務器會此短碼去找到對應原生的 url，最後通過 HTTP 301 轉到原生的 url。
(但是也有看到其他資料顯示用 302 非定向導向會較佳，因為如果使用 301 不容易計算點擊率，以及無法從中得到商業價值)
背後的算法，目前查到有：

1. 哈希算法
   能够满足这样的哈希算法有很多，这里推荐 Google 出品的 MurmurHash 算法，MurmurHash 是一种非加密型哈希函数，适用于一般的哈希检索操作。与其它流行的哈希函数相比，对于规律性较强的 key，MurmurHash 的随机分布特征表现更良好。非加密意味着着相比 MD5，SHA 这些函数它的性能肯定更高（实际上性能是 MD5 等加密算法的十倍以上），也正是由于它的这些优点，所以虽然它出现于 2008，但目前已经广泛应用到 Redis、MemCache、Cassandra、HBase、Lucene 等众多著名的软件中。

作者：allentofight
链接：https://juejin.im/post/6844904090602848270
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 2. 自增序列算法
我们可以维护一个 ID 自增生成器，比如 1，2，3 这样的整数递增 ID，当收到一个长链转短链的请求时，ID 生成器为其分配一个 ID，再将其转化为 62 进制，拼接到短链域名后面就得到了最终的短网址，那么这样的 ID 自增生成器该如何设计呢。如果在低峰期发号还好，高并发下，ID 自增生成器的的 ID 生成可能会系统瓶颈，所以它的设计就显得尤为重要。

作者：allentofight
链接：https://juejin.im/post/6844904090602848270
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

目前這兩種方法對我來說還是有些難以理解，只能知道基本的轉換原理，目前的知識量並不足夠讓我去思考如何優化增進效能和規模等。

![](https://i.imgur.com/iCAvnnD.jpg)

參考資料：

1. [短网址(short URL)系统的原理及其实现](https://hufangyun.com/2017/short-url/)
2. [短链接、短网址使用的是什么算法？](https://www.zhihu.com/question/20103344)
3. [高性能短链设计](https://juejin.im/post/6844904090602848270)
