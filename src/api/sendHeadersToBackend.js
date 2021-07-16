import axios from "axios";

async function sendHeadersToBackend(headers) {
  const filtered = headers.filter((header) => {
    const { startPage, endPage } = header;
    const rangeIsOk = checkPageRange(startPage, endPage);

    if (rangeIsOk) {
      return true;
    } else {
      return false;
    }
  });

  const formData = new FormData();
  const dictionary = {};
  filtered.forEach((header, index) => {
    dictionary[`${index}`] = header;
  });

  formData.append("headers", JSON.stringify(dictionary));

  try {
    const res = await axios.post("headers/apply", formData, {
      responseType: "blob",
    });
    if (res.status === 200) {
      const { data } = res;
      console.log(data);
      return data;
    }
  } catch (err) {
    return;
  }
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

export default sendHeadersToBackend;
