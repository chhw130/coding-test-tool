const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [a, b] = input.split(" ").map((ele) => parseInt(ele));

function solution(start, end) {
  let answer = 0;
  let temp = 0;

  for (let i = 1; i < end + 1; i++) {
    for (let j = 0; j < i; j++) {
      temp++;

      if (temp >= start) {
        answer += i;
      }

      if (temp === end) {
        return answer;
      }
    }
  }

  return answer;
}

console.log(solution(a, b));
