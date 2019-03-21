import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import routes from '../constants/routes';
import Layout from './Layout';
import LandingPage from './landing/LandingPage';
import TodayPage from './today/TodayPage';
import GoalsPage from './goals/GoalsPage';
import GoalDetailsPage from './goals/GoalDetailsPage';
import NewGoalPage from './goals/NewGoalPage';
import TasksPage from './tasks/TasksPage';
import NewTaskPage from './tasks/NewTaskPage';
import HabitsPage from './habits/HabitsPage';
import NewHabitPage from './habits/NewHabitPage';


const App = () => (
    <Router history={history}>
        <Layout>
            <Switch>
                <Route exact path={routes.LANDING} component={LandingPage} />
                <Route path={routes.TODAY} component={TodayPage} />
                <Route path={routes.NEW_GOAL} component={NewGoalPage} />
                <Route path={routes.GOAL_DETAILS} component={GoalDetailsPage} />
                <Route path={routes.GOALS} component={GoalsPage} />
                <Route path={routes.NEW_TASK} component={NewTaskPage} />
                <Route path={routes.TASKS} component={TasksPage} />
                <Route path={routes.NEW_HABIT} component={NewHabitPage} />
                <Route path={routes.HABITS} component={HabitsPage} />
            </Switch>
        </Layout>
    </Router>
);

export default App;