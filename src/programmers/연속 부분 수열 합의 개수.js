function solution(elements) {
  const set = new Set();
  const arr = elements.concat(elements);
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const sum = arr.slice(i, i + j + 1).reduce((acc, cur) => acc + cur);
      set.add(sum);
    }
  }
  return set.size;
}
