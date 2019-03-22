import _ from 'lodash';

import types from '../constants/types';

const habitsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_HABITS:
            return _.keyBy(action.payload, 'id');
        case types.FETCH_HABIT:
            return { ...state, [action.payload.id]: action.payload };
        case types.CREATE_HABIT:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}

export default habitsReducer;