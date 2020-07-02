/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
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
  console.log(reverse(input));
}

function reverse(arr) {
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
