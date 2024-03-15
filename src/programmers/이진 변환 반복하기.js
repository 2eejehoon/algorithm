function solution(s) {
  const answer = [0, 0];
  const recursive = (str) => {
    if (str === "1") {
      return;
    }
    answer[0]++;
    let temp = "";
    for (let x of str) {
      if (x === "0") {
        answer[1]++;
      } else {
        temp += x;
      }
    }
    temp = temp.length.toString(2);
    recursive(temp);
  };
  recursive(s);
  return answer;
}
