import React from 'react';
import { connect } from 'react-redux';

import { fetchGoal } from '../../actions/goalsActions';

const withDataForItemDetails = (Component, config) => {
    const Wrapper = () => (
        class WithDataForItemDetails extends React.Component {
            
            componentDidMount() {
                const itemId = this.props.match.params.id;
                const items = this.props[config.entity];
                
                if (!items[itemId]) {
                    this.props.fetchItemAction(itemId);
                } else {
                    this.fetchGoalIfNeeded();
                }
            }
        
            componentDidUpdate() {
                this.fetchGoalIfNeeded();
            }
        
            fetchGoalIfNeeded() {
                const itemId = this.props.match.params.id;
                const items = this.props[config.entity];
                const item = items[itemId];
                
                if (!item) return;
                if (item.goal && !this.props.goals[item.goal]) {
                    this.props.fetchGoal(item.goal);
                }
            }
    
            render() {
                return <Component {...this.props} />
            }
        }
    );

    const mapStateToProps = state => ({
        [config.entity]: state[config.entity],
        goals: state.goals
    });

    return connect(mapStateToProps, {
        fetchItemAction: config.fetchItemAction,
        fetchGoal
    })(Wrapper());
};

export default withDataForItemDetails;