import utils from "./utils";

/**
 * QOL:
 * Add a magnify effect to see which buttons we are hovering.
 * Text is incredibly small, maybe make bigger?
 * Hover on the Dropdowns.
 * Will probably require a styled component.
 */

function Dropdown({ data, openState }) {
    // Constants
    const TIME_TO_CLOSE = 100;

    // Misc
    const details = Array.from(document.querySelectorAll(".details"));

    // State
    const { title, items } = data;
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
            setOpenDropdown("");
            utils.closeAllDropdowns(details, TIME_TO_CLOSE);
        } else {
            setOpenDropdown(title);
            utils.closeDropdownsAfterAnotherOpened(details, title, TIME_TO_CLOSE);
        }
    }

    return (
        <ul className="tree-view">
            <li>
                <details className={`details ${title}`} onClick={(e) => toggleOpen(e)}>
                    <summary>{title}</summary>
                    <ul>{
                        items.map((item, index) => {
                            const { label, onClick } = item;
                            const buttonClick = (e) => {
                                e.stopPropagation();
                                onClick();
                                utils.closeAllDropdowns(details, TIME_TO_CLOSE)
                            }
                            return (
                                <li onClick={(e) => buttonClick(e)} key={index}>{label}</li>
                            )
                        })
                    }
                    </ul>
                </details>
            </li>
        </ul>
    )
}

export default Dropdown;