const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, ...rest] = input;

const data = rest.map((ele) => ele.split(" ").map((val) => parseInt(val)));

function solution(peak) {
  const queue = [[0, 0]];
  while (queue.length) {
    const [x, y] = queue.shift();

    const route = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    for (let i = 0; i < route.length; i++) {}
  }
}

console.log(solution(data));
