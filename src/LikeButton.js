import React, {Component} from 'react';

export default class LikeButton extends Component {
	constructor(props){
		super(props);
		this.state={
			liked: false
		}

		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({liked:!this.state.liked})
	}

	render(){

		let text = this.state.liked ? "like" : "don't like";

		return(
			<p onClick={this.handleClick}>
				I {text} it!
			</p>
		)
	}
}