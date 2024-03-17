function solution(sequence, k) {
  const answer = [];
  let sum = 0;
  let left = 0;
  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];
    while (sum > k) {
      sum -= sequence[left];
      left++;
    }
    if (sum === k) {
      answer.push([left, right]);
    }
  }
  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
