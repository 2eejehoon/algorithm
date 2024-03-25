function solution(k, tangerine) {
  const obj = {};
  for (let x of tangerine) {
    if (x in obj) {
      obj[x]++;
    } else {
      obj[x] = 1;
    }
  }
  const arr = Object.entries(obj);
  arr.sort((a, b) => b[1] - a[1]);
  let answer = 0;
  let sum = 0;
  for (let [key, value] of arr) {
    sum += value;
    answer++;
    if (sum >= k) {
      break;
    }
  }
  return answer;
}
