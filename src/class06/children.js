import React, {Component} from 'react';

class Note extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<li>{this.props.text}</li>
		)
	}
}

class NotesList extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<ol>
				{
					//this.props.children.map((child,index)=>{
					React.Children.map(this.props.children,(child, index)=>{//not work
						console.log(child);
						return <Note key={index} text={child}/>
					})
				}
			</ol>
		)
	}
}

export default class UseNotesList extends Component {
	render(){
		return(
			<NotesList>
				<span>Hello</span>
				<span>world</span>
			</NotesList>
		)
	}
}