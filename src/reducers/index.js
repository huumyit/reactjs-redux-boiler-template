import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import searchTask from './searchTask';

const myReducer = combineReducers ({
    tasks, // tasks: tasks
    isDisplayForm,
    itemEditing,
    filterTable,
    searchTask
});

export default myReducer;