const a = 5;
const b = [2, 3, 1, 2, 2];

function solution(adventure) {
  let count = 0;
  adventure.sort((a, b) => a - b);
  let stack = [];

  for (let i = 0; i < adventure.length; i++) {
    const data = adventure.shift();

    console.log(data, count);
    if (stack.length + 1 === data) {
      count++;
      stack = [];
      continue;
    }
    stack.push(data);
  }

  return count;
}

console.log(solution(b));
