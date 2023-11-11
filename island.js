function getNeighbors(row, col, matrix) {
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors
  // Your code here
  let neighbors = [];

  //UP
  if (row - 1 >= 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }

  //BOTTOM
  if (row < matrix[row].length - 1 && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }

  //LEFT
  if (col > 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }

  //RIGHT
  if (col <= matrix[row].length - 1 && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }

  //UPPER RIGHT
  if (
    row > 0 &&
    col < matrix[row].length - 1 &&
    matrix[row - 1][col + 1] === 1
  ) {
    neighbors.push([row - 1, col + 1]);
  }

  //UPPER LEFT
  if (row > 0 && col > 0 && matrix[row - 1][col - 1] === 1) {
    neighbors.push([row - 1, col - 1]);
  }

  //BOTTOM RIGHT

  if (
    row < matrix[row].length - 1 &&
    col < matrix[row].length - 1 &&
    matrix[row + 1][col + 1] === 1
  ) {
    neighbors.push([row + 1, col + 1]);
  }

  //BOTTOM LEFT
  if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1]) {
    neighbors.push(matrix[row + 1][col - 1]);
  }

  return neighbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
  // If an index contains a 1 and has not been visited,
  // increment island count and start traversing neighbors
  // DO THE THING (increment island count by 1)
  // Initialize a stack with current index
  // Add stringified version of current index to the visited set
  // While stack contains elements
  // Pop element from stack
  // Get valid neighbors of current element
  // Iterate over neigbors
  // If neighbor has not been visited
  // Add neighbor to stack
  // Mark neighbor as visited
  // Return island count
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
