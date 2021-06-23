import utils from "./utils";

const fileObject = {
  title: "File",
  location: "topNavigationDetails",
  items: [
    {
      label: "Open",
      onClick: (state) => utils.openFile(state),
    },
    {
      label: "Close",
      onClick: () => {
        console.log("Youv'e clicked close.");
      },
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
      onClick: () => {
        console.log("Youv'e clicked headers.");
      },
    },
    {
      label: "Page Numbers",
      onClick: () => {
        console.log("Youv'e clicked page numbers.");
      },
    },
  ],
  state: {},
};

const localData = {
  fileObject,
  documentObject,
};

export default localData;
