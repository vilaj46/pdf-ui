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

/**
 * @param {Object} state - file, setFile
 *
 * If we have a file uploaded, set the file back to {}.
 */
function closeFile(state) {
  const { setFile, file } = state;
  if (Object.keys(file).length > 0) {
    setFile({});
  }
}

const fileUtils = {
  openFile,
  closeFile,
};

export default fileUtils;
