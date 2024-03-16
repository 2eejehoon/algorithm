function solution(x, y, n) {
  let answer = -1;
  const queue = [[y, 0]];
  while (queue.length > 0) {
    const [num, count] = queue.shift();
    if (num === x) {
      answer = count;
      break;
    }
    if (num % 2 === 0) {
      queue.push([num / 2, count + 1]);
    }
    if (num % 3 === 0) {
      queue.push([num / 3, count + 1]);
    }
    if (num - n >= x) {
      queue.push([num - n, count + 1]);
    }
  }
  return answer;
}
