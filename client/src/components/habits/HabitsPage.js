// import './__styles__/HabitsPage.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/habitsActions';
import routes from '../../constants/routes';
import HabitsTable from './HabitsTable';

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
                    <HabitsTable habits={this.props.habits} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    habits: state.habits
});

export default connect(mapStateToProps, actions)(HabitsPage);