const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [NM, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = NM.split(" ");
const set = new Set();
const arr1 = arr.slice(0, N);
const arr2 = arr.slice(N);
let answer = 0;
for (let i = 0; i < N; i++) {
  set.add(arr1[i]);
}
for (let i = 0; i < M; i++) {
  if (set.has(arr2[i])) {
    answer++;
  }
}
console.log(answer);
