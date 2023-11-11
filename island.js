function getNeighbors(row, col, matrix) {
  let neigbors = [];
  // Check top
  if (row > 0 && matrix[row - 1][col] === 1) neigbors.push([row - 1, col]);
  // Check top right
  if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1] === 1)
    neigbors.push([row - 1, col + 1]);
  // Check right
  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1)
    neigbors.push([row, col + 1]);
  // Check bottom right
  if (
    row < matrix.length - 1 &&
    col < matrix[row].length - 1 &&
    matrix[row + 1][col + 1] === 1
  )
    neigbors.push([row + 1, col + 1]);
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1)
    neigbors.push([row + 1, col]);
  // Check bottom left
  if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] === 1)
    neigbors.push([row + 1, col - 1]);
  // Check left
  if (col > 0 && matrix[row][col - 1] === 1) neigbors.push([row, col - 1]);
  // Check top left
  if (row > 0 && col > 0 && matrix[row - 1][col - 1] === 1)
    neigbors.push([row - 1, col - 1]);
  // Return neighbors
  return neigbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  // Initialize count to 0
  let visited = new Set();
  let islandCount = 0;
  // Iterate through all indices in matrix

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // If an index contains a 1 and has not been visited,
      if (matrix[i][j] === 1 && !visited.has([i, j].toString())) {
        // increment island count and start traversing neighbors
        islandCount++;
        // DO THE THING (increment island count by 1)
        // Initialize a stack with current index
        const stack = [[i, j]];
        // Add stringified version of current index to the visited set
        visited.add([i, j].toString());
        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          const node = stack.pop();

          // Get valid neighbors of current element
          const neighbors = getNeighbors(node[0], node[1], matrix);
          // Iterate over neigbors
          for (const neighbor of neighbors) {
            // If neighbor has not been visited
            if (!visited.has(`${neighbor}`)) {
              // Add neighbor to stack
              stack.push(neighbor);
              visited.add(`${neighbor}`);
              // Mark neighbor as visited
            }
          }
          // Return island count
        }
      }
    }
  }
  return islandCount;
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
