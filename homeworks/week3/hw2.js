/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
let readline = require('readline');

let lines = [];
let rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', function (line) {
  lines.push(line);
});

rl.on('close', function () {
  solve(lines);
});
function solve(input) {
  let temp = lines[0].split(' ');
  let n = Number(temp[0]);
  let m = Number(temp[1]);
  for (let i = n; i <= m; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

// 確認是否為水仙花數
function isNarcissistic(n) {
  let m = n;
  let digits = digitsCount(n);
  let sum = 0;
  while (m !== 0) {
    let num = m % 10;
    sum += num ** digits;
    m = Math.floor(m / 10);
  }
  if (sum === n) {
    return true;
  }
  return false;
}

// 確認位數
function digitsCount(n) {
  if (n === 0) return 1;
  let result = 0;
  while (n !== 0) {
    n = Math.floor(n / 10);
    result += 1;
  }
  return result;
}
