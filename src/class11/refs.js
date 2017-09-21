import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			userInput:''
		}

		this.handleChange=this.handleChange.bind(this);
		this.clearAndFocusInput=this.clearAndFocusInput.bind(this);				
	}

	handleChange(e){
		this.setState({userInput:e.target.value});
	}

	clearAndFocusInput(){
		this.setState({userInput:''});
		ReactDOM.findDOMNode(this.refs.theInput).focus();
	}

	render(){
		return(
			<div>
				<div onClick={this.clearAndFocusInput}>
					Click to Focus and Reset
				</div>
				<input 
					//ref={function(component){ReactDOM.findDOMNode(component).focus();}}
					ref='theInput'
					value={this.state.userInput}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default class UseRefs extends Component {
	render(){
		return(
			<App />
		)
	}
}