const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

arr.sort((a, b) => a - b);
const sum = arr.reduce((acc, cur) => acc + cur, 0);
const average = sum / arr.length;
const median = arr[2];
console.log(average);
console.log(median);
