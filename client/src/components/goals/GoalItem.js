import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

const GoalItem = ({ goal }) => {
    return (
        <div className='item'>
            <div className='content'>
                {renderTitle(goal.title, goal.id)}
                {renderCathegory(goal.cathegory)}
                
                <div className='extra'>
                    {renderActions()}
                    {renderLabels(goal.stages, goal.task, goal.habits)}
                </div>
            </div>
        </div>
    );
}

const renderTitle = (title, id) => (
    <Link to={routes.GOALS + '/' + id} className='header'>
        {title}
    </Link>
);

const renderCathegory = cathegory => {
    return cathegory ? (
        <div className='meta'>
            <span className='cinema'>
                {cathegory}
            </span>
        </div>
    ) : null;
};

const renderLabels = (stages, tasks, habits) => {
    const stagesLabel = stages && stages.length
        ? <div className='ui label' key={1}>{stages.length} stages</div>
        : null;
    const tasksLabel = tasks && tasks.length
        ? <div className='ui label' key={2}>{tasks.length} tasks</div>
        : null;
    const habitsLabel = habits && habits.length
        ? <div className='ui label' key={3}>{habits.length} habits</div>
        : null;
    return [stagesLabel, tasksLabel, habitsLabel];
}

const renderActions = () => {
    return [
        <div className="ui right floated tiny primary basic button" key={1}>
            details
        </div>,
        <div className="ui right floated tiny negative basic button" key={2}>
            delete
        </div>,
        <div className="ui right floated tiny basic button" key={3}>
            edit
        </div>
    ];
}

export default GoalItem;