const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, arr1, M, arr2] = fs.readFileSync(filePath).toString().trim().split("\n");
const obj = {};
const numbers1 = arr1.split(" ");
const numbers2 = arr2.split(" ");
numbers1.forEach((num) => {
  obj[num] = 1;
});
const answer = numbers2.map((num) => (num in obj ? 1 : 0));
console.log(answer.join(" "));
