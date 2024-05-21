const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((ele) => parseInt(ele));

const num = input[1].split(" ").map((ele) => parseInt(ele));

const combinationFn = (arr, pick) => {
  const result = [];

  if (pick === 1) return arr.map((ele) => [ele]);

  arr.forEach((target, idx, origin) => {
    const newArr = [...origin.slice(0, idx), ...origin.slice(idx + 1)];

    const combinations = combinationFn(newArr, pick - 1);

    const attached = combinations.map((ele) => [target, ...ele]);

    result.push(...attached);
  });

  return result;
};

function solution(n, c, ele) {
  let answer = "";

  const combi = combinationFn(
    ele.sort((a, b) => a - b),
    c
  );

  combi.forEach((ele) => {
    answer += `${ele.join(" ")}\n`;
  });
  console.log(answer);
}

solution(n, m, num);
