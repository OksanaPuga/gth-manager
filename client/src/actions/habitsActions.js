import api from '../api/axios';
import types from '../constants/types';
import routes from '../constants/routes';
import history from '../history';

export const createHabit = (formValues, goal) => {
    return async dispatch => {
        const habitResponse = await api.post(routes.HABITS, formValues);
        dispatch({
            type: types.CREATE_HABIT,
            payload: habitResponse.data
        });

        if (goal) {
            const updatedChildHabits = goal.habits
                ? [ ...goal.habits, habitResponse.data.id ]
                : [habitResponse.data.id];
            const updatedGoal = { ...goal, habits: updatedChildHabits };
            const goalResponse = await api.put(routes.GOALS + `/${goal.id}`, updatedGoal);
            
            dispatch({
                type: types.UPDATE_GOAL,
                payload: goalResponse.data
            });
        }

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