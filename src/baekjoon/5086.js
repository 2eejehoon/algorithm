const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const answer = [];
const arr = input.slice(0, -1);
arr.forEach(([a, b]) => {
  if (b % a === 0) {
    answer.push("factor");
  } else if (a % b === 0) {
    answer.push("multiple");
  } else {
    answer.push("neither");
  }
});

console.log(answer.join("\n"));
