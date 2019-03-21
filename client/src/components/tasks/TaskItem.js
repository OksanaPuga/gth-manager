import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

const TaskItem = ({ task }) => {
    return (
        <div className='item'>
            <div className='content'>
                {renderTitle(task.title, task.id)}
                {renderCategory(task.category)}
                {renderGoalLabel(!!task.goal)}
                
                <div className='extra'>
                    {renderActions()}
                </div>
            </div>
        </div>
    );
}

const renderTitle = (title, id) => (
    <Link to={routes.TASKS + '/' + id} className='header'>
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

const renderGoalLabel = isAttached => {
    return isAttached ? (
        <span className="ui right corner label">
            <i className="bullseye icon"></i>
        </span>
    ) : null;
}

const renderActions = () => {
    return [
        <div className="ui right floated icon labeled tiny primary button" key={0}>
            <i className='icon check' />
            mark done
        </div>,
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

export default TaskItem;