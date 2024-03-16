function solution(numbers) {
  const answer = numbers
    .sort((a, b) => `${a}${b}` - `${b}${a}`)
    .reverse()
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
