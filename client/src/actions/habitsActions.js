import api from '../api/axios';
import types from '../constants/types';
import routes from '../constants/routes';
import history from '../history';

export const createHabit = formValues => {
    return async dispatch => {
        const response = await api.post(routes.HABITS, formValues);
        dispatch({
            type: types.CREATE_HABIT,
            payload: response.data
        });
        history.push(routes.HABITS);
    }
};

export const fetchHabits = () => {
    return async dispatch => {
        const response = await api.get(routes.HABITS);
        dispatch({
            type: types.FETCH_HABITS,
            payload: response.data
        });
    }
}