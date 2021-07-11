import React from "react";

function HeadersMenu(props) {
  // Properties
  const { setTab, tab } = props;

  return (
    <menu role="tablist" aria-label="Sample Tabs">
      <button
        role="tab"
        aria-selected={tab === "tab-Main" ? "true" : false}
        aria-controls="tab-Main"
        onClick={() => setTab("tab-Main")}
      >
        Main
      </button>
      <button
        role="tab"
        aria-selected={tab === "tab-Toc" ? "true" : false}
        aria-controls="tab-Toc"
        onClick={() => setTab("tab-Toc")}
      >
        TOC
      </button>
    </menu>
  );
}

export default HeadersMenu;
