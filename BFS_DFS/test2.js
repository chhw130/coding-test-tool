/**
 * BFS
 */

const a = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

function solution(graph) {
  const answer = [1];

  const queue = [1];

  while (true) {
    const element = queue.shift();

    const nodes = graph[element];

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!answer.includes(node)) {
        answer.push(node);
        queue.push(node);
      } else continue;
    }

    if (!queue.length) break;
  }

  return answer;
}

console.log(solution(a));
