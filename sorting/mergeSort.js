function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;

  // Create two temp arrays
  let L = new Array(n1);
  let R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
      k++;
    } else {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  // Copy the remaining elements of LEFT array
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of RIGHT array
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  // base case
  if (left >= right) {
    return;
  }
  // find mid
  let mid = left + Math.floor((right - left) / 2);

  // recursion call
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

let arr = [12, 11, 13, 5, 6, 7];
let size = arr.length;

console.log("before sorting");

console.log(arr);

mergeSort(arr, 0, size - 1);

console.log("after sorting");

console.log(arr);
