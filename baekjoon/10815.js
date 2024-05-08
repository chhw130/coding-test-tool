const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, c, d] = input;

const num = parseInt(a);
const firstArr = b.split(" ").map((ele) => parseInt(ele));
const num2 = parseInt(c);
const secondArr = d.split(" ").map((ele) => parseInt(ele));

function solution(num1, arr1, num2, arr2) {
  let answer = [];

  const sortArr = arr2.slice().sort((a, b) => a - b);
  const memo = Array(num1).fill(0);

  let start = 0;
  let end = num2 - 1;
  let mid = parseInt(num1 / 2);
  let i = 0;

  while (start <= end) {
    if (!arr1.length) break;

    const target = arr1[i];

    console.log(target);
    if (!arr2.includes(target)) {
      i++;
      continue;
    }

    if (target > sortArr[mid]) {
      start = mid + 1;
    } else if (target < sortArr[mid]) {
      end = mid - 1;
    } else if (target === sortArr[mid]) {
      i++;
      start = 0;
      end = num2 - 1;
      mid = parseInt(num1 / 2);
    }
  }
}

solution(num, firstArr, num2, secondArr);
