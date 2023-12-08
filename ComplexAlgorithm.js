/*

Filename: ComplexAlgorithm.js

Description: This code implements a complex algorithm that performs a series of mathematical operations on a matrix of numbers.

*/

// Helper function to generate a random matrix
function generateRandomMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.floor(Math.random() * 10)); // Random integer between 0 and 9
    }
    matrix.push(row);
  }
  return matrix;
}

// Helper function to print matrix
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("\t"));
  }
}

// Main function to perform complex operations on the matrix
function complexAlgorithm(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Step 1: Transpose the matrix
  const transposedMatrix = [];
  for (let i = 0; i < cols; i++) {
    const row = [];
    for (let j = 0; j < rows; j++) {
      row.push(matrix[j][i]);
    }
    transposedMatrix.push(row);
  }
  
  // Step 2: Calculate the sum of each row in the transposed matrix
  const rowSums = [];
  for (let i = 0; i < transposedMatrix.length; i++) {
    const row = transposedMatrix[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
      sum += row[j];
    }
    rowSums.push(sum);
  }
  
  // Step 3: Calculate the product of each element in each row
  const rowProducts = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    let product = 1;
    for (let j = 0; j < row.length; j++) {
      product *= row[j];
    }
    rowProducts.push(product);
  }
  
  // Step 4: Calculate the average of row sums
  let rowSumsTotal = 0;
  for (let i = 0; i < rowSums.length; i++) {
    rowSumsTotal += rowSums[i];
  }
  const rowSumsAverage = rowSumsTotal / rowSums.length;
  
  // Step 5: Normalize the row sums using the average
  const normalizedRowSums = [...rowSums];
  for (let i = 0; i < normalizedRowSums.length; i++) {
    normalizedRowSums[i] -= rowSumsAverage;
  }
  
  // Step 6: Sort the row products in ascending order
  rowProducts.sort((a, b) => a - b);
  
  // Step 7: Create a new matrix by multiplying each element with normalized row sums
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const newRow = [];
    for (let j = 0; j < row.length; j++) {
      newRow.push(row[j] * normalizedRowSums[i]);
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
}

// Generate random 4x4 matrix
const matrix = generateRandomMatrix(4, 4);

console.log("Original Matrix:");
printMatrix(matrix);

console.log("New Matrix:");
const newMatrix = complexAlgorithm(matrix);
printMatrix(newMatrix);