const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(num) {
  let answer = 0;

  const dp = Array.from({ length: 10 ** 6 }, () => 0);

  dp[1] = 1;

  for (let i = 2; i <= num + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }

  return (answer = dp[num + 1]);
}

console.log(solution(parseInt(input)));
