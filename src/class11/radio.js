import React, {Component} from 'react';

class Form extends Component {
	constructor(props){
		super(props);
		this.state={
			input:1
		}
		//console.log(this.state.input);
		this.handleRadioChange=this.handleRadioChange.bind(this);
	}

	handleRadioChange(evt){
		this.setState({input:evt.target.value});
	}

	render(){
		return(
			<div>
				<div>
					<input type='radio' name='opt' onClick={this.handleRadioChange} value='1' defaultChecked/>Option1
					<input type='radio' name='opt' onClick={this.handleRadioChange} value='2'/>Option2
				</div>
				<div>{this.state.input}</div>
			</div>
		)
	}
}

export default class UseRadio extends Component {
	render(){
		return(
			<Form/>
		)
	}
}