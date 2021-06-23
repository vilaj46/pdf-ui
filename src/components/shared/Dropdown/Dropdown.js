import utils from "./utils";

// Local Data
import { TIME_TO_CLOSE_DROPDOWN } from "../../localData";

/**
 * QOL:
 * Add a magnify effect to see which buttons we are hovering.
 * Text is incredibly small, maybe make bigger?
 * Hover on the Dropdowns.
 * Will probably require a styled component.
 */

function Dropdown({ data, openState }) {
  // Props (location is where the dropdown is so we can close others in the same area.)
  const { title, items, location } = data;

  // Misc
  const details = Array.from(document.querySelectorAll(`.${location}`));

  // State
  const { openDropdown, setOpenDropdown } = openState;

  /**
   * @param {Object} e - Event object.
   *
   * If we click the same Dropdown we have open, close all of them.
   * If we click a Dropdown and have none open, open the Dropdown.
   * If we click a Dropdown with another Dropdown open,
   * open the Dropdown and close the other one.
   */
  const toggleOpen = (e) => {
    if (openDropdown === title) {
      utils.closeAllDropdowns(details, TIME_TO_CLOSE_DROPDOWN);
      setOpenDropdown("");
    } else {
      utils.closeDropdownsAfterAnotherOpened(
        details,
        title,
        TIME_TO_CLOSE_DROPDOWN
      );
      setOpenDropdown(title);
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
                setOpenDropdown("");
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

export default Dropdown;
