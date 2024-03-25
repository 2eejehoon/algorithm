function solution(n, a, b) {
  let answer = 0;
  const recursive = (a, b) => {
    if (a === b) {
      return;
    }
    answer++;
    return recursive(Math.ceil(a / 2), Math.ceil(b / 2));
  };
  recursive(a, b);
  return answer;
}
