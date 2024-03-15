function solution(word) {
  const arr = ["A", "E", "I", "O", "U"];
  const words = [];
  const dfs = (str) => {
    words.push(str);
    if (str.length === 5) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      dfs(str + arr[i]);
    }
  };
  dfs("");
  return words.findIndex((v) => v === word);
}
