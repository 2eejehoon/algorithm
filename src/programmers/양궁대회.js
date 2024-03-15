function solution(n, info) {
  let answer = [];
  let max = -Infinity;
  const arr = [];
  const dfs = (depth, start, path) => {
    if (depth === n) {
      arr.push(path);
      return;
    }
    for (let i = start; i < 11; i++) {
      dfs(depth + 1, i, [...path, i]);
    }
  };
  dfs(0, 0, []);
  for (let i = 0; i < arr.length; i++) {
    let apeach = 0;
    let lion = 0;
    const temp = Array(11).fill(0);
    for (let j = 0; j < arr[i].length; j++) {
      temp[arr[i][j]]++;
    }
    for (let l = 0; l < 11; l++) {
      if (info[l] === 0 && temp[l] === 0) {
        continue;
      }

      if (info[l] - temp[l] >= 0) {
        apeach += 10 - l;
      } else {
        lion += 10 - l;
      }
    }
    if (lion > apeach && lion - apeach === max) {
      answer.push(temp);
    }
    if (lion > apeach && lion - apeach > max) {
      answer = [temp];
      max = lion - apeach;
    }
  }
  if (max === -Infinity) {
    return [-1];
  }
  const sorted = answer
    .map((v) => v.join(""))
    .sort((a, b) => {
      for (let i = 10; i >= 0; i--) {
        if (a[i] === b[i]) {
          continue;
        }
        return b[i] - a[i];
      }
    });
  return sorted[0].split("").map(Number);
}
