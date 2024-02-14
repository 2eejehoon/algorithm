function solution(edges) {
  let 생성정점 = 0;
  let 총그래프수 = 0;
  let 도넛 = 0;
  let 막대 = 0;
  let 팔자 = 0;

  const graph = {};
  edges.forEach(([from, to]) => {
    if (!graph[from]) {
      graph[from] = { fromCount: 0, toCount: 0 };
    }

    if (!graph[to]) {
      graph[to] = { fromCount: 0, toCount: 0 };
    }

    graph[from].fromCount++;
    graph[to].toCount++;
  });

  for (let key in graph) {
    const { fromCount, toCount } = graph[key];
    if (fromCount >= 2 && toCount === 0) {
      생성정점 = Number(key);
      총그래프수 = fromCount;
    }

    if (fromCount === 0) 막대++;
    if (fromCount >= 2 && toCount >= 2) 팔자++;
  }

  도넛 = 총그래프수 - 막대 - 팔자;

  return [생성정점, 도넛, 막대, 팔자];
}

const answer = solution([
  [4, 11],
  [1, 12],
  [8, 3],
  [12, 7],
  [4, 2],
  [7, 11],
  [4, 8],
  [9, 6],
  [10, 11],
  [6, 10],
  [3, 5],
  [11, 1],
  [5, 3],
  [11, 9],
  [3, 8],
]);
console.log(answer);
