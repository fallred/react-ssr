import React, {Component} from 'react';
export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            number: 0
        }
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    });
                }}>+</button>
            </div>
        );
    }
}