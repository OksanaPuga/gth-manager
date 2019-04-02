import React from 'react';
import { Link } from 'react-router-dom';

import { fetchTask } from '../../actions/tasksActions';
import routes from '../../constants/routes';
import withDataForItemDetails from '../hoc/withDataForItemDetails';
import GoalItem from '../goals/GoalItem';

class TaskDetailsPage extends React.Component {
    render() {
        const task = this.props.tasks[this.props.match.params.id];
        return task ? (
            <div>
                {this.renderActions()}

                <h2 className='ui header'>
                    Task: {task.title}
                    <div className='sub header'>{task.description}</div>
                </h2>

                <h4 className="ui horizontal divider header">
                    <i className="bar chart icon"></i>
                    Detais
                </h4>
                
                <div className='ui very relaxed list'>
                    {this.renderProperty(task.date, 'Date')}
                    {this.renderProperty(task.time, 'Time')}
                    {this.renderProperty(task.duration, 'Duration')}
                    {this.renderProperty(task.category, 'Category')}
                    {this.renderProperty(task.importance, 'Importance')}
                    {this.renderProperty(task.complexity, 'Complexity')}
                    {this.renderParentGoal(task.goal)}
                </div>
            </div>
        ) : null;
    }

    renderActions() {
        return (
            <div className='ui right floated content'>
                <div className="ui right floated tiny primary basic button" key={1}>
                    edit
                </div>
                <div className="ui right floated tiny negative basic button" key={2}>
                    delete
                </div>
                <Link to={routes.TASKS} className="ui right floated tiny basic button" key={3}>
                    back
                </Link>  
            </div>
        );
    }

    renderProperty(property, label) {
        return property ? (
            <div className='item'>
                <b>{label}:</b> {property}
            </div>
        ) : null;
    }

    renderParentGoal(goal) {
        if (!goal || !this.props.goals[goal]) return null;
        return (
            <div className='ui items'>
                <h3 className='ui header'>Attached to Goal:</h3>
                <GoalItem goal={this.props.goals[goal]} />
            </div>
        );
    }
}

export default withDataForItemDetails(TaskDetailsPage, {
    entity: 'tasks',
    fetchItemAction: fetchTask
});