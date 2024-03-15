function solution(n, k) {
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
  const a = n.toString(k);
  let answer = 0;
  const arr = a.split("0");
  for (let x of arr) {
    if (isPrime(Number(x))) {
      answer++;
    }
  }
  return answer;
}
