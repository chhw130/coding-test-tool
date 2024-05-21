const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map((ele) => parseInt(ele));

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

function solution(n, m) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  const combi = getPermutations(arr, m);

  combi.forEach((ele) => {
    console.log(ele.join(" "));
  });
}

solution(a, b);
