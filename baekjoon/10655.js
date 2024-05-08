const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(input.shift());

const arr = input.map((ele) => ele.split(" ").map((ele) => parseInt(ele)));

function solution(n, points) {
  let answer = [];

  let temp = Number.MIN_SAFE_INTEGER;
  const sum = points.reduce((acc, cur, idx) => {
    if (!points[idx + 1]) return acc;
    const [nextX, nextY] = points[idx + 1];
    const [x, y] = cur;

    acc += Math.abs(x - nextX) + Math.abs(y - nextY);

    return acc;
  }, 0);

  for (let i = 1; i < n - 1; i++) {
    const [beforeX, beforeY] = points[i - 1];
    const [x, y] = points[i];
    const [nextX, nextY] = points[i + 1];

    const currentLength =
      Math.abs(beforeX - x) +
      Math.abs(beforeY - y) +
      Math.abs(x - nextX) +
      Math.abs(y - nextY);

    const correctLength = Math.abs(beforeX - nextX) + Math.abs(beforeY - nextY);

    const dif = currentLength - correctLength;

    if (dif > temp) {
      temp = dif;
    }
  }

  return sum - temp;
}

console.log(solution(num, arr));
