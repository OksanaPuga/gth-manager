import api from '../api/axios';
import types from '../constants/types';
import routes from '../constants/routes';
import history from '../history';

export const createTask = (formValues, goal) => {
    return async dispatch => {
        const taskResponse = await api.post(routes.TASKS, formValues);
        dispatch({
            type: types.CREATE_TASK,
            payload: taskResponse.data
        });

        if (goal) {
            const updatedChildTasks = goal.tasks
                ? [ ...goal.tasks, taskResponse.data.id ]
                : [taskResponse.data.id];
            const updatedGoal = { ...goal, tasks: updatedChildTasks };
            const goalResponse = await api.put(routes.GOALS + `/${goal.id}`, updatedGoal);
            
            dispatch({
                type: types.UPDATE_GOAL,
                payload: goalResponse.data
            });
        }

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
};

export const fetchTask = id => {
    return async dispatch => {
        const response = await api.get(`${routes.TASKS}/${id}`);
        dispatch({
            type: types.FETCH_TASK,
            payload: response.data
        });
    }
}