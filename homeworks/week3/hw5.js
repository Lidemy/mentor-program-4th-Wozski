/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
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
  for (let i = 1; i <= input.length - 1; i += 1) {
    console.log(BigorSmall(input[i]));
  }
}

function BigorSmall(newarr) {
  let [a, b, c] = newarr.split(' ');
  let A = BigInt(a);
  let B = BigInt(b);
  if (A === B) return 'DRAW';
  if ((c === '1' && A > B) || (c === '-1' && A < B)) {
    return 'A';
  }
  if ((c === '1' && B > A) || (c === '-1' && A > B)) {
    return 'B';
  }
  return false;
}
