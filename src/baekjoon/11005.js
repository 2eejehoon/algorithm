const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, B] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const a = parseInt(N, 10).toString(B).toUpperCase();
console.log(a);
