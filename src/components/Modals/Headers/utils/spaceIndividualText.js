import { MAX_CHARS_PER_HEADER_LINE } from "../../../localData";

/**
 * @param {String} text - Current text of the header.
 * @param {Boolean} removeSpacing - Whether or not we are removing the spacing.
 * @returns text with or without spacing.
 *
 * Split the lines then add new lines.
 */
function spaceIndividualText(text, removeSpacing) {
  if (!removeSpacing) {
    const lines = createLines(text);
    let newText = "";

    lines.forEach((line, index) => {
      if (index === lines.length - 1) {
        newText = newText + line.trim();
      } else {
        newText = newText + line.trim() + "\n\n";
      }
    });
    return newText;
  } else {
    // Remove spacing.
    const regex = /\n/gi;
    const noNewLines = text.replace(regex, " ");
    const regex2 = /\s{2,}/gi;
    return noNewLines.replace(regex2, " ");
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
      lines.push(tempText);
    } else {
      // Slice until max lines.
      let slicedObj = customSlice(tempText, maxChars);

      // Don't end on "dated"
      slicedObj = dontEndOn(slicedObj, "dated");

      lines.push(slicedObj.text);
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

export default spaceIndividualText;
