const check = (arr) => {
  let isCorrect = true;
  const stack = [];
  for (let x of arr) {
    if (x === "[" || x === "{" || x === "(") {
      stack.push(x);
      continue;
    }
    const top = stack.at(-1);
    if (top === "{" && x === "}") {
      stack.pop();
      continue;
    }
    if (top === "[" && x === "]") {
      stack.pop();
      continue;
    }
    if (top === "(" && x === ")") {
      stack.pop();
      continue;
    }
    isCorrect = false;
    break;
  }
  if (stack.length > 0) {
    return false;
  }
  return isCorrect;
};

function solution(s) {
  let answer = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (check(s)) {
      answer++;
    }
    s.push(s.shift());
  }
  return answer;
}
