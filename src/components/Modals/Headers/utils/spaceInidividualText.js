import { MAX_CHARS_PER_HEADER_LINE } from "../../../localData";

function spaceInidividualText(text) {
  const lines = createLines(text);
  let newText = "";

  lines.forEach((line, index) => {
    if (index === lines.length - 1) {
      newText = newText + line.trim();
    } else {
      newText = newText + line.trim() + "\n";
    }
  });
  return newText;
}

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

export default spaceInidividualText;
