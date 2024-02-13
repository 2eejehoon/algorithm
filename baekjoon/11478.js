const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const set = new Set();
for (let i = 0; i < input.length; i++) {
  let temp = "";
  for (let j = i; j < input.length; j++) {
    temp += input[j];
    set.add(temp);
  }
}
console.log(set.size);
