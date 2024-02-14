function solution(s) {
  let answer = 1;
  for (let i = 0; i < s.length; i++) {
    let start = i;
    let end = i;
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start--;
      end++;
    }
    answer = Math.max(answer, end - start - 1);
  }
  for (let i = 0; i < s.length; i++) {
    let start = i;
    let end = i + 1;
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start--;
      end++;
    }
    answer = Math.max(answer, end - start - 1);
  }
  return answer;
}
