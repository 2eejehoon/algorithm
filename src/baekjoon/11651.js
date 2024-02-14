const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.map((v) => v.split(" ").map(Number));
arr.sort((a, b) => {
  const [x1, y1] = a;
  const [x2, y2] = b;
  if (y1 === y2) {
    return x1 - x2;
  }

  return y1 - y2;
});
const answer = arr.map((v) => v.join(" ")).join("\n");
console.log(answer);
