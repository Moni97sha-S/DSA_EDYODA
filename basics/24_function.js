function print(a) {
  console.log(a);
  a();
}

print(function sameer() {
  console.log("sameer calling");
});
