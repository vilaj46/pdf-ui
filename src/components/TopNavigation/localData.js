import fileUtils from "./utils/fileUtils";
// import documentUtils from "./utils/documentUtils";

const fileObject = {
  title: "File",
  location: "topNavigationDetails",
  items: [
    {
      label: "Open",
      onClick: (state) => fileUtils.openFile(state),
    },
    {
      label: "Close",
      onClick: (state) => fileUtils.closeFile(state),
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
      onClick: (state) => state.setOpenModal("Headers"),
    },
    {
      label: "Page Numbers",
      onClick: (state) => state.setOpenModal("Page Numbers"),
    },
  ],
  state: {},
};

const localData = {
  fileObject,
  documentObject,
};

export default localData;
