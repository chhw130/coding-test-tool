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
  const dp = Array.from({ length: n - m + 1 }, () => 0);
  let left = 0;
  let right = m - 1;
  let target = 1;

  for (let i = 0; i <= right; i++) {
    dp[0] += data[i];
  }

  while (right + 1 < n) {
    right++;
    dp[target] = dp[target - 1] - data[left] + data[right];
    left++;
    target++;
  }

  dp.sort((a, b) => b - a);

  return (answer = dp[0]);
}

console.log(solution(x, y, arr));
