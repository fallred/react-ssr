import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    render () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">SSR</a>
                    </div>
                    <div >
                        <ul className="nav navbar-nav">
                            <li><Link to="/">首页</Link></li>
                            
                            {
                                this.props.user ?
                                <Fragment>
                                    <li><Link to="/logout">退出</Link></li>
                                    <li><Link to="/profile">个人中心</Link></li>
                                </Fragment>
                                :
                                <li><Link to="/login">登录</Link></li>
                            }
                        </ul>
                       {
                           this.props.user && (
                            <ul className="nav navbar-nav navbar-right">
                                <li><a>{this.props.user.username}</a></li>
                            </ul>
                           )
                       }
                    </div>
                </div>
            </nav>
        );
    }
}
Header = connect(
    state=> state.session
)(Header);
export default Header;