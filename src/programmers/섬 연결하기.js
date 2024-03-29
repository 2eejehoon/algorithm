function solution(n, costs) {
  const unionParent = (set, a, b) => {
    a = getParent(set, a);
    b = getParent(set, b);
    if (a < b) {
      set[b] = a;
    } else {
      set[a] = b;
    }
  };

  const hasEquelParent = (set, a, b) => {
    a = getParent(set, a);
    b = getParent(set, b);
    if (a === b) {
      return true;
    } else {
      return false;
    }
  };

  const getParent = (set, x) => {
    if (set[x] === x) {
      return x;
    }
    return getParent(set, set[x]);
  };

  let answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const table = Array.from({ length: n }, (_, i) => i);
  for (let [a, b, cost] of costs) {
    if (!hasEquelParent(table, a, b)) {
      answer += cost;
      unionParent(table, a, b);
    }
  }
  return answer;
}
