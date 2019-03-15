import api from '../api/axios';
import types from '../constants/types';
import routes from '../constants/routes';
import history from '../history';

export const createGoal = formValues => {
    return async dispatch => {
        const response = await api.post(routes.GOALS, formValues);
        dispatch({
            type: types.CREATE_GOAL,
            payload: response.data
        });
        history.push(routes.GOALS);
    }
};

export const fetchGoals = () => {
    return async dispatch => {
        const response = await api.get(routes.GOALS);
        dispatch({
            type: types.FETCH_GOALS,
            payload: response.data
        });
    }
}