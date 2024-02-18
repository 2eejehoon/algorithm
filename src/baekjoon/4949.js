const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const check = (str) => {
  const stack = [];
  for (let x of str) {
    const top = stack[stack.length - 1];
    switch (x) {
      case "(":
      case "[":
      case "{":
        stack.push(x);
        break;

      case ")":
        if (top === "(") {
          stack.pop();
          break;
        } else {
          return "no";
        }

      case "]":
        if (top === "[") {
          stack.pop();
          break;
        } else {
          return "no";
        }

      case "}":
        if (top === "{") {
          stack.pop();
          break;
        } else {
          return "no";
        }

      default:
        break;
    }
  }
  if (stack.length > 0) {
    return "no";
  } else {
    return "yes";
  }
};

const answer = input.map(check);
console.log(answer.join("\n"));
