let board = [['', '', ''],
             ['', '', ''],
             ['', '', ''],
            ];

let playerOptions = ['x', 'o'];

let togglePiece = function(piece, row, column) {
  if (board[row][column] === '') {
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
  for (var i = board.length; i >= 0; i--){
    if (board[board.length - i][i - 1] === piece){
      count ++;
    }  
  }
  if (count === 3 ){
    return true;
  }
  return false
}



let draw = function(count) {
  if (count === 9){
    return true;
  }
  return false;
}

let playerWon = function(piece, row, column) {
  if (rightDiagonal(piece) || leftDiagonal(piece) || horizontalWin(piece, row) || verticalWin(piece, column)) {
    return true;
  }
  return false;
}


let playGame = function() {
  let turnPlayed = true;
  let count = 0;
  let currentPiece = 'x'
  let gameOver = false;
  let result = ''
  while (!gameOver) {
    if (togglePiece(currentPiece, row, column)) {
      count ++;
    }
    if (playerWon(piece, row, column)) {
      gameOver = true;
      result = `Congratulations to player ${currentPiece}`
    } else if (draw(count)){
      result = 'This game ended in a draw'
    }
    if (turnPlayed){
      turnPlayed = !turnPlayed;
      currentPiece = 'x'
    } else{
      turnPlayed = !turnPlayed;
      currentPiece = 'o'      
    }
  }
  return result;
}