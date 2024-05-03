const a = "02984";
const b = "567";

function solution(num) {
  let answer = 0;

  const numArr = num.split("").map((ele) => parseInt(ele));

  answer = numArr.reduce((acc, cur) => {
    console.log(acc);
    if (cur === 0 || cur === 1 || acc === 0) {
      return (acc += cur);
    } else {
      return (acc *= cur);
    }
  }, 0);

  return answer;
}

// console.log(solution(a));

console.log(solution(b));
