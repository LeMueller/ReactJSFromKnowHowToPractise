import React, {Component} from 'react';

export default class Count extends Component{
	constructor(props){
		super(props);

		this.state={
			count:0
		}

		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({count: this.state.count + 1});
	}

	render(){
		return(
			<a onClick={this.handleClick}> You have clicked {this.state.count} times. </a>
		)
	}
}