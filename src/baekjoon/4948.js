const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const answer = [];
for (let j = 0; j < arr.length - 1; j++) {
  ``;
  let n = arr[j];
  let count = 0;
  for (let i = n + 1; i <= 2 * n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  answer.push(count);
}
console.log(answer.join("\n"));
