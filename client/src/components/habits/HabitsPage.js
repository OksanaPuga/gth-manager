// import './__styles__/HabitsPage.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/habitsActions';
import routes from '../../constants/routes';
// import HabitItem from './HabitItem';

class HabitsPage extends React.Component {
    componentDidMount() {
        this.props.fetchHabits();
    }

    render() {
        return (
            <div>
                <h1>Habits</h1>
                <Link to={routes.NEW_HABIT} className='ui labeled icon button primary'>
                    <i className='icon plus' />
                    Create new Habit
                </Link>
                <div className='ui items'>
                    {this.renderHabits()}
                </div>
            </div>
        );
    }

    renderHabits() {
        const habits = this.props.habits;
        const habitsToRender = [];

        if (!Object.keys(habits).length) return;
            
        for (let p in habits) {
            let habit = habits[p];
            // habitsToRender.push(<HabitItem habit={habit} key={habit.id} />);
            habitsToRender.push(<div key={habit.id}>{habit.title}</div>);
        }
        return habitsToRender;
    }
}

const mapStateToProps = state => ({
    habits: state.habits
});

export default connect(mapStateToProps, actions)(HabitsPage);