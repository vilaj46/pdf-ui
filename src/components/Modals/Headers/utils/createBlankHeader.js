/**
 * @param {Array} headers - Current headers.
 * @param {String} text - Header text.
 * @param {String} startPage - Header starting page.
 * @param {String} endPage - Header ending page.
 * @returns new header object.
 *
 * We use the headers to determine the index.
 * If a page range was not given, we use the header to also
 * assign a page range.
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
