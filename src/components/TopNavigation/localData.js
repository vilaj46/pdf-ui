import fileUtils from "./utils/fileUtils";

const fileObject = {
  title: "File", // Dropdown Text.
  location: "topNavigationDetails", // Location so we know which others to close upon interaction.
  items: [
    // Items that appear when clicked.
    {
      label: "Open", // Button text.
      onClick: (state) => fileUtils.openFile(state), // When we click the button.
    },
    {
      label: "Close",
      onClick: (state) => fileUtils.closeOpenedFile(state),
    },
  ],
  state: {},
};

const documentObject = {
  title: "Document",
  location: "topNavigationDetails",
  items: [
    {
      label: "Headers",
      onClick: (state) => state.expandModal("Headers"),
    },
    {
      label: "Page Numbers",
      onClick: (state) => state.expandModal("Page Numbers"),
    },
  ],
  state: {},
};

const localData = {
  fileObject,
  documentObject,
};

export default localData;
