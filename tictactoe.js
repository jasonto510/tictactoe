let board = [['', '', ''],
             ['', '', ''],
             ['', '', ''],
            ];

let playerOptions = ['x', 'o'];

let togglePiece = function(piece, row, column) {
  if (board[row][column] !== '') {
    board[row][column] = piece;
  } else {
    alert('this is an invalid move');
  }
}

let verticalWin = function(piece, column){
  let count = 0;
  for (var i = 0; i < board.length; i++){
    if (board[i][column] === piece) {
      count ++;
    }
  }
  if (count === 3){
    return true;
  }
  return false;
}

let horizontalWin = function(piece, row) {
  let count = 0;
  for (var i = 0; i < board.length; i++) {
    if (board[row][i] === piece){
      count ++;
    }
  }
  if (count === 3){
    return true;
  }
  return false;
}

let leftDiagonal = function(piece) {
  let count = 0;
  for (var i = 0; i < board.length; i++) {
    if (board[i][i] === piece) {
      count++;
    }
  }
  if (count === 3) {
    return true;
  }
  return false;
}

let rightDiagonal = function(piece){
  let count = 0;
  for (var i = board.length; i >= 0; i++){
    if (board[board.length - i][i]){
      count ++;
    }  
  }
  if (count === 3 ){
    return true;
  }
  return false
}