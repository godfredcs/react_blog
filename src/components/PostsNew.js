import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { createPost } from '../actions';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create New Post</h3>     
                
                <Field name="title" type="text" id="title" label="Title" component={renderField} />
                <Field name="categories" type="text" id="categories" label="Category" component={renderField} />
                <Field name="content" type="textarea" id="content" label="Content" component={renderField} />
                
                <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
                <button type="button" disabled={pristine || submitting} className="btn btn-warning" onClick={reset}>Clear</button>
            </form>
        );
    }
}

// Function for rendering fields
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="form-group">
        <label>{label}</label>
        <div>
            { type === 'textarea' ? 
                <textarea {...input} placeholder={label} type={type} className="form-control"></textarea> :
                <input {...input} placeholder={label} type={type} className="form-control" /> }
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

// Function for validation
const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Title is required';
    }

    if (!values.categories) {
        errors.categories = 'Categories is required';
    }

    if (!values.content) {
        errors.content = 'Content is required';
    }

    return errors;
};

// Function for warnings
const warn = values => {
    const warnings = {};

    if (values.title && values.title.length < 2) {
        warnings.title = 'Hmm, title seems too short...';
    }

    return warnings;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate,
    warn
}, null, { createPost })(PostsNew);