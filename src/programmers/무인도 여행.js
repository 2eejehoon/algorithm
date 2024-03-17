function solution(maps) {
  const answer = [];
  maps = maps.map((v) => v.split("").map((v) => (isNaN(v) ? v : Number(v))));
  const dxdy = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] > 0) {
        let temp = 0;
        const queue = [[i, j]];
        temp += maps[i][j];
        maps[i][j] = "X";
        while (queue.length > 0) {
          const [x, y] = queue.shift();
          for (let [dx, dy] of dxdy) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length && maps[nx][ny] > 0) {
              queue.push([nx, ny]);
              temp += maps[nx][ny];
              maps[nx][ny] = "X";
            }
          }
        }
        answer.push(temp);
      }
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
