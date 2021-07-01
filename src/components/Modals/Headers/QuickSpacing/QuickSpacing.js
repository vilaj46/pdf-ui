import React from "react";

import HeaderForSpacing from "./HeaderForSpacing/HeaderForSpacing";

function QuickSpacing(props) {
  const { headers, update, remove } = props;

  return (
    <div>
      {headers.map((header) => {
        const { text } = header;

        const createdLines = createLines(text);
        return (
          <HeaderForSpacing
            header={header}
            key={header.idNumber}
            update={update}
            remove={remove}
            createdLines={createdLines}
          />
        );
      })}
    </div>
  );
}

function createLines(text) {
  const newLines = /\n{2,}/gi;
  const split = text.split(newLines);
  let lines = [];
  split.forEach((line) => {
    const trimmed = line.trim();
    lines.push(trimmed);
  });

  return lines;
}

export default QuickSpacing;
