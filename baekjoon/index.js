const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const arr = [["*"]];
const recursive = (str, n) => {
  console.log(str);
  if (n === N) {
    return str;
  }

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      temp += str;
    }
  }

  return recursive(str, n * 3);
};
console.log(recursive("*", 3));
