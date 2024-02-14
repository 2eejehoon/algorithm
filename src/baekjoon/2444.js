const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = fs.readFileSync(filePath).toString().trim();
const a = [];
for (let i = 0; i < N; i++) {
  let temp = " ".repeat(N - 1 - i) + "*".repeat(2 * i + 1);
  a.push(temp);
}
for (let j = N - 2; j >= 0; j--) {
  a.push(a[j]);
}
console.log(a.join("\n"));
