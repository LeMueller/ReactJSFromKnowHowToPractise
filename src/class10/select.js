import React, {Component} from 'react';

class Form extends Component {
	constructor(props){
		super(props);
		this.state={
			input:['B','C']
		}
		//console.log(this.state.input);
		this.handleSelectChange=this.handleSelectChange.bind(this);
	}

	handleSelectChange(evt){
		this.setState({input:evt.target.value});
	}

	render(){
		return(
			<div>
				<select defaultValue={this.state.input} onChange={this.handleSelectChange} ref='mySelect' multiple={true}>
					<option value="A">Apple</option>
					<option value="B">Banana</option>
					<option value="C">Strawberry</option>
				</select>
				<div>{this.state.input}</div>
			</div>
		)
	}
}

export default class UseSelect extends Component {
	render(){
		return(
			<Form/>
		)
	}
}