function solution(n, words) {
  if (words[0].length === 1) {
    return [1, 1];
  }
  const set = new Set();
  set.add(words[0]);
  for (let i = 1; i < words.length; i++) {
    if (set.has(words[i]) || words[i][0] !== words[i - 1][words[i - 1].length - 1] || words[i].length === 1) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    set.add(words[i]);
  }
  return [0, 0];
}
