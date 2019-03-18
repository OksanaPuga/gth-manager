import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { createTask } from '../../actions/tasksActions';
import { fetchGoals } from '../../actions/goalsActions'; 
import routes from '../../constants/routes';

class NewTaskPage extends React.Component {
    componentDidMount() {
        if (!this.props.goals || !Object.keys(this.props.goals).length) {
            this.props.fetchGoals();
        }
    }

    onSubmit = formValues => {
        // TODO: add some pre-forming, validation
        const goal = formValues.goal
            ? this.props.goals[formValues.goal]
            : null;

        this.props.createTask(formValues, goal);
    }

    render() {
        return (
            <div>
                <h1>New Task</h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
                    {this.renderTitleField()}
                    {this.renderDescriptionField()}
                    {this.renderSheduleFields()}
                    {/* {this.renderRepetitionFields()} */}
                    {this.renderCathegotySelector()}
                    {this.renderImportanceAndComplexitySelectors()}
                    {this.renderGoalSelector()}

                    <button className='ui right floated right labeled icon primary button'>
                        <i className='icon check' />Create
                    </button>
                    <Link to={routes.TASKS} className='ui right floated button'>Back</Link>
                </form>
            </div>
        );
    }

    renderTitleField() {
        return (
            <div className='fluid field'>
                <label>Title</label>
                <Field
                    name='title'
                    component='input'
                    type='text'
                    placeholder='task title'
                    autoComplete='off' />
            </div>
        );
    }

    renderDescriptionField() {
        return (
            <div className='fluid field'>
                <label>Description</label>
                <Field
                    name='description'
                    component='textarea'
                    placeholder='task description'
                    rows='3'
                    autoComplete='off' />
            </div>
        );
    }

    renderSheduleFields() {
        return (
            <div className='fields'>
                <div className='four wide field'>
                    <label>Date</label>
                    <Field
                        name='date'
                        component='input'
                        type='date' />
                </div>
                <div className='four wide field'>
                    <label>Time</label>
                    <Field
                        name='time'
                        component='input'
                        type='time' />
                </div>
                <div className='four wide field'>
                    <label>Duration</label>
                    <Field
                        name='duration'
                        component='select'>
                        <option value={null}></option>
                        <option value='5'>~ 5 min</option>
                        <option value='15'>15 min</option>
                        <option value='30'>30 min</option>
                        <option value='45'>45 min</option>
                        <option value='60'>1 hour</option>
                        <option value='90'>1.5 hour</option>
                        <option value='120'>2 hours</option>
                        <option value='180'>3 hours</option>
                        <option value='240'>4 hours</option>
                    </Field>
                </div>
            </div>
        );
    }

    // renderRepetitionFields() {
        
    // }

    renderCathegotySelector() {
        // TODO: make categories dynamic             
        return (
            <div className='fluid field'>
                <label>Category</label>
                <Field
                    name='category'
                    component='select'>
                    <option value={null}>No category</option>
                    <option value='health'>Health</option>
                    <option value='finances'>Finances</option>
                    <option value='study'>Study</option>
                    <option value='personal'>Personal</option>
                </Field>
            </div>
        );
    }

    renderImportanceAndComplexitySelectors() {
        const options = [
            <option value='1' key='1'>Very low</option>,
            <option value='2' key='2'>Low</option>,
            <option value='3' key='3'>Normal</option>,
            <option value='4' key='4'>High</option>,
            <option value='5' key='5'>Very high</option>
        ];

        const importanceSelector = (
            <div className='eight wide field'>
                <label>Task importance</label>
                <Field
                    name='importance'
                    component='select'>
                    {options}
                </Field>
            </div>
        );

        const complexitySelector = (
            <div className='eight wide field'>
                <label>Task complexity</label>
                <Field
                    name='complexity'
                    component='select'>
                    {options}
                </Field>
            </div>
        );

        return (
            <div className='fields'>
                {importanceSelector}
                {complexitySelector}
            </div>
        );

    }

    renderGoalSelector() {
        const goals = this.props.goals;
        const goalsOptions = [
            <option key={0} value={null}></option>
        ];
        
        for (let p in goals) {
            goalsOptions.push(
                <option key={goals[p].id} value={goals[p].id}>
                    {goals[p].title}
                </option>
            );
        }

        return (
            <div className='fluid field'>
                <label>Attach to Goal</label>
                <Field
                    name='goal'
                    component='select'>
                    {goalsOptions}
                </Field>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    goals: state.goals
});

export default reduxForm({
    form: 'newTaskForm'
})(connect(mapStateToProps, { createTask, fetchGoals })(NewTaskPage));