'use strict';

function numBlocked(seat, row, column){
  let seat = seat;
  let row = row;
  let column = column;
  let block = 0;
  
  for( i = row ; i < seat.length ; i ++){
    let person = convertInches(seat[row][column]);
    let other = convertInches(seat[i][column])

    if(person > other){
      block =+ 1;
    }
  }
  return block;
}

convertInches()// helper function which converts all heights to inches