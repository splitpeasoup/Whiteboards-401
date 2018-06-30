function commonAncestor(node, n1, n2){
  if(!node) return;
  let val = node.value;
  if(n1 == val || n2 ==val){
    return node;
  }

  let left = commonAncestor(node.left, n1, n2);
  let right = commonAncestor(node.right, n1, n2);
  if(left && right){
    return node;
 }
 return (left) ? left : right;
}