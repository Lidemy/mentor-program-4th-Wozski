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
  let Star = Number(lines);
  for (let i = 1; i <= Star; i += 1) {
    let result = '';
    result += repeat('*', i);
    console.log(result);
  }
}
function repeat(arr, n) {
  let star = [];
  for (let i = 0; i < n; i += 1) {
    star += arr;
  } return star;
}
