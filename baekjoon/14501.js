const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());

const arr = input.map((ele) => ele.split(" ").map((ele) => parseInt(ele)));

function solution(num, data) {
  let answer = 0;

  const dp = Array(num).fill(0);

  for (let i = 0; i < num; i++) {
    const [day, earn] = data[i];

    if (day + i > num) {
      continue;
    }

    dp[i] = dp[i] + earn;

    for (let j = i + day; j < num; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }

  return (answer = Math.max(...dp));
}

console.log(solution(n, arr));
