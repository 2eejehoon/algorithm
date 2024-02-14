function combination(arr, n) {
  const answer = [];

  function dfs(l, s, temp = []) {
    if (l === n) {
      answer.push(temp);
      return;
    }

    for (let i = s; i < arr.length; i++) {
      dfs(l + 1, i + 1, [...temp, arr[i]]);
    }
  }
  dfs(0, 0);

  return answer;
}
console.log(combination([1, 2, 3, 4, 5], 3));
