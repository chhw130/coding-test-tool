const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input;

const [x, y] = a.split(" ").map((ele) => parseInt(ele));

const arr = b.split(" ").map((ele) => parseInt(ele));

function solution(n, target, data) {
  let answer = 0;

  let dp = [0, data[0]];

  for (let i = 1; i < n; i++) {
    dp.push(dp[i] + arr[i]);
  }

  console.log(dp);

  return answer;
}

console.log(solution(x, y, arr));
