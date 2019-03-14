import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../constants/routes';
import Layout from './Layout';
import LandingPage from './landing/LandingPage';
import TodayPage from './today/TodayPage';
import GoalsPage from './goals/GoalsPage';
import NewGoalPage from './goals/NewGoalPage';
import TasksPage from './tasks/TasksPage';
import HabitsPage from './habits/HabitsPage';


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path={routes.LANDING} component={LandingPage} />
                <Route path={routes.TODAY} component={TodayPage} />
                <Route exact path={routes.NEW_GOAL} component={NewGoalPage} />
                <Route path={routes.GOALS} component={GoalsPage} />
                <Route path={routes.TASKS} component={TasksPage} />
                <Route path={routes.HABITS} component={HabitsPage} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;