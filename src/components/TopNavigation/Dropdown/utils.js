/**
 * @param {Array} details - Array of summary/detail elements in our top navigation. 
 * @param {Number} TIME_TO_CLOSE - How fast we want to close the Dropdowns.
 * 
 * Iterate through every Dropdown and close them after the suggested time.
 */
function closeAllDropdowns (details, TIME_TO_CLOSE) {
    details.forEach(detail => {
        setTimeout(() => {
            detail.removeAttribute("open");
        }, TIME_TO_CLOSE)
    });
}

/**
 * @param {Array} details - Array of summary/detail elements in our top navigation. 
 * @param {String} title - The title of the Dropdown we want to keep open.
 * @param {Number} TIME_TO_CLOSE - How fast we want to close the Dropdowns.
 * 
 * Iterate through every Dropdown and close them after the suggested time.
 */
function closeDropdownsAfterAnotherOpened (details, title, TIME_TO_CLOSE) {
    details.forEach(detail => {
        setTimeout(() => {
            const classList = Array.from(detail.classList);
            if (!classList.includes(title)) {
                detail.removeAttribute("open");
            }
        }, TIME_TO_CLOSE)
    });
}

const utils = {
    closeAllDropdowns,
    closeDropdownsAfterAnotherOpened
}

export default utils;