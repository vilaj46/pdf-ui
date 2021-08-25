import axios from "axios";

import url from "./url";

async function sendPageNumbersToBackend(state) {
  const { startPage, endPage, text, option, fileName, filePath, metadata } =
    state;

  if (option === "range") {
    const rangeIsOk = checkPageRange(startPage, endPage);

    if (!rangeIsOk) {
      return false;
    }
  }

  const dictionary = {
    startPage,
    endPage,
    text,
    range: option,
  };

  const formData = new FormData();
  formData.append("pageNumbers", JSON.stringify(dictionary));
  formData.append("fileName", fileName);
  formData.append("filePath", filePath);
  formData.append("metadata", metadata);

  try {
    const res = await axios.post(`${url}pageNumbers/apply`, formData, {
      responseType: "blob",
    });
    const { headers } = res;
    const filePath = headers["x-filepath"];
    const metadata = headers["x-metadata"];
    if (res.status === 200) {
      const { data } = res;
      return {
        newBlob: data,
        newFilePath: filePath,
        newMetadata: metadata,
      };
    }
  } catch (err) {
    return;
  }
  return {};
}

/**
 * @param {Number} startPage - Starting page number of our header.
 * @param {Number} endPage - Ending page number of our header.
 * @returns boolean - Whether or not our page range is ok.
 *
 * Checks whether our startPage and endPage are numbers.
 * If they aren't we return false. Then check if our startPage
 * is less than or equal to our endPage.
 */
function checkPageRange(startPage, endPage) {
  try {
    const startNumber = Number(startPage);
    const endNumber = Number(endPage);
    if (startNumber <= endNumber) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export default sendPageNumbersToBackend;
