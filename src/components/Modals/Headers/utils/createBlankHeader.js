/**
 * @param {Array} headers - Current headers state
 * @returns new header object.
 */
function createBlankHeader(
  headers,
  text = "",
  startPage = "-1",
  endPage = "-1"
) {
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
  };
}

export default createBlankHeader;
