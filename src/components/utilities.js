// Dropdown Utility
import dropdownUtility from "./TopNavigation/Dropdown/utils";

// Local Data
import { TIME_TO_CLOSE_DROPDOWN } from "./localData";

/**
 * @param {Object} e - event object.
 * @param {String} openDropdown - Label of the dropdown open.
 * @param {Function} closeDropdown - Sets our openDropdown.
 *
 * Check if we click a label on the Dropdown menus.
 * Only works in the TopNavigation panel.
 *
 * If we have one open and click on the app, it closes the menus.
 */
 function closeTopNavigation(e, openDropdown, closeDropdown) {
    const classInSearch = "topNavigationDetails";
    const target =
      e.target.tagName === "SUMMARY" ? e.target.parentNode : e.target;
    const classList = Array.from(target.classList);
    if (!classList.includes(classInSearch) && openDropdown !== "") {
      closeDropdown();
      const details = Array.from(document.querySelectorAll(`.${classInSearch}`));
      dropdownUtility.closeAllDropdowns(details, TIME_TO_CLOSE_DROPDOWN);
    }
  }

  const utilities = {
      closeTopNavigation,
  }

  export default utilities;