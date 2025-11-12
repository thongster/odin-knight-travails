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
    return `${x},${y}`
}

function knightMoves(start, target) {
  // check arguments are valid
  if (!onBoard(start)) return;
  if (!onBoard(target)) return;
  if (start[0] === target[0] && start[1] === target[1]) {
    console.log("equals")
    return start
  }

  let queue = []; // use queue to keep track of new positions
  queue.push(start) // add start

  let visited = new Set(); // use Set for visited positions
  visited.add(start) // add start coordinates
  
  // use object to track previous
  let prev = {};
  start = toString(start)
  prev[start] = null
  
//   console.log(prev)
  while (queue.length > 0) {
    // current position is the first of the queue
    let current = queue[0]
    queue.shift()
    // if thats the last one, break -> thats the target
    // if (queue.length === 0) {
    //     break;
    // }

    for (move of defineMoves()) {
        let nextMove = [(Number(current[0]) + Number(move[0])), (Number(current[1]) + Number(move[1]))]
        if (onBoard(nextMove) && !visited.has(nextMove)) {
            queue.push(nextMove)
            visited.add(nextMove)
            prev[nextMove] = current
            console.log("im here")
        }
    }

    // console.log(queue)
    // console.log(visited)
    // console.log(prev)

    break;
  }

  return; // list of moves from start to target
}

knightMoves([0, 0], [5, 0]);
