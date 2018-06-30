'use strict';

function isBalanced(str){
    let stack = [];
    for(i =0; i < str.length; i++){
        if(str.charAt(i) === '{'){
            stack.push(str.charAt(i));
        }
        if(str.charAt(i) === '}'){
            stack.pop();
        };
    };
    if(stack =[]){
        return true;
    } else {
        return false;
    }
}