import React, {Component} from 'react';

class MyInput extends Component{
	constructor(props){
		super(props);

		this.changeName=this.changeName.bind(this);
	}

	changeName(e){
		this.props.change(e.target.value);
	}

	render(){
		return(
			<div>
				<span>Name: </span>
				<input onChange={this.changeName} defaultValue={this.props.name}/>
			</div>
		)
	}

}

class MyShow extends Component{
	constructor(props){
		super(props);


	}

	render(){
		return(
			<span>Hello {this.props.name}</span>
		)
	}

}

export default class GetValueFromChild extends Component{
	constructor(props){
		super(props);
		this.state={
			name:'Mr Right'
		}

		this.changeName=this.changeName.bind(this);
	}

	changeName(val){
		this.setState({name:val})
	}

	render(){
		return(
			<div>
				<MyInput change={this.changeName} name={this.state.name}/>
				<MyShow name={this.state.name}/>
			</div>
		)
	}


}