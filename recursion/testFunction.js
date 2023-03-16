let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr) {
  if (arr.length == 0) {
    return 0;
  }

  let angel = sum(arr.slice(1));

  return arr[0] + angel;
}

console.log(sum(arr));
