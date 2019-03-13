import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './Layout';
import LandingPage from './landing/LandingPage';
import TodayPage from './today/TodayPage';
import GoalsPage from './goals/GoalsPage';
import TasksPage from './tasks/TasksPage';
import HabitsPage from './habits/HabitsPage';


const App = () => (
    <BrowserRouter>
        <Layout>
            <Route exact path='/' component={LandingPage} />
            <Route path='/today' component={TodayPage} />
            <Route path='/goals' component={GoalsPage} />
            <Route path='/tasks' component={TasksPage} />
            <Route path='/habits' component={HabitsPage} />
        </Layout>
    </BrowserRouter>
);

export default App;