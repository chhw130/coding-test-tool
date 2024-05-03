const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [num, a, b] = input;

const arrA = a.split(" ").map((ele) => parseInt(ele));
const arrB = b.split(" ").map((ele) => parseInt(ele));

function solution(n, A, B) {
  let answer = 0;

  const sortA = A.sort((a, b) => a - b);

  sortA.forEach((ele) => {
    const maxB = Math.max(...B);
    B.splice(B.indexOf(maxB), 1);
    answer += maxB * ele;
  });

  return answer;
}

console.log(solution(num, arrA, arrB));
