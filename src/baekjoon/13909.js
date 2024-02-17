const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(fs.readFileSync(filePath).toString().trim());

const answer = Math.floor(Math.sqrt(N));
console.log(answer);
