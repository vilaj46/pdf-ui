/**
 * @param {Object} state - file, uploadFile, closeOpenedFile. State from the redux store and actions.
 *
 * Temporarily open a file selection. If we choose a file,
 * upload it!
 */
function openFile(state) {
  const { uploadFile } = state;
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "pdf");
  input.addEventListener("change", async (e) => {
    const file = e.target.files[0];

    if (file.type === "application/pdf") {
      const blob = URL.createObjectURL(file);
      const fileObject = createFileObject(file);
      uploadFile({
        ...fileObject,
        blob,
        file,
      });
    }
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
 * @param {Object} state - file, uploadFile
 *
 * If we have a file uploaded, set the file back to {}.
 */
function closeOpenedFile(state) {
  const { closeFile, file } = state;
  if (Object.keys(file).length > 0) {
    closeFile();
  }
}

const fileUtils = {
  openFile,
  closeOpenedFile,
};

export default fileUtils;
