const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, c] = input;

const intA = parseInt(a);

const arrB = b
  .split(" ")
  .map((ele) => parseInt(ele))
  .sort((a, b) => a - b);
const intC = parseInt(c);

function solution(n, arr, budget) {
  let answer = 0;

  if (arr.reduce((acc, cur) => acc + cur, 0) < budget) {
    return arr[arr.length - 1];
  }

  let target = parseInt(budget / n);
  let start = 0;
  let end = arr[arr.length - 1];

  while (start <= end) {
    let sum = 0;
    let remainer = 0;
    target = parseInt((start + end) / 2);

    arr.forEach((ele) => {
      if (target >= ele) {
        sum += ele;
      } else {
        remainer++;
        sum += target;
      }
    });

    if (sum === budget) {
      break;
    }

    if (sum <= budget) {
      if (sum + remainer > budget) {
        break;
      } else {
        start = target + 1;
      }
    } else {
      end = target - 1;
    }
  }

  return (answer = target);
}

console.log(solution(intA, arrB, intC));
