function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (value > arr[j]) {
        continue;
      }
      arr[j + 1] = arr[j];
      arr[j] = value;
    }
  }
  return arr;
}

console.log(insertionSort([2, 1, 3, 5, 4, 6, 7, 8, 10, 9]));
