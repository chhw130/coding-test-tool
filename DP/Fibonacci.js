const cache = [0, 1, 1];

function fibonacci(index) {
  if (index === 1 || index === 2) {
    return cache[index];
  }

  for (let i = 3; i < index + 1; i++) {
    if (cache[index]) continue;
    const nextNode = cache[i - 1] + cache[i - 2];
    cache.push(nextNode);
  }

  return cache[index];
}

console.log(fibonacci(50));
