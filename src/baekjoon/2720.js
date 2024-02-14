const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const board = Array.from({ length: N }, () => Array(4).fill(0));
const coin = [25, 10, 5, 1];
for (let i = 0; i < arr.length; i++) {
  let origin = arr[i];
  for (let j = 0; j < coin.length; j++) {
    if (origin === 0) {
      break;
    }
    board[i][j] += Math.floor(origin / coin[j]);
    origin = origin % coin[j];
  }
}
const answer = board.map((v) => v.join(" ")).join("\n");
console.log(answer);
