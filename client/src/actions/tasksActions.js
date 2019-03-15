import api from '../api/axios';
import types from '../constants/types';
import routes from '../constants/routes';
import history from '../history';

export const createTask = formValues => {
    return async dispatch => {
        const response = await api.post(routes.TASKS, formValues);
        dispatch({
            type: types.CREATE_TASK,
            payload: response.data
        });
        history.push(routes.TASKS);
    }
};

export const fetchTasks = () => {
    return async dispatch => {
        const response = await api.get(routes.TASKS);
        dispatch({
            type: types.FETCH_TASKS,
            payload: response.data
        });
    }
}