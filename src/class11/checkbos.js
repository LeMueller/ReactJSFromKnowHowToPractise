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
			input:[]
		}
		//console.log(this.state.input);
		this.handleCheckboxChange=this.handleCheckboxChange.bind(this);
	}

	handleCheckboxChange(evt){
		//debugger;
		
		let selectFruits=new Array();
		let tmpIndex;


		alert(evt.target.value);
		alert(evt.target.checked);

		if(evt.target.checked){
			selectFruits.push(evt.target.value);	
		}else{
			
		}

		console.log('selectFruits::: '+ selectFruits)
		/*else{
			tmpIndex=selectFruits.indexOf(evt.target.value);
			//selectFruits.splice(tmpIndex,1);
		}
		this.setState({'input': selectFruits});
		//console.log(this.state.input);*/
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