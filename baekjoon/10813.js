const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [NM, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
const arr = input.map((v) => v.split(" "));
const buckets = Array.from({ length: N }, (_, i) => i + 1);
for (let i = 0; i < arr.length; i++) {
  const [a, b] = arr[i];
  [buckets[a - 1], buckets[b - 1]] = [buckets[b - 1], buckets[a - 1]];
}
console.log(buckets.join(" "));
