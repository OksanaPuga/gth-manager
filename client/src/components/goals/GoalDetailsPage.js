import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchGoal } from '../../actions/goalsActions';
import { fetchTasks } from '../../actions/tasksActions';
import { fetchHabits } from '../../actions/habitsActions';
import routes from '../../constants/routes';
import GoalAttachedEntityItems from './GoalAttachedEntityItems';

class GoalDetailsPage extends React.Component {
    componentDidMount() {
        const goalId = this.props.match.params.id;
        if (!this.props.goals[goalId]) {
            this.props.fetchGoal(goalId);
        } else {
            this.loadTasksAndHabitsIfNeeded();
        }
    }

    componentDidUpdate() {
        this.loadTasksAndHabitsIfNeeded();
    }

    loadTasksAndHabitsIfNeeded() {
        const goal = this.props.goals[this.props.match.params.id]
        if (!goal) return;
        if (
            goal.tasks
            && goal.tasks.length
            && !Object.keys(this.props.tasks).length) {
            this.props.fetchTasks();
        }
        if (
            goal.habits
            && goal.habits.length
            && !Object.keys(this.props.habits).length) {
            this.props.fetchHabits();
        }
    }

    render() {
        const goal = this.props.goals[this.props.match.params.id];
        return goal ? (
            <div>
                {this.renderActions()}

                <h2 className='ui header'>
                    Goal: {goal.title}
                    <div className='sub header'>{goal.description}</div>
                </h2>

                <h4 className="ui horizontal divider header">
                    <i className="bar chart icon"></i>
                    Detais
                </h4>
                
                <div className='ui very relaxed list'>
                    {this.renderProperty(goal.startDate, 'Start Date')}
                    {this.renderProperty(goal.endDate, 'End Date')}
                    {this.renderProperty(goal.category, 'Category')}
                    {this.renderProperty(goal.importance, 'Importance')}
                    {this.renderProperty(goal.complexity, 'Complexity')}
                </div>
                {this.renderAttachedItems(goal.tasks, goal.habits)}
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
                <Link to={routes.GOALS} className="ui right floated tiny basic button" key={3}>
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

    renderAttachedItems(tasks, habits) {
        return (tasks && tasks.length) || (habits && habits.length) ? (
            <div>
                <h4 className="ui horizontal divider header">
                    <i className="thumbtack icon"></i>
                    Attached
                </h4>
                <div className='ui two cards'>
                    <GoalAttachedEntityItems
                        entity='Tasks'
                        attachedItems={tasks}
                        loadedItems={this.props.tasks}
                        route={routes.TASKS} />
                    <GoalAttachedEntityItems
                        entity='Habits'
                        attachedItems={habits}
                        loadedItems={this.props.habits}
                        route={routes.HABITS} />
                </div>
            </div>
        ) : null;
    }
}

const mapStateToProps = state => ({
    goals: state.goals,
    tasks: state.tasks,
    habits: state.habits
});

export default connect(mapStateToProps, {
    fetchGoal,
    fetchTasks,
    fetchHabits
})(GoalDetailsPage);