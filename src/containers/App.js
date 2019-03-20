
import React, {Component,Fragment} from 'react';
import {renderRoutes,matchRoutes} from 'react-router-config';
import Header from '../components/Header';
import actions from '../store/actions/session';
import styles from './App.css';
class App extends Component {
    componentWillMount(){
        if (this.props.staticContext) {
            // _getCss可以得到处理后的css源代码
            this.props.staticContext.csses.push(styles._getCss());
        }
    }
    render() {
        console.log('this.props:',this.props);
        return (
            <Fragment>
                <Header staticContext={this.props.staticContext}/>
                <div className="container" className={styles.app}>
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