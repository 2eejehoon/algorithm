const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split("\n");
const getGcd = (num1, num2) => {
  return num2 > 0 ? getGcd(num2, num1 % num2) : num1;
};
const [child1, parent1] = a.split(" ").map(Number);
const [child2, parent2] = b.split(" ").map(Number);
let child = child1 * parent2 + child2 * parent1;
let parent = parent1 * parent2;
const gcd = getGcd(child, parent);
child = Math.floor(child / gcd);
parent = Math.floor(parent / gcd);
console.log(child + " " + parent);
