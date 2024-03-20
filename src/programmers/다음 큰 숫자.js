function solution(n) {
  const count = (num) => {
    let count = 0;
    const str = num.toString(2);
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") {
        count++;
      }
    }
    return count;
  };
  let answer = n + 1;
  const count1 = count(n.toString(2));
  while (true) {
    if (count(answer.toString(2)) === count1) {
      break;
    }
    answer++;
  }
  return answer;
}
