import React,{Component} from 'react';
export default class Home extends Component {
    render(){
        console.log(this.props.staticContext);
        if (this.props.staticContext) {
            this.props.staticContext.age = 10;
        }
        return (
            <div>home {this.props.staticContext ? this.props.staticContext.name : ''}</div>
        );
    }
}