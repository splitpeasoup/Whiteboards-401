'use strict';

function merge(l1, l2) {

  let result = new LinkedList();
  //deal with empty lists
  let c1 = l1.root;
  let c2 = l2.root;

  if (c1 === null) {
    result.root = c2
    return result;
  } 
  if (c2 === null) {
    result.root = c1;
    return result;
  }

  if (c1.value < c2.value) {
    result.root = c1;
  } else {
    result.root = c2;
  }

  let last = result.root;
  while (c1 !== null && c2 !== null) {
    if (c1.value < c2.value) {
      last.next = c1;
      c1 = c1.next;
    } else {
      last.next = c2;
      c2 = c2.next;
    }
    last = last.next;
  }

  if (c1 !== null) {
    last.next = c1;
  }

  if (c2 !== null) {
    last.next = c2;
  }
  return result;
};

module.exports = merge;