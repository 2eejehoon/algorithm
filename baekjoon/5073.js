const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) =>
    v
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  );

const arr = input.slice(0, -1);
const answer = [];
for (let x of arr) {
  const [a, b, c] = x;
  if (c >= a + b) {
    answer.push("Invalid");
  } else if (a === b && b === c) {
    answer.push("Equilateral");
  } else if ((a === b && b !== c) || (b === c && a !== c) || (a === c && b !== c)) {
    answer.push("Isosceles");
  } else if (a !== b && b !== c) {
    answer.push("Scalene");
  } else {
    answer.push("Invalid");
  }
}
console.log(answer.join("\n"));
