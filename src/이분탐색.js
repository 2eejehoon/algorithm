function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let mid;
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    mid = Math.floor((right + left) / 2);

    if (arr[mid] === target) {
      break;
    }

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return mid + 1;
}
