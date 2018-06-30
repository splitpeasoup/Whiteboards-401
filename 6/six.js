'use strict';

function reverse(integer) {
  let result = 0;
  let input = integer;
  let digit = 0;
  while(input > 0) {
    digit = input % 10;
    input = math.floor(input / 10);
    result = (result * 10) + digit;
  }
  return result;
}