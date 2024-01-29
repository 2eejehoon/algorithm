const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [NM, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
let buckets = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 0; i < M; i++) {
  const [_from, _to] = arr[i];
  const from = _from - 1;
  const to = _to - 1;
  const front = buckets.slice(0, from);
  const mid = buckets.slice(from, to + 1);
  const back = buckets.slice(to + 1);
  buckets = [...front, ...mid.reverse(), ...back];
}
console.log(buckets.join(" "));
