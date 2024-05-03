const string = "a1";

function solution(pos) {
  let count = 0;
  const xArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const yArr = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const [x, y] = pos;

  const curX = xArr.indexOf(x);
  const curY = yArr.indexOf(y);

  const step = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  count = step.reduce((acc, cur) => {
    const [x, y] = cur;

    const newX = curX + x;
    const newY = curY + y;

    if (newX > 7 || newX < 0 || newY < 0 || newY > 7) {
      return acc;
    }
    acc += 1;
    return acc;
  }, 0);

  return count;
}

console.log(solution(string));
