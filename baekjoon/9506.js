const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const answer = [];
const arr = input.slice(0, -1);
for (let num of arr) {
  const divisors = [1];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i !== i) {
        divisors.push(num / i);
      }
    }
  }
  divisors.sort((a, b) => a - b);
  const isPerfect = divisors.reduce((acc, cur) => acc + cur) === num;

  if (isPerfect) {
    answer.push(`${num} = ${divisors.join(" + ")}`);
  } else {
    answer.push(`${num} is NOT perfect.`);
  }
}
console.log(answer.join("\n"));
