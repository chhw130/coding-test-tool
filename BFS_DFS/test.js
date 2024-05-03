/**
 * DFS 재귀
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
  let answer = "";
  const stack = [];

  const dfs = (node, index) => {
    stack.push(index);
    for (let i = 0; i < node[index].length; i++) {
      const element = node[index][i];
      stack.includes(element) ? false : dfs(node, element);
    }
  };

  dfs(graph, 1);

  return (answer = stack);
}

console.log(solution(a));
