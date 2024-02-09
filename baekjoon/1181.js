const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const set = new Set(input);
const arr = Array.from(set)
  .sort()
  .sort((a, b) => a.length - b.length);
const answer = arr.join("\n");
console.log(answer);
