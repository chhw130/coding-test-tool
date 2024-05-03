const num = 5;

const arr = ["R", "R", "R", "U", "D", "D"];

function solution(n, directions) {
  let x = 1;
  let y = 1;
  const direct = {
    R: [1, 0],
    U: [0, -1],
    L: [-1, 0],
    D: [0, 1],
  };

  directions.forEach((ele) => {
    const [dx, dy] = direct[ele];
    console.log(x, y);
    console.log(dx, dy);
    if (x + dx > n || x + dx < 1 || y + dy > n || y + dy < 1) {
      return;
    } else {
      x += dx;
      y += dy;
      return;
    }
  });

  return [x, y];
}

console.log(solution(num, arr));
