import React, {Component} from 'react';

class Hello extends Component{
	constructor(props){
		super(props);
		this.state={
			opacity:1.0
		}
	}

	componentDidMount(){
		let _this=this;
		this.timer=setInterval(function(){
			let opacity=_this.state.opacity;
			opacity -= 0.5;
			if (opacity<0.1){
				opacity=1.0
			}
			_this.setState({opacity:opacity})
		},100)
	}

	render(){
		return(
			<div style={{opacity:this.state.opacity}}>
				Hello {this.props.name}
			</div>
		)
	}
}

export default class UseComponentDidMount extends Component {
	render(){
		return(
			<Hello name="le"/>
		)
	}
}