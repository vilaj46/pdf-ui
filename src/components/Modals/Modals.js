import React from "react";
import styled from "styled-components";

// Sub Components
import Headers from "./Headers/Headers";
import Expansion from "./Expansion/Expansion";
import ModalTemplate from "./ModalTemplate";

const ModalContainer = styled.div`
  padding-top: 10px;
  display: flex;
  max-width: 70%;
`;

function Modals({ modalState }) {
  // Props
  const { openModal, setOpenModal } = modalState;

  // State
  const [expansion, setExpansion] = React.useState({});

  // Misc
  const displayModal = openModal.length > 0 ? true : false;

  // Organized State
  const expansionObj = {
    expansion,
    setExpansion,
  };
  const headerBodyObj = {
    modalState,
    expansionObj,
  };

  return (
    displayModal && (
      <ModalTemplate
        modalState={modalState}
        Body={Headers}
        bodyProps={headerBodyObj}
        expansionProps={{ ...expansionObj, ...modalState }}
        Expansion={Expansion}
      />
      // <ModalContainer>
      //   <div style={{ width: `${displayExpansion ? "60%" : "100%"}` }}>
      //     <div className="window">
      //       <div className="title-bar">
      //         <div className="title-bar-text">{openModal}</div>
      //         <div className="title-bar-controls">
      //           <button aria-label="Minimize"></button>
      //           <button aria-label="Maximize"></button>
      //           <button
      //             aria-label="Close"
      //             onClick={() => setOpenModal("")}
      //           ></button>
      //         </div>
      //       </div>
      //       <div className="window-body">
      // <Headers modalState={modalState} expansionObj={expansionObj} />
      //       </div>
      //     </div>
      //   </div>
      //   {displayExpansion && <Expansion expansionObj={expansionObj} />}
      // </ModalContainer>
    )
  );
}

export default Modals;
