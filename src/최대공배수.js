const gcd = (num1, num2) => {
  return num2 > 0 ? gcd(num2, num1 % num2) : num1;
};

const lcm = (num1, num2) => {
  return (num1 * num2) / gcd(num1, num2);
};
