const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [a, b] = input;

function solution(number, target, list) {
  let answer = 0;

  for (let i = 1; i < number; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (list[j] < list[j - 1]) {
        [list[j - 1], list[j]] = [list[j], list[j - 1]];
      } else {
        break;
      }
    }
  }

  return (answer = list[target - 1]);
}

console.log(solution(a[0], a[1], b));
