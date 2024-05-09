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

const combinationFn = (arr, n) => {
  const result = [];

  if (n === 1) {
    return arr.map((ele) => [ele]);
  }

  arr.forEach((target, idx, origin) => {
    const newArr = origin.slice(idx + 1);

    const combination = combinationFn(newArr, n - 1);

    const attached = combination.map((ele) => [target, ...ele]);
    result.push(...attached);
  });
  return result;
};

const combi = combinationFn(input, 2);

while (combi.length) {
  const [a, b] = combi.shift();
  if (sum - a - b === 100) {
    return input
      .filter((ele) => ele !== a && ele !== b)
      .forEach((ele) => console.log(ele));
  }
}
