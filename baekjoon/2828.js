const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();

function solution(n, arr) {
  let answer = 0;

  arr.sort((a, b) => b - a);
  const stack = [];

  let temp = 0;

  while (true) {
    let sum = 0;

    sum = arr[temp] * (temp + 1);

    stack.push(sum);

    temp++;

    if (temp === arr.length) {
      break;
    }
  }

  return (answer = Math.max(...stack));
}

console.log(
  solution(
    parseInt(num),
    input.map((ele) => parseInt(ele))
  )
);
