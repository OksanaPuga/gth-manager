import './__styles__/GoalsPage.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/goalsActions';
import routes from '../../constants/routes';
import GoalItem from './GoalItem';

class GoalsPage extends React.Component {
    componentDidMount() {
        this.props.fetchGoals();
    }

    render() {
        return (
            <div>
                <h1>Goals</h1>
                <Link to={routes.NEW_GOAL} className='ui labeled icon button primary'>
                    <i className='icon plus' />
                    Create new Goal
                </Link>
                <div className='ui items'>
                    {this.renderGoals()}
                </div>
            </div>
        );
    }

    renderGoals() {
        const goals = this.props.goals;
        const goalsToRender = [];

        if (!Object.keys(goals).length) return;
            
        for (let p in goals) {
            let goal = goals[p];
            goalsToRender.push(<GoalItem goal={goal} key={goal.id} />);
        }
        return goalsToRender;
    }
}

const mapStateToProps = state => ({
    goals: state.goals
});

export default connect(mapStateToProps, actions)(GoalsPage);