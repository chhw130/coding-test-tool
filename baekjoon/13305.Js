const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, c] = input;

const arrB = b
  .toString()
  .split(" ")
  .map((ele) => parseInt(ele));

const arrC = c
  .toString()
  .split(" ")
  .map((ele) => parseInt(ele));

function solution(len, needs, costs) {
  let answer = 0;
  let temp = needs[0];
  costs.pop();
  costs.push(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < costs.length; i++) {
    let cost = costs[i];

    for (let j = i + 1; j < costs.length - 1; j++) {
      const difCost = costs[j];

      temp += needs[j];

      console.log(temp, i, cost, costs[j], difCost);
      if (cost < difCost) {
        answer += temp * cost;
        i = j;
        break;
      } else {
        cost = difCost;
      }
    }

    temp = 0;
  }

  return answer;
}

console.log(solution(a, arrB, arrC));
