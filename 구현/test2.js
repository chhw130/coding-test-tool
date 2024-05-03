const num = 5;

function solution(n) {
  let time = 0;
  let count = 0;
  while (1 * 3600 >= time) {
    time += 1;

    const minute = String(Math.ceil((time % 3600) / 60)).split("");
    const second = String(time % 60).split("");

    console.log(minute);

    if (minute.includes("3") || second.includes("3")) {
      count++;
    }
  }

  return count;
}

console.log(solution(num));
