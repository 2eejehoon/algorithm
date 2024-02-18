function solution(arr) {
  const answer = [];
  function dfs(depth, temp = []) {
    if (depth === arr.length) {
      answer.push(temp);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      dfs(depth + 1, [...temp, arr[i]]);
    }
  }
  dfs(0);
  return answer;
}
console.log(solution([1, 2, 3]));
