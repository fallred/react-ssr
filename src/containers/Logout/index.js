import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Logout extends Component {
    render(){
        return (
            <div className="row">
                <div class="col-md-6 col-md-offset-3">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.props.logout}
                    >退出</button>
                </div>
            </div>
        );
    }
}
Logout = connect(
    state => state.session,
    actions
)(Logout);
export default Logout;