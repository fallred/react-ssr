
import React, {Component,Fragment} from 'react';
import {renderRoutes,matchRoutes} from 'react-router-config';
import Header from '../components/Header'
export default class App extends Component {
    render() {
        console.log('this.props:',this.props);
        return (
            <Fragment>
                <Header/>
                <div className="container" style={{marginTop: 70}}>
                    {renderRoutes(this.props.route.components)}
                </div>
            </Fragment>
        );
    }
}