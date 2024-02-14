const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input;
const [n, m] = a.split(" ").map(Number);
const cards = b.split(" ").map(Number);
const visit = Array(n).fill(false);

let answer = Number.MIN_SAFE_INTEGER;
const dfs = (start, sum, count, path) => {
  if (sum > m) {
    return;
  }

  if (count === 3) {
    answer = Math.max(sum, answer);
    return;
  }

  for (let i = start; i < visit.length; i++) {
    if (!visit[i]) {
      visit[i] = true;
      dfs(i + 1, sum + cards[i], count + 1, [...path, cards[i]]);
      visit[i] = false;
    }
  }
};
dfs(0, 0, 0, []);
console.log(answer);
