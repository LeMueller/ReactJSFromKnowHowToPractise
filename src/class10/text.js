import React, {Component} from 'react';

let styles={
	inputText:{
		width:100,
		height:20,
		dispaly:'block'
	}
}

class Form extends Component {
	constructor(props){
		super(props);
		this.state={
			input:'default'
		}

		this.handleTextChange=this.handleTextChange.bind(this);
	}

	handleTextChange(evt){
		this.setState({'input':evt.target.value});
	}

	render(){
		return(
			<div>
				<input 
					type='text' 
					style={styles.inputText} 
					value={this.state.input} 
					onChange={this.handleTextChange}
					defaultValue={this.state.input}
				/>
				<div>{this.state.input}</div>
			</div>
		)
	}
}

export default class UseInput extends Component {
	render(){
		return(
			<Form/>
		)
	}
}