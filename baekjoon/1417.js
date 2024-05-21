const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => parseInt(ele));

function solution(arr) {
  let answer = 0;
  arr.shift();

  let max = Math.max(...arr);

  const maxNum = arr.reduce((acc, cur) => {
    if (cur === max) {
      acc++;
      return acc;
    } else {
      return acc;
    }
  }, 0);

  if (max === arr[0] && maxNum !== 1) {
    return 1;
  }

  while (true) {
    max = Math.max(...arr);
    if (max === arr[0]) {
      const maxN = arr.reduce((acc, cur) => {
        if (cur === max) {
          acc++;
          return acc;
        } else {
          return acc;
        }
      }, 0);
      if (maxN !== 1) {
        answer++;
      }
      break;
    }

    const idx = arr.indexOf(max);
    arr[idx] = arr[idx] - 1;
    arr[0] = arr[0] + 1;
    answer++;
  }
  return answer;
}

console.log(solution(input));
