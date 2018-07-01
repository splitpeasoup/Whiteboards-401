'use strict';

function treeSum(node){
  if(!node || ! node.data){
    return 0;
  }
  accum = node.data;
  if(node.left){
    accum += treeSum(nodeleft);
  }
  if(node.right){
    accum += treeSum(node.right);
  }
  return accum;
}