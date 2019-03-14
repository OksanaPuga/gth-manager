import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import goalsReducer from './goalsReducer';

export default combineReducers({
    form: formReducer,
    goals: goalsReducer
});