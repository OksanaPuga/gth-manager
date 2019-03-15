import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import goalsReducer from './goalsReducer';
import tasksReducer from './tasksReducer'

export default combineReducers({
    form: formReducer,
    goals: goalsReducer,
    tasks: tasksReducer
});