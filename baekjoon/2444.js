const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const str = fs.readFileSync(filePath).toString().trim();
console.log(str);
