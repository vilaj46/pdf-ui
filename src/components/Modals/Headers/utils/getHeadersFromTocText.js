import createBlankHeader from "./createBlankHeader";

// If we ever change this value,
// make sure we also change it in the safer split regex.
const ellipse = "CODE<<ELLIPSE>>CODE";

function getHeadersFromTocText(tocText, headers) {
  let tempText = removeTableOfContents(tocText);
  tempText = removeRomanNumerals(tempText);
  tempText = removeNewLines(tempText);
  tempText = syncEllipses(tempText);

  const headersAndPageNumbers = saferSplit(tempText, tocText);
  const headersAreGood = check(headersAndPageNumbers, tocText);

  if (headersAreGood) {
    const newHeaders = createHeaders(headersAndPageNumbers, headers);
    return newHeaders;
  } else {
    return headers;
  }
}

function check(headersAndPageNumbers, originalText) {
  let isGood = true;
  const { pageNumbers, text } = headersAndPageNumbers;
  if (pageNumbers.length !== text.length) {
    return false;
  }

  let formatted = originalText;
  formatted = removeNewLines(formatted);
  formatted = removeSpaces(formatted);
  formatted = removeEllipses(formatted);

  // Remove ellipses and newlines and spaces altogether.
  text.forEach((str, index) => {
    const pageNumber = pageNumbers[index];
    let tempStr = removeSpaces(str);
    tempStr = tempStr + pageNumber;
    const indexOfStr = formatted.indexOf(tempStr);
    if (indexOfStr === -1) {
      isGood = false;
      return;
    }
  });

  return isGood;
}

function saferSplit(tocText) {
  // Could not figure out interpolation in the RegExp.
  // For now hard code the ellipse.
  const regex = /CODE<<ELLIPSE>>CODE\s+\d+/gi;

  const split = tocText.split(regex);

  let text = [];

  split.forEach((str) => {
    const trimmed = str.trim();
    if (trimmed.length > 0) {
      text.push(trimmed);
    }
  });

  const regex2 = /CODE<<ELLIPSE>>CODE\s+?/gi;
  const split2 = tocText.split(regex2);

  let pageNumbers = [];
  split2.forEach((str, index) => {
    if (index !== 0) {
      const trimmed = str.trim();
      if (Number(trimmed)) {
        // For the last entry. There is nothing afterwards.
        pageNumbers.push(trimmed);
      } else {
        // Get the first white space
        // Check if thats a number.
        const whiteSpace = trimmed.indexOf(" ");
        const sliced = trimmed.slice(0, whiteSpace);
        if (Number(sliced)) {
          pageNumbers.push(sliced);
        } else {
          // If we remove too much near a number
          // it combines the page number and the next header
          // and doesn't really show in the textarea.
          const pn = findPageNumberInSlice(sliced);
          if (pn !== -1) {
            pageNumbers.push(pn);
          }
        }
      }
    }
  });

  return {
    text,
    pageNumbers,
  };
}

// Separate the early page number and text.
function findPageNumberInSlice(text) {
  const regex = /\D+/;
  const split = text.split(regex);
  const suspectedPageNumber = split[0];

  if (Number(suspectedPageNumber)) {
    return suspectedPageNumber;
  }
  return -1;
}

function createHeaders(headersAndPageNumbers, headers) {
  const { text, pageNumbers } = headersAndPageNumbers;
  const newHeaders = text.map((header, index) => {
    const pageNumber = pageNumbers[index];
    const newHeader = createBlankHeader(
      headers,
      header,
      pageNumber,
      pageNumber
    );
    return newHeader;
  });

  return newHeaders;
}

function syncEllipses(tocText) {
  const regex = /\.{2,}/gi;
  const temp = tocText.replace(regex, ellipse);
  return temp;
}

function removeTableOfContents(tocText) {
  let tempText = tocText;

  const regex = /Table of Contents/gi;

  tempText = tocText.replace(regex, "");

  return tempText;
}

function removeRomanNumerals(tocText) {
  let tempText = tocText;
  romans.forEach((roman) => {
    // Search all occurences of the roman and find out
    // if they are by themselves.
    roman = roman.toLowerCase();
    const romanLen = roman.length;
    const regex = new RegExp(roman, "g");
    const index = tempText.search(regex);

    if (index !== -1) {
      // Check before it and after it for a space.

      let sliced = tempText.slice(index - 1, index + romanLen);
      sliced = removeNewLines(sliced);

      const indexOfRoman = sliced.search(roman);

      if (indexOfRoman === 0) {
        // Its good.
        const nextSpace = sliced.slice(indexOfRoman + romanLen);
        if (nextSpace === "") {
          // Slice from tempText
          const first = tempText.slice(0, index);
          const second = tempText.slice(index + romanLen, tempText.length);
          tempText = first + second;
        }
      }
    }
  });
  return tempText;
}

function removeNewLines(text) {
  const regex = /\n+/gi;
  return text.replace(regex, "");
}

function removeEllipses(text) {
  const regex = /\.{2,}/gi;
  return text.replace(regex, "");
}

function removeSpaces(text) {
  const regex = /\s+/gi;
  return text.replace(regex, "");
}

const romans = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
  "XXI",
  "XXII",
  "XXIII",
  "XXIV",
  "XXV",
  "XXVI",
  "XXVII",
  "XXVIII",
  "XXIX",
  "XXX",
];

export default getHeadersFromTocText;
