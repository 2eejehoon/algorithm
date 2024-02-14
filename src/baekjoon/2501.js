const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ");

// 약수
// const divisors = [1];
// for (let i = 2; i <= N; i++) {
//   if (N % i === 0) {
//     divisors.push(i);
//   }
// }
// console.log(divisors[K - 1] ?? 0);

// 약수와 배수
// const set = new Set();
// for (let i = 1; i <= Math.floor(N / 2); i++) {
//   if (N % i === 0) {
//     set.add(i);
//     if (N / i !== i) {
//       set.add(N / i);
//     }
//   }
// }
// const divisors = [...set].sort((a, b) => a - b);
// console.log(divisors[K - 1] ?? 0);

// 제곱
const divisors = [];
for (let i = 0; i <= Math.sqrt(N); i++) {
  if (N % i === 0) {
    divisors.push(i);
    if (N / i !== i) {
      divisors.push(N / i);
    }
  }
}
divisors.sort((a, b) => a - b);
console.log(divisors[K - 1] ?? 0);
