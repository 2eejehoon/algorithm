const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, ...b] = input;
const [m, n] = a.split(" ").map(Number);
const board = b;
const W = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const B = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= m - 8; i++) {
  for (let j = 0; j <= n - 8; j++) {
    let temp1 = 0;
    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if (board[k][l] !== W[k - i][l - j]) {
          temp1++;
        }
      }
    }

    let temp2 = 0;
    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if (board[k][l] !== B[k - i][l - j]) {
          temp2++;
        }
      }
    }
    answer = Math.min(answer, temp1, temp2);
  }
}

console.log(answer);
