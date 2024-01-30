const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const fl = arr.map((v) => v[0] + v[v.length - 1]);
const a = fl.join("\n");
console.log(a);
