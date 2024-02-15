const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const max = Math.max(...arr);
const obj = { 1: true };
for (let i = 2; i <= Math.sqrt(max); i++) {
  if (obj[i]) {
    continue;
  }
  for (let j = i ** 2; j <= max; j += i) {
    obj[j] = true;
  }
}

const answer = [];
for (let N of arr) {
  let temp = 0;
  for (let i = 1; i <= Math.floor(N / 2); i++) {
    if (!obj[i] && !obj[N - i]) {
      temp++;
    }
  }
  answer.push(temp);
}
console.log(answer.join("\n"));
