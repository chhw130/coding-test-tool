const answer = [];
const plays = [500, 600, 150, 800, 2500];
const obj = {
  classic: [150, 500, 800],
  pop: [600, 2500],
};

const acc = { classic: 1450, pop: 3100 };

const sort = Object.values(acc).sort((a, b) => b - a);

console.log(sort);

// Object.entries(acc).forEach((ele) => {
//   const [gen, n] = ele;
//   sort[sort.indexOf(n)] = gen;
// });

// sort.forEach((ele) => {
//   const arr = obj[ele].sort((a, b) => b - a);

//   for (let i = 0; i < 2; i++) {
//     answer.push(plays.indexOf(arr[i]));
//   }
// });

// console.log(answer);
