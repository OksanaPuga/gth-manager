import './__styles__/TasksPage.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/tasksActions';
import routes from '../../constants/routes';
import TaskItem from './TaskItem';

class TasksPage extends React.Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <Link to={routes.NEW_TASK} className='ui labeled icon button primary'>
                    <i className='icon plus' />
                    Create new Task
                </Link>
                <div className='ui items'>
                    {this.renderTasks()}
                </div>
            </div>
        );
    }

    renderTasks() {
        const tasks = this.props.tasks;
        const tasksToRender = [];

        if (!Object.keys(tasks).length) return;
            
        for (let p in tasks) {
            let task = tasks[p];
            tasksToRender.push(<TaskItem task={task} key={task.id} />);
        }
        return tasksToRender;
    }
};


const mapStateToProps = state => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, actions)(TasksPage);