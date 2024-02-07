const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a1, a0] = input[0].split(" ").map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

const fn = (n) => {
  return a1 * n + a0;
};

let answer = 1;
for (let i = n0; i <= 100; i++) {
  if (fn(i) > c * i) {
    answer = 0;
    break;
  }
}
console.log(answer);
