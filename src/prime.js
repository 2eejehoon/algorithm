function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPrimes(n) {
  const obj = { 1: true };
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (obj[i]) {
      continue;
    }
    for (let j = i ** 2; j < n; j += i) {
      obj[j] = true;
    }
  }

  const primes = [];
  for (let i = 1; i < n; i++) {
    if (!obj[i]) {
      primes.push(i);
    }
  }

  return primes;
}
