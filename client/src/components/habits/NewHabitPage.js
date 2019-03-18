import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions/habitsActions'; 
import routes from '../../constants/routes';

class NewHabitPage extends React.Component {
    onSubmit = formValues => {
        // TODO: add some pre-forming, validation
        this.props.createHabit(formValues);
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
}

export default reduxForm({
    form: 'newHabitForm'
})(connect(null, actions)(NewHabitPage));