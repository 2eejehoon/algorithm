const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const numbers = [];
for (let i = 0; i < arr.length - 1; i++) {
  numbers.push(arr[i + 1] - arr[i]);
}
let gcd = numbers[0];
const getGcd = (num1, num2) => {
  return num2 > 0 ? getGcd(num2, num1 % num2) : num1;
};
for (let i = 1; i < numbers.length; i++) {
  gcd = getGcd(gcd, numbers[i]);
}
const answer = numbers.map((num) => {
  return num / gcd - 1;
});
console.log(answer.reduce((acc, cur) => acc + cur));
