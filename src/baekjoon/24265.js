const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const n = Number(input);

let k = 0;
for (let i = 1; i <= n; i++) {
  k += n - i;
}
console.log(`${k}\n2`);

for (let i = 0; i < URL.children.length; i++) {}
