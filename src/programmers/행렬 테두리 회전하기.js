function solution(rows, columns, queries) {
  const answer = [];
  const matrix = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, col) => row * columns + col + 1)
  );
  for (let query of queries) {
    const [x1, y1, x2, y2] = query;
    let min = Infinity;
    const temp = [];
    for (let i = y1 - 1; i < y2 - 1; i++) {
      min = Math.min(min, matrix[x1 - 1][i]);
      temp.push(matrix[x1 - 1][i]);
    }
    for (let i = x1 - 1; i < x2 - 1; i++) {
      min = Math.min(min, matrix[i][y2 - 1]);
      temp.push(matrix[i][y2 - 1]);
    }
    for (let i = y2 - 1; i > y1 - 1; i--) {
      min = Math.min(min, matrix[x2 - 1][i]);
      temp.push(matrix[x2 - 1][i]);
    }
    for (let i = x2 - 1; i > x1 - 1; i--) {
      min = Math.min(min, matrix[i][y1 - 1]);
      temp.push(matrix[i][y1 - 1]);
    }
    answer.push(min);
    temp.unshift(temp.pop());
    let j = 0;
    for (let i = y1 - 1; i < y2 - 1; i++) {
      matrix[x1 - 1][i] = temp[j];
      j++;
    }
    for (let i = x1 - 1; i < x2 - 1; i++) {
      matrix[i][y2 - 1] = temp[j];
      j++;
    }
    for (let i = y2 - 1; i > y1 - 1; i--) {
      matrix[x2 - 1][i] = temp[j];
      j++;
    }
    for (let i = x2 - 1; i > x1 - 1; i--) {
      matrix[i][y1 - 1] = temp[j];
      j++;
    }
  }
  console.log(matrix);
  return answer;
}
