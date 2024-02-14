const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  for (let i = 0; i < Number(input); i++) {
    const sum =
      String(i)
        .split("")
        .map(Number)
        .reduce((a, b) => a + b) + Number(i);

    if (sum === Number(input)) {
      return i;
    }
  }
  return 0;
};

console.log(solution(input));
