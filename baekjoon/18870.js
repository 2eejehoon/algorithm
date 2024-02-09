const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.split(" ").map(Number);
const set = new Set(arr);
const obj = {};
Array.from(set)
  .sort((a, b) => a - b)
  .forEach((v, i) => {
    obj[v] = i;
  });
const answer = arr.map((v) => obj[v]);
console.log(answer.join(" "));
