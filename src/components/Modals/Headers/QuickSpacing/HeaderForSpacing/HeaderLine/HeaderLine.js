import React from "react";

import { LineFlex, Input, RemoveButton, Line } from "../../Styles";

function HeaderLine(props) {
  const { text, index, addLine, removeLine, update } = props;
  const [focused, setFocused] = React.useState(false);
  const [textValue, setTextValue] = React.useState(text);

  const onKeyPress = (e) => {
    const { keyCode } = e;
    const { selectionStart } = e.target;
    if (keyCode === 13) {
      const beforeEnter = textValue.slice(0, selectionStart).trim();
      const afterEnter = textValue
        .slice(selectionStart, textValue.length)
        .trim();
      setTextValue(beforeEnter);
      addLine(beforeEnter, afterEnter);
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setTextValue(value);
    update(value);
  };

  const onBlur = (e) => {
    try {
      const { title } = e.relatedTarget;
      if (title === "Remove") {
        removeLine(index);
      }
    } catch {
      // We didn't click anything special.
    }

    setFocused(false);
  };

  if (!focused) {
    const border = textValue.length <= 0 ? "1px solid lightgray" : "none";

    return (
      <Line
        style={{ border }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {text}
      </Line>
    );
  } else {
    return (
      <LineFlex>
        <Input
          type="text"
          value={textValue}
          autoFocus={true}
          onKeyDown={(e) => onKeyPress(e)}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          rows="0"
        />
        <RemoveButton title="Remove">x</RemoveButton>
      </LineFlex>
    );
  }
}

export default HeaderLine;
