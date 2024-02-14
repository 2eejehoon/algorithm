const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);

const arr = [3, 5];
const dp = Array(N + 1).fill(Infinity);
dp[0] = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = arr[i]; j <= N; j++) {
    dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1);
  }
}

if (dp[N] === Infinity) {
  console.log(-1);
} else {
  console.log(dp[N]);
}

// if (N % 5 === 0) {
//     let count = N / 5;
//     console.log(count);
//   } else {
//     let f = Math.floor(N / 5);
//     let t = 1;
//     let num = f * 5 + 3 * t;
//     let origin = num;
//     while (true) {
//       if (f * 5 + 3 * t === N) {
//         console.log(f + t);
//         break;
//       } else if (f * 5 + 3 * t > N) {
//         f = f - 1;
//         t = t + 1;
//         if (f < 0) {
//           console.log(-1);
//           break;
//         }
//       } else {
//         t = t + 1;
//       }
//     }
//   }
