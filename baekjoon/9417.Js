const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) =>
    ele
      .split(" ")
      .map((ele) => parseInt(ele))
      .sort((a, b) => b - a)
  );

const combinationFn = (arr, pick) => {
  const result = [];
  if (pick === 1) return arr.map((ele) => [ele]);

  arr.forEach((target, idx, origin) => {
    const newArr = origin.slice(idx + 1);

    const combinations = combinationFn(newArr, pick - 1);

    const attached = combinations.map((ele) => [target, ...ele]);

    result.push(...attached);
  });

  return result;
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

function solution(data) {
  let answer = [];

  const num = data.shift()[0];

  for (let i = 0; i < num; i++) {
    let temp = 0;

    const newCombination = combinationFn(data[i], 2);

    newCombination.forEach((ele) => {
      const [a, b] = ele;
      const gcdNum = gcd(a, b);
      if (gcdNum >= temp) {
        temp = gcdNum;
      }
    });

    answer.push(temp);
  }

  answer.forEach((ele) => console.log(ele));
  return;
}

solution(input);
