const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function findMine(rowOfCurentCell, colOfCurentCell, matrix){
  let count = 0
  for (let i = rowOfCurentCell - 1; i <= rowOfCurentCell + 1; i++) {
    for (let j = colOfCurentCell -1; j <= colOfCurentCell + 1; j++) {
      if ((i >= 0 && i < matrix.length) && (j >= 0 && j<  matrix[i].length && !(i === rowOfCurentCell && j === colOfCurentCell))){
        if (matrix[i][j]) count++
      }
    }
  }
  return count;
}





function minesweeper( matrix ) {
  
  //let result = Array(matrix.length).map((elem, i) => Array(matrix.length).fill(i) )// fill(0) //[];
  let result=  Array(matrix.length).fill(Array(matrix[0].length).fill(0)).map(el => el.map(el2 => 0));
  for (let i = 0; i <= result.length - 1; i++) 
    for (let j = 0; j <= result[i].length - 1; j++) {
        
        result[i][j] = findMine(i, j, matrix);
    }
//console.debug(result)
    return result

//   for (let i = rowOfCurentCell - 1; i <= rowOfCurentCell + 1; i++) {
//     for (let j = colOfCurentCell -1; j <= colOfCurentCell + 1; j++) {
//       if ((i >= 0 && i < fieldHeigth) && (j >= 0 && j<  fieldWidth)){
//         if (field[i][j].hasMine) count++
//       }
//     }
//   }
//   return count;
// }

  // function countMinesAround(rowOfCurentCell, colOfCurentCell) {
  //   let count = 0;
  //   for (let i = rowOfCurentCell - 1; i <= rowOfCurentCell + 1; i++) {
  //     for (let j = colOfCurentCell -1; j <= colOfCurentCell + 1; j++) {
  //       if ((i >= 0 && i < fieldHeigth) && (j >= 0 && j<  fieldWidth)){
  //         if (field[i][j].hasMine) count++
  //       }
  //     }
  //   }
  //   return count;
  // }

  //throw new NotImplementedError('Not implemented');
}
  // remove line with error and write your code here


module.exports = {
  minesweeper
};
