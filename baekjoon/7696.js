const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
<<<<<<< HEAD
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  let answer = 0;

  let target = 0;
  let length;
  let setLength;

  const dp = Array.from({ length: 10 ** 6 }, () => 0);

  dp[1] = 1;

  while (target < dp.length) {
    target++;
  }

  //   for (let j = 0; j < arr.length; j++) {
  //     const ele = arr[j];
  //     if (!ele) return;
  //     for (let i = 1; i < ele + 1; i++) {
  //       target++;
  //       length = target.toString().length;
  //       setLength = [...new Set(target.toString())].length;

  //       while (length !== setLength) {
  //         target++;
  //         length = target.toString().length;
  //         setLength = [...new Set(target.toString())].length;
  //       }
  //     }
  //     console.log(target);
  //     target = 0;
  //   }
}

solution(input.map((ele) => parseInt(ele)));
=======
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => parseInt(ele));

const calNum = (num) => {
  for (let i = 0; i < num; i++) {}
};

function solution(arr) {
  return;
}

solution(input);
>>>>>>> 14bc2c9 (feat)
