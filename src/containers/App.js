
import React, {Component,Fragment} from 'react';
import {renderRoutes,matchRoutes} from 'react-router-config';
import Header from '../components/Header';
import actions from '../store/actions/session';
class App extends Component {
    render() {
        console.log('this.props:',this.props);
        return (
            <Fragment>
                <Header/>
                <div className="container" style={{marginTop: 70}}>
                    {renderRoutes(this.props.route.routes)}
                </div>
            </Fragment>
        );
    }
}
App.loadData = function (store) {
    return store.dispatch(actions.getUser());
}
export default App;