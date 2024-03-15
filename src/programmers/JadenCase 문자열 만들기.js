function solution(s) {
  const arr = s.split(" ");
  const arr2 = arr.map((v) => {
    let temp = "";
    for (let i = 0; i < v.length; i++) {
      if (i === 0) {
        temp += v[i].toUpperCase();
      } else {
        temp += v[i].toLowerCase();
      }
    }
    return temp;
  });
  return arr2.join(" ");
}
