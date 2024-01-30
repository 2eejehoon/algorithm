const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));
let point = 0;
let credit = 0;
const map = { "A+": 4.5, A0: 4.0, "B+": 3.5, B0: 3.0, "C+": 2.5, C0: 2.0, "D+": 1.5, D0: 1.0, F: 0.0 };
for (let i = 0; i < arr.length; i++) {
  const [a, b, c] = arr[i];
  if (c === "P") {
    continue;
  }
  credit += Number(b);
  point += map[c] * Number(b);
}

console.log(point / credit);
