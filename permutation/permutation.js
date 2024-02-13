function solution(arr) {
  const answer = [];
  const visit = Array(arr.length).fill(false);
  const dfs = (depth, path) => {
    if (depth === arr.length) {
      answer.push(path);
      return;
    }

    for (let i = 0; i < visit.length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        dfs(depth + 1, [...path, arr[i]]);
        visit[i] = false;
      }
    }
  };
  dfs(0, []);

  return answer;
}

console.log(solution([1, 2, 3]));
