/**
 * @param {String} idNumber - id of the header we are trying to find.
 * @param {Array} headers - Current headers state.
 * @returns Number of index, -1 if not found.
 */
function findHeaderById(idNumber, headers) {
  let foundIndex = -1;
  headers.forEach((header, index) => {
    if (header.idNumber === idNumber) {
      foundIndex = index;
      return index;
    }
  });
  return foundIndex;
}

export default findHeaderById;
