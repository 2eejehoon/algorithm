function solution(menu, order, k) {
  let answer = 0;
  let start = -k;
  let end = 0;
  const current = [];
  for (let i = 0; i < order.length; i++) {
    start += k;
    end = start > end ? start + menu[order[i]] : end + menu[order[i]];
    current.push(end);

    let count = 1;
    for (let j = 0; j < i; j++) {
      if (start < current[j]) {
        count++;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer;
}
