const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [x, y] = input.shift().split(" ");

console.log(x, y);

const checkChess = (turn, arr, starStr, endStr) => {
  let count;

  count = arr.reduce((acc, cur, idx) => {
    const temp = cur.split("");

    for (let i = 0; i < temp.length; i++) {
      const ele = temp[i];
      if ((idx + i) % 2 === 0) {
        if (ele !== starStr) {
          acc += 1;
        }
      } else {
        if (ele !== endStr) {
          acc += 1;
        }
      }
    }
    return acc;
  }, 0);

  return count;
};

function solution(a, b, arr) {
  let answer = 0;

  answer = Math.min(
    checkChess(a * b, arr, "W", "B"),
    checkChess(a * b, arr, "B", "W")
  );

  return answer;
}

console.log(solution(x, y, input));
