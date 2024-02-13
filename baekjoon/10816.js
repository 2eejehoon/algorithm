const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, arr1, m, arr2] = fs.readFileSync(filePath).toString().trim().split("\n");
const cards1 = arr1.split(" ");
const cards2 = arr2.split(" ");
const obj = {};
const answer = [];
cards1.forEach((card) => {
  if (card in obj) {
    obj[card]++;
  } else {
    obj[card] = 1;
  }
});
cards2.forEach((card) => {
  const temp = obj[card] ? obj[card] : 0;
  answer.push(temp);
});
console.log(answer.join(" "));
