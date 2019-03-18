import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

const GoalItem = ({ goal }) => {
    return (
        <div className='item'>
            <div className='content'>
                {renderTitle(goal.title, goal.id)}
                {renderCategory(goal.category)}
                
                <div className='extra'>
                    {renderActions()}
                    {renderLabels(goal.stages, goal.tasks, goal.habits)}
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

const renderCategory = category => {
    return category ? (
        <div className='meta'>
            <span className='cinema'>
                {category}
            </span>
        </div>
    ) : null;
};

const renderLabels = (stages, tasks, habits) => {
    const stagesLabel = stages && stages.length
        ? <div className='ui label' key={1}>{getLabelStr(stages.length, 'stage')}</div>
        : null;
    const tasksLabel = tasks && tasks.length
        ? <div className='ui label' key={2}>{getLabelStr(tasks.length, 'task')}</div>
        : null;
    const habitsLabel = habits && habits.length
        ? <div className='ui label' key={3}>{getLabelStr(habits.length, 'habit')}</div>
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

const getLabelStr = (number, entity) => {
    const isMultiple = number > 1;
    const suffix = isMultiple ? 's' : '';
    return `${number} ${entity + suffix}`;
}

export default GoalItem;