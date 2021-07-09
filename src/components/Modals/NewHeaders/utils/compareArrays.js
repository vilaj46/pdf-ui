/**
 * @param {Array} arr1 - Random array
 * @param {Array} arr2 - Random array
 * @returns boolean - Whether or not they are equal.
 * Iterate through arrays and compare values.
 */
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let equal = true;
    arr1.forEach((currLine, index) => {
      const otherLine = arr2[index];
      if (currLine !== otherLine) {
        equal = false;
      }
    });
    return equal;
  }
}

export default compareArrays;
