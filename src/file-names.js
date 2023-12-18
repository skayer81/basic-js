const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let f = false
  for (let i = names.length - 1; i >= 0; i--){
    let count = names.filter((elem, index) => (elem === names[i] && index < i)).length;
    //console.log(count, names[i])
    if (count) {
      f = true;
      names[i] = `${names[i]}(${count})`
    };// ( ${names.filter((elem, index) => (elem === names[i] && index < i)).length})` // names.filter((elem, index) => (elem === names[i] && index < i))
  }
  // for (let i = names.length - 1; i >= 0; i--){
  //   let count = names.filter((elem, index) => (elem === names[i] && index < i)).length;
  //   console.log(count, names[i])
  //   if (count) names[i] = `${names[i]}(${count})`;// ( ${names.filter((elem, index) => (elem === names[i] && index < i)).length})` // names.filter((elem, index) => (elem === names[i] && index < i))
  // }
  console.log(names)
  if (f) renameFiles(names)
  return names;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

// For input ["file", "file", "image", "file(1)", "file"],
//the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]

// function renameFiles( names ) {
//   names.forEach((element, i) => {
//       let index = names.filter((el, i2) => (el === element) && (i2 < i)).length
//       return `${element}(${index})`
//       console.log(element)
//   });
//   console.log(names)
// }

// renameFiles(["file", "file", "image", "file(1)", "file"])


}

console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])) //['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
module.exports = {
  renameFiles
};
