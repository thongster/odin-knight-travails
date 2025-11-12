function onBoard(coordinates) {
  // check if coordinates are less than or more than 2 numbers
  if (coordinates.length > 2 || coordinates.length < 0) {
    return false;
  }
  // check arguments are between 0-7 (8x8 grid)
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i] < 0 || coordinates[i] > 7) {
      return false;
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

function toString([x, y]) {
  return `${x},${y}`;
}

function knightMoves(start, target) {
  // check arguments are valid
  if (!onBoard(start)) return;
  if (!onBoard(target)) return;
  if (start[0] === target[0] && start[1] === target[1]) {
    console.log('equals');
    return start;
  }

  let queue = []; // use queue to keep track of new positions
  queue.push(start); // add start

  let visited = new Set(); // use Set for visited positions
  visited.add(toString(start)); // add start coordinates

  // use object to track previous
  let prev = {};
  prev[toString(start)] = null;

  while (queue.length > 0) {
    // current position is the first of the queue
    let current = queue.shift();

    // if the current is the target, break!
    if (current[0] === target[0] && current[1] === target[1]) {
      console.log('do we get here');
      break;
    }
    // loop through possible moves
    for (let move of defineMoves()) {
      let nextMove = [
        Number(current[0]) + Number(move[0]),
        Number(current[1]) + Number(move[1]),
      ];
      let nextKey = toString(nextMove);
      // if new move is possible and has not been visited yet
      if (onBoard(nextMove) && !visited.has(nextKey)) {
        queue.push(nextMove);
        visited.add(nextKey);
        prev[nextKey] = toString(current);
      }
    }
  }

  // reverse the path
  let path = [];
  let currentKey = toString(target);
  // keep assigning currentkey : value until currentkey is null
  while (currentKey !== null) {
    path.push(currentKey);
    currentKey = prev[currentKey];
  }

  let reversedPath = [];
  for (let item of path) {
    item = new Array(item);
    reversedPath.unshift(item);
  }

  console.log(
    `You made it in ${reversedPath.length - 1} moves! Here's your path:`
  );
  console.log(reversedPath);
  return;
}

knightMoves([3, 3], [4, 3]);
