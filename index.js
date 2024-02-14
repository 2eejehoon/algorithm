const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const nums = arr.map((v) => v.split(" ").map(Number));
const answer = [];
console.log(answer.join("\n"));
