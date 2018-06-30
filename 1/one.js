'use strict';

//demo code
class ListNode {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.root = null;
    }
}

// code written for today's white board challenge below
function contains(list, value){
    let current = list.root;
    while(current){
        if(current.value === value){
            return true;
        }
        current = current.next
    }
}