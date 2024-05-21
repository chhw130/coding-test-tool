const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = parseInt(input.shift());

const arr = input[0].split(" ");

function solution(n, boo) {
  let answer = [];

  const numArr = Array.from({ length: 10 }, () => 0);

  const dfs = (target, memoNum, turn, numText) => {
    memoNum[target] = 1;

    if (turn === n) {
      if (numText.length === n + 1) {
        answer.push(numText);
      }
      return;
    }

    const check = boo[turn];

    for (let j = 0; j < memoNum.length; j++) {
      if (memoNum[j]) {
        continue;
      }
      if (check === "<" && target < j) {
        const newMemoNum = memoNum.slice();

        dfs(j, newMemoNum, turn + 1, numText + j);
      } else if (check === ">" && target > j) {
        const newMemoNum = memoNum.slice();
        dfs(j, newMemoNum, turn + 1, numText + j);
      }
    }
  };

  for (let i = 0; i < numArr.length; i++) {
    const copyNum = numArr.slice();
    let temp = 0;
    let text = "";
    text += i;
    dfs(i, copyNum, temp, text);
  }

  answer.sort((a, b) => a - b);

  const max = answer[answer.length - 1];
  const min = answer[0];

  console.log(`${max}\n${min}`);
}

solution(num, arr);
