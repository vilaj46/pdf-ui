function openFile(state) {
  const { setFile } = state;
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "pdf");
  input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    const fileObject = createFileObject(file);
    setFile({
      ...fileObject,
      blob,
    });
  });
  input.click();
}

const utils = {
  openFile,
};

/**
 * @param {File} file - Newly uploaded file.
 * @return object with file properties.
 *
 * Since we cannot iterate over the keys in the file we will manually
 * do it  here.
 */
function createFileObject(file) {
  const obj = {};
  for (let key in file) {
    obj[key] = file[key];
  }
  return obj;
}

export default utils;
