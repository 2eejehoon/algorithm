const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = nm.split(" ");
const N_arr = arr.slice(0, N);
const M_arr = arr.slice(N);
const numObj = {};
const nameObj = {};
const answer = [];
for (let i = 0; i < N_arr.length; i++) {
  const name = N_arr[i];
  const num = i + 1;
  numObj[num] = name;
  nameObj[name] = num;
}
for (let i = 0; i < M_arr.length; i++) {
  const temp = M_arr[i];
  if (isNaN(temp)) {
    answer.push(nameObj[temp]);
  } else {
    answer.push(numObj[temp]);
  }
}
console.log(answer.join("\n"));
