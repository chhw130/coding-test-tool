const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ");

function solution(word1, word2) {
  let answer = word2.length - word1.length;
  let temp = 0;

  for (let i = 0; i < word2.length - word1.length + 1; i++) {
    const targetWord = word2.slice(i, i + word1.length);
    let sum = 0;
    for (let j = 0; j < word1.length; j++) {
      if (word1[j] === targetWord[j]) {
        sum++;
      }
    }
    sum >= temp ? (temp = sum) : temp;
  }

  answer = word2.length - (answer + temp);

  return answer;
}

console.log(solution(a, b));
