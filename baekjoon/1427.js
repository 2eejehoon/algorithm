const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("").map(Number);
arr.sort((a, b) => b - a);
const answer = arr.join("");
console.log(answer);
