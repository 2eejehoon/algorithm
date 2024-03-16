function solution(topping) {
  let answer = 0;
  const obj1 = {};
  for (let x of topping) {
    if (x in obj1) {
      obj1[x]++;
    } else {
      obj1[x] = 1;
    }
  }
  let len1 = Object.keys(obj1).length;
  let len2 = 0;
  const obj2 = {};
  for (let x of topping) {
    obj1[x]--;
    if (obj1[x] === 0) {
      len1--;
    }
    if (x in obj2) {
      obj2[x]++;
    } else {
      obj2[x] = 1;
      len2++;
    }

    if (len1 === len2) {
      answer++;
    }
  }
  return answer;
}
