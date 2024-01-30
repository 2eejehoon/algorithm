function subset(arr) {
  const answer = [];

  function dfs(l, str) {
    if (l === arr.length) {
      answer.push(str);
      return;
    }

    dfs(l + 1, str + arr[l] + " ");
    dfs(l + 1, str);
  }
  dfs(0, "");

  return answer;
}

const answer = solution([1, 2, 3]);
console.log(answer);
