function solution(arr) {
  const answer = [];
  function dfs(l, temp = []) {
    if (l === arr.length) {
      answer.push(temp);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      dfs(l + 1, [...temp, arr[i]]);
    }
  }
  dfs(0);
  return answer;
}
console.log(solution([1, 2, 3]));
