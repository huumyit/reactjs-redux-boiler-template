import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';


const store = createStore(myReducer);
console.log('Toggle-status: ' , store.getState());
// Change status
// var action = {
//     type: 'Toggle_Status'
// };
store.dispatch(status());
console.log('Toggle-status: ' , store.getState());

// var actionSort = {
//     type: 'SORT',
//     sort: {
//         by: 'name',
//         value: -1
//     }
// }
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('Sort : ' , store.getState());


