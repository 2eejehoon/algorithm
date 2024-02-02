const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.map((v) => v.split(" ").map(Number));

if (N === 1) {
  console.log(0);
  process.exit();
}

let minX = Number.MAX_SAFE_INTEGER;
let maxX = Number.MIN_SAFE_INTEGER;
let minY = Number.MAX_SAFE_INTEGER;
let maxY = Number.MIN_SAFE_INTEGER;
for (let [x, y] of arr) {
  minX = Math.min(x, minX);
  maxX = Math.max(x, maxX);
  minY = Math.min(y, minY);
  maxY = Math.max(y, maxY);
}
const answer = (maxX - minX) * (maxY - minY);
console.log(answer);
