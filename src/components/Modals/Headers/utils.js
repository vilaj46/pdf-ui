/**
 * @param {Array} headers - Current headers state
 * @returns new header object.
 */
function createBlankHeader(headers) {
  return {
    text: "",
    startPage: headers.length + 1,
    endPage: headers.length + 1,
    index: headers.length,
    idNumber: Math.ceil(Math.random() * 1000000),
    updatedFromExpansion: false,
  };
}

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

const utils = {
  createBlankHeader,
  findHeaderById,
};

export default utils;
