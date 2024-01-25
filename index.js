function solution(s) {
  let answer = Number.MIN_SAFE_INTEGER;

  if (s.length === 1) {
    return 1;
  }

  if (s.length === 2 && s[0] === s[1]) {
    return 2;
  }
  const arr = Array.from({ length: s.length + 1 }, (_, i) => i);
  const comb = [];
  const visit = Array(s.length).fill(false);
  const dfs = (depth, start, path) => {
    if (depth === 2) {
      comb.push(path);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        dfs(depth + 1, i + 1, path + String(arr[i]));
        visit[i] = false;
      }
    }
  };
  dfs(0, 0, "");

  const subString = comb.map((v) => {
    const [from, to] = v.split("");
    const string = s.slice(from, to);
    return string;
  });

  subString.forEach((v) => {
    const reverse = v.split("").reverse().join("");
    if (v === reverse) {
      answer = Math.max(answer, v.length);
    }
  });

  return answer;
}

const rusult = solution("abcddcbe");
console.log(rusult);
