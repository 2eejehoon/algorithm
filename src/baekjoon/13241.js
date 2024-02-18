const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const getGcd = (num1, num2) => {
  return num2 > 0 ? getGcd(num2, num1 % num2) : num1;
};
const gcd = getGcd(a, b);
console.log((a * b) / gcd);
