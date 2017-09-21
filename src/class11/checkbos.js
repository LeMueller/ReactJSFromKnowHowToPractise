import React, {Component} from 'react';

let styles={
	'title':{
		fontSize: 20,
		color:'red',
		padding:5,
		dispaly:'block'
	}
}

class Form extends Component {
	constructor(props){
		super(props);
		this.state={
			input:['apple']
		}
		//console.log(this.state.input);
		this.handleCheckboxChange=this.handleCheckboxChange.bind(this);
	}

	handleCheckboxChange(evt){
		//debugger;
		
		let _input=this.state.input;
		let _value=evt.target.value;

		if(evt.target.checked){
			if(_input.indexOf(_value)==-1){
				_input.push(_value);
			}	
		}else{
			if(_input.indexOf(_value)>-1){
				_input.splice(_input.indexOf(_value),1);
			}
		}
		this.setState({'input':_input});
	}

	render(){
		return(
			<div>
				<span style={styles.title}>Fruit</span>
				<div>
					<input type='checkbox' onChange={this.handleCheckboxChange} value='apple'/><span>apple</span>
					<input type='checkbox' onChange={this.handleCheckboxChange} value='banana'/><span>banana</span>
				</div>
				<div>{this.state.input}</div>
			</div>
		)
	}
}

export default class UseCheckbox extends Component {
	render(){
		return(
			<Form/>
		)
	}
}