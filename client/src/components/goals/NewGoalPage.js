import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions/goalsActions'; 
import routes from '../../constants/routes';

class NewGoalPage extends React.Component {
    onSubmit = formValues => {
        // TODO: add some pre-forming, validation
        this.props.createGoal(formValues);
    }

    render() {
        return (
            <div>
                <h1>New Goal</h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
                    {this.renderTitleField()}
                    {this.renderDescriptionField()}
                    {this.renderStartEndDateFields()}
                    {this.renderCathegotySelector()}
                    {this.renderImportanceAndComplexitySelectors()}

                    <button className='ui right floated right labeled icon primary button'>
                        <i className='icon check' />Create
                    </button>
                    <Link to={routes.GOALS} className='ui right floated button'>Back</Link>
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
                    placeholder='goal title'
                    autoComplete='off' />
            </div>
        );
    }

    renderStartEndDateFields() {
        return (
            <div className='fields'>
                <div className='four wide field'>
                    <label>Start date</label>
                    <Field
                        name='startDate'
                        component='input'
                        type='date' />
                </div>
                <div className='four wide field'>
                    <label>End date</label>
                    <Field
                        name='endDate'
                        component='input'
                        type='date' />
                </div>
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
                    placeholder='goal description'
                    rows='3'
                    autoComplete='off' />
            </div>
        );
    }

    renderCathegotySelector() {
        // TODO: make categories dynamic             
        return (
            <div className='fluid field'>
                <label>Cathegory</label>
                <Field
                    name='cathegory'
                    component='select'>
                    <option value={null}>No cathegory</option>
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
                <label>Goal importance</label>
                <Field
                    name='importance'
                    component='select'>
                    {options}
                </Field>
            </div>
        );

        const complexitySelector = (
            <div className='eight wide field'>
                <label>Goal complexity</label>
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
}

export default reduxForm({
    form: 'newGoalForm'
})(connect(null, actions)(NewGoalPage));