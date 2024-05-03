const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const data = input[0].split("");

const checkNum = (stack, target) => {
  const score = target === "]" ? 3 : 2;

  for (let i = 0; i < data.length; i++) {
    let temp = stack[stack.length - 1];

    let reverse;

    if (temp === "(" && target === ")") {
      stack.pop();
      reverse = "(";
      stack.push(score);
    } else if (temp === "[" && target === "]") {
      stack.pop();
      reverse = "[";
      stack.push(score);
    } else {
      let temp = 0;
      const ele = stack.pop();
      while (true) {
        if (typeof ele === "number") {
          temp += ele;
        } else if (ele === reverse) {
          stack.push(temp * score);
          break;
        }
      }
    }
  }
};

function solution(arr) {
  let answer = 0;

  const stack = [];

  arr.forEach((ele) => {
    if (ele === "(" || ele === "[") {
      stack.push(ele);
    } else {
      checkNum(stack, ele);
    }
  });

  return (answer = stack[0]);
}

console.log(solution(data));
