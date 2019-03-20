import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: ''
        };
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.login({
            username: this.state.username
        });
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">用户名</label>
                            <input
                                type="text"
                                value={this.state.username}
                                className="form-control"
                                onChange={event => this.setState({
                                    username: event.target.value
                                })}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
Login = connect(
    state => state.session,
    actions
)(Login);
export default Login;