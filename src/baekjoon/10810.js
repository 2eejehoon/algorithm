const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [NM, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const buckets = Array(N).fill(0);
for (let i = 0; i < arr.length; i++) {
  const [from, to, ball] = arr[i];
  for (let j = from - 1; j <= to - 1; j++) {
    buckets[j] = ball;
  }
}
const result = buckets.join(" ");
console.log(result);
