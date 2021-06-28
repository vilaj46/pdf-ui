import createBlankHeader from "./createBlankHeader";

// If we ever change this value, 
// make sure we also change it in the safer split regex.
const ellipse = "CODE<<ELLIPSE>>CODE"

function getHeadersFromTocText(tocText, headers) {
  // Remove Table of Contents
  let tempText = removeTableOfContents(tocText);
  // Remove Roman numerals
  tempText = removeRomanNumerals(tempText);
  tempText = removeNewLines(tempText);
  // split by ...
  // get text and get page number
  tempText = syncEllipses(tempText);
  const headersAndPageNumbers = splitByEllipses(tempText);
  const safer = saferSplit(tempText);
  // format as headers
  const newHeaders = createHeaders(headersAndPageNumbers, headers);
  return newHeaders;
}

function saferSplit(tocText) {
  // Could not figure out interpolation in the RegExp.
  // For now hard code the ellipse.
  const regex = /CODE<<ELLIPSE>>CODE\s+\d+/gi;

  const split = tocText.split(regex);

  let text = [];

  split.forEach(text => {
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      text.push(trimmed);
    }
  });

  // const regex2 = // SPLIT HERE BY WORDS CODE<<ELLIPSE>> 
  // FIGURE OUT HOW TO GET PAGE NUMBER AFTER THIS SPLIT.
  
  let pageNumbers = [];

  return {
    text,
    pageNumbers,
  }
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

function splitByEllipses(tocText) {
  const text = [];
  const pageNumbers = [];
  // const split = tocText.split(/\.{2,}/);
  const split = tocText.split(ellipse);

  // Get text and get page numbers.
  split.forEach((header, index) => {
    const trimmed = header.trim();
    try {
      const whiteSpace = trimmed.search(" ");
      const upToWhiteSpace = trimmed.slice(0, whiteSpace);
      if (whiteSpace === -1) {
        pageNumbers.push(trimmed); // Last entry.
      } else if (Number(upToWhiteSpace)) {
        pageNumbers.push(upToWhiteSpace.trim());
        // remove number
        const sliced = trimmed
          .slice(upToWhiteSpace.length, trimmed.length)
          .trim();
        text.push(sliced);
      } else if (!Number(upToWhiteSpace)) {
        text.push(trimmed.trim());
      }
    } catch {
      // Just continue.
    }
  });
  
  return {
    text,
    pageNumbers,
  };
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
  const regex = /\n/gi;
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
