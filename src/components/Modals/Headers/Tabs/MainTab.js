import styled from "styled-components";

// Components
import Header from "../Header/Header";
import Expansion from "../Expansion/Expansion";

const TopButtons = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const Flex = styled.div`
  position: relative;
`;

function MainTab(props) {
  const {
    add,
    update,
    headers,
    actions,
    disableAdd,
    autoSpaced,
    spaceCurrentText,
    displayExpansion,
    removeCurrentSpacing,
  } = props;
  return (
    <article role="tabpanel" id="tab-Main">
      <Flex>
        <div>
          <TopButtons>
            <button onClick={add} disabled={disableAdd}>
              Add
            </button>
            {!autoSpaced && (
              <button onClick={spaceCurrentText} disabled={disableAdd}>
                Space Current Headers
              </button>
            )}
            {autoSpaced && (
              <button onClick={removeCurrentSpacing} disabled={disableAdd}>
                Remove Headers Spacing
              </button>
            )}
          </TopButtons>
          <ul>
            {headers.map((header) => {
              const { idNumber } = header;
              return (
                <Header
                  data={header}
                  key={idNumber}
                  actions={actions}
                  headers={headers}
                  update={update}
                />
              );
            })}
          </ul>
        </div>
        {displayExpansion && <Expansion update={update} />}
      </Flex>
    </article>
  );
}

export default MainTab;
