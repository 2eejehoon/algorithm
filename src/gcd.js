const gcd = (num1, num2) => {
  return num2 > 0 ? gcd(num2, num1 % num2) : num1;
};
const result = gcd(30, 15);
console.log(result);
