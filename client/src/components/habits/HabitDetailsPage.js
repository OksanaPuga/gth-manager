import React from 'react';
import { Link } from 'react-router-dom';

import { fetchHabit } from '../../actions/habitsActions';
import routes from '../../constants/routes';
import withDataForItemDetails from '../hoc/withDataForItemDetails';
import GoalItem from '../goals/GoalItem';

class HabitDetailsPage extends React.Component {
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

export default withDataForItemDetails(HabitDetailsPage, {
    entity: 'habits',
    fetchItemAction: fetchHabit
});