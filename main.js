function onBoard(coordinates) {
  // check if coordinates are less than or more than 2 numbers
  if (coordinates.length > 2 || coordinates.length < 0) {
    throw new Error('coordinates must be 2 numbers');
  }
  // check arguments are between 0-7 (8x8 grid)
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i] < 0 || coordinates[i] > 7) {
      throw new Error('invalid coordinates');
    }
  }

  return true;
}

function defineMoves() {
  const moves = [
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
  ];

  return moves;
}

function knightMoves(start, target) {
  // check arguments are valid
  if (!onBoard(start)) return;
  if (!onBoard(target)) return;

  // use queue to keep track of new positions
  let queue = [];

  // use Set for visited positions
  let visited = new Set();

  // use object to track previous
  // format is key(new position) : value(old position)
  let prev = {};
  prev[start] = null;

  return; // list of moves from start to target
}

knightMoves([1, 1], [0, 5]);
