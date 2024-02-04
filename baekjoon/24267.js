const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const n = Number(input);
console.log(`${(BigInt(n - 2) * BigInt(n - 1) * BigInt(n)) / BigInt(6)}\n3`);
