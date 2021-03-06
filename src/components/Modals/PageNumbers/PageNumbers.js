import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Actions
import fileActions from "../../../actions/fileActions";
import modalsActions from "../../../actions/modalsActions";

// API
import sendPageNumbersToBackend from "../../../api/sendPageNumbersToBackend";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Outcome = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 0 auto;
  text-align: center;
  margin: 20px 0;
  padding: 10px 0;
`;

const CenterTextInput = styled.input`
  text-align: center;
`;

const OutcomeLabel = styled.label`
  text-align: center;
  margin: 0 auto;
`;

const MultipleInputs = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PageRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioContainer = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
`;

const RangeContainer = styled.div`
  margin: 0 auto;
  display: flex;
`;

const Range = styled.div`
  margin: 0 5px;
`;

function PageNumbers(props) {
  // Redux Store Actions
  const {
    closeModal,
    changeBlob,
    enableApp,
    disableApp,
    changeFilePath,
    changeMetadata,
  } = props;

  // Redux Properties
  const { fileName, filePath, metadata } = props;

  // State
  const [text, setText] = React.useState("<<1>>");
  const [outcome, setOutcome] = React.useState("<<1>>");
  const [startingPage, setStartingPage] = React.useState(1);
  const [startPage, setStartPage] = React.useState(1);
  const [endPage, setEndPage] = React.useState(1);
  const [option, setOption] = React.useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "centerPageNumber") {
      setText(value);
      changeOutcome(value);
    } else if (name === "startPage") {
      setStartPage(value);
    } else if (name === "startingPage") {
      // setStartingPage(value);
      startPageHelper(value);
    }
  };

  /**
   * @param {String} newValue - Center page number value.
   * If we find the proper code for the page number, remove the brackets.
   * Otherwise, keep the text as is.
   */
  const changeOutcome = (newValue) => {
    const regex = /<<\d+>>/g;
    const searched = newValue.search(regex);
    if (searched !== -1) {
      const regex2 = /<<|>>/g;
      const replaced = newValue.replace(regex2, "");
      setOutcome(replaced);
    } else {
      setOutcome(newValue);
    }
  };

  const onOptionChange = (e) => {
    const { id } = e.target;
    setOption(id);
  };

  const startPageHelper = (newStartPage) => {
    // setStartPage(newStartPage);
    setStartingPage(newStartPage);

    const regex = /<<\d+>>/g;
    const searched = text.search(regex);
    if (searched !== -1) {
      const newText = text.replace(regex, "<<" + newStartPage + ">>");
      const mockEvent = {
        target: {
          name: "centerPageNumber",
          value: newText,
        },
      };
      onChange(mockEvent);
    }
  };

  const applyPageNumbers = async () => {
    disableApp();
    const state = {
      text,
      outcome,
      startPage,
      endPage,
      option,
      startingPage,
      fileName,
      filePath,
      metadata,
    };
    const res = await sendPageNumbersToBackend(state);
    const { newBlob, newFilePath, newMetadata } = res;
    const blob = URL.createObjectURL(newBlob);
    changeBlob(blob);
    closeModal();
    enableApp();
    changeFilePath(newFilePath);
    changeMetadata(newMetadata);
  };

  return (
    <article role="tabpanel">
      <MultipleInputs>
        <InputContainer>
          <label htmlFor="centerPageNumber">Center Page Number:</label>
          <CenterTextInput
            type="text"
            name="centerPageNumber"
            value={text}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="centerPageNumber">Starting Page Number:</label>
          <CenterTextInput
            type="number"
            name="startingPage"
            min="1"
            value={startingPage}
            onChange={onChange}
          />
        </InputContainer>
      </MultipleInputs>
      <Outcome>
        <OutcomeLabel htmlFor="outcome">Outcome:</OutcomeLabel>
        <CenterTextInput
          type="text"
          name="outcome"
          value={outcome}
          disabled={true}
        />
      </Outcome>
      <PageRangeContainer>
        <RadioContainer>
          <input
            id="all"
            type="radio"
            name="pageRange"
            onClick={onOptionChange}
          />
          <label htmlFor="all">All Pages</label>
        </RadioContainer>
        <RadioContainer>
          <input
            id="range"
            type="radio"
            name="pageRange"
            onClick={onOptionChange}
          />
          <label htmlFor="range">Page Range</label>
          {option === "range" && (
            <PageRangeInputs
              startPage={startPage}
              endPage={endPage}
              setStartPage={setStartPage}
              setEndPage={setEndPage}
            />
          )}
        </RadioContainer>
      </PageRangeContainer>
      <button type="text" onClick={applyPageNumbers}>
        Ok
      </button>
      <button type="text" onClick={closeModal}>
        Cancel
      </button>
    </article>
  );
}

function PageRangeInputs(props) {
  const { startPage, endPage, setStartPage, setEndPage } = props;
  return (
    <RangeContainer>
      <Range>
        <label htmlFor="startPage">Start Page:</label>
        <input
          type="number"
          min="1"
          name="startPage"
          value={startPage}
          onChange={(e) => setStartPage(e.target.value)}
        />
      </Range>
      <Range>
        <label htmlFor="startPage">End Page:</label>
        <input
          type="number"
          min="1"
          name="endPage"
          value={endPage}
          onChange={(e) => setEndPage(e.target.value)}
        />
      </Range>
    </RangeContainer>
  );
}

const { changeBlob, enableApp, disableApp, changeFilePath, changeMetadata } =
  fileActions;
const { closeModal } = modalsActions;

const mapStateToProps = (state) => {
  const { file } = state;
  return {
    ...file,
  };
};

export default connect(mapStateToProps, {
  closeModal,
  changeBlob,
  enableApp,
  disableApp,
  changeFilePath,
  changeMetadata,
})(PageNumbers);
