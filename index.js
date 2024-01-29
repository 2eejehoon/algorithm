const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, arr, v] = fs.readFileSync(filePath).toString().trim().split("\n");
const numbers = arr.split(" ");

let answer = 0;
numbers.forEach((num) => num === v && answer++);
console.log(answer);
