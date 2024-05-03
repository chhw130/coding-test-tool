const a = 4;
const b = [1, 1, 1];

function solution(n, times) {
  var answer = 0;

  times.sort((a, b) => a - b);

  n = n % times.length !== 0 ? n + (times.length - (n % times.length)) : n;

  let left = 0;

  let right = times[times.length - 1] * parseInt(n / times.length);

  while (left <= right) {
    let sum = 0;
    let mid = parseInt((left + right) / 2);

    for (let i = 0; i < times.length; i++) {
      const time = times[i];
      sum += parseInt(mid / time);
    }

    if (left === right) {
      return mid;
    }

    if (n === sum) {
      answer = mid;
      for (let i = 0; i < times.length; i++) {
        const time = times[i];
        if (mid % time !== 0) {
          right = mid - 1;
          break;
        }
      }
    }

    if (n > sum) {
      left = mid + 1;
    } else if (n < sum) {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(solution(a, b));
