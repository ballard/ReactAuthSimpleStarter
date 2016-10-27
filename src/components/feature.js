/**
 * Created by ivanlazarev on 27.10.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {

    componentWillMount() {
        this.props.fetchMessage();
    }

    // renderMessage() {
    //     console.log(this.props.message);
    //     return this.props.message;
    // }

    render() {
        return(
            <div>Feature here: {this.props.message}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message : state.auth.message
    }
}

export default connect(mapStateToProps, actions)(Feature);