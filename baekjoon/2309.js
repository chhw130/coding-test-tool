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

input.sort((a, b) => a - b);

let sum = input.reduce((acc, cur) => acc + cur, 0);

for (let i = 0; i < input.length - 2; i++) {
  for (let j = i + 1; j < input.length - 1; j++) {
    const temp = sum - input[i] - input[j];

    if (temp === 100) {
      const answer = input.filter(
        (ele) => ele !== input[i] && ele !== input[j]
      );

      answer.forEach((ele) => {
        console.log(ele);
      });
      return;
    }
  }
}
