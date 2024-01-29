const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const arr = [];
for (let i = 1; i < 31; i++) {
  if (input.includes(i)) continue;
  arr.push(i);
}

arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
