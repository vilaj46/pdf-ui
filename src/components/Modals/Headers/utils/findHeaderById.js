/**
 * @param {String} idNumber - id of the header we are trying to find.
 * @param {Array} headers - Current headers state.
 * @returns Number of index, -1 if not found.
 */
function findHeaderById(idNumber, headers) {
  headers.forEach((header, index) => {
    if (header.idNumber === idNumber) {
      return index;
    }
  });
  return -1;
}

export default findHeaderById;
