const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (c >= a + b) {
  console.log(a + b + (a + b - 1));
} else {
  console.log(a + b + c);
}
