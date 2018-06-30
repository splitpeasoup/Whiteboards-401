'use strict';

function isDiff (obj1, obj2) {
    for (let key in obj1) {
       let val1 = obj1[key];
       let val2 = obj2[key];
       if (val1 !== val2) {
           return true;
       }
    }
    for (let key in obj2) {
        let val1 = obj2[key];
        let val2 = obj1[key];
        if (val1 !== val2) {
            return true;
        }
     }
     return false;
}