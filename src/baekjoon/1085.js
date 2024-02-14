const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = fs.readFileSync(filePath).toString().trim();

console.log(4 * N);
