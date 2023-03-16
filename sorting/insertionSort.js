let arr = [5, 3, 8, 2];

function insertionSort() {
    
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
}

console.log("before sorting ==> ", arr);

insertionSort();

console.log("after sorting ==> ", arr);
