const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = parseInt(fs.readFileSync(filePath));
function solution(num) {
  let answer = 0;

  while (num > 0) {
    const sqrt = parseInt(Math.sqrt(num));

    num -= sqrt ** 2;
    answer++;
  }

  return answer;
}

console.log(solution(input));
