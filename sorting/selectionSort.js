let arr = [5, 3, 8, 2];

function selectionSort() {
  /// loop for calculating smallest element and place it at correct position.

  for (let i = 0; i < arr.length; i++) {

    /// Calculate smallest element
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    /// Swap code
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

console.log("before sorting ==> ", arr);

selectionSort();

console.log("after sorting ==> ", arr);


// TC worse case is O(n^2)

// TC best case is O(n^2)