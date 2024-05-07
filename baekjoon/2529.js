const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input;

const arr = b.split(" ");

function solution(n, data) {
  let answer = [];

  const memories = Array(10).fill(0);

  const dfs = (count, target, copyMemo, number) => {
    if (count === n) {
      answer.push(number);
      return;
    } else {
      const check = data[count];

      if (check === ">") {
        for (let i = 0; i < 10; i++) {
          if (!copyMemo[i] && i < target) {
            const newMemo = copyMemo.slice();
            newMemo[i] = 1;
            dfs(count + 1, i, newMemo.slice(), `${number + i}`);
          }
        }
      } else if (check === "<") {
        for (let i = 0; i < 10; i++) {
          if (!copyMemo[i] && i > target) {
            const newMemo = copyMemo.slice();
            newMemo[i] = 1;
            dfs(count + 1, i, newMemo.slice(), `${number + i}`);
          }
        }
      }
    }
  };

  for (let i = 0; i < 10; i++) {
    const copyMemo = memories.slice();
    copyMemo[i] = 1;
    dfs(0, i, copyMemo, `${i}`);
  }

  answer.map((ele) => parseInt(ele)).sort((a, b) => a - b);
  answer = [answer.shift(), answer.pop()];

  return `${answer[1]}\n${answer[0]}`;
}

console.log(solution(parseInt(a), arr));
