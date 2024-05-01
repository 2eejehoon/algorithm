function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let answer = 1;
  let last = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (last < routes[i][0] && routes[i][1] >= last) {
      answer++;
      last = routes[i][1];
    }
  }
  return answer;
}
