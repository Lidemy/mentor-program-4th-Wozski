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
  for (let i = 1; i < input.length; i += 1) {
    let arr = Number(input[i]);
    if (isPrime(arr) === true) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}

function isPrime(n) {
  while (n === 1) {
    return false;
  }
  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0 && n !== i) {
      return false;
    }
  }
  return true;
}
