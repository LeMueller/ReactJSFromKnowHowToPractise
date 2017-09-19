import React, {Component} from 'react';

export default class OnChange extends Component{
	constructor(props){
		super(props);
		this.state={
			name:'world'
		}

		this.changeName=this.changeName.bind(this);
	}

	changeName(e){
		this.setState({name: e.target.value});
	}

	render(){
		return(
			<div>
				<input onChange={this.changeName} defaultValue={this.state.name}></input>
				<span> Hello {this.state.name}</span>
			</div>
		);
	}
}