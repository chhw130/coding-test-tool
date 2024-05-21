const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const arr = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele))
  .sort((a, b) => a - b);

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

function solution(x, y, sorted) {
  const combi = combinationFn(sorted, y);

  combi.forEach((ele) => {
    console.log(ele.join(" "));
  });
}

solution(n, m, arr);
