const combination = (arr, pick) => {
  if (pick === 1) return arr.map((ele) => [ele]);

  const result = [];

  arr.forEach((target, idx, origin) => {
    const data = origin.slice(idx + 1);

    const newData = combination(data, pick - 1);

    const settingData = newData.map((ele) => [target, ...ele]);

    result.push(...settingData);
  });

  return result;
};

console.log(combination([1, 2, 3, 4], 2));
