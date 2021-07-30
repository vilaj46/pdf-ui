import axios from "axios";

async function sendPageNumbersToBackend(state) {
  const { startPage, endPage, text, option } = state;

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

  try {
    const res = await axios.post("pageNumbers/apply", formData, {
      responseType: "blob",
    });
    if (res.status === 200) {
      const { data } = res;
      return data;
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
