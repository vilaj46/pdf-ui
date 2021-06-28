function getHeadersFromTocText(tocText) {
  // Remove Table of Contents
  let tempText = removeTableOfContents(tocText);
  // Remove Roman numerals
  tempText = removeRomanNumerals(tempText);
  tempText = removeNewLines(tempText);
  // split by ...
  tempText = splitByEllipses(tempText);
  // get text and get page number
}

function splitByEllipses(tocText) {
  const text = [];
  const pageNumbers = [];
  const split = tocText.split(/\.{2,}/);

  // Get text and get page numbers.
  split.forEach((header, index) => {
    const trimmed = header.trim();
    // Find the first white space.
    // Check if the text up to the white space is a number.
    // If not a number, add to the headers.
    // If it is a number, add the number to the pageNumbers.
    try {
      const whiteSpace = trimmed.search(" ");
      const upToWhiteSpace = trimmed.slice(0, whiteSpace);
      if (Number(upToWhiteSpace)) {
        pageNumbers.push(upToWhiteSpace);
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
  console.log(text);
  return tocText;
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
