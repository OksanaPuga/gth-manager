import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import goalsReducer from './goalsReducer';
import tasksReducer from './tasksReducer';
import habitsReducer from './habitsReducer';

export default combineReducers({
    form: formReducer,
    goals: goalsReducer,
    tasks: tasksReducer,
    habits: habitsReducer
});