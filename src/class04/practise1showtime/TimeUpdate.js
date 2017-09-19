import React, {Component} from 'react';

export default class TimeUpdate extends Component{
	constructor(props){
		super(props);
		this.state={
			second:0,
			minutes:0,
			hour:0,
		}

		this.update=this.update.bind(this);
	}

	update(){
		let _this=this;

		let initTime=new Date();
		_this.setState({second:initTime.getSeconds(), minutes:initTime.getMinutes(), hour:initTime.getHours()});

		let t=setInterval(function(){
			let myDate=new Date();
			_this.setState({second:myDate.getSeconds(), minutes:myDate.getMinutes(), hour:myDate.getHours()});
			//console.log('time run');
		},1000);
	}

	componentDidMount(){
		this.update();
	}

	render(){
		return(
			<div>
				{this.state.hour}:{this.state.minutes}:{this.state.second}
			</div>
		)
	}
}