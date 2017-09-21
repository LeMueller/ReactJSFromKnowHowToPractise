import React, {Component} from 'react';

class Form extends Component {
	constructor(props){
		super(props);
		this.state={
			input:'default'
		}
		this.handleFileChange=this.handleFileChange.bind(this);
	}

	handleFileChange(evt){
		this.setState({'input': evt.target.value});
	}

	render(){
		return(
			<div>
				<input type='file' onChange={this.handleFileChange}/>
			</div>
		)
	}
}

export default class UseFile extends Component {
	render(){
		return(
			<Form />
		)
	}
}