const n = 5;
const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString();

function solution(num) {
  let answer = 0;

  if (num % 2) {
    answer = "SK";
  } else {
    answer = "CY";
  }

  return answer;
}

// console.log(solution(6));

// console.log(input);
console.log(input);
