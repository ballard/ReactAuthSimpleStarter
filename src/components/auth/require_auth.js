/**
 * Created by ivanlazarev on 27.10.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = { // "static" make Authentication.contextTypes instance
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push("/");
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push("/");
            }
        }

        render() {
            //console.log(this.context); //wired with contextTypes
            // console.log(this.props.authenticated);
            return <ComposedComponent {...this.props} />
        };
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated}
    }

    return connect(mapStateToProps)(Authentication);
}