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
export default createBlankHeader;
