const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [m, n] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function getPrimes(m, n) {
  const obj = { 1: true };
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (obj[i]) {
      continue;
    }
    for (let j = i ** 2; j <= n; j += i) {
      obj[j] = true;
    }
  }

  const primes = [];
  for (let i = m; i <= n; i++) {
    if (!obj[i]) {
      primes.push(i);
    }
  }

  return primes;
}
const answer = getPrimes(m, n);
console.log(answer.join("\n"));
