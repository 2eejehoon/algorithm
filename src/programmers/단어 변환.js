function solution(begin, target, words) {
  words.push(begin);
  let temp = false;
  let answer = Number.MAX_SAFE_INTEGER;
  const visit = Array(words.length).fill(false);
  const graph = Array.from({ length: words.length }, () => Array(words.length).fill(0));
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      for (let k = 0; k < words[i].length; k++) {
        if (words[i][k] !== words[j][k]) graph[i][j]++;
      }
    }
  }

  function dfs(v, count, path) {
    if (words[v] === target) {
      temp = true;
      answer = Math.min(count, answer);
      return;
    }

    for (let i = 0; i < visit.length; i++) {
      if (!visit[i] && graph[v][i] === 1) {
        visit[i] = true;
        dfs(i, count + 1, [...path, i]);
        visit[i] = false;
      }
    }
  }
  dfs(words.length - 1, 0, []);

  if (temp) return answer;
  return 0;
}
