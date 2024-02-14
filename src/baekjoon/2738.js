const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...b] = input;
const [n, m] = a.split(" ");
const m1 = b.slice(0, n).map((v) => v.split(" ").map(Number));
const m2 = b.slice(n).map((v) => v.split(" ").map(Number));

let answer = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (j === m - 1) {
      answer += m1[i][j] + m2[i][j];
    } else {
      answer += m1[i][j] + m2[i][j] + " ";
    }
  }
  if (i !== n - 1) {
    answer += "\n";
  }
}
console.log(answer);
