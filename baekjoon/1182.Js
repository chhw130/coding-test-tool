const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input;

const [x, tar] = a.split(" ").map((ele) => parseInt(ele));
const arr = b.split(" ").map((ele) => parseInt(ele));

function solution(num, target, numArr) {
  let answer = 0;

  const dfs = (idx, sum) => {
    if (idx === num) return;

    sum += numArr[idx];

    if (sum === target) {
      answer++;
    }

    dfs(idx + 1, sum);
    dfs(idx + 1, sum - numArr[idx]);
  };

  dfs(0, 0);

  return answer;
}

console.log(solution(x, tar, arr));

// const combinations = (arr, pick) => {
//   const result = [];

//   if (pick === 1) return arr.map((ele) => [ele]);

//   arr.forEach((target, idx, origin) => {
//     const newArr = origin.slice(idx + 1);

//     const combination = combinations(newArr, pick - 1);

//     const attached = combination.map((ele) => [target, ...ele]);

//     result.push(...attached);
//   });

//   return result;
// };

// function solution(num, target, numArr) {
//   let answer = 0;

//   for (let i = 1; i < num; i++) {
//     const data = combinations(numArr, i);

//     for (let j = 0; j < data.length; j++) {
//       const sum = data[j].reduce((acc, cur) => acc + cur, 0);

//       if (sum === target) {
//         answer++;
//       }
//     }
//   }

//   return answer;
// }
