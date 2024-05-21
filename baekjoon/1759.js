const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [leng, n] = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const arr = input.shift().split(" ");

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

function solution(length, total, alphabet) {
  let answer = "";
  const moum = ["a", "e", "i", "o", "u"];
  alphabet.sort();

  const combi = combinationFn(alphabet, length);

  combi.forEach((ele, idx) => {
    const hasMoum = ele.some((alp) => moum.includes(alp));
    const jaumCount = ele.reduce(
      (acc, cur) => (moum.includes(cur) ? acc : (acc += 1)),
      0
    );

    if (!hasMoum || jaumCount < 2) {
      return;
    }

    const key = ele.reduce((acc, cur) => acc + cur, "");
    if (combi.length - 1 === idx) {
      return (answer += key);
    }
    answer += `${key}\n`;
  });

  console.log(answer);
}
solution(leng, n, arr);
