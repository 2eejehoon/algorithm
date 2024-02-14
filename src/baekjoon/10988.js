const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const s = fs.readFileSync(filePath).toString().trim();

const len = s.length;
let answer = 1;
let start = Math.floor(len / 2);
let end = Math.floor(len / 2);

if (len === 1) {
  console.log(1);
  process.exit();
}

if (len === 2 && s[0] === s[1]) {
  console.log(1);
  process.exit();
}

if (len % 2 === 0) {
  start = Math.floor(len / 2) - 1;
}

while (start >= 0 && end < len) {
  if (s[start] !== s[end]) {
    answer = 0;
    break;
  }
  start--;
  end++;
}
console.log(answer);
