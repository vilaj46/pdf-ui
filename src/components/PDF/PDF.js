import React from "react";
import { connect } from "react-redux";

/**
 * Styled Component with iframe not taking.
 * Just use inline styles for now.

 * If we click the iframe while a dropdown menu is open,
 * it would normally not close the menu. This allows
 * us to close the menu.
 */
function PDF({ file, topNavigation }) {
  // Redux Store Properties
  const { openDropdown } = topNavigation;
  const { name = "", blob } = file;

  // Misc
  // Assists in making clickable when we have a Dropdown open in the TopNavigation.
  const zIndex = openDropdown === "" ? "auto" : "-1";

  // Whether or not we display a PDF, depending if our file is open or not.
  const display = Object.keys(file) > 0 || name.length > 0 ? true : false;

  return (
    display && (
      <iframe
        src={blob}
        title={name}
        frameBorder="0"
        style={{
          zIndex,
          overflow: "hidden",
          height: "98vh",
          width: "60%",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></iframe>
    )
  );
}

const mapStateToProps = (state) => {
  const { file } = state;
  const { topNavigation } = state;
  return {
    file,
    topNavigation,
  };
};

export default connect(mapStateToProps)(PDF);
