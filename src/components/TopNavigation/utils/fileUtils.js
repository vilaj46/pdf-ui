function openFile(state) {
  const { uploadFile } = state;
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "pdf");
  input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    const fileObject = createFileObject(file);
    uploadFile({
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
 * @param {Object} state - file, uploadFile
 *
 * If we have a file uploaded, set the file back to {}.
 */
function closeFile(state) {
  const { uploadFile, file } = state;
  if (Object.keys(file).length > 0) {
    uploadFile({});
  }
}

const fileUtils = {
  openFile,
  closeFile,
};

export default fileUtils;
