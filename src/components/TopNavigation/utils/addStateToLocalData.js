/**
 * @param {Object} newState - Current state value and its setter.
 * @param {Object} obj - Data object
 * @returns original object with state from our App.
 *
 * Helper function just takes the current state and
 * the setter and combines it with our data object.
 */
 function addStateToLocalData(newState, obj) {
    const { state } = obj;
    obj.state = { ...state, ...newState };
    return obj;
  }

  export default addStateToLocalData;