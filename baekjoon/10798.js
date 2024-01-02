const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.length;
const m = input.reduce((acc, cur) => {
  if (cur.length > acc) {
    return cur.length;
  }
  return acc;
}, 0);

let answer = "";

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (input[j][i]) {
      answer += input[j][i];
    }
  }
}

console.log(answer);
