'use strict';

function highestProduct(array){
    
    if (array.length < 2) {
        throw new Error('expected an array of at least 2 numbers');
    ;}
   
    isSorted = array.sort(function (a, b) {
        return b - a;
    });

    return isSorted[0] * isSorted[1];
};