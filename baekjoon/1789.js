const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = parseInt(input.shift());

function solution(n) {
  let answer = 0;

  if (n === 1) return ++answer;

  const dp = Array(parseInt(Math.sqrt(n))).fill(0);

  for (let i = 1; i < n; i++) {
    dp[i] = i + dp[i - 1];

    if (n - dp[i] <= i) {
      return i;
    }
  }

  return answer;
}

console.log(solution(num));
