function solution(prices) {
  const len = prices.length;
  const answer = Array.from({ length: len }, (_, i) => len - i - 1);
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        answer[i] = Math.min(answer[i], j - i);
        break;
      }
    }
  }
  return answer;
}
