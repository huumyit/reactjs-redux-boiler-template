import { createStore } from 'redux';

var initialState = {
    status : false,
    sort: {
        name: 'name',
        value: 1
    }
}

var myReducer = ( state = initialState, action ) => {
    if (action.type === 'Toggle_Status') {
        state.status = !state.status;
        return state;
    }

    if (action.type === 'SORT') {
        // state.sort = {
        //     by: action.sort.by,
        //     value: action.sort.value
        // }
        // return state;
        
        var { by, value } = action.sort; // by = action.sort.by, value = action.sort.value
        var { status } = state; // value = state.status
        return {
            status: status,
            sort: {
                by: by,
                value: value
            }
        }
    }
    return state;
}

const store = createStore(myReducer);
console.log('Toggle-status: ' , store.getState());
// Change status
var action = {
    type: 'Toggle_Status'
};
store.dispatch(action);
console.log('Toggle-status: ' , store.getState());

var actionSort = {
    type: 'SORT',
    sort: {
        by: 'name',
        value: -1
    }
}
store.dispatch(actionSort);
console.log('Sort : ' , store.getState());


