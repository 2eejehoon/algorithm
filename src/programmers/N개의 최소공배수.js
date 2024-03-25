const getGcd = (num1, num2) => {
  return num2 > 0 ? getGcd(num2, num1 % num2) : num1;
};
const getLcm = (num1, num2) => {
  return (num1 * num2) / getGcd(num1, num2);
};

function solution(arr) {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer = getLcm(answer, arr[i]);
  }
  return answer;
}
