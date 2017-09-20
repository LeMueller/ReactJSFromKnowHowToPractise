import React, {Component} from 'react';

class Test extends Component{
	constructor(props){
		super(props);
		this.state={
			count:0
		}
	}

	componentWillMount(){
		this.setState({count:1});
		console.log('i will mount');
	}

	componentDidMount(){
		console.log('i have mounted');
		setTimeout((function(){
			this.setState({count:2});
		}).bind(this),2000);
	}

	render(){
		return(
			<div>the count is {this.state.count}</div>
		)
	}
}

export default class UseComponentWillMount extends Component {
	render(){
		return(
			<Test />
		)
	}
}