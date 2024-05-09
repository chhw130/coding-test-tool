function bisectRight(arr, x, lo = 0, hi = arr.length) {
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (x < arr[mid]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

function bisectLeft(arr, x, lo = 0, hi = arr.length) {
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}
