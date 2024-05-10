const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input
  .shift()
  .split(" ")
  .map((ele) => parseInt(ele));

const arr = input.map((ele) => parseInt(ele));

function solution(w, h, data) {
  let answer = 0;

  let dif = Array(h).fill(0);

  const 

  const up = dif.map((ele, idx) => {
    const pos = idx + 1;
    if(idx)
  });

  //   dif.forEach((ele, idx) => {
  //     const pos = idx + 1;
  //     const sum = data.reduce((acc, height, idx) => {
  //       if (idx % 2 === 0) {
  //         if (pos <= height) {
  //           acc += 1;
  //         }
  //       } else {
  //         const heightDif = h - height;
  //         if (pos > heightDif) {
  //           acc += 1;
  //         }
  //       }
  //       return acc;
  //     }, 0);
  //     dif[idx] = sum;
  //   });

  //   const min = Math.min(...dif);

  //   answer = dif.reduce((acc, cur) => {
  //     if (cur === min) {
  //       acc++;
  //     }
  //     return acc;
  //   }, 0);

  //   console.log(min, answer);
}

solution(a, b, arr);
