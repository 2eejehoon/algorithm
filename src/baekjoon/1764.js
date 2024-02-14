const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ");
const 듣 = arr.slice(0, n);
const 보 = arr.slice(n);
const obj = {};
const answer = [];
듣.forEach((v) => {
  obj[v] = "듣";
});
보.forEach((v) => {
  if (v in obj) {
    answer.push(v);
  }
});
console.log(answer.length + "\n" + answer.sort().join("\n"));
