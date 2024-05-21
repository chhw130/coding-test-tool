const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = parseInt(input.shift());
const data = input[0].split(" ").map((ele) => parseInt(ele));

const perMutationFn = (arr, pick) => {
  const result = [];
  if (pick === 1) return arr.map((ele) => [ele]);

  arr.forEach((target, idx, origin) => {
    const newArr = [...origin.slice(0, idx), ...origin.slice(idx + 1)];

    const permutations = perMutationFn(newArr, pick - 1);

    const attached = permutations.map((ele) => [target, ...ele]);

    result.push(...attached);
  });

  return result;
};

function solution(n, arr) {
  let answer = 0;

  const perMutation = perMutationFn(arr, n);

  perMutation.forEach((ele) => {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(ele[i] - ele[i + 1]);
    }

    answer = Math.max(sum, answer);
  });

  return answer;
}

console.log(solution(a, data));
