import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../store/actions/actions'
import history from './history'
import Auth from './auth'

class AuthCheck extends Component {

    componentDidMount() {
        if(this.props.Auth.isAuthenticated()) {
            this.props.login_success()
            history.replaceState('/')
        } else{ 
            this.props.login_failure
        }
    }

    render () {
        return (
            <div>

            </div>
        )
    }
}
function mapStateToProps (state) {
    return{

    }
}

function mapDispatchToProps (dispatch) {
    return{
       login_success: () => dispatch(ACTIONS.login_success()),
       login_failure: () => dispatch(ACTIONS.login_failure)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck); 

