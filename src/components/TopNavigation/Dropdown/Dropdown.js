import utils from "./utils";
import { connect } from "react-redux";

// Local Data
import { TIME_TO_CLOSE_DROPDOWN } from "../../localData";

// Actions
import actions from "../../../actions";

/**
 * QOL:
 * Add a magnify effect to see which buttons we are hovering.
 * Text is incredibly small, maybe make bigger?
 * Hover on the Dropdowns.
 * Will probably require a styled component.
 */

function Dropdown(props) {
  // Redux Actions
  const { expandDropdown, closeDropdown } = props;

  // Props
  // location is where the dropdown is so we can close others in the same area.
  // This will be useful if we use this component in other places.
  const { data } = props; // From the TopNavigation component.
  const { title, items, location } = data;

  // Misc
  // TopNavigation elements which we click to open the respected Dropdown.
  // We will use these elements to assist in opening / closing.
  const details = Array.from(document.querySelectorAll(`.${location}`));

  /**
   * @param {Object} e - Event object.
   *
   * If we click the same Dropdown we have open, close all of them.
   * If we click a Dropdown and have none open, open the Dropdown.
   * If we click a Dropdown with another Dropdown open,
   * open the Dropdown and close the other one.
   */
  const toggleOpen = (e) => {
    if (topNavigation.openDropdown === title) {
      utils.closeAllDropdowns(details, TIME_TO_CLOSE_DROPDOWN);
      closeDropdown();
    } else {
      utils.closeDropdownsAfterAnotherOpened(
        details,
        title,
        TIME_TO_CLOSE_DROPDOWN
      );
      expandDropdown(title);
    }
  };

  return (
    <ul className="tree-view">
      <li>
        <details
          className={`${location} ${title}`}
          onClick={(e) => toggleOpen(e)}
        >
          <summary>{title}</summary>
          <ul>
            {items.map((item, index) => {
              const { state } = data;
              const { label, onClick } = item;
              const buttonClick = (e) => {
                e.stopPropagation();
                onClick(state);
                closeDropdown();
                utils.closeAllDropdowns(details, TIME_TO_CLOSE_DROPDOWN);
              };
              return (
                <li onClick={(e) => buttonClick(e)} key={index}>
                  {label}
                </li>
              );
            })}
          </ul>
        </details>
      </li>
    </ul>
  );
}

const { topNavigation } = actions;
const { expandDropdown, closeDropdown } = topNavigation;

const mapStateToProps = (state) => {
  const { topNavigation } = state;
  return {
    topNavigation,
  };
};

export default connect(mapStateToProps, { expandDropdown, closeDropdown })(
  Dropdown
);
