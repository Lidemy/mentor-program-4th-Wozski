## 請以自己的話解釋 API 是什麼
API (Application Programming Interface)，是資訊交換的端口，如果今天把『請求資料』想成一台公車，那我需要某個地方的資料發出 Request 『公車出發』，然後把『Server』想像成一座城市，Request 『公車』就必須開進城市裡把乘客『資料』載出來，但是要進入城市前需要一個入口，而 API 就是那個入口


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
400 Bad Request
明顯的客戶端錯誤（例如，格式錯誤的請求語法，太大的大小，無效的請求訊息或欺騙性路由請求），伺服器不能或不會處理該請求。 // Wiki 的資料太完整，反而不知道該如何簡單介紹

301 Moved Permanently
被請求的資源已永久移動到新位置，並且將來任何對此資源請求的使用者，傳送HTTP Location 來重新導向到正確的新位置

202 Accepted
伺服器已接受請求，但尚未處理。最終該請求也許會成功也許不會成功，並且可能在處理發生時被禁止。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。


| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 回傳所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量    | /resaurant?_limit=5 
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無     | /restaurants/10      |
| 新增餐廳   | POST   | /resaurants     | name: 餐廳名 | 無              |
| 刪除餐廳   | DELETE   | /resaurants/:id     | 無 | 無              |
| 更改餐廳   | PATCH   | /resaurants/:id     | name: 餐廳名 | 無              |

參考資料來源：hw1 範例