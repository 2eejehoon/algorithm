const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(n);

const logs = arr.map((v) => v.split(" "));
const obj = {};
logs.forEach(([person, log]) => {
  obj[person] = log;
});
const answer = [];
for (let key in obj) {
  if (obj[key] === "enter") {
    answer.push(key);
  }
}
console.log(answer.sort().reverse().join("\n"));
