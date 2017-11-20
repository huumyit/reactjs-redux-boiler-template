var initialState = false;

var myReducer = ( state = initialState, action ) => {
    if (action.type === 'Toggle_Status') {
        state= !state;
        return state;
    }
    return state;
}

export default myReducer;