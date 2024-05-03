let num = 25;
let divider = 3;

const checkNum = (number, divide, counter) => {
  if (number % divide === 0) {
    number /= divide;
  } else {
    number -= 1;
  }

  counter++;

  if (number === 1) {
    return counter;
  }

  return checkNum(number, divide, counter);
};

function solution(num, divider) {
  let count = 0;
  return checkNum(num, divider, count);
}

console.log(solution(num, divider));
