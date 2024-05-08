const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input;

const [x, y] = a.split(" ").map((ele) => parseInt(ele));

const arr = b.split(" ").map((ele) => parseInt(ele));

function solution(n, m, data) {
  let answer = 0;

  for (let i = 1; i < m - 1; i++) {
    const leftH = Math.max(...data.slice(0, i));
    const rightH = Math.max(...data.slice(i + 1));

    if (leftH > data[i] && rightH > data[i]) {
      if (leftH > rightH) {
        answer += rightH - data[i];
      } else {
        answer += leftH - data[i];
      }
    }
  }

  return answer;
}

console.log(solution(x, y, arr));
