const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
for (let x of arr) {
  const [x1, y1, R1, x2, y2, R2] = x.split(" ").map(Number);
  const r1 = Math.max(R1, R2);
  const r2 = Math.min(R1, R2);
  const isEqual = x1 === x2 && y1 === y2;
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  if (isEqual) {
    if (r1 === r2) {
      console.log(-1);
    }
    if (r1 !== r2) {
      console.log(0);
    }
  } else {
    if (distance > r1 + r2) {
      console.log(0);
    } else if (distance < r1 - r2) {
      console.log(0);
    } else if (distance === r1 + r2) {
      console.log(1);
    } else if (distance === r1 - r2) {
      console.log(1);
    } else if (distance < r1 + r2 && distance > r1 - r2) {
      console.log(2);
    }
  }
}
