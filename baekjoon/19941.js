const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const arr = input[0].split("").map((ele) => (ele === "H" ? 1 : 0));

function solution(n, m, list) {
  let answer = 0;

  list.forEach((ele, idx) => {
    if (ele) {
      return;
    }

    for (let i = idx - m; i <= idx + m; i++) {
      if (i === idx || !list[i]) {
        continue;
      }
      if (list[i] === 1) {
        list[i] = -1;
        answer++;
        break;
      }
    }
  });

  return answer;
}

console.log(solution(a, b, arr));
