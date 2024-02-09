const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input.sort((a, b) => {
  const [age1, name1] = a.split(" ");
  const [age2, name2] = b.split(" ");
  if (age1 === age2) {
    return 0;
  }
  return age1 - age2;
});
console.log(input.join("\n"));
