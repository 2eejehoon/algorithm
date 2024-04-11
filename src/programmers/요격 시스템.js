function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);
  let answer = 1;
  let last = targets[0][1];
  for (let i = 1; i < targets.length; i++) {
    const [a, b] = targets[i];

    if (a >= last) {
      answer++;
      last = b;
    }
  }
  return answer;
}
