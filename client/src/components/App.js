import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './landing/LandingPage';
import TodayPage from './today/TodayPage';
import GoalsPage from './goals/GoalsPage';
import TasksPage from './tasks/TasksPage';
import HabitsPage from './habits/HabitsPage';


const App = () => (
    <BrowserRouter>
        <div>
            <div>Goals Tasks Habits manager</div>
            <Route exact path='/' component={LandingPage} />
            <Route path='/today' component={TodayPage} />
            <Route path='/goals' component={GoalsPage} />
            <Route path='/tasks' component={TasksPage} />
            <Route path='/habits' component={HabitsPage} />
        </div>
    </BrowserRouter>
);

export default App;