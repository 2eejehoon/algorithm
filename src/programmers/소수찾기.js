function solution(numbers) {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const set = new Set();
  const arr = numbers.split("").map(Number);
  const check = Array(arr.length).fill(false);
  const dfs = (depth, str) => {
    if (isPrime(Number(str))) {
      set.add(Number(str));
    }
    if (depth === arr.length) {
      return;
    }
    for (let i = 0; i < check.length; i++) {
      if (!check[i]) {
        check[i] = true;
        dfs(depth + 1, str + arr[i]);
        check[i] = false;
      }
    }
  };
  dfs(0, "");
  return set.size;
}
