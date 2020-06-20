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
1. 執行第一行,設定變數 i 是 0, 並且小於　arr 的長度, 在範圍內每完成一個迴圈就 i+1
2. 執行第二行,變數 i 是 0 , arr[0] = 3 大於 0 , i+1 繼續下一圈
3. 執行第二行,變數 i 是 1 , arr[1] = 5 大於 0 , i+1 繼續下一圈
4. 執行第二行,變數 i 是 2 , arr[2] = 8 大於 0 , i+1 繼續下一圈
5. 執行第二行,變數 i 是 3 , arr[3] = 13 大於 0 , i+1 繼續下一圈
6. 執行第二行,變數 i 是 4 , arr[4] = 22 大於 0 , i+1 繼續下一圈
7. 執行第二行,變數 i 是 5 , arr[5] = 35 大於 0 , i+1 第一圈迴圈結束 條件,否,繼續執行
8. 執行第三行,設定變數　i 是 2　，並且小於　arr 的長度，在這範圍內每完成一個迴圈就 i+1
9. 執行第四行,變數 i 是 2 , arr[2] = 8 , arr[1] = 5 , arr[0] = 3 , arr[2] = arr[1] + arr[0],不符合條件, i+1
10. 執行第四行,變數 i 是 3 , arr[3] = 13 , arr[2] = 8 , arr[1] = 5 , arr[3] = arr[2] + arr[1],不符合條件, i+1
11. 執行第四行,變數 i 是 4 , arr[4] = 22 , arr[3] = 13 , arr[2] = 8 , arr[4] != arr[3] + arr[2],符合條件, 回傳 'invalid'
12. 執行完畢

