const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, B] = fs.readFileSync(filePath).toString().trim().split(" ");
const a = parseInt(N, B);
console.log(a);
