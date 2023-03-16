let arr = [10, 279, 27, 897, 73, 1];
let key = 10;

function linearSearch() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return "FOUND";
    }
  }
  return "NOT FOUND";
}

console.log(linearSearch());
