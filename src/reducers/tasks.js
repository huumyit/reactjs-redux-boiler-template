import _ from 'lodash'; //All function of the lodash
import * as types from './../constants/ActionTypes';

// random key ID
var s4 = () => {
	return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
	return (
			s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4()
	)
}

var findIndex = (tasks, id) => {
	var result  = -1;
	tasks.forEach(function(task, index) {
		if(task.id === id) {
			result = index;
		}
	});
	return result;
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer  = (state = initialState, action) => {
	var id = '';
	var index  = -1;
	switch (action.type) {
		case types.LIST_ALL:
			return state;
		case types.SAVE_TASK :
			var task = {
				id: action.task.id,
				name: action.task.name,
				status: (action.task.status === 'true' || action.task.status === true) ? true : false
			}
			if (!task.id) {
				task.id = generateID();
				state.push(task);
			}else {
				// Using lodash
				// index = _.findIndex(state, (task) => {
				// 	return task.id === action.task.id;
				// });

				// Using findIndex function
				index = findIndex(state, task.id);
				state[index] = task;
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.UPDATE_STATUS_TASK :
			id = action.id;
			index = _.findIndex(state, (task) => {
				return task.id === id;
			});
			state[index] = {
				...state[index],
				status: !state[index].status
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK :
			id = action.id;
			index = _.findIndex(state, (task) => {
				return task.id === id;
			});
			state.splice(index, 1);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];


		default: return state;
	}
}

export default myReducer;
