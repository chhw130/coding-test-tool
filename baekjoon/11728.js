const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const [a, b] = input;

const arrA = a.split(" ").map((ele) => parseInt(ele));
const arrB = b.split(" ").map((ele) => parseInt(ele));

function solution(leng1, leng2, arr1, arr2) {
  let answer = [];
  let strA = "";

  let temp1 = 0;
  let temp2 = 0;

  while (temp1 < leng1 || temp2 < leng2) {
    if (arr1[temp1] > arr2[temp2]) {
      answer.push(arr2[temp2++]);
    } else if (arr1[temp1] < arr2[temp2]) {
      answer.push(arr1[temp1++]);
    } else if (temp1 === leng1) {
      answer.push(arr2[temp2++]);
    } else {
      answer.push(arr1[temp1++]);
    }
  }

  answer.forEach((ele, idx) => {
    if (idx === 0) {
      strA += ele;
    } else {
      strA += " " + ele;
    }
  });

  return strA;
}

console.log(solution(A, B, arrA, arrB));
