const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const n = Number(input);
const answer = "long ".repeat(n / 4) + "int";
console.log(answer);
