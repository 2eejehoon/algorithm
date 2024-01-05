const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);

const arr = [];
let i = 0;
while (true) {
  if (String(i).includes("666")) {
    arr.push(i);
  }

  if (arr.length === N) {
    break;
  }
  i++;
}
console.log(i);
