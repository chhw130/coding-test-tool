const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = BigInt(fs.readFileSync(filePath).toString());

function solution(n) {
  let answer = 0;

  const arr = Array.from({ length: 10 * 90 }, () => BigInt(0));
  arr[0] = BigInt(0);
  arr[1] = BigInt(1);
  arr[2] = BigInt(1);

  const fibo = (num) => {
    if (num === 1 || num === 2) {
      return BigInt(1);
    }
    if (arr[num]) {
      return arr[num];
    }

    arr[num] = BigInt(fibo(num - BigInt(1))) + BigInt(fibo(num - BigInt(2)));
    return arr[num];
  };

  answer = fibo(BigInt(n));

  return answer.toString();
}

console.log(solution(input));
