function solution(sequence) {
  let result1 = -Infinity;
  let max1 = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (i % 2 === 0) {
      max1 = Math.max(sequence[i], max1 + sequence[i]);
    } else {
      max1 = Math.max(-sequence[i], max1 - sequence[i]);
    }
    result1 = Math.max(max1, result1);
  }
  let result2 = -Infinity;
  let max2 = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (i % 2 === 1) {
      max2 = Math.max(sequence[i], max2 + sequence[i]);
    } else {
      max2 = Math.max(-sequence[i], max2 - sequence[i]);
    }
    result2 = Math.max(max2, result2);
  }
  return Math.max(result1, result2);
}
