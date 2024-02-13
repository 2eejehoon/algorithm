const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, arr1, arr2] = fs.readFileSync(filePath).toString().trim().split("\n");
const set = new Set();
const a1 = arr1.split(" ");
const a2 = arr2.split(" ");
let c = 0;
a1.forEach((v) => {
  if (set.has(v)) {
    c++;
  }
  set.add(v);
});
a2.forEach((v) => {
  if (set.has(v)) {
    c++;
  }
  set.add(v);
});
console.log(set.size - c);
