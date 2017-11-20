var initialState = {
    name: 'name',
    value: 1
}

var myReducer = ( state = initialState, action ) => {
    if (action.type === 'SORT') {
        var { by, value } = action.sort; // by = action.sort.by, value = action.sort.value
        return { by, value }
    }
    return state;
}

export default myReducer;