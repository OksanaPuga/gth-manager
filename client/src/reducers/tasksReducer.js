import _ from 'lodash';

import types from '../constants/types';

const tasksReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_TASKS:
            return _.keyBy(action.payload, 'id');
        case types.FETCH_TASK:
            return { ...state, [action.payload.id]: action.payload };
        case types.CREATE_TASK:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}

export default tasksReducer;