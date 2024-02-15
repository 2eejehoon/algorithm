const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const answer = [];
for (let x of arr) {
  while (true) {
    const result = isPrime(x);
    if (result) {
      answer.push(x);
      break;
    } else {
      x++;
    }
  }
}

console.log(answer.join("\n"));
