function solution(want, number, discount) {
  let answer = 0;
  const obj = {};
  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }
  for (let i = 0; i < discount.length; i++) {
    let temp = true;
    const copy = { ...obj };
    for (let j = i; j < i + 10; j++) {
      if (discount[j] in copy) {
        copy[discount[j]]--;
        if (copy[discount[j]] < 0) {
          temp = false;
          break;
        }
      } else {
        temp = false;
        break;
      }
    }
    if (temp) {
      answer++;
    }
  }
  return answer;
}
