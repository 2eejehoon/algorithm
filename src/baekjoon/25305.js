const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, k] = a.split(" ");
const arr = b.split(" ").map(Number);
arr.sort((a, b) => b - a);
console.log(arr[k - 1]);
