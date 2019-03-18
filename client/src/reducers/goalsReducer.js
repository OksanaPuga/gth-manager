import _ from 'lodash';

import types from '../constants/types';

const goalsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_GOALS:
            return _.keyBy(action.payload, 'id')
        case types.CREATE_GOAL:
            return { ...state, [action.payload.id]: action.payload };
        case types.UPDATE_GOAL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}

export default goalsReducer;