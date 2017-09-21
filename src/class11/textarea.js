import React, {Component} from 'react';

let styles={
	inputText:{
		fontSize: 20,
		color:'red',
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
				<textarea 
					type='text' 
					style={styles.inputText} 
					onChange={this.handleTextChange}
					defaultValue={this.state.input}
				/>
				<div>{this.state.input}</div>
			</div>
		)
	}
}

export default class UseTextarea extends Component {
	render(){
		return(
			<Form/>
		)
	}
}