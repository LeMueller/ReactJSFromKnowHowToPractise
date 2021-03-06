import React, {Component} from 'react';

class Child extends Component {
	constructor(props){
		super(props);

		this.state={
			time: new Date().toTimeString()
		}
	}

	componentWillReceiveProps(){
		this.setState({time: new Date().toTimeString()})
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate');
		return true;
	}

	componentWillUpdate(nextProps, nextState){
		//在接收到新props或state后，更新之前调用
		console.log('componentWillUpdate');
	}

	componentDidUpdate(nextProps, nextState){
		//在接收到新props或state后，更新之后调用
		console.log('componentDidUpdate');
	}

	render(){
		return(
			<div>Child get props: {this.props.number} at {this.state.time}</div>
		)
	}
}

class Parent extends Component{
	constructor(props){
		super(props);
		this.state={
			count:0
		}

		this.clickHandler=this.clickHandler.bind(this);
	}

	componentWillMount(){
		this.setState({count:1});
	}

	clickHandler(){
		this.setState({count:this.state.count+1});
	}

	render(){
		return(
			<div onClick={this.clickHandler}>
				<Child number={this.state.count}></Child>
			</div>
		)
	}
}

export default class UseComponentWillUpdate extends Component {
	render(){
		return(
			<Parent />
		)
	}
}