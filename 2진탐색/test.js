const num = 6;
const arr = [19, 15, 10, 17];

function solution(need, cake) {
  let answer = 0;
  cake.sort((a, b) => a - b);

  const binaryCheck = (cakes, startIdx, lastIdx) => {
    const temp = parseInt((lastIdx + startIdx) / 2);
    const sum = cakes.reduce((acc, cur) => {
      return cur - temp > 0 ? (acc += cur - temp) : acc;
    }, 0);

    if (sum === need) {
      return (answer = temp);
    }

    if (sum > need) {
      return binaryCheck(cakes, temp, lastIdx);
    }

    if (sum < need) {
      return binaryCheck(cakes, startIdx, temp);
    }
  };

  binaryCheck(cake, 0, cake[cake.length - 1]);

  return answer;
}

console.log(solution(num, arr));
