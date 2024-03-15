function solution(s) {
  const stack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      const top = stack[stack.length - 1];
      if (top === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }

  return true;
}
