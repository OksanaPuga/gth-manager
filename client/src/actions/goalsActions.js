import api from '../api/axios';
import types from '../constants/types';
import routes from '../constants/routes';
import history from '../history';

export const createGoal = formValues => {
    return async dispatch => {
        const response = await api.post('/goals', formValues);
        dispatch({
            type: types.CREATE_GOAL,
            payload: response.data
        });
        history.push(routes.GOALS);
    }
};