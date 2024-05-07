const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input;
const intA = parseInt(a);
const arr = b.split(" ").map((ele) => parseInt(ele));

function solution(n, num) {
  let answer = Number.MIN_SAFE_INTEGER;

  const dp = Array.from({ length: n }, () => 0);
  dp[0] = num[0];
  dp[1] = num[1];
  const sum = num.reduce((acc, cur) => acc + cur, 0);

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(num[i] + dp[i - 1], num[i]);
  }

  dp.sort((a, b) => a - b);

  return (answer = sum > dp[n - 1] ? sum : dp[n - 1]);
}

console.log(solution(intA, arr));
