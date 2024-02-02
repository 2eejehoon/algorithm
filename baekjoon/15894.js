const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [x, y, w, h] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const answer = Math.min(x, y, Math.abs(x - w), Math.abs(y - h));
console.log(answer);
