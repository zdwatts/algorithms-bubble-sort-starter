function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  let swapped = true;
  let n = array.length;
  
  while (swapped === true) {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i+1)
        swapped = true;
      }
    }
  }
  return array;
}


module.exports = {
  bubbleSort,
  swap
};
