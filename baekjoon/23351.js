const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [a, b, c, d] = input.map((ele) => parseInt(ele));

function solution(num, water, A, B) {
  let answer = 0;

  const arr = Array.from({ length: num }, () => water);
  let temp = 0;

  while (!arr.includes(0)) {
    if (temp === num) {
      temp = 0;
    }

    for (let i = temp; i < A + temp; i++) {
      arr[i] += B;
    }

    arr.forEach((ele, idx) => (arr[idx] = ele - 1));
    temp += A;
    answer++;
  }
  return answer;
}

console.log(solution(a, b, c, d));
