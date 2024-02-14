const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b, c] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let answer = "";
if (a + b + c !== 180) {
  answer = "Error";
} else if (a === b && b === c) {
  answer = "Equilateral";
} else if ((a === b && b !== c) || (b === c && a !== b) || (a === c && a !== b)) {
  answer = "Isosceles";
} else if (a !== b && b !== c) {
  answer = "Scalene";
} else {
  answer = "Error";
}

console.log(answer);
