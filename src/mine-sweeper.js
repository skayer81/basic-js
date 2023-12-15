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
function minesweeper( matrix ) {
  
 // let result = [];

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

  throw new NotImplementedError('Not implemented');}
  // remove line with error and write your code here


module.exports = {
  minesweeper
};
