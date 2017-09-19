import React, {Component} from 'react';

export default class Uppercase extends Component{
	constructor(props){
		super(props);

		this.state={
			name: ''
		}

		this.changeName=this.changeName.bind(this);
	}

	componentDidMount(){
		this.setState({name: this.props.name});
	}

	changeName(e){
		this.setState({name: e.target.value});
	}

	render(){

		let UpperName=this.state.name.toUpperCase();

		return(
			<div>
				<input onChange={this.changeName} defaultValue={this.props.name}></input>
				<br/>
				<p>Hello {UpperName}!</p>
			</div>
		)
	}
}