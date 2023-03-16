let a = [1, 10, 61, 81, 83, 100, 200];
let b = [60, 70, 80, 90];

let i = 0;
let j = 0;
let k = 0;

let m = a.length;
let n = b.length;

let newArr = [];
newArr.length = m + n;

while (i < m && j < n) {
  if (a[i] <= b[j]) {
    newArr[k] = a[i];
    i++;
    k++;
  } else {
    newArr[k] = b[j];
    j++;
    k++;
  }
}

// Copy the remaining elements of LEFT array
while (i < m) {
  newArr[k] = a[i];
  i++;
  k++;
}

// Copy the remaining elements of RIGHT array
while (j < n) {
  newArr[k] = b[j];
  j++;
  k++;
}


console.log(a);
console.log(b);
console.log(newArr);
