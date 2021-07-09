import { MAX_CHARS_PER_HEADER_LINE } from "../../../localData";

/**
 * @param {Object} header - Header object.
 * @param {Boolean} removeSpace - Whether or not we are adding or removing the spaces.
 * @returns Object - Same header object with the lines either spaced or unspaced.
 */
function spaceLines(header, removeSpace) {
  const { lines } = header;
  let text = "";
  lines.forEach((line) => {
    text = text + " " + line;
  });

  if (removeSpace) {
    const newHeader = {
      ...header,
      lines: [text.trim()],
    };
    return newHeader;
  } else {
    const newLines = createLines(text);
    const newHeader = {
      ...header,
      lines: newLines,
    };

    return newHeader;
  }
}

/**
 * @param {String} text - Current text of the header.
 * @returns Array of the split text.
 *
 * If the text is less than or equal to our max characters, just add it.
 * Otherwise, slice to the max characters and make sure we don't
 * end on specific things.
 */
function createLines(text) {
  let tempText = text;
  let maxChars = MAX_CHARS_PER_HEADER_LINE;
  const lines = [];
  const numberOfLines = Math.ceil(text.length / MAX_CHARS_PER_HEADER_LINE);
  for (let i = 0; i < numberOfLines; i++) {
    if (tempText.length <= MAX_CHARS_PER_HEADER_LINE) {
      lines.push(tempText.trim());
    } else {
      // Slice until max lines.
      let slicedObj = customSlice(tempText, maxChars);

      // Don't end on "dated"
      slicedObj = dontEndOn(slicedObj, "dated");

      lines.push(slicedObj.text.trim());
      maxChars = slicedObj.maxChars;
      tempText = tempText.slice(maxChars, tempText.length);
    }
  }

  return lines;
}

/**
 * @param {Object} obj - text, maxChars
 * @param {String} stringNotToEndOn - what we don't want to end with.
 * @returns new sliced object.
 *
 * Find the index of the string we don't want to end on.
 * Calculate what the last word is using the length of the
 * string we don't want to end on. Then compare them.
 */
function dontEndOn(obj, stringNotToEndOn) {
  const { text } = obj;
  const strLen = stringNotToEndOn.length;
  const indexOfStr = text.lastIndexOf(stringNotToEndOn);
  const calculatedIndexOfStr = text.length - strLen;
  if (indexOfStr === calculatedIndexOfStr) {
    const newText = text.slice(0, indexOfStr);
    const newTextLen = newText.length;
    return {
      text: newText,
      maxChars: newTextLen,
    };
  }
  return obj;
}

/**
 * @param {String} text - String we are slicing.
 * @param {Number} maxChars - Number of maximum characters.
 * @returns sliced object.
 *
 * Slice up until max characters but also do not separate
 * any words.
 */
function customSlice(text, maxChars) {
  const sliced = text.slice(0, maxChars);
  const lastSpace = sliced.lastIndexOf(" ");
  const newText = text.slice(0, lastSpace);
  const newTextLen = newText.length;
  return {
    text: newText,
    maxChars: newTextLen,
  };
}

export default spaceLines;
