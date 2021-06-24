import React from "react";
import { connect } from "react-redux";

/**
 * Styled Component with iframe not taking.
 * Just use inline styles for now.

 * If we click the iframe while a dropdown menu is open,
 * it would normally not close the menu. This allows
 * us to close the menu.
 */
function PDF({ file, openState }) {
  // Props
  const { openDropdown } = openState;
  const { name = "", blob } = file;

  // Misc
  const zIndex = openDropdown === "" ? "auto" : "-1";
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
          height: "75%",
          width: "50%",
          position: "absolute",
          right: "10px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></iframe>
    )
  );
}

const mapStateToProps = (state) => {
  const { file } = state;
  return {
    file
  }
}

export default connect(mapStateToProps)(PDF);
