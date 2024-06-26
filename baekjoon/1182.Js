const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const arr = input[0].split(" ").map((ele) => parseInt(ele));

const combinationFn = (arr, pick) => {
  const results = [];

  if (pick === 1) return arr.map((ele) => [ele]);

  arr.forEach((target, idx, origin) => {
    const newArr = origin.slice(idx + 1);

    const combinations = combinationFn(newArr, pick - 1);

    const attached = combinations.map((ele) => [target, ...ele]);

    results.push(...attached);
  });
  return results;
};

function solution(n, target, data) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const combi = combinationFn(data, i);

    combi.forEach((ele) => {
      const sum = ele.reduce((acu, cur) => acu + cur, 0);

      if (sum === target) {
        answer++;
      }
    });
  }

  return answer;
}

console.log(solution(a, b, arr));
