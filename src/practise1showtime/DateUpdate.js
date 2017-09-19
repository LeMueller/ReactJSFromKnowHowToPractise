import React, {Component} from 'react';

import TimeUpdate from './TimeUpdate.js'

export default class DateUpdate extends Component{
	constructor(props){
		super(props);
		this.state={
			year:0,
			month:0,
			day:0,
		}

		this.update=this.update.bind(this);
	}

	update(){
		let _this=this;

		let initDate=new Date();
		_this.setState({year:initDate.getFullYear(), month:initDate.getMonth(), day:initDate.getDate()});
		
		let t=setInterval(function(){
			let myDate=new Date();
			_this.setState({year:myDate.getFullYear(), month:myDate.getMonth(), day:myDate.getDate()});
			//console.log('time run');
		},1000);
	}

	componentDidMount(){
		this.update();
	}

	render(){
		return(
			<div>
				{this.state.day}.{this.state.month}.{this.state.year}
				<br/>
				<TimeUpdate/>
			</div>
		)
	}
}