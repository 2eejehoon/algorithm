const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, ...arr] = input;
const check = Array.from({ length: 100 }, () => Array(100).fill(false));
const papers = arr.map((v) => v.split(" ").map(Number));

let answer = 0;
for (const [x, y] of papers) {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (!check[i][j]) {
        check[i][j] = true;
        answer++;
      }
    }
  }
}

console.log(answer);
