const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [_, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const numbers = arr.map((v) => v.split(" ").map(Number));
const gcd = (num1, num2) => {
  return num2 > 0 ? gcd(num2, num1 % num2) : num1;
};
const lcm = (num1, num2) => {
  return (num1 * num2) / gcd(num1, num2);
};
numbers.forEach(([a, b]) => {
  console.log(lcm(a, b));
});
