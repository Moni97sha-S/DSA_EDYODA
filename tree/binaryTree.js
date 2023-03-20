class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(1);

root.left = new Node(2);

root.right = new Node(3);

root.left.left = new Node(4);

root.left.right = new Node(5);

function sumAll(node) {
  if (node == null) {
    return 0;
  }

  let leftSum = sumAll(node.left);
  let rightSum = sumAll(node.right);

  return node.data + leftSum + rightSum;
}
function sumAll(node) {
  if (node == null) {
    return 0;
  }

  let leftSum = sumAll(node.left);
  let rightSum = sumAll(node.right);

  return node.data + leftSum + rightSum;
}
function sumAll(node) {
  if (node == null) {
    return 0;
  }

  let leftSum = sumAll(node.left);
  let rightSum = sumAll(node.right);

  return node.data + leftSum + rightSum;
}
function sumAll(node) {
  if (node == null) {
    return 0;
  }

  let leftSum = sumAll(node.left);
  let rightSum = sumAll(node.right);

  return node.data + leftSum + rightSum;
}
function sumAll(node) {
  if (node == null) {
    return 0;
  }

  let leftSum = sumAll(node.left);
  let rightSum = sumAll(node.right);

  return node.data + leftSum + rightSum;
}

console.log(sumAll(root));
