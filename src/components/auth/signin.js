/**
 * Created by ivanlazarev on 25.10.16.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

    handleFormSubmit({ email, password }) {
        console.log(email, password);
        //log process continue
        this.props.signingUser({ email, password });
    }

    renderAlert() {

        console.log(this.props.errorMessage);
        if (this.props.errorMessage) {
            return(
                <div className="alert alert-danger">
                    <strong>OOPS!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { fields: {  email, password }, handleSubmit } = this.props;

        // const email = this.props.fields.email;
        // const password = this.props.fields.password;
        // const handleSubmit = this.props.handleSubmit;
        //handleSubmit(this.handleFormSubmit.bind(this))
        //handleFormSubmit is a callback

        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} type="text" className="form-control"  />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} type="password" className="form-control"  />
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin) // actions - access to ALL action through props inside component
