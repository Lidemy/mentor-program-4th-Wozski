``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第一行, 設定變數 i 是 0, 並且小於　arr 的長度, 在範圍內每完成一個迴圈就 i+1
2. 執行第二行, 如果　arr[i] 小於等於 0, 就回傳　'invalid'
3. 第一圈迴圈結束，跑回第一行, i++ , i 變成 2, 檢查是否符合　arr[i] <= 0 條件，否，繼續執行
4. 執行第三行，設定變數　i 是 2　，並且小於　arr 的長度，在這範圍內每完成一個迴圈就 i+1
5. 執行第四行，如果　arr[i] 不等於　arr[i-1] 加上　arr[i-2]，就回傳　'invalid'
6. 第二圈迴圈結束，跑回第三行，i++，i 變成 3 ，檢查是否符合　arr[i] 不等於　arr[i-1] + arr[i-2]　的條件，否，繼續執行
7. 如果上述條件都沒有符合,　回傳　'valid'
8. 執行完畢
