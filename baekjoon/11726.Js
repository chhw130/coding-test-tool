const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = parseInt(fs.readFileSync(filePath).toString());

function solution(num) {
  const dp = Array(1000).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= num + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10_007;
  }

  return dp[num + 1];
}

console.log(solution(input));
