const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = parseInt(fs.readFileSync(filePath).toString());

function solution(num) {
  let answer = Number.MAX_SAFE_INTEGER;

  let start = parseInt(num / 2);

  while (num > start) {
    let sum = start;

    for (let i = 0; i < start.toString().split("").length; i++) {
      sum += parseInt(start.toString()[i]);
    }

    if (sum === num) {
      answer = Math.min(answer, start);
    }

    start++;
  }

  if (answer === Number.MAX_SAFE_INTEGER) {
    return 0;
  }

  return answer;
}

console.log(solution(input));
