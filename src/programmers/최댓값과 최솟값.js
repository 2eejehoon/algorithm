function solution(s) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  s = s.split(" ").map(Number);
  s.forEach((v) => {
    max = Math.max(v, max);
    min = Math.min(v, min);
  });
  return `${min} ${max}`;
}
