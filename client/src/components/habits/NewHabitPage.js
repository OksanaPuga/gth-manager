import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { createHabit } from '../../actions/habitsActions';
import { fetchGoals } from '../../actions/goalsActions'; 
import routes from '../../constants/routes';

class NewHabitPage extends React.Component {
    componentDidMount() {
        if (!this.props.goals) {
            this.props.fetchGoals();
        }
    }

    onSubmit = formValues => {
        // TODO: add some pre-forming, validation
        const goal = formValues.goal
            ? this.props.goals[formValues.goal]
            : null;

        this.props.createHabit(formValues, goal);
    }

    render() {
        return (
            <div>
                <h1>New Habit</h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
                    {this.renderTitleField()}
                    {/* {this.renderRepetitionFields()} */}
                    {this.renderCathegotySelector()}
                    {this.renderTypeRadio()}
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
                    placeholder='habit title'
                    autoComplete='off' />
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

    renderTypeRadio() {
        return (
            <div className='field'>
                <label>Habit type</label>
                <Field
                    name='type'
                    component='select'>
                    <option value='positive'>positive habit</option>
                    <option value='neative'>negative habit (avoiding smth)</option>
                </Field>
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
    form: 'newHabitForm'
})(connect(mapStateToProps, { createHabit, fetchGoals })(NewHabitPage));