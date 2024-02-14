const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map(Number));

let max = Number.MIN_SAFE_INTEGER;
let row;
let col;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      row = i + 1;
      col = j + 1;
    }
  }
}

console.log(max + "\n" + row + " " + col);
