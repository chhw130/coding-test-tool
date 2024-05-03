const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = parseInt(fs.readFileSync(filePath).toString());

function solution(money) {
  let answer = 0;

  const n = 5;
  const m = 2;

  let temp = 0;

  for (let i = parseInt(money / n); i >= 0; i--) {
    const remain = money - n * i;
    temp += i;

    if (remain % m === 0) {
      temp += remain / m;
      return temp;
    } else if (!i && remain % m !== 0) {
      return -1;
    }

    temp = 0;
  }

  return answer;
}

console.log(solution(input));
