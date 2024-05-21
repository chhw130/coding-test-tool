const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input.shift();
const targetArr = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const arr = input.map((ele) => ele.split(" ").map((ele) => parseInt(ele)));

function solution(n, targets, nutArr) {
  const answer = [];
  const id = [];
  const [Ta, Tb, Tc, Td] = targets;

  const checkNut = (cur) => {
    const [Ca, Cb, Cc, Cd] = cur;

    if (Ca >= Ta && Cb >= Tb && Cc >= Tc && Cd >= Td) {
      return true;
    } else {
      return false;
    }
  };

  const dfs = (idx, idArr, sumArr) => {
    if (checkNut(sumArr)) {
      answer.push(sumArr[4]);
      id.push(idArr);
      return;
    }
    if (idx - 1 === n - 1) {
      return;
    }

    const newIdArr = idArr.slice();
    newIdArr.push(idx + 1);

    const [a, b, c, d, e] = nutArr[idx];

    const newSumArr = sumArr.slice();
    newSumArr[0] += a;
    newSumArr[1] += b;
    newSumArr[2] += c;
    newSumArr[3] += d;
    newSumArr[4] += e;

    dfs(idx + 1, idArr, sumArr);
    dfs(idx + 1, newIdArr, newSumArr);
  };

  dfs(0, [], [0, 0, 0, 0, 0]);

  const min = Math.min(...answer);
  const filteredId = id.filter((ele, id) => answer[id] === min);

  filteredId.sort((a, b) => {
    // 배열을 문자열로 변환하여 비교합니다.
    let aStr = a.join(",");
    let bStr = b.join(",");

    if (aStr < bStr) return -1;
    if (aStr > bStr) return 1;
    return 0;
  });

  if (min === Infinity) {
    console.log(-1);
  } else {
    console.log(min);
    console.log(filteredId[0].join(" "));
  }
}

solution(num, targetArr, arr);
