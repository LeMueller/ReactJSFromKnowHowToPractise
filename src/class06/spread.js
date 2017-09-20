import React, {Component} from 'react';

class Child extends Component {
	render(){
		return(
			<div>
				<span>I am {this.props.name}! I am {this.props.age} years old. It is {this.props.time} now. </span>
			</div>
		)
	}
}

class Parent extends Component {
	constructor(props){
		super(props);
		this.state={
			tiem: new Date().toDateString()
		}
	}

	render(){
		//let {...others}=this.props; //{...others} 为Parent接受的props，传给Child
		let {age, ...others}=this.props; //{age, ...others} 为Parent接受的props(除了age)，传给Child
		return(
			<Child {...others} time={this.state.time}/>
		)
	}
}

export default class UseSpread extends Component {
	render(){
		return(
			<Parent name="Steven" age="20"/>
		)
	}
}