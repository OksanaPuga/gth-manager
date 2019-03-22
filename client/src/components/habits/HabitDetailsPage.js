import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchHabit } from '../../actions/habitsActions';
import { fetchGoal } from '../../actions/goalsActions';
import routes from '../../constants/routes';
import GoalItem from '../goals/GoalItem';

class HabitDetailsPage extends React.Component {
    componentDidMount() {
        const habitId = this.props.match.params.id;
        if (!this.props.habits[habitId]) {
            this.props.fetchHabit(habitId);
        } else {
            this.fetchGoalIfNeeded();
        }
    }

    componentDidUpdate() {
        this.fetchGoalIfNeeded();
    }

    fetchGoalIfNeeded() {
        const habit = this.props.habits[this.props.match.params.id]
        if (!habit) return;
        if (habit.goal && !this.props.goals[habit.goal]) {
            this.props.fetchGoal(habit.goal);
        }
    }

    render() {
        const habit = this.props.habits[this.props.match.params.id];
        return habit ? (
            <div>
                {this.renderActions()}

                <h2 className='ui header'>
                    Habit: {habit.title}
                </h2>

                <h4 className="ui horizontal divider header">
                    <i className="bar chart icon"></i>
                    Detais
                </h4>
                
                <div className='ui very relaxed list'>
                    {this.renderProperty(habit.category, 'Category')}
                    {this.renderProperty(habit.type, 'Type')}
                    {this.renderParentGoal(habit.goal)}
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
                <Link to={routes.HABITS} className="ui right floated tiny basic button" key={3}>
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

const mapStateToProps = state => ({
    habits: state.habits,
    goals: state.goals
});

export default connect(mapStateToProps, {
    fetchHabit,
    fetchGoal
})(HabitDetailsPage);