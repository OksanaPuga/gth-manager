import types from '../constants/types';

const goalsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.CREATE_GOAL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}

export default goalsReducer;