/**
 * Created by ivanlazarev on 25.10.16.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';


class Signin extends Component {

    handleFormSubmit({ email, password }) {
        console.log(email, password);
        //log process continue
    }


    render() {

        const { handleSubmit, fields: { email, password }} = this.props;


        //handleSubmit(this.handleFormSubmit.bind(this))
        //handleFormSubmit is a callback

        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);