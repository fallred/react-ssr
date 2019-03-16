import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/counter';
class Counter extends Component {
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>{
                    // this.setState({
                    //     number: this.state.number + 1
                    // });
                    this.props.increment();
                }}>+</button>
            </div>
        );
    }
}
Counter = connect(
    state => state.counter,
    actions
)(Counter);
export default Counter;