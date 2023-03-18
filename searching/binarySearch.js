let arr = [10, 279, 287, 897, 1073, 1456456];
let key = 1456456;

function binarySearch() {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == key) {
      return "FOUND";
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else if (arr[mid] > key) {
      end = mid - 1;
    }
  }

  return "NOT FOUND";
}

console.log(binarySearch());
