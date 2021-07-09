/**
 * @param {Array} headers - Array of current headers.
 * @param {String} text - Header text.
 * @param {Number} startPage - First page the header appears on.
 * @param {Number} endPage - Last page the header appears on.
 * @returns Object - Newly created header object.
 */
function createBlankHeader(
  headers,
  text = "",
  startPage = "-1",
  endPage = "-1"
) {
  // If we don't give a start or end page,
  // make it the length of the headers.
  const startPageValue =
    startPage !== "-1" ? startPage : String(headers.length + 1);
  const endPageValue = endPage !== "-1" ? endPage : String(headers.length + 1);
  return {
    text,
    startPage: startPageValue,
    endPage: endPageValue,
    index: headers.length,
    idNumber: Math.ceil(Math.random() * 1000000),
    updatedFromExpansion: false,
    lines: [text],
  };
}

export default createBlankHeader;
