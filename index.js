const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ");

const set = new Set();
for (let i = 1; i <= Math.floor(N / 2); i++) {
  if (N % i === 0) {
    set.add(i);
    if (N / i !== i) {
      set.add(N / i);
    }
  }
}
const divisors = [...set].sort((a, b) => a - b);
console.log(divisors[K - 1] ?? 0);
